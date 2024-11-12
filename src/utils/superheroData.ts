import { Superhero } from '../store/superheroesSlice';

export const API_KEY = '6cab7a82afd2286e3a5f0bf494cce6b0';
export const API_BASE_URL = 'https://superheroapi.com/api.php';

export const fetchSuperheroById = async (id: string): Promise<Superhero> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${API_KEY}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch hero data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching superhero:', error);
    throw error;
  }
};

export const initialHeroes: Superhero[] = [
  {
    id: "70",
    name: "Batman",
    powerstats: {
      intelligence: "100",
      strength: "26",
      speed: "27",
      durability: "50",
      power: "47",
      combat: "100"
    },
    biography: {
      publisher: "DC Comics",
      alignment: "good",
      'full-name': "Bruce Wayne",
      'first-appearance': "Detective Comics #27",
      aliases: ["The Dark Knight", "The Caped Crusader"],
      'alter-egos': '',
      'place-of-birth': ''
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      'eye-color': '',
      'hair-color': ''
    },
    connections: {
      'group-affiliation': "Justice League, Batman Family",
      relatives: "Thomas Wayne (father, deceased), Martha Wayne (mother, deceased), Alfred Pennyworth (guardian)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    },
    response: '',
    error: ''
  },
];