// Toggle between light and dark modes
function changeColor() {
    let sbRight = document.querySelector(".sidebar-right");
    let sbLeft = document.querySelector('.sidebar-left');
    let carWeek = document.querySelector(".car-of-the-week");
    let sbNote = document.querySelectorAll(".sidebar-note");
    let mobileSidebar = document.querySelector("#mobile-sidebar");

    // Check if the current background color is dark 
    if (document.body.style.backgroundColor === 'rgb(30, 30, 30)') {
        // Light Mode
        removeDarkModeParam();
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

        sbNote.forEach(note => {
            note.style.color = "#555";
        });
        if (mobileSidebar) {
            mobileSidebar.style.backgroundColor = "#f4f4f4";
            mobileSidebar.style.color = "black";
        }
    } else {
        // Dark Mode
        addDarkModeParam();
        document.body.style.backgroundColor = "#1e1e1e";
        document.body.style.color = "#D3D3D3";

        sbRight.style.backgroundColor = "#252526";
        sbRight.style.color = "#D3D3D3";

        sbLeft.style.backgroundColor = "#252526";
        sbLeft.style.color = "#D3D3D3";

        if (carWeek) {
            carWeek.style.backgroundColor = "#1e1e1e";
            carWeek.style.color = "#D3D3D3";
        }
        sbNote.forEach(note => {
            note.style.color = "#add7ff";
        });

        if (mobileSidebar) {
            mobileSidebar.style.backgroundColor = "#252526";
            mobileSidebar.style.color = "#D3D3D3";
        }
    }
    updateLinks(); //Update links on click
}

// Add dark param
function addDarkModeParam() {
    let url = new URL(window.location);
    url.searchParams.set("dark", "1");
    window.history.replaceState({}, "", url);
    updateLinks();
}

// Remove dark param
function removeDarkModeParam() {
    let url = new URL(window.location);
    url.searchParams.delete("dark");
    window.history.replaceState({}, "", url);
    updateLinks();
}

// Update all links
function updateLinks() {
    const urlParams = new URLSearchParams(window.location.search);
    const darkmode = urlParams.get("dark");

    document.querySelectorAll("a.dynamic-link").forEach(link => {
        let linkUrl = new URL(link.href, window.location.origin);
        if (darkmode === "1") {
            linkUrl.searchParams.set("dark", "1");
            // Add inline CSS styling for darkmode visited links to appear as light gray vs dark purple
            const style = document.createElement("style");
            style.innerHTML = `
                a.dynamic-link:visited {
                    color: #42675a;
                }
                a.dynamic-link:link {
                    color: #27e8a7;
                }
            `;
            document.head.appendChild(style);
        } else {
            linkUrl.searchParams.delete("dark");
            // Remove inline styling for visited links if toggling off darkmode
            const existingStyles = document.querySelectorAll('style');
            existingStyles.forEach(style => {
                if (style.innerHTML.includes("a.dynamic-link:visited") || style.innerHTML.includes("a.dynamic-link:link")) {
                    style.remove();
                }
            });
        }
        link.href = linkUrl.toString();
    });
}

// Check the URL on page load
window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("dark") === "1") {
        changeColor(); // Enable dark mode if dark=1
    }
    updateLinks();
});
