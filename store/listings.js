const listings = [
  {
    "title": "2021 Audi Q5",
    "price": 43300,
    "categoryId": 1,
    "description": "A great safety score, a high-tech infotainment system, and well-rounded performance all help the 2021 Audi Q5 land near the top of our luxur...",
    "images": [
        {
            "fileName": "a6a3d3ce736474fb1e0186ff51b40d12"
        }
    ],
    "id": 1,
    userId: 2
  },
  {
    "title": "2021 Chevrolet Camaro",
    "price": 25000,
    "categoryId": 2,
    "description": "The 2020 Chevrolet Camaro finishes in the middle of our sports car rankings. It's thrilling to drive, but its interior quality is subpar for...",
    "images": [
        {
            "fileName": "50d513a5a15dd109ce0a044d638e318d"
        }
    ],
    "id": 2,
    userId: 2
  },
  {
    "title": "2021 Ford Mustang",
    "price": 27155,
    "categoryId": 3,
    "description": "The 2021 Ford Mustang outranks nearly all other sports cars. It offers a deft blend of straight-line acceleration and poised handling, along...",
    "images": [
        {
            "fileName": "e196959b7dde8f2df9e99aee12d48f78"
        }
    ],
    "id": 3,
    userId: 2
  },
  {
    "title": "2021 Honda Accord Sedan",
    "price": 24700,
    "categoryId": 4,
    "description": "The 2021 Honda Accord does most everything well and finishes near the top of our midsize car rankings. Its standout attributes include its e...",
    "images": [
        {
            "fileName": "c3a7c060ea46a4795d20e6a92b2ae28b"
        }
    ],
    "id": 4,
    userId: 2
  },
  {
    "title": "2021 Hyundai Elentra Hybrid",
    "price": 23550,
    "categoryId": 5,
    "description": "The 2021 Hyundai Elantra Hybrid offers exceptional fuel economy, a competent powertrain, composed handling, and plenty of features. This veh...",
    "images": [
        {
            "fileName": "3fcfa48662a24c7b2f62fa6eac614e01"
        }
    ],
    "id": 5,
    userId: 2
  },
  {
    "title": "2021 Lexus ES",
    "price": 39900,
    "categoryId": 6,
    "description": "The 2021 Lexus ES ranks near the top of the luxury midsize car class thanks to its composed ride and handling, comfortable and spacious inte...",
    "images": [
        {
            "fileName": "f6277d2c4d5367291588927d6e98c2a5"
        }
    ],
    "id": 8,
    userId: 2
  },
  {
    "title": "2021 Mazda CX30",
    "price": 21900,
    "categoryId": 8,
    "description": "The 2021 Mazda CX-30 ranks highly among subcompact SUVs on the strength of its lively handling, swanky cabin, and roomy cargo hold...",
    "images": [
        {
            "fileName": "473c3dce18e259b6bdfc879640284068"
        }
    ],
    "id": 9,
    userId: 2
  },
  {
    "title": "2021 Nissan GT-R",
    "price": 113540,
    "categoryId": 10,
    "description": "The 2021 Nissan GT-R ranks in the bottom third of the luxury sports car class. The GT-R offers searing engine performance, planted handling, and an intuitive touch screen, but it’s let down by its unremarkable interior quality, snug back seat, and lack of advanced features.",
    "images": [
      {
        "fileName": "279f933f65ebce290d474307d8cd3b8e"
      }
    ],
    "id": 11,
    userId: 2
  },
  {
    "title": "2021 Toyota Avalon",
    "price": 35875,
    "categoryId": 11,
    "description": "The 2021 Toyota Avalon’s high ranking in the large car class is largely due to its above-average predicted reliability rating, comfortable ride, and lengthy standard features list",
    "images": [
      {
        "fileName": "ae6dea8ac2f27d0b06fb55c37e7b8430"
      }
    ],
    "id": 12,
    userId: 2
  },
  {
    "title": "2021 Acura ILX",
    "price": 25950,
    "categoryId": 12,
    "description": "A disappointing interior quality, troublesome technology, and unimpressive rear-seat space help ensure the 2021 Acura ILX’s spot near the bottom of our luxury small car rankings",
    "images": [
      {
        "fileName": "15ee71d9de8af72d45a5fe580a8eff42"
      }
    ],
    "id": 13
  },
  {
    "title": "2021 Alfa Romeo Stelvio ",
    "price": 41450,
    "categoryId": 13,
    "description": "The 2021 Alfa Romeo Stelvio delivers an engaging driving experience, but this luxury compact SUV isn't as luxurious as many of its classmates. The Stelvio does not have an overall score or ranking because it hasn’t been fully crash tested or rated for reliability",
    "images": [
      {
        "fileName": "918098c746ce4f2d71192902f01027de"
      }
    ],
    "id": 14
  },
  {
    "title": "2021 BMW 3-Series",
    "price": 41250,
    "categoryId": 15,
    "description": "The 2021 BMW 3 Series sits in the middle of our competitive luxury small car rankings. It delivers lively handling and good engine power, but its cabin is a little underwhelming compared to rivals",
    "images": [
      {
        "fileName": "141036975ff987494897692df7d7f7a9"
      }
    ],
    "id": 15
  },
  {
    "title": "2021 Buick Encore GX",
    "price": 24200,
    "categoryId": 16,
    "description": "A spacious cabin and a high predicted reliability rating are just two strengths of the 2021 Buick Encore GX. However, it also has a firmer ride than rivals and some cheap plastics in its cabin. This vehicle does not have an overall score or ranking because it hasn’t been fully crash tested.",
    "images": [
      {
        "fileName": "068714da41bd8744804ab52b5ccc6d9a"
      }
    ],
    "id": 16
  },
  {
    "title": "2021 Cadillac Escalade",
    "price": 76195,
    "categoryId": 17,
    "description": "The 2021 Cadillac Escalade ranks in the top half of the luxury large SUV class, thanks in part to its comfortable ride, massive cargo hold, and refined cabin",
    "images": [
      {
        "fileName": "2307b3848e78a1be5c63315e9dccc36f"
      }
    ],
    "id": 17
  },
  {
    "title": "2021 Chrysler 300",
    "price": 30445,
    "categoryId": 18,
    "description": "The 2021 Chrysler 300 sits near the bottom of our large car rankings. Though it has powerful engine options and lots of cabin space, it’s less agile than some class rivals.",
    "images": [
      {
        "fileName": "0d0e43e643c429f526835f9008159b2e"
      }
    ],
    "id": 18
  },
  {
    "title": "2021 Dodge Charger ",
    "price": 29995,
    "categoryId": 19,
    "description": "The 2021 Dodge Charger finishes near the bottom of our large car rankings. It offers an array of powerful engines and a spacious interior, but its terrible predicted reliability rating drags down its overall score",
    "images": [
      {
        "fileName": "28582347cd169ad159e06a226a69f436"
      }
    ],
    "id": 19
  },
  {
    "title": "2020 FIAT 500L",
    "price": 22500,
    "categoryId": 7,
    "description": "Poor fuel economy, cheap cabin materials, uncomfortable seats, and a rough ride all help land the 2020 Fiat 500L near the bottom of our wagon rankings",
    "images": [
      {
        "fileName": "0cafa133a979ed236ce1b4b9016d2e99"
      }
    ],
    "id": 20
  },
  {
    "title": "2021 Genesis G80",
    "price": 47770,
    "categoryId": 21,
    "description": "The 2021 Genesis G80 ranks near the top of the luxury midsize car class thanks to its quiet and comfortable interior, top-notch materials, user-friendly features, pleasant driving dynamics, and great predicted reliability rating",
    "images": [
      {
        "fileName": "289ea3aed3d371d73dab1e2861f0ec71"
      }
    ],
    "id": 21
  },
  {
    "title": "2021 GMC Yukon",
    "price": 50700,
    "categoryId": 22,
    "description": "The 2021 GMC Yukon finishes in the middle of our large SUV rankings. It's enormous, both inside and out. It's also powerful and comfortable, but its below-average predicted reliability rating hurts its overall score",
    "images": [
      {
        "fileName": "cb167e602e897253ee259548e239a435"
      }
    ],
    "id": 22
  },
  {
    "title": "2010 Hummer H3T",
    "price": 30915,
    "categoryId": 23,
    "description": "The distinctly-styled 2010 Hummer H3T offers great performance on a rocky trail and standard four-wheel drive, but other compact trucks surpass it with better fuel economy",
    "images": [
      {
        "fileName": "ebef16d14b291f4d8e46f7b2b210b7d8"
      }
    ],
    "id": 23
  },
  {
    "title": "2021 Infiniti Q50",
    "price": 36600,
    "categoryId": 24,
    "description": "The 2021 Infiniti Q50 is a comfortable sedan with ample horsepower. However, the Q50 places low in our luxury small car rankings because it’s not as upscale as most of its rivals, it has an unimpressive infotainment system, and it rates subpar for predicted reliability",
    "images": [
      {
        "fileName": "d517c1bb0e33e45bf490e7a77d0d7d79"
      }
    ],
    "id": 24
  },
  {
    "title": "2020 Jaguar F-Pace",
    "price": 45200,
    "categoryId": 25,
    "description": "The 2020 Jaguar F-Pace sports athletic handling, a range of potent engines, and more passenger space than most rivals. It disappoints, however, with its subpar cabin materials and uncooperative infotainment system. The F-Pace does not have an overall score or ranking due to missing safety and predicted reliability data",
    "images": [
      {
        "fileName": "611cb4f2f86125bca0a05c706d5541aa"
      }
    ],
    "id": 25
  },
  {
    "title": "2021 Jeep Compass ",
    "price": 23895,
    "categoryId": 26,
    "description": "The 2021 Jeep Compass is one of our lowest-ranked compact SUVs. While it has fantastic off-road capability, it's held back by an underpowered engine and a below-average predicted reliability rating",
    "images": [
      {
        "fileName": "14a64d96a294adce0027d3f260d49fca"
      }
    ],
    "id": 26
  },
  {
    "title": "2021 Kia Forte",
    "price": 17890,
    "categoryId": 27,
    "description": "The 2021 Kia Forte fares well in our compact car rankings. It comes loaded with safety and infotainment technology, it has a spacious cabin, and it earns an above-average predicted reliability score and fuel economy rating",
    "images": [
      {
        "fileName": "f20674f58884d3722c122e5272a0bc53"
      }
    ],
    "id": 27
  },
  {
    "title": "2021 Land Rover Range Rover",
    "price": 92000,
    "categoryId": 28,
    "description": "The 2021 Land Rover Range Rover ranks in the bottom half of the luxury large SUV class. The Range Rover offers a roomy interior, a powerful engine lineup, and excellent off-road ability, but it also has a cumbersome infotainment system and a below-average predicted reliability rating",
    "images": [
      {
        "fileName": "0ebed55ffd5ee9bed6bb0b0da19a048c"
      }
    ],
    "id": 28
  },
  {
    "title": "2021 Lincoln Navigator",
    "price": 76185,
    "categoryId": 29,
    "description": "The 2021 Lincoln Navigator is one of our top-rated luxury large SUVs. It's posh and powerful, and it provides a ton of space even by the standards of this class full of behemoths.",
    "images": [
      {
        "fileName": "086ce2f6eb438786de4399b24329a3c2"
      }
    ],
    "id": 29
  },
  {
    "title": "2021 Maserati Levante",
    "price": 74490,
    "categoryId": 30,
    "description": "The full review of the 2021 Maserati Levante is coming soon. In the meantime, you can see pictures, research prices or view and compare specs for the 2021 Maserati Levante. If you're considering the 2020 Maserati Levante, read our review to find out more.",
    "images": [
      {
        "fileName": "6fcea5d2b647a8aac1b73e88f2a23cdf"
      }
    ],
    "id": 30
  },
  {
    "title": "2010 Mercury Mariner ",
    "price": 5851,
    "categoryId": 31,
    "description": "The 2010 Mercury Mariner is a competent and inviting 2010 compact SUV with decent fuel economy and a spacious interior, but isn’t as comfortable as several highly-ranked rivals",
    "images": [
      {
        "fileName": "a08e12c1cdb2bcdfbb14ee33094f9350"
      }
    ],
    "id": 31
  },
  {
    "title": "2020 Mitsubishi Eclipse",
    "price": 22995,
    "categoryId": 32,
    "description": "The 2020 Mitsubishi Eclipse Cross lands near the bottom of the compact SUV class. From engine power and agility to cargo space and interior quality, this crossover trails the competition in just about every area",
    "images": [
      {
        "fileName": "bbbccb92d1a86b3d20baadcf57a1661b"
      }
    ],
    "id": 32
  },
  {
    "title": "2021 Porsche Cayenne",
    "price": 67500,
    "categoryId": 33,
    "description": "The 2021 Porsche Cayenne is one of the most dynamic performers in the luxury midsize SUV class. It offers a top-notch cabin and oodles of features, but its cargo hold is on the small side. This vehicle does not have an overall score or ranking because it hasn't been fully crash tested",
    "images": [
      {
        "fileName": "de7af7bf413e584fb30386c84dab0605"
      }
    ],
    "id": 33
  },
  {
    "title": "2021 Ram 1500",
    "price": 28450,
    "categoryId": 34,
    "description": "The 2021 Ram 1500 finishes near the top of our full-size pickup truck rankings. This truck has almost no flaws. It’s powerful and capable, with a smooth ride and a top-notch interior",
    "images": [
      {
        "fileName": "22d27e61caf459fd9c678e2dbca73b8d"
      }
    ],
    "id": 34
  },
  {
    "title": "2021 Subaru Forester",
    "price": 24795,
    "categoryId": 35,
    "description": "The 2021 Subaru Forester finishes in the middle of our compact SUV rankings. It's spacious and comfortable, but its rock-bottom predicted reliability rating drags down its overall score",
    "images": [
      {
        "fileName": "d57843075b032ec64ece7da7011a2b5b"
      }
    ],
    "id": 35
  },
  {
    "title": "2021 Tesla Model 3",
    "price": 37990,
    "categoryId": 36,
    "description": "The Tesla Model 3’s rapid acceleration and dynamic handling help it rank near the top of the luxury hybrid and electric car class",
    "images": [
      {
        "fileName": "714c9aa3713f0e80ed6602d3300207bb"
      }
    ],
    "id": 36
  },
  {
    "title": "2021 Volkswagen Arteon",
    "price": 36995,
    "categoryId": 37,
    "description": "The Volkswagen Arteon ranks in the bottom half of the luxury small car class. It’s a fine choice with a huge cargo capacity and user-friendly tech features, but many classmates are more luxurious and more powerful.",
    "images": [
      {
        "fileName": "87297e0e678cd54649a0ff4b463bd674"
      }
    ],
    "id": 37
  },
  {
    "title": "2021 Volvo S60",
    "price": 37750,
    "categoryId": 38,
    "description": "The 2021 Volvo S60 finishes in the top half of our luxury small car rankings. It has a posh interior with plenty of features, but a below-average predicted reliability rating hurts its overall score",
    "images": [
      {
        "fileName": "02cbb8e9f7c0cb4f3fc2120e2557183d"
      }
    ],
    "id": 38
  },
  {
    "title": "2016 Scion FR-S",
    "price": 17319,
    "categoryId": 39,
    "description": "The 2016 Scion FR-S ranks at the top of its class, thanks to its athletic handling, upscale interior, and great safety and reliability ratings",
    "images": [
      {
        "fileName": "fbbbe49b98b8a37ad02cdb28178362e9"
      }
    ],
    "id": 39
  },
  {
    "title": "2017 Smart Fortwo",
    "price": 14650,
    "categoryId": 40,
    "description": "The 2017 Smart Fortwo sits near the bottom of the subcompact car class. It has an underpowered engine, limited space, and a poor predicted reliability rating.",
    "images": [
      {
        "fileName": "002cc5a23ca37b88e1d0c6d98278fcf5"
      }
    ],
    "id": 40
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const getListingByName = (name) => listings.filter((listing) => listing.title.indexOf(name) != -1);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
  getListingByName
};
