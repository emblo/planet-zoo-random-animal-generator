//Current year for footer
window.onload = function() {
    let date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

// Array for African animals
const african_animals = [
    "Aardvark", 
    "African Buffalo", 
    "African Elephant", 
    "African Wild Dog", 
    "Aldabra Giant Tortoise", 
    "Black Wildebeest", 
    "Bongo", 
    "Bonobo", 
    "Cheetah", 
    "Common Ostrich", 
    "Common Warthog", 
    "Gemsbok",
    "Hippopotamus",
    "Mandrill",
    "Nile Monitor",
    "Nyala",
    "Okapi",
    "Plains Zebra", 
    "Pygmy Hippo",
    "Red Ruffed Lemur",
    "Reticulated Giraffe", 
    "Ring Tailed Lemur",
    "Sable Antelope",
    "Spotted Hyena",
    "Springbok",
    "Thomson's Gazelle",
    "West African Lion", 
    "Western Chimpanzee",
    "Western Lowland Gorilla",
    "Greater Flamingo",
    "Meerkat",
    "Southern White Rhinoceros",
    "African Penguin",
    "Fennec Fox",
    "Black-And-White Ruffed Lemur",
    "Nile Lechwe",
    "Scimitar-Horned Oryx",
    "Red Fox",
    "Red Deer",
    "Caracal",
    "Striped Hyena",
    "Blue Wildebeest",
    "Fossa",
    "Red River Hog",
    "Dromedary Camel",
    "Addax",
    "Dama Gazelle",
    "African Crested Porcupine",
    "Sand Cat",
    "Black Rhinoceros",
    "Somali Wild Ass",
    "Wild Boar"
];

// Array for Asian animals
const asian_animals = [
    "Greater Flamingo",
    "Bactrian Camel",
    "Bengal Tiger",
    "Bornean Orangutan",
    "Chinese Pangolin",
    "Formosan Black Bear",
    "Gharial",
    "Giant Forest Scorpion",
    "Giant Panda",
    "Himalayan Brown Bear",
    "Indian Elephant",
    "Indian Peafowl",
    "Indian Rhinoceros",
    "Jacuzzi bois",
    "Komodo Dragon",
    "Red Panda",
    "Siberian Tiger",
    "Snow Leopard",
    "Timber Wolf",
    "Saltwater Crocodile",
    "Clouded Leopard",
    "Sun Bear",
    "Proboscis Monkey",
    "Ussuri Dhole",
    "Malayan Tapir",
    "North Sulawesi Babirusa",
    "Binturong",
    "Arctic Fox",
    "Moose",
    "Eurasian Lynx",
    "Asian Small-Clawed Otter",
    "Wild Water Buffalo",
    "Red-Crowned Crane",
    "Przewalski's Horse",
    "Amur Leopard",
    "Siamang",
    "Red Fox",
    "Red Deer",
    "Caracal",
    "Striped Hyena",
    "Lar Gibbon",
    "Asian Water Monitor",
    "Dromedary Camel",
    "Sand Cat",
    "Sloth Bear",
    "Wolverine",
    "Wild Boar",
    "Saiga",
    "Mute Swan",
    "Takin"
];

// Array for European animals
const european_animals = [
    "Greater Flamingo",
    "Timber Wolf",
    "Reindeer",
    "Polar Bear",
    "Grey Seal",
    "Arctic Fox",
    "Moose",
    "Alpine Ibex",
    "Eurasian Lynx",
    "European Badger",
    "European Fallow Deer",
    "Red Fox",
    "Red Deer",
    "African Crested Porcupine",
    "Wisent",
    "Wolverine",
    "Wild Boar",
    "Mute Swan",
    "Sussex Chicken",
    "Highland Cattle",
    "Alpine Goat",
    "Hill Radnor Sheep",
    "Tamworth Pig"
];

// Array for North American animals
const na_animals = [
    "Timber Wolf",
    "Pronghorn Antelope",
    "Grizzly Bear",
    "Dall Sheep",
    "Arctic Wolf",
    "American Bison",
    "Reindeer",
    "Polar Bear",
    "Grey Seal",
    "Cougar",
    "American Alligator",
    "Black-Tailed Prairie Dog",
    "Arctic Fox",
    "North American Beaver",
    "Moose",
    "California Sea Lion",
    "Raccoon",
    "Red Fox",
    "Striped Skunk",
    "Nine-Banded Armadillo",
    "Collared Peccary",
    "Wolverine",
    "American Standard Donkey"
];

// Array for South American animals
const sa_animals = [
    "Capuchin",
    "Galapagos",
    "Llama",
    "Tapir",
    "Giant Anteater",
    "Jaguar",
    "Cuvier's Dwarf Caiman",
    "Giant Otter",
    "King Penguin",
    "Cougar",
    "Capybara",
    "Spectacled Caiman",
    "Nine-Banded Armadillo",
    "Maned Wolf",
    "Collared Peccary",
    "Alpaca"
];

//Array for Central American animals
const ca_animals = [
    "Baird's Tapir",
    "California Sea Lion",
    "Cougar",
    "Raccoon",
    "Nine-Banded Armadillo",
    "Collared Peccary"
];

// Array for Oceania animals
const oceania_animals = [
    "Saltwater Crocodile",
    "Southern Cassowary",
    "Red Kangaroo",
    "Koala",
    "Dingo",
    "Platypus",
    "Common Wombat",
    "Emu",
    "Red-Necked Wallaby",
    "North Island Brown Kiwi",
    "Tasmanian Devil",
    "Little Penguin",
    "Quokka"
];

// Array for Antarctica animals
const antarctica_animals = [
    "King Penguin"
]

// Array for Exhibit animals
const exhibit_animals = [
    "Yellow Anaconda",
    "Titan Beetle",
    "Lehmann's Poison Frog",
    "Goliath Birdeater",
    "Golden Poison Frog",
    "Brazilian Wandering Spider",
    "Brazilian Salmon Pink Tarantula",
    "Amazonian Giant Centipede",
    "Giant Burrowing Cockroach",
    "Eastern Brown Snake",
    "Eastern Blue Tongued Lizard",
    "Common Death Adder",
    "Gila Monster",
    "Giant Desert Hairy Scorpion",
    "Lesser Antillean Iguana",
    "Green Iguana",
    "Boa Constrictor",
    "Red-Eyed Tree Frog",
    "Western Diamondback Rattlesnake",
    "Mexican Red Knee Tarantula",
    "Giant Tiger Land Snail",
    "Goliath Beetle",
    "Goliath Frog",
    "Puff Adder",
    "Giant Forest Scorpion",
    "Diamondback Terrapin",
    "Giant Leaf Insect",
    "Sacred Scarab Beetle",
    "American Bullfrog",
    "Fire Salamander",
    "Danube Crested Newt",
    "Axolotl",
    "Egyptian Fruit Bat",
    "Menelaus Blue Morpho",
    "Cloudless Sulphur",
    "European Peacock",
    "Old World Swallowtail",
    "Monarch",
    "Brown-Throated Sloth",
    "Desert Horned Viper",
    "Spectacled Flying Fox",
    "Hermann's Tortoise"
];

//Array for Aquatic animals
const aquatic_animals = [
    "African Penguin",
    "Cuvier's Dwarf Caiman",
    "Gharial",
    "Giant Otter",
    "Greater Flamingo",
    "Grey Seal",
    "Hippopotamus",
    "King Penguin",
    "Malayan Tapir",
    "Polar Bear",
    "Proboscis Monkey",
    "Pygmy Hippo",
    "Saltwater Crocodile",
    "American Alligator",
    "California Sea Lion",
    "Capybara",
    "Platypus",
    "Asian Small-Clawed Otter",
    "Spectacled Caiman",
    "Wild Water Buffalo",
    "Red-Crowned Crane",
    "Nile Lechwe",
    "Moose",
    "Raccoon",
    "Asian Water Monitor",
    "Red River Hog",
    "Little Penguin",
    "Mute Swan"
];

//Array for Desert animals
const desert_animals = [
    "African Elephant",
    "African Penguin",
    "African Wild Dog",
    "Bactrian Camel",
    "Cheetah",
    "Common Ostrich",
    "Dingo",
    "Fennec Fox",
    "Gemsbok",
    "Meerkat",
    "Red Kangaroo",
    "Springbok",
    "Cougar",
    "Black-Tailed Prairie Dog",
    "Scimitar-Horned Oryx",
    "Red Fox",
    "Nine-Banded Armadillo",
    "Emu",
    "Caracal",
    "Striped Hyena",
    "Dromedary Camel",
    "Addax",
    "Dama Gazelle",
    "African Crested Porcupine",
    "Sand Cat",
    "Black Rhinoceros",
    "Somali Wild Ass",
    "Collared Peccary",
    "Wild Boar",
    "Saiga",
    "Alpine Goat",
    "American Standard Donkey"
];

//Array for Grassland animals
const grassland_animals = [
    "Aardvark",
    "African Buffalo",
    "African Elephant",
    "African Wild Dog",
    "American Bison",
    "North Sulawesi Babirusa",
    "Baird's Tapir",
    "Bengal Tiger",
    "Black Wildebeest",
    "Cheetah",
    "Common Ostrich",
    "Common Warthog",
    "Cuvier's Dwarf Caiman",
    "Dhole",
    "Dingo",
    "Giant Anteater",
    "Giant Otter",
    "Greater Flamingo",
    "Hippopotamus",
    "Indian Elephant",
    "Indian Peafowl",
    "Indian Rhinoceros",
    "Jaguar",
    "Komodo Dragon",
    "Llama",
    "Meerkat",
    "Nile Monitor",
    "Nyala",
    "Plains Zebra",
    "Pronghorn Antelope",
    "Red Kangaroo",
    "Reticulated Giraffe",
    "Sable Antelope",
    "Southern White Rhinoceros",
    "Spotted Hyena",
    "Springbok",
    "Sun Bear",
    "Thomson's Gazelle",
    "West African Lion",
    "North American Beaver",
    "Cougar",
    "Black-Tailed Prairie Dog",
    "Eurasian Lynx",
    "European Badger",
    "European Fallow Deer",
    "Capybara",
    "Platypus",
    "Asian Small-Clawed Otter",
    "Spectacled Caiman",
    "Wild Water Buffalo",
    "Nile Lechwe",
    "Przewalski's Horse",
    "Scimitar-Horned Oryx",
    "Raccoon",
    "Common Wombat",
    "Red Fox",
    "Striped Skunk",
    "Red Deer",
    "Nine-Banded Armadillo",
    "Maned Wolf",
    "Emu",
    "Caracal",
    "Red-Necked Wallaby",
    "Striped Hyena",
    "Blue Wildebeest",
    "Asian Water Monitor",
    "Red River Hog",
    "Dromedary Camel",
    "Dama Gazelle",
    "African Crested Porcupine",
    "Black Rhinoceros",
    "Little Penguin",
    "Quokka",
    "Collared Peccary",
    "Wisent",
    "Sloth Bear",
    "Wild Boar",
    "Saiga",
    "Takin",
    "Sussex Chicken",
    "Alpine Goat",
    "Alpaca",
    "American Standard Donkey",
    "Hill Radnor Sheep",
    "Tamworth Pig"
];

//Array for Taiga animals
const taiga_animals = [
    "Arctic Wolf",
    "Dall Sheep",
    "Dhole",
    "Formosan Black Bear",
    "Giant Panda",
    "Grizzly Bear",
    "Himalayan Brown Bear",
    "Jacuzzi bois",
    "Llama",
    "Polar Bear",
    "Pronghorn Antelope",
    "Red Panda",
    "Reindeer",
    "Siberian Tiger",
    "Snow Leopard",
    "Timber Wolf",
    "North American Beaver",
    "Cougar",
    "Arctic Fox",
    "Moose",
    "Alpine Ibex",
    "Eurasian Lynx",
    "European Badger",
    "Red-Crowned Crane",
    "Amur Leopard",
    "Raccoon",
    "Red Fox",
    "Striped Skunk",
    "Red Deer",
    "Wisent",
    "Wolverine",
    "Wild Boar",
    "Takin",
    "Sussex Chicken",
    "Highland Cattle",
    "Alpine Goat",
    "Hill Radnor Sheep",
    "Tamworth Pig"
];

//Array for Temperate animals
const temperate_animals = [
    "Bactrian Camel",
    "Baird's Tapir",
    "Bengal Tiger",
    "Binturong",
    "Chinese Pangolin",
    "Clouded Leopard",
    "Colombian White-Faced Capuchin",
    "Cuvier's Dwarf Caiman",
    "Dhole",
    "Formosan Black Bear",
    "Gharial",
    "Giant Panda",
    "Greater Flamingo",
    "Grey Seal",
    "Grizzly Bear",
    "Indian Elephant",
    "Indian Peafowl",
    "Indian Rhinoceros",
    "Jaguar",
    "Jacuzzi bois",
    "Koala",
    "Llama",
    "Malayan Tapir",
    "Pronghorn Antelope",
    "Red Panda",
    "Siberian Tiger",
    "Sun Bear",
    "Timber Wolf",
    "North American Beaver",
    "Cougar",
    "American Alligator",
    "California Sea Lion",
    "Eurasian Lynx",
    "European Badger",
    "European Fallow Deer",
    "Platypus",
    "Red-Crowned Crane",
    "Amur Leopard",
    "Raccoon",
    "Common Wombat",
    "Red Fox",
    "Striped Skunk",
    "Red Deer",
    "Nine-Banded Armadillo",
    "Caracal",
    "Red-Necked Wallaby",
    "Striped Hyena",
    "Dromedary Camel",
    "North Island Brown Kiwi",
    "Tasmanian Devil",
    "Little Penguin",
    "Collared Peccary",
    "Wisent",
    "Sloth Bear",
    "Wild Boar",
    "Mute Swan",
    "Takin",
    "Sussex Chicken",
    "Highland Cattle",
    "Alpine Goat",
    "Alpaca",
    "American Standard Donkey",
    "Hill Radnor Sheep",
    "Tamworth Pig"
];

//Array for Tropical Animals
const tropical_animals = [
    "Aardvark",
    "African Buffalo",
    "Aldabra Giant Tortoise",
    "North Sulawesi Babirusa",
    "Baird's Tapir",
    "Bengal Tiger",
    "Binturong",
    "Bongo",
    "Bonobo",
    "Bornean Orangutan",
    "Chinese Pangolin",
    "Clouded Leopard",
    "Colombian White-Faced Capuchin",
    "Common Warthog",
    "Cuvier's Dwarf Caiman",
    "Dhole",
    "Formosan Black Bear",
    "Galapagos Giant Tortoise",
    "Gharial",
    "Giant Anteater",
    "Giant Otter",
    "Greater Flamingo",
    "Indian Elephant",
    "Indian Peafowl",
    "Jaguar",
    "Koala",
    "Komodo Dragon",
    "Malayan Tapir",
    "Mandrill",
    "Nile Monitor",
    "Nyala",
    "Okapi",
    "Proboscis Monkey",
    "Pygmy Hippo",
    "Red Ruffed Lemur",
    "Reticulated Giraffe",
    "Ring Tailed Lemur",
    "Saltwater Crocodile",
    "Southern Cassowary",
    "Sun Bear",
    "Western Chimpanzee",
    "Western Lowland Gorilla",
    "Cougar",
    "Black-And-White Ruffed Lemur",
    "Capybara",
    "Platypus",
    "Asian Small-Clawed Otter",
    "Spectacled Caiman",
    "Wild Water Buffalo",
    "Siamang",
    "Raccoon",
    "Nine-Banded Armadillo",
    "Maned Wolf",
    "Emu",
    "Striped Hyena",
    "Lar Gibbon",
    "Fossa",
    "Asian Water Monitor",
    "Red River Hog",
    "Collared Peccary",
    "Sloth Bear",
    "Wild Boar",
    "Takin",
    "Sussex Chicken"    
];

//Array for Tundra animals
const tundra_animals = [
    "Arctic Wolf",
    "Dall Sheep",
    "Grey Seal",
    "Grizzly Bear",
    "Himalayan Brown Bear",
    "King Penguin",
    "Polar Bear",
    "Reindeer",
    "Timber Wolf",
    "Arctic Fox",
    "Eurasian Lynx",
    "Red-Crowned Crane",
    "Red Fox",
    "Wolverine",
    "Highland Cattle"
];

// Array for all animals
const all_animals = african_animals.concat(asian_animals, european_animals, na_animals, sa_animals, oceania_animals, antarctica_animals);

// Random habitat animal
function randomHabitatAnimal () {
    const random_habitat_animal = all_animals[Math.floor(Math.random() * all_animals.length)];
    document.getElementById("result").innerHTML=random_habitat_animal;
}

// Random exhibit animal
function randomExhibitAnimal () {
    const random_exhibit_animal = exhibit_animals[Math.floor(Math.random() * exhibit_animals.length)];
    document.getElementById("result").innerHTML=random_exhibit_animal;
}

// Random african animal
function randomAfricanAnimal () {
    const random_african_animal = african_animals[Math.floor(Math.random() * african_animals.length)];
    document.getElementById("result").innerHTML=random_african_animal;
}

// Random asian animal
function randomAsianAnimal () {
    const random_asian_animal = asian_animals[Math.floor(Math.random() * asian_animals.length)];
    document.getElementById("result").innerHTML=random_asian_animal;
}

// Random european animal
function randomEuropeanAnimal () {
    const random_european_animal = european_animals[Math.floor(Math.random() * european_animals.length)];
    document.getElementById("result").innerHTML=random_european_animal;
}

// Random NA animal
function randomNaAnimal () {
    const random_na_animal = na_animals[Math.floor(Math.random() * na_animals.length)];
    document.getElementById("result").innerHTML=random_na_animal;
}

// Random SA animal
function randomSaAnimal () {
    const random_sa_animal = sa_animals[Math.floor(Math.random() * sa_animals.length)];
    document.getElementById("result").innerHTML=random_sa_animal;
}

//Random CA animal
function randomCaAnimal() {
    const random_ca_animal = ca_animals[Math.floor(Math.random() * ca_animals.length)];
    document.getElementById("result").innerHTML=random_ca_animal;
}

// Random Oce animal
function randomOceaniaAnimal () {
    const random_oceania_animal = oceania_animals[Math.floor(Math.random() * oceania_animals.length)];
    document.getElementById("result").innerHTML=random_oceania_animal;
}

// Random Antarctica animal
function randomAntarcticaAnimal() {
    const random_antarctica_animal = antarctica_animals[Math.floor(Math.random() * antarctica_animals.length)];
    document.getElementById("result").innerHTML=random_antarctica_animal;
}

//Random Aquatic animal
function randomAquaticAnimal() {
    const random_aquatic_animal = aquatic_animals[Math.floor(Math.random() * aquatic_animals.length)];
    document.getElementById("result").innerHTML=random_aquatic_animal;
}

//Random Desert animal
function randomDesertAnimal() {
    const random_desert_animal = desert_animals[Math.floor(Math.random() * desert_animals.length)];
    document.getElementById("result").innerHTML=random_desert_animal;
}

//Random Grassland animal
function randomGrasslandAnimal() {
    const random_grassland_animal = grassland_animals[Math.floor(Math.random() * grassland_animals.length)];
    document.getElementById("result").innerHTML=random_grassland_animal;
}

//Random Taiga animal
function randomTaigaAnimal() {
    const random_taiga_animal = taiga_animals[Math.floor(Math.random() * taiga_animals.length)];
    document.getElementById("result").innerHTML=random_taiga_animal;
}

//Random Temperate animal
function randomTemperateAnimal() {
    const random_temperate_animal = temperate_animals[Math.floor(Math.random() * temperate_animals.length)];
    document.getElementById("result").innerHTML=random_temperate_animal;
}

//Random Tropical animal
function randomTropicalAnimal() {
    const random_tropical_animal = tropical_animals[Math.floor(Math.random() * tropical_animals.length)];
    document.getElementById("result").innerHTML=random_tropical_animal;
}

//Random Tundra animal
function randomTundraAnimal() {
    const random_tundra_animal = tundra_animals[Math.floor(Math.random() * tundra_animals.length)];
    document.getElementById("result").innerHTML=random_tundra_animal;
}
