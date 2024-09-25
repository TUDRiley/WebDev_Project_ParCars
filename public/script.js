const hotWheels = [
    {
        name: "Beatles Garbage Truck",
        color: "multicolor",
        wheels: 4,
        features: ["garbage", "rock band"],
        image: "resources/Cars/BeatlesGarbageTruck.png"
    },
    {
        name: "Beavis Car",
        color: "blue",
        wheels: 4,
        features: ["cartoon", "humor"],
        image: "resources/Cars/BeavisCar.png"
    },
    {
        name: "Black Car",
        color: "black",
        wheels: 4,
        features: ["NA"],
        image: "resources/Cars/BlackCar.png"
    },
    {
        name: "Black Car",
        color: "black",
        wheels: 4,
        features: ["NA"],
        image: "resources/Cars/BlackCar2.png"
    },
    {
        name: "Black Sports Car",
        color: "black",
        wheels: 4,
        features: ["Sports Car"],
        image: "resources/Cars/BlackSportsCar.png"
    },
    {
        name: "Blue Jeep",
        color: "blue",
        wheels: 4,
        features: ["NA"],
        image: "resources/Cars/BlueJeep.png"
    },
    // Gotta add more cars but lazy
];

function displayCars() {
    const gallery = document.querySelector(".gallery");
    hotWheels.forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car-item");
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <p>${car.name}</p>
            <p>Color: ${car.color}</p>
            <p>Wheels: ${car.wheels}</p>
            <p>Features: ${car.features.join(", ")}</p>
        `;
        gallery.appendChild(carDiv);
    });
}

document.addEventListener("DOMContentLoaded", displayCars);
