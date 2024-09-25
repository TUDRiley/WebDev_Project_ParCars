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
