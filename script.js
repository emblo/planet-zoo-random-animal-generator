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
    "Fennec Fox"
];

// Array for asian animals
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
    "Binturong"
];

// Array for European animals
const european_animals = [
    "Greater Flamingo",
    "Timber Wolf",
    "Reindeer",
    "Polar Bear",
    "Grey Seal"
];

// Array for North American animals
const na_animals = [
    "Timber Wolf",
    "Capuchin",
    "Pronghorn Antelope",
    "Grizzly Bear",
    "Dall Sheep",
    "Arctic Wolf",
    "American Bison",
    "Reindeer",
    "Polar Bear",
    "Giant Anteater",
    "Jaguar",
    "Grey Seal"
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
    "King Penguin"
];

// Array for Oceania animals
const oceania_animals = [
    "Saltwater Crocodile",
    "Southern Cassowary",
    "Red Kangaroo",
    "Koala",
    "Dingo",
];

// Array for Antarctica animals
const antarctica_animals = [
    "King Penguin"
]

// Array for exhibit animals
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
    "Sacred Scarab Beetle"
];

// Array for all animals
const all_animals = african_animals.concat(asian_animals, european_animals, na_animals, sa_animals, oceania_animals, antarctica_animals);

// Random habitat animal
function randomHabitatAnimal () {
    const random_habitat_animal = all_animals[Math.floor(Math.random() * all_animals.length)];
    document.getElementById("result").value=random_habitat_animal;
}

// Random exhibit animal
function randomExhibitAnimal () {
    const random_exhibit_animal = exhibit_animals[Math.floor(Math.random() * exhibit_animals.length)];
    document.getElementById("result").value=random_exhibit_animal;
}

// Random african animal
function randomAfricanAnimal () {
    const random_african_animal = african_animals[Math.floor(Math.random() * african_animals.length)];
    document.getElementById("result").value=random_african_animal;
}

// Random asian animal
function randomAsianAnimal () {
    const random_asian_animal = asian_animals[Math.floor(Math.random() * asian_animals.length)];
    document.getElementById("result").value=random_asian_animal;
}

// Random european animal
function randomEuropeanAnimal () {
    const random_european_animal = european_animals[Math.floor(Math.random() * european_animals.length)];
    document.getElementById("result").value=random_european_animal;
}

// Random NA animal
function randomNaAnimal () {
    const random_na_animal = na_animals[Math.floor(Math.random() * na_animals.length)];
    document.getElementById("result").value=random_na_animal;
}

// Random SA animal
function randomSaAnimal () {
    const random_sa_animal = sa_animals[Math.floor(Math.random() * sa_animals.length)];
    document.getElementById("result").value=random_sa_animal;
}

// Random Oce animal
function randomOceaniaAnimal () {
    const random_oceania_animal = oceania_animals[Math.floor(Math.random() * oceania_animals.length)];
    document.getElementById("result").value=random_oceania_animal;
}

// Random Antarctica animal
function randomAntarcticaAnimal() {
    const random_antarctica_animal = antarctica_animals[Math.floor(Math.random() * antarctica_animals.length)];
    document.getElementById("result").value=random_antarctica_animal;
}

