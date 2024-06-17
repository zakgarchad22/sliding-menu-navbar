
// Menu button listens for the pointerover event
// On pointerover
//     * menu button stops listening for pointerover
//     * menu container starts listening for pointerout 
//     * set menu items visible
// Menu container listens for pointerout
// On pointerout:
//     * menu container stops listening for pointerout
//     * button resumes listening for pointerover
//     * hide menu items


function showMenu(evt) {
    
    const menuHeading = evt.target;
    menuHeading.removeEventListener("pointerover", showMenu);

    const menu = evt.target.parentElement;
    menu.addEventListener("pointerout", hideMenu);

    const menuItems = menu.querySelector("ul");

    if (menuItems.classList.contains("visible")) {
        return;
    }

    menuItems.classList.add("visible");
}

function hideMenu(evt) {

    if (evt.currentTarget.contains(evt.relatedTarget)) {
        return;
    }

    const menu = evt.currentTarget;

    menu.removeEventListener("pointerout", hideMenu);

    const menuHeading = menu.querySelector("button");
    menuHeading.addEventListener("pointerover", showMenu);

    const menuItems = menu.querySelector("ul");
    if (menuItems.classList.contains("visible")) {
        menuItems.classList.remove("visible");
    }
}

const menus = document.querySelectorAll("div.menu-container");

for(const menu of menus){
    const list = menu.querySelector("ul");
    const height = list.offsetHeight;
    menu.style.setProperty("--list-height", `${height}px`);
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("pointerover", showMenu);
}


