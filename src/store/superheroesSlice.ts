import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialHeroes } from '../utils/superheroData';

export interface Superhero {
  response: string;
  error: string;
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    'full-name': string;
    'alter-egos': string;
    aliases: string[];
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    'eye-color': string;
    'hair-color': string;
  };
  connections: {
    'group-affiliation': string;
    relatives: string;
  };
  image: {
    url: string;
  };
}

interface SuperheroesState {
  items: Superhero[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filters: {
    race: string;
    publisher: string;
    alignment: string;
    gender: string;
    affiliation: string;
  };
  searchTerm: string;
  hasSearched: boolean;
}

const initialState: SuperheroesState = {
  items: initialHeroes,
  status: 'idle',
  error: null,
  filters: {
    publisher: '',
    alignment: '',
    gender: '',
    affiliation: '',
    race: ''
  },
  searchTerm: '',
  hasSearched: false
};

export const searchSuperheroes = createAsyncThunk(
  'superheroes/search',
  async (searchTerm: string) => {
    try {
      const response = await fetch(`https://superheroapi.com/api.php/6cab7a82afd2286e3a5f0bf494cce6b0/search/${searchTerm}`);
      const data = await response.json();
      
      if (data.response === 'error') {
        throw new Error(data.error || 'No heroes found');
      }
      
      return data.results || [];
    } catch (error) {
      throw new Error('Failed to search heroes');
    }
  }
);

const superheroesSlice = createSlice({
  name: 'superheroes',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {
        publisher: '',
        alignment: '',
        gender: '',
        affiliation: '',
        race: ''
      };
    },
    resetSearch: (state) => {
      state.items = initialHeroes;
      state.hasSearched = false;
      state.searchTerm = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchSuperheroes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchSuperheroes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.hasSearched = true;
        state.error = null;
      })
      .addCase(searchSuperheroes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch superheroes';
        state.items = [];
        state.hasSearched = true;
      });
  },
});

export const { setFilters, setSearchTerm, resetFilters, resetSearch } = superheroesSlice.actions;
export default superheroesSlice.reducer;