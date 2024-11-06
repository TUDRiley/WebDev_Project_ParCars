// Function to check if Mobile and restyle
function checkMobileStyles() {
    const sidebarLeft = document.getElementById('sidebar-left');
    const sidebarRight = document.getElementById('sidebar-right');
    const contentArea = document.querySelector('.content');

    //If mobile sidebar isn't there make it
    let mobileSidebar = document.getElementById('mobile-sidebar');
    if (!mobileSidebar && window.matchMedia("(max-width: 768px)").matches) {
        mobileSidebar = document.createElement('div');
        mobileSidebar.id = 'mobile-sidebar';
        mobileSidebar.classList.add('sidebar-content');
        document.body.appendChild(mobileSidebar);
        //Edit side bar button
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '×';
        mobileSidebar.appendChild(closeButton);
    }

    //If sidebar overlay isn't there make it
    let sidebarOverlay = document.getElementById('sidebar-overlay');
    if (!sidebarOverlay && window.matchMedia("(max-width: 768px)").matches) {
        sidebarOverlay = document.createElement('div');
        sidebarOverlay.id = 'sidebar-overlay';
        sidebarOverlay.classList.add('sidebar-overlay');
        document.body.appendChild(sidebarOverlay);
    }

    //Page restyling because I like JS more than CSS
    //If Mobile
    if (window.matchMedia("(max-width: 768px)").matches) {
        //Add Sidebars to be children of mobileSidebar
        if (mobileSidebar && !mobileSidebar.contains(sidebarLeft)) {
            mobileSidebar.appendChild(sidebarLeft);
        }
        if (mobileSidebar && !mobileSidebar.contains(sidebarRight)) {
            mobileSidebar.appendChild(sidebarRight);
        }
        contentArea.style.marginLeft = '0';
        contentArea.style.marginRight = '0';
        contentArea.style.padding = '10px';

        //Setup sidebar Toggle button
        const sidebarToggle = document.getElementById('sidebar-toggle') || createSidebarToggle();
        sidebarToggle.style.display = 'block';
        sidebarLeft.style.display = 'none';
        sidebarRight.style.display = 'none';
        sidebarToggle.addEventListener('click', () => {
            sidebarLeft.style.display = 'block';
            sidebarRight.style.display = 'block';
            sidebarOverlay.style.display = 'block';
            mobileSidebar.style.display = 'block';
            sidebarToggle.style.display = 'none';
        });

        //Setup exit when clicking overlay
        sidebarOverlay.addEventListener('click', () => {
            sidebarOverlay.style.display = 'none';
            mobileSidebar.style.display = 'none';
            sidebarLeft.style.display = 'none';
            sidebarRight.style.display = 'none';
            sidebarToggle.style.display = 'block';
        });

        //Setup actual exit button for Sidebar
        const closeSidebar = mobileSidebar.querySelector('.close-button');
        if (closeSidebar) {
            closeSidebar.addEventListener('click', () => {
                sidebarOverlay.style.display = 'none';
                mobileSidebar.style.display = 'none';
                sidebarLeft.style.display = 'none';
                sidebarRight.style.display = 'none';
                sidebarToggle.style.display = 'block';
            });
        }
    } else { //If we ran on a desktop page
        if (sidebarToggle) {
            sidebarToggle.style.display = 'none';
        }
        mobileSidebar.style.display = 'none';
        sidebarLeft.style.display = 'block';
        sidebarRight.style.display = 'block';
        contentArea.style.marginLeft = '250px';
        contentArea.style.marginRight = '250px';
        contentArea.style.padding = '20px';
    }
}

// Function to create the sidebar toggle
function createSidebarToggle() {
    const sidebarToggle = document.createElement('button');
    sidebarToggle.id = 'sidebar-toggle';
    sidebarToggle.classList.add('sidebar-button');
    sidebarToggle.style.display = 'block';
    sidebarToggle.innerHTML = '☰';
    document.body.appendChild(sidebarToggle);
    return sidebarToggle;
}

// Run n resize
checkMobileStyles();
window.addEventListener('resize', checkMobileStyles);