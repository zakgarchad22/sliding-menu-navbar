
console.log(document.querySelector("ul").offsetHeight);

//When the menu is open the pointerout event needs to point to the menu container


function showMenu(evt) {
    const menuHeading = evt.target;
    console.log({ menuHeading: menuHeading });
    menuHeading.removeEventListener("pointerover", showMenu);

    const menu = evt.target.parentElement;//.querySelector("div.menu-container");
    menu.addEventListener("pointerout", hideMenu);

    const menuItems = menu.querySelector("ul");
    if (!menuItems.classList.contains("visible")) {
        menuItems.classList.add("visible");
    }

    // if (!menuHeading.classList.contains("visible")) {
    //     menuHeading.classList.add("visible");
    //     // menuHeading.setAttribute("pointer-events", "none");
    // }
}

function hideMenu(evt) {
    console.log({ target: evt.target, currentTarget: evt.currentTarget, relatedTarget: evt.relatedTarget });

    if (evt.target &&
        (evt.currentTarget.parentElement === evt.relatedTarget ||
            evt.currentTarget === evt.relatedTarget)) {

        const menu = evt.currentTarget;

        console.log(evt);
        console.log({ menu: menu });

        menu.removeEventListener("pointerout", hideMenu);

        const menuHeading = menu.querySelector("button");
        menuHeading.addEventListener("pointerover", showMenu);

        // if (menuHeading.classList.contains("visible")) {
        //     menuHeading.classList.remove("visible");
        //     // menuHeading.setAttribute("pointer-events", "auto");
        // }

        const menuItems = menu.querySelector("ul");
        if (menuItems.classList.contains("visible")) {
            menuItems.classList.remove("visible");
        }
    }
}

// function onPointerOver(evt) {

//     if (!evt.target.classList.contains("visible")) {
//         evt.target.classList.toggle("visible");
//         evt.target.parentElement
//             .querySelector("ul")
//             .classList.toggle("visible");
//     }
//     // const elements = evt.target.querySelectorAll("ul, span");
//     // for (const element of elements) {
//     //   if (!element.classList.contains("visible"))
//     //     element.classList.toggle("visible");
//     // }
// }

// function onPointerOut(evt) {
//     if (evt.target.classList.contains("visible")) {
//         evt.target.classList.toggle("visible");
//         evt.target.parentElement
//             .querySelector("ul")
//             .classList.toggle("visible");
//     }
//     // const elements = evt.target.querySelectorAll("ul, span");
//     // for (const element of elements) {
//     //   if (element.classList.contains("visible"))
//     //     element.classList.toggle("visible");
//     // }
// }

//   const menus = document.querySelectorAll("div.menu-container");
//   for (const menu of menus) {
//     menu.addEventListener("mouseover", onMouseOver);
//     menu.addEventListener("mouseout", onMouseOut);
//   }

// const uls = document.querySelectorAll("ul");
// for (const ul of uls) {
//   ul.addEventListener("mouseover", onMouseOver);
//   ul.addEventListener("mouseout", onMouseOut);
// }

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("pointerover", showMenu);
    // span.addEventListener("mouseout", onPointerOut);
}

// document.addEventListener("pointerout", (e) => console.log({target:e.target,currentTarget:e.currentTarget}));
