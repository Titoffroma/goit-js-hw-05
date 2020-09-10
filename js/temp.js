const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
};

const hotel = new Hotel("Resort Hotel", 5, 100);
console.log(hotel);
// Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

const motel = new Hotel("Sunlight Motel", 4, 300);
console.log(motel);
// Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}
