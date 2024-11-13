// Toggle between light and dark modes
function changeColor() {
    let sbRight = document.querySelector(".sidebar-right");
    let sbLeft = document.querySelector('.sidebar-left');
    let carWeek = document.querySelector(".car-of-the-week");
    let sbNote = document.querySelector(".sidebar-note");
    let mobileSidebar = document.querySelector("#mobile-sidebar");

    // Check if the current background color is dark 
    if (document.body.style.backgroundColor === 'rgb(30, 30, 30)') 
    {
        // Light Mode
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        sbRight.style.backgroundColor = "#f4f4f4";
        sbRight.style.color = "black";

        sbLeft.style.backgroundColor = "#f4f4f4";
        sbLeft.style.color = "black";

        if (carWeek) {
            carWeek.style.backgroundColor = "#f9f9f9";
            carWeek.style.color = "black";
        }

        sbNote.style.color = "#555";

        mobileSidebar.style.backgroundColor = "#f4f4f4";
        mobileSidebar.style.color = "black";
    } else 
    {
        // Dark Mode
        document.body.style.backgroundColor = "#1e1e1e";
        document.body.style.color = "#D3D3D3";

        sbRight.style.backgroundColor = "#252526";
        sbRight.style.color = "#D3D3D3";

        sbLeft.style.backgroundColor = "#252526";
        sbLeft.style.color = "#D3D3D3";

        if (carWeek)
        {
            carWeek.style.backgroundColor = "#1e1e1e";
            carWeek.style.color = "#D3D3D3";
        }

        sbNote.style.color = "#D3D3D3";

        mobileSidebar.style.backgroundColor = "#252526";
        mobileSidebar.style.color = "#D3D3D3";
    }
}
