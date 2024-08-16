// function mash() {
//     let homeTypes = ["Mansion", "Castle", "Shack", "House"];
//     let randomIndex = Math.floor(Math.random() * homeTypes.length);
//     return homeTypes[randomIndex];
// }


// let result = mash();
// console.log(result);

// function getTravelCount() {
//     return randNumGenerator(0, 100);
// }

// console.log(getTravelCount()); 


// function mash(){
//     console.log("You will live in a " + getHome() + " and travel to " + getTravelCount() + "countries!")

function getHome() {
    let homeTypes = ["Mansion", "Castle", "Shack", "House"];
    let userChoice = process.argv[2];
    if (userChoice && homeTypes.includes(userChoice)) {
        return userChoice;
    } else {
        let randomIndex = Math.floor(Math.random() * homeTypes.length);
        return homeTypes[randomIndex];
    }
}

function getTravelCount() {
    return Math.floor(Math.random() * 101);
}

function getPet() {
    let randomPets = ["Dragon", "Unicorn", "Sasquatch", "Nessie", "Chupacabra"];
    let randomIndex = Math.floor(Math.random() * randomPets.length);
    if (process.argv[3] && Math.random() < 0.5) {
        return process.argv[3];
    } else {
        return randomPets[randomIndex];
    }
}

function getCollege() {
    let colleges = ["Harvard", "Stanford", "MIT", "Yale", "Princeton", "UC Berkeley", "UCLA"];
    if (process.argv[4]) {
        return process.argv[4];
    } else {
        let randomIndex = Math.floor(Math.random() * colleges.length);
        return colleges[randomIndex];
    }
}

function getCar() {
    let cars = ["Tesla", "BMW", "Mercedes", "Audi", "Lamborghini", "Ferrari", "Porsche"];
    if (process.argv[5]) {
        return process.argv[5];
    } else {
        let randomIndex = Math.floor(Math.random() * cars.length);
        return cars[randomIndex];
    }
}

function mash() {
    let placeToLive = getHome();
    let travelCount = getTravelCount();
    let pet = getPet();
    let college = getCollege();
    let car = getCar();
    console.log(`You will live in a ${placeToLive}, travel to ${travelCount} countries, have a pet ${pet}, attend ${college}, and drive a ${car}.`);
}

mash();




