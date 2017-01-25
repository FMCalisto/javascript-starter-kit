const pets = ["Cat", "Dog"];
const wishlist = ["Hamster", "Horse", "Snake"];

pets.push.apply(pets, wishlist);

console.log(pets);
