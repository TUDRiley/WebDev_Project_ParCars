const Events = [
    {
        name: "Event1",
        image: "media/events/Event1.png",
        descriptionText: "Event1"
    },
    {
        name: "Event2",
        image: "media/events/Event2.png",
        descriptionText: "Event2"
    },
    {
        name: "Event3",
        image: "media/events/Event3.png",
        descriptionText: "Event3"
    },
    {
        name: "Event4",
        image: "media/events/Event4.png",
        descriptionText: "Event4"
    },
    {
        name: "Event5",
        image: "media/events/Event5.png",
        descriptionText: "Event5"
    },
]

//Display Random event 
function displayEventOfTheWeek() {
    const randomEvent = Events[Math.floor(Math.random() * Events.length)];

    //Update the car of the week section with the selected event's details
    //That way we can reuse CSS
    const EventImage = document.getElementById("car-image");
    const EventTitle = document.getElementById("car-title");
    const EventDescription = document.getElementById("car-description");

    //Set the event image, alt text, and description
    EventImage.src = randomEvent.image;
    EventImage.alt = randomEvent.name;
    EventTitle.textContent = randomEvent.name;
    EventDescription.innerHTML = `
        <strong>Description:</strong> ${randomEvent.descriptionText || 'No description available'}
    `;
}


//When the DOM content is fully loaded, run the functions
document.addEventListener("DOMContentLoaded", () => {
    displayEventOfTheWeek()
});