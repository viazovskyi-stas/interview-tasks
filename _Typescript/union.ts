interface Bird {
	fly(): void;
	layEggs(): void;
}

interface Fish {
	swim(): void;
	layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;
// TS in this case allows only those keys (keys/props) that are common to all unions
let pet = getSmallPet();

pet.layEggs()
