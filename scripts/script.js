const carList = [
    {
        name: "Beatles Garbage Truck",
        color: "Green, Gray, Black",
        wheels: 4,
        features: ["garbage truck", "music memorabilia", "vintage"],
        image: "media/Cars/BeatlesGarbageTruck.png",
        descriptionText: "A toy truck designed to resemble a vintage concert ticket for The Beatles. The truck is predominantly mint green with accents of gray on the bottom and black windows. The side of the truck features a detailed graphic of a historic Beatles concert ticket, including the date, venue, and ticket price. Printed details include 'IN CONCERT BEATLES,' 'Empire Stadium Vancouver,' 'Sat. Aug. 22,' and 'Res. Seat $3.25.' The design creatively integrates the ticket aesthetic with the structure of the truck, making it a unique collectible item for music and Beatles enthusiasts."
    },
    {
        name: "Beavis Car",
        color: "Green",
        wheels: 4,
        features: ["cartoon", "humor", "custom", "mismatched wheels"],
        image: "media/Cars/BeavisCar.png",
        descriptionText: "A die-cast toy car styled as a compact hatchback features a unique, customized design. The car's body is primarily dark green with two distinctive cartoon characters prominently painted on the side door. The front wheel is metallic silver, while the rear wheel is black, highlighting a mismatched set. The car's windows are tinted dark, and it has a detailed chrome engine visible through the rear window. The front bumper and headlights are painted in silver, adding a touch of realism to the model."
    },
    {
        name: "Black Car",
        color: "Black",
        wheels: 4,
        features: ["vintage", "luxury", "classic", "tinted windows"],
        image: "media/Cars/BlackCar.png",
        descriptionText: "A sleek black classic coupe model car with a glossy finish, showcasing a vintage design with smooth curves and angular edges. The vehicle features prominent dual headlights at the front, a distinctive chrome grille, and stylish alloy wheels. The side mirrors are sharply defined, and the windows are tinted, suggesting a hint of luxury. A small license plate with an alphanumeric code is visible, adding to the car's authenticity. This collectible model represents an era of classic automotive elegance and performance."
    },
    {
        name: "Black Car (Variant)",
        color: "Black, Gold",
        wheels: 4,
        features: ["muscle car", "retro", "wide tires", "gold rims"],
        image: "media/Cars/BlackCar2.png",
        descriptionText: "A sleek, black muscle car characterized by its aggressive, classic design. The vehicle features a glossy black paint job complemented by shiny, gold-colored rims that add a touch of luxury. Its body displays a low stance with wide tires, enhancing its performance-oriented look. The car's front end is equipped with a broad chrome grille and round headlights, embodying the iconic styling of vintage muscle cars from the late 1960s era. White wall tires add an additional retro flair to the overall aesthetic, contributing to its impressive and powerful presence."
    },
    {
        name: "Black Sports Car",
        color: "Black, White",
        wheels: 4,
        features: ["sports car", "high speed", "aerodynamic", "tinted windows"],
        image: "media/Cars/BlackSportsCar.png",
        descriptionText: "A miniature toy car in a glossy black finish is captured at an angle. It features a modern and sporty design with aerodynamic contours and a detailed front grille. The car has four silver-rimmed wheels with intricate spoke designs that mimic high-performance tires. Two white stripes run along the length of the body, adding a touch of contrast and emphasizing the car's sleek aesthetic. The windows are tinted, enhancing its stylish and elegant appearance. Ideal for model car enthusiasts or collectors."
    },
    {
        name: "Blue Jeep",
        color: "Blue, Black",
        wheels: 4,
        features: ["off-road", "rugged", "MOPAR"],
        image: "media/Cars/BlueJeep.png",
        descriptionText: "A blue die-cast model of a Jeep with rugged detailing. The vehicle sports oversized, textured wheels suitable for off-road terrain. It features prominent MOPAR branding on the side with a stylized graphic, accentuating its sporty look. The front grille and bumper are black, providing a striking contrast to the vivid blue exterior. The rear section has a black flatbed, suggesting utility functionality in the miniature design. The model has a tough, adventurous aesthetic typical of all-terrain vehicles."
    },
    {
        name: "Broken Car",
        color: "Rusty, White",
        wheels: 4,
        features: ["vintage", "damaged", "rusty"],
        image: "media/Cars/BrokenCar.png",
        descriptionText: "A vintage-style toy car exhibits a blend of nostalgia and playfulness. The car is primarily white with patches of rust, indicating a weathered and aged appearance. Its bold design features a prominent grille and an exposed engine, adding a classic touch. The car is equipped with dark, copper-colored wheels, enhancing its classic aesthetic. The windows are tinted blue, giving a contrast to the faded bodywork. The interior is visible through the open door, showcasing a simple, classic car cabin design."
    },
    {
        name: "Green Racecar",
        color: "Green, White, Red",
        wheels: 4,
        features: ["race car", "speed", "aggressive"],
        image: "media/Cars/GreenRacecar.png",
        descriptionText: "A sleek and vibrant green toy race car with an aggressive design, featuring a large rear spoiler and wide tires. The body is adorned with artistic graphics resembling a snarling face on the front bumper, complete with white teeth and red accents, giving it a fierce and competitive appearance. The number 80 is prominently displayed on the hood and sides, along with various decals and sponsor logos, adding to its dynamic look. The car’s windows are tinted black, enhancing its sporty aesthetic."
    },
    {
        name: "Green Truck",
        color: "Green, Black, White",
        wheels: 4,
        features: ["pickup truck", "utility", "sporty design"],
        image: "media/Cars/GreenTruck.png",
        descriptionText: "A miniature die-cast model car designed to resemble a classic pickup truck. Its body features a vibrant metallic green color with black stripes running along the hood and sides, adding a sporty touch. The truck's roof is painted white, contrasting sharply with the vehicle's darker colors. Chrome accents highlight the front grille and bumper, while the wheels sport a sleek black and silver rim design. The bed of the pickup is black, enhancing its classic appearance. The hood is slightly raised, suggesting a powerful engine underneath, aligning with the vehicle's dynamic aesthetic."
    },
    {
        name: "Mutt Cutt Van",
        color: "Beige, Black",
        wheels: 4,
        features: ["van", "dog-themed", "humor"],
        image: "media/Cars/MuttCuttVan.png",
        descriptionText: "A small, stylized toy van designed to resemble a dog. It features beige coloring with a black nose, a red tongue sticking out at the front, and black spots to mimic a dog's face and ears. The van body includes a sign on the side panel with the text 'Mutt Cutts' and 'Providence R.I.', adding to the playful, canine-themed appearance. The toy has four black wheels and a tail-like structure on the back to complete the dog-like design."
    },
    {
        name: "Orange Racecar",
        color: "Orange, Green",
        wheels: 4,
        features: ["vintage", "race car", "high speed"],
        image: "media/Cars/OrangeRacecar.png",
        descriptionText: "A detailed miniature model of a vintage race car painted in a vibrant orange with green accents. The car features the number '68' prominently displayed on its side and hood. Its design incorporates a wide body kit, large rear wing, and streamlined aerodynamic components, suggesting a focus on high-speed performance. The front grille has classic BMW styling, and the vehicle is adorned with various logos indicating sponsorships, typical of racing cars."
    },
    {
        name: "Pink Car",
        color: "Pink, White",
        wheels: 4,
        features: ["stylish", "sleek", "decorative","tinted windows"],
        image: "media/Cars/PinkCar.png",
        descriptionText: "A pink toy sports car featuring a sleek, aerodynamic design. The body is adorned with decorative white graphics, including sharp lines and abstract patterns, giving it a vibrant and stylish appearance. The car is equipped with a large rear spoiler and has tinted windows. The wheels are detailed with metallic silver rims, and the overall look is sporty and eye-catching, suitable for a collectible or a child's play item."
    },
    {
        name: "Playstation Car",
        color: "White, Black, Red",
        wheels: 4,
        features: ["gaming", "special edition"],
        image: "media/Cars/PlaystationCar.png",
        descriptionText: "A detailed side view of a miniature model car representing the Nissan GT-R NISMO, painted in a sleek white color with black and red accents. The car features logos and decals, including the PlayStation logo and number 23 on the door, emphasizing a racing theme. It has a prominent rear spoiler for aerodynamic efficiency and black wheels with red details. The overall design captures the sporty and aggressive aesthetic typical of racing cars."
    },
    {
        name: "Red Car",
        color: "Red",
        wheels: 4,
        features: ["muscle car", "tinted windows", "detailed hood and sides", "sturdy black wheels"],
        image: "media/Cars/RedCar.png",
        descriptionText: "A sleek red toy sports car with a streamlined body, reminiscent of classic American muscle cars. The toy features a glossy finish and intricate detailing along the hood and sides. The wheels are black with a sturdy, durable design, adding to the vehicle's sporty appearance. The windows are tinted, and the front and rear of the car are designed to mimic the iconic shapes of vintage high-performance vehicles."
    },
    {
        name: "Red Car",
        color: "Red, White",
        wheels: 4,
        features: ["racing stripes", "intricate graphic on sides", "low profile", "wide racing wheels"],
        image: "media/Cars/RedCar2.png",
        descriptionText: "A vibrant red toy car that appears to be modeled after a sports car, featuring sleek aerodynamic lines. The car is adorned with white racing stripes running over the hood and roof. There is an intricate graphic on the side, depicting a stylized emblem or artwork with green accents. The car's design emphasizes speed and agility, highlighted by its low profile and wide racing wheels. The attention to detail in the model suggests it may be part of a collectible series or designed for racing enthusiasts."
    },
    {
        name: "Silver Racecar",
        color: "Silver, Red, Blue, White",
        wheels: 4,
        features: ["spoiler", "large black wheels with silver rims", "Hot Wheels branding", "number 40", "tinted windows"],
        image: "media/Cars/SilverRacecar.png",
        descriptionText: "A sleek, silver Hot Wheels toy car with bold design elements. The car features a prominent rear spoiler and large black racing wheels with silver rims. Its body is adorned with red, blue, and white decals, including the iconic 'Hot Wheels' logo in red and white on the side. The number '40' is visible on the rear side panel. The windows are tinted blue, giving it a futuristic and sporty look. Additional sponsor logos are placed along the sides, enhancing its racing motif."
    },
    {
        name: "TMNT Van",
        color: "Green, Black",
        wheels: 4,
        features: ["cartoon theme", "oversized wheels", "comic book illustrations", "teardrop windows", "high top van"],
        image: "media/Cars/TMNTVan.png",
        descriptionText: "A stylized toy van with a dynamic design featuring a striking combination of green and black colors. The side of the van displays an intricate illustration with a comic book style depicting four characters in action poses, possibly inspired by superhero or adventure themes. The front of the van is black, while the rear and top continue the vivid green color, complemented with decorative elements such as teardrop-shaped windows. The vehicle has exaggerated features, including oversized wheels and a high top, adding to its playful and imaginative appearance."
    },
    {
        name: "Weird Red Car",
        color: "Red, Camo",
        wheels: 4,
        features: ["camouflage design", "spoiler", "gold wheels with black rims", "tinted windows"],
        image: "media/Cars/WeirdRedCar.png",
        descriptionText: "A toy car features a sleek, sporty design with a predominantly red body. The car's surface showcases a camouflage pattern in shades of black, white, and orange. It has a large rear spoiler, enhancing its aerodynamic appearance. The wheels are gold with black rims, adding a striking contrast to the red body. The windows are tinted black, completing the toy car's dynamic and stylish look."
    },
    {
        name: "White Racecar",
        color: "White, Green, Black",
        wheels: 4,
        features: ["spoiler", "black wheels", "detailed air intakes", "sporty"],
        image: "media/Cars/WhiteRaceCar.png",
        descriptionText: "A miniature model of a racing car with a sleek white body accented by green and black design elements. The car features a prominent rear spoiler, black wheels, and detailed air intakes. The model captures the aerodynamic shape typical of high-performance race cars, and the tinted windows and sporty decals enhance its authentic appearance."
    },
    {
        name: "White Sports Car",
        color: "White, Black",
        wheels: 4,
        features: ["low profile", "aerodynamic", "racing stripes", "detailed headlights", "tinted windows"],
        image: "media/Cars/WhitesportsCar.png",
        descriptionText: "A sleek, white toy sports car with modern design features. The car has a low profile and aerodynamic shape, characterized by its smooth curves and sharp angles. It is decorated with two parallel black racing stripes running from the front to the back. The front of the car is fitted with detailed headlights and a wide grille, giving it an aggressive look. The car sits on black wheels that contrast with the white body, adding to its sporty appeal. The windows are tinted, further enhancing its stylish appearance."
    },
    {
        name: "Yellow Sports Car",
        color: "Yellow, Silver",
        wheels: 4,
        features: ["streamlined", "tinted windows", "large black wheels", "silver accents"],
        image: "media/Cars/YellowSportsCar.png",
        descriptionText: "A miniature model car designed in the style of a sleek sports car. The body is painted in vibrant yellow, complementing the streamlined shape and aerodynamic design. The compact model features tinted black windows and large black wheels that enhance its sporty appearance. Silver accents can be seen, including on the door handle and side mirror area, adding to its polished look. This toy car reflects the aesthetics of a high-performance vehicle in a small, collectible form."
    }
];
//Descriptions are AI Gen slop
//https://docsbot.ai/tools/image-description-generator

//Get unique colors and features from the car list
function getUniqueOptions(carList, optionType) {
    const options = new Set();

    carList.forEach(car => {
        if (optionType === 'color') {
            car.color.split(',').forEach(color => options.add(color.trim()));
        } else if (optionType === 'feature') {
            car.features.forEach(feature => options.add(feature));
        }
    });

    return Array.from(options);
}

//Function to populate the propdown menus for sorting
function populateDropdowns() {
    const colorDropdown = document.getElementById('color-filter');
    const featureDropdown = document.getElementById('feature-filter');

    //Add "All" option
    colorDropdown.innerHTML = '<option value="all">All</option>';
    featureDropdown.innerHTML = '<option value="all">All</option>';

    //Add color options
    const colors = getUniqueOptions(carList, 'color');
    colors.forEach(color => {
        colorDropdown.innerHTML += `<option value="${color}">${color}</option>`;
    });

    //Add feature options
    const features = getUniqueOptions(carList, 'feature');
    features.forEach(feature => {
        featureDropdown.innerHTML += `<option value="${feature}">${feature}</option>`;
    });
}


//Fiter the cars by the selected dropdown filtering options
function filterCars() {
    const selectedColor = document.getElementById('color-filter').value;
    const selectedFeature = document.getElementById('feature-filter').value;

    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ''; //Clear existing cars

    const filteredCars = carList.filter(car => {
        const matchesColor = selectedColor === 'all' || car.color.includes(selectedColor);
        const matchesFeature = selectedFeature === 'all' || car.features.includes(selectedFeature);
        return matchesColor && matchesFeature;
    });

    //Display filtered cars
    filteredCars.forEach(car => {
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

//Function to display the Car of the Week
function displayCarOfTheWeek() {
    const randomCar = carList[Math.floor(Math.random() * carList.length)];

    //Update the car of the week section with the selected car's details
    const carImage = document.getElementById("car-image");
    const carTitle = document.getElementById("car-title");
    const carDescription = document.getElementById("car-description");

    //Set the car image, alt text, and description
    carImage.src = randomCar.image;
    carImage.alt = randomCar.name;
    carTitle.textContent = randomCar.name;
    carDescription.innerHTML = `
        <strong>Color:</strong> ${randomCar.color} <br>
        <strong>Wheels:</strong> ${randomCar.wheels} <br>
        <strong>Features:</strong> ${randomCar.features.join(", ")} <br>
        <strong>Description:</strong> ${randomCar.descriptionText || 'No description available'}
    `;

    return randomCar;
}

//Function to display the gallery
function displayCars(carOfTheWeek) {
    const gallery = document.querySelector(".gallery");

    //Filter out the COTW
    const filteredCars = carList.filter(car => car.name !== carOfTheWeek.name);

    filteredCars.forEach(car => {
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


//When the DOM content is fully loaded, run the functions
document.addEventListener("DOMContentLoaded", () => {
    populateDropdowns(); //Populate dropdowns with options
    const carOfTheWeek = displayCarOfTheWeek();
    displayCars(carOfTheWeek);

    //Add event listener to the submit button
    document.getElementById('filter-submit').addEventListener('click', filterCars);
});
// toggle between different colors 
function changeColor()
{
    let sbRight = document.querySelector(".sidebar-right");
    let sbLeft = document.querySelector('.sidebar-left')
    let carWeek = document.querySelector(".car-of-the-week")

    let bodyBgColor = window.getComputedStyle(document.body).backgroundColor;


    if (document.body.style.backgroundColor == 'rgb(89, 89, 89)') 
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

            sbRight.style.backgroundColor = "white";
            sbRight.style.color = "black";
        

            sbLeft.style.backgroundColor = "white";
            sbLeft.style.color = "black";

            carWeek.style.backgroundColor="white";
            carWeek.style.color="black";
        
    }

    else
    {
        document.body.style.backgroundColor = "#595959";
        document.body.style.color = "white";

        sbRight.style.backgroundColor = "#494848";
        sbRight.style.color = "white";
        
        
        sbLeft.style.backgroundColor = "#494848";
        sbLeft.style.color = "white";

        carWeek.style.backgroundColor="#595959";
        carWeek.style.color = "white";

    }

    

    // to do:
    // change color of sidebar as well
    // give the theme button an icon
    // change color of text in the car of the week
}