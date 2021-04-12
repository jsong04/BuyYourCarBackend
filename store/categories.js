const categories = [
  {
    id: 1,
    name: "Audi",
  },
  {
    id: 2,
    name: "Chevrolet",
  },
  {
    id: 3,
    name: "Ford",
  },
  {
    id: 4,
    name: "Honda",
  },
  {
    id: 5,
    name: "Hyundai",
  },
  {
    id: 6,
    name: "Lexus",
  },
  {
    id: 7,
    name: "FIAT"
  },
  {
    id: 8,
    name: "Mazda",
  },
  {
    id: 9,
    name: "Mercedes-Benz",
  },
  {
    id: 10,
    name: "Nissan",
  },
  {
    id: 11,
    name: "Toyota",
  },
  {
    id: 12,
    name: "Acura",
  },
  {
    id: 13,
    name: "Alfa Romeo",
  },
  {
    id: 14,
    name: "Aston Martin",
  },
  {
    id: 15,
    name: "BMW",
  },
  {
    id: 16,
    name: "Buick",
  },
  {
    id: 17,
    name: "Cadillac",
  },
  {
    id: 18,
    name: "Chrysler",
  },
  {
    id: 19,
    name: "Dodge",
  },
  {
    id: 20,
    name: "Ferrari",
  },
  {
    id: 21,
    name: "Genesis",
  },
  {
    id: 22,
    name: "GMC",
  },
  {
    id: 23,
    name: "Hummer",
  },
  {
    id: 24,
    name: "INFINITI",
  },
  {
    id: 25,
    name: "Isuzu",
  },
  {
    id: 26,
    name: "Jaguar",
  },
  {
    id: 27,
    name: "Jeep",
  },
  {
    id: 28,
    name: "Kia",
  },
  {
    id: 29,
    name: "Lamborghini",
  },
  {
    id: 30,
    name: "Land Rover",
  },
  {
    id: 31,
    name: "Lincoln",
  },
  {
    id: 32,
    name: "Lotus",
  },
  {
    id: 33,
    name: "Maserati",
  },
  {
    id: 34,
    name: "Mercury",
  },
  {
    id: 35,
    name: "MINI",
  },
  {
    id: 36,
    name: "Mitsubishi",
  },
  {
    id: 37,
    name: "Polestar",
  },
  {
    id: 38,
    name: "Pontiac",
  },
  {
    id: 39,
    name: "Porsche",
  },
  {
    id: 40,
    name: "Ram",
  },
  {
    id: 41,
    name: "Saab",
  },
  {
    id: 42,
    name: "Saturn",
  },
  {
    id: 43,
    name: "Scion",
  },
  {
    id: 44,
    name: "smart",
  },
  {
    id: 45,
    name: "Subaru",
  },
  {
    id: 46,
    name: "Suzuki",
  },
  {
    id: 47,
    name: "Tesla",
  },
  {
    id: 48,
    name: "Volkswagen",
  },
  {
    id: 49,
    name: "Volvo",
  },
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
