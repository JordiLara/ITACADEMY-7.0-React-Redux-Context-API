import { Superhero } from '../store/superheroesSlice';

const API_KEY = import.meta.env.VITE_SUPERHERO_API_KEY;
const API_BASE_URL = 'https://superheroapi.com/api.php';

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
  // Marvel Heroes
  {
    id: "346",
    name: "Iron Man",
    powerstats: {
      intelligence: "100",
      strength: "85",
      speed: "58",
      durability: "85",
      power: "100",
      combat: "64"
    },
    biography: {
      "full-name": "Tony Stark",
      "alter-egos": "No alter egos found.",
      aliases: ["Iron Knight", "Hogan Potts", "Spare Parts Man"],
      "place-of-birth": "Long Island, New York",
      "first-appearance": "Tales of Suspense #39 (March, 1963)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'6", "198 cm"],
      weight: ["425 lb", "191 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Howard Stark (father, deceased), Maria Stark (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
    },
    error: '',
    response: ''
  },
  {
    id: "659",
    name: "Thor",
    powerstats: {
      intelligence: "69",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Thor Odinson",
      "alter-egos": "Rune King Thor",
      aliases: ["Donald Blake", "God of Thunder", "Son of Odin"],
      "place-of-birth": "Asgard",
      "first-appearance": "Journey into Mystery #83 (August, 1962)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Asgardian",
      height: ["6'6", "198 cm"],
      weight: ["640 lb", "288 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Odin (father), Gaea (mother), Loki (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
    },
    error: '',
    response: ''
  },
  {
    id: "620",
    name: "Spider-Man",
    powerstats: {
      intelligence: "90",
      strength: "55",
      speed: "67",
      durability: "75",
      power: "74",
      combat: "85"
    },
    biography: {
      "full-name": "Peter Parker",
      "alter-egos": "No alter egos found.",
      aliases: ["Spidey", "Wall-Crawler", "Web-Slinger"],
      "place-of-birth": "Queens, New York City",
      "first-appearance": "Amazing Fantasy #15",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Hazel",
      "hair-color": "Brown"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Richard Parker (father, deceased), Mary Parker (mother, deceased), Ben Parker (uncle, deceased), May Parker (aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg"
    }
  },
  {
    id: "149",
    name: "Captain America",
    powerstats: {
      intelligence: "69",
      strength: "19",
      speed: "38",
      durability: "55",
      power: "60",
      combat: "100"
    },
    biography: {
      "full-name": "Steve Rogers",
      "alter-egos": "No alter egos found.",
      aliases: ["Nomad", "The Captain"],
      "place-of-birth": "Manhattan, New York City",
      "first-appearance": "Captain America Comics #1 (1941)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["220 lb", "99 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Joseph Rogers (father, deceased), Sarah Rogers (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg"
    }
  },
  {
    id: "332",
    name: "Hulk",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "63",
      durability: "100",
      power: "98",
      combat: "85"
    },
    biography: {
      "full-name": "Bruce Banner",
      "alter-egos": "No alter egos found.",
      aliases: ["Annihilator", "Captain Universe", "Joe Fixit", "Mr. Fix-it"],
      "place-of-birth": "Dayton, Ohio",
      "first-appearance": "Incredible Hulk #1 (1962)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["8'0", "244 cm"],
      weight: ["1400 lb", "630 kg"],
      "eye-color": "Green",
      "hair-color": "Green"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Brian Banner (father, deceased), Rebecca Banner (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"
    }
  },
  {
    id: "107",
    name: "Black Widow",
    powerstats: {
      intelligence: "75",
      strength: "13",
      speed: "33",
      durability: "30",
      power: "36",
      combat: "100"
    },
    biography: {
      "full-name": "Natasha Romanoff",
      "alter-egos": "No alter egos found.",
      aliases: ["Natasha Romanoff", "Natalia Romanova"],
      "place-of-birth": "Stalingrad, Russia",
      "first-appearance": "Tales of Suspense #52",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["131 lb", "59 kg"],
      "eye-color": "Green",
      "hair-color": "Auburn"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Unknown"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/248.jpg"
    }
  },
  
  // DC Heroes
  {
    id: "69",
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
      "full-name": "Bruce Wayne",
      "alter-egos": "No alter egos found.",
      aliases: ["Dark Knight", "Caped Crusader", "Matches Malone"],
      "place-of-birth": "Gotham City",
      "first-appearance": "Detective Comics #27",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    connections: {
      "group-affiliation": "Justice League",
      relatives: "Thomas Wayne (father, deceased), Martha Wayne (mother, deceased), Alfred Pennyworth (guardian)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    }
  },
  {
    id: "644",
    name: "Superman",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "Clark Kent",
      "alter-egos": "Superman Prime One-Million",
      aliases: ["Man of Steel", "Son of Krypton", "Kal-El"],
      "place-of-birth": "Krypton",
      "first-appearance": "Action Comics #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Kryptonian",
      height: ["6'3", "191 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    connections: {
      "group-affiliation": "Justice League",
      relatives: "Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
    }
  },
  {
    id: "720",
    name: "Wonder Woman",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "79",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Diana Prince",
      "alter-egos": "No alter egos found.",
      aliases: ["Princess Diana", "Princess of the Amazons"],
      "place-of-birth": "Themyscira",
      "first-appearance": "All-Star Comics #8 (December, 1941)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Amazon",
      height: ["6'0", "183 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    connections: {
      "group-affiliation": "Justice League",
      relatives: "Hippolyta (mother), Zeus (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
    }
  },
  {
    id: "194",
    name: "The Flash",
    powerstats: {
      intelligence: "88",
      strength: "48",
      speed: "100",
      durability: "60",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "Barry Allen",
      "alter-egos": "No alter egos found.",
      aliases: ["The Scarlet Speedster", "The Crimson Comet"],
      "place-of-birth": "Central City, Missouri",
      "first-appearance": "Showcase #4 (October, 1956)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["179 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    connections: {
      "group-affiliation": "Justice League",
      relatives: "Henry Allen (father), Nora Allen (mother, deceased), Iris West Allen (wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/892.jpg"
    }
  },
  {
    id: "38",
    name: "Aquaman",
    powerstats: {
      intelligence: "81",
      strength: "85",
      speed: "79",
      durability: "80",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Arthur Curry",
      "alter-egos": "No alter egos found.",
      aliases: ["Orin", "King of the Seven Seas", "Dweller in the Depths"],
      "place-of-birth": "Atlantis",
      "first-appearance": "More Fun Comics #73 (November, 1941)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Atlantean",
      height: ["6'1", "185 cm"],
      weight: ["325 lb", "146 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    connections: {
      "group-affiliation": "Justice League",
      relatives: "Atlanna (mother), Tom Curry (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/634.jpg"
    }
  },
  {
    id: "265",
    name: "Green Lantern",
    powerstats: {
      intelligence: "75",
      strength: "80",
      speed: "75",
      durability: "80",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Hal Jordan",
      "alter-egos": "No alter egos found.",
      aliases: ["The Green Lantern", "Parallax", "Spectre"],
      "place-of-birth": "Coast City, California",
      "first-appearance": "Showcase #22 (October, 1959)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    connections: {
      "group-affiliation": "Justice League",
      relatives: "Martin Jordan (father, deceased), Jessica Jordan (mother), Jim Jordan (brother), Jack Jordan (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/697.jpg"
    }
  }
];