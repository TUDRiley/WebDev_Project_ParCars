const Events = [
    {
        name: "Classic Car Concourse",
        image: "../media/events/",
        descriptionText: "A gathering for vintage car lovers, showcasing some of the finest classic cars from the early 20th century through the 1980s. Car owners, restorers, and admirers can enjoy a relaxed day of judging, storytelling, and appreciation of automotive history. Perfect for those interested in the craftsmanship of the golden age of cars",
        information: "Location: Heritage Park, Dublin    Date: Saturday, May 11 2025    Ticket Price: €25 "
    },
    {
        name: "Electric Avenue Expo",
        image: "../media/events/",
        descriptionText: "A forward-looking event dedicated to the latest in electric vehicles (EVs), alternative energy, and sustainable automotive technologies. Attendees can test drive new EV models, explore the latest charging solutions, and hear talks by industry experts on the future of clean energy in cars.",
        information: "Location: Dublin Convention Centre    Date: June 20-22, 2025    Ticket Price: €50 (Full Weekend Pass), €20 (Single Day Pass)"
    },
    {
        name: "Night Riders Car Meet",
        image: "../media/events/",
        descriptionText: "A thrilling nighttime car meet for high-performance, modified, and sports car fans. This event will feature dyno runs, a rev battle, and a light show contest. Expect music, food trucks, and a cool night vibe for car enthusiasts to meet and connect.",
        information: "Location: Phoenix Park, Dublin    Date:  Friday, August 16, 2024    Ticket Price: €15"
    },
    {
        name: "Off-Road Adventure Rally",
        image: "../media/events",
        descriptionText: "An outdoor adventure event for off-road lovers. This rally features a guided course through rugged terrain, mud pits, and hill climbs for all types of 4x4 and off-road vehicles. Instructors will be on-site for beginners, while experienced drivers can take on challenging sections.",
        information: "Location: Wicklow Mountains, Co.Wicklow    Date: Saturday, September 7 2024    Ticket Price: €80 per car (spectators free)"
    },
    {
        name: "Supercar Sunday",
        image: "../media/Cars/BeatlesGarbageTruck.png",
        descriptionText: " A family-friendly supercar show featuring rare and exotic cars from Lamborghinis to Ferraris, McLarens, and more. Attendees can view these high-end cars up close, enjoy photo ops, and even book a ride-along experience in a supercar of their choice!",
        information: "Location: Dublin City Square    Date: Sunday, October 20, 2024    Ticket Price: €30 (General Admission)"
    },
]

//Display Random event 
function displayEventOfTheWeek() {
    const randomEvent = Events[Math.floor(Math.random() * Events.length)];

    //Update the car of the week section with the selected event's details
    //That way we can reuse CSS
    const EventImage = document.getElementById("event-image");
    const EventTitle = document.getElementById("event-title");
    const EventDescription = document.getElementById("event-description");

    //Set the event image, alt text, and description
    EventImage.src = randomEvent.image;
    EventImage.alt = randomEvent.name;
    EventTitle.textContent = randomEvent.name;
    EventDescription.innerHTML = `
        <strong>Description:</strong> ${randomEvent.descriptionText || 'No description available'} <br> <br>
        <strong>Location: </strong> ${randomEvent.information || 'No information available'} 
    `;
}


//When the DOM content is fully loaded, run the functions
document.addEventListener("DOMContentLoaded", () => {
    displayEventOfTheWeek()
});