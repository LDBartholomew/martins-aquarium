/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const myName = "Brenda";
let myFavoriteColor = "Yellow";

export const getFish = () => {
    return fishCollection
}
export const getMostHolyFish = () => {
    const holyFishArray = []

    for (fishtaco of fishCollection) {
        if(fishtaco.length % 3){
            holyFishArray.push(fishtaco);
        }
    }
}

const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
		image: "bluefish.jpg",
		species: "Trigger",
		length: 7,
		waterType: "Salt",
		harvestLocation: "Costa Rica"
    },
	{
        name: "Mr Freeze",
        food: "Meal Worms",
		image: "cat.jpg",
		species: "Tang",
		length: 3,
		waterType: "Salt",
		harvestLocation: "Florida"
    },
	{
        name: "Nemo",
        food: "Goldfish",
        image: "crazy-fish.jpg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestLocation: "Florida"
    },
	{
        name: "Don Julio",
        food: "snails",
        image: "dopeyfish.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"
    },
	{
        name: "Karen",
        food: "Algae",
        image: "Gold.jpg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt", 
        harvestLocation: "Puerto Rico"
    },
	{
		name: "Robin Gilliams",
		food: "Bee Moths",
		image: "orangefish.jpg",
		species: "Clownfish",
		length: 2,
		waterType: "Salt",
		harvestLocation: "Mexico"
	},
	{
        name: "Bruce",
        food: "not fish",
        image: "pinkfish.jpeg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
	{
        name: "Bloat",
        food: "shrimp",
        image: "purplefish.jpg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
	{
        name: "Gordon",
        food: "Krill",
        image: "yellowbluefish.jpg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    }
]