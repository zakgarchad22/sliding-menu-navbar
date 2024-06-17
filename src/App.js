import { useEffect } from "react";

export function Square() {
    return <button className="square">X</button>;
}


function showMenu(evt) {

    const menuHeading = evt.target;
    menuHeading.removeEventListener("pointerover", showMenu);

    const menu = evt.target.parentElement;
    menu.addEventListener("pointerout", hideMenu);

    const menuItems = menu.querySelector("ul");
    if (menuItems) {


        if (menuItems.classList.contains("visible")) {
            return;
        }

        menuItems.classList.add("visible");
    }
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
    if (menuItems && menuItems.classList.contains("visible")) {
        menuItems.classList.remove("visible");
    }
}

const init = () => {
    const menus = document.querySelectorAll("div.menu-container");

    for (const menu of menus) {
        const list = menu.querySelector("ul");
        const height = list ? list.offsetHeight : 0;// menu.style.getProperty("--navbar-height");
        menu.style.setProperty("--list-height", `${height}px`);
    }

    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.addEventListener("pointerover", showMenu);
    }
    return () => {
        for (const button of buttons) {
            button.removeEventListener("pointerover", showMenu);
        }
    }
}

function Menu({ menu }) {

    useEffect(init);

    return <div className="menu-container">
        <button>{menu.text}</button>
        {menu.items ? <MenuDropdown items={menu.items}></MenuDropdown> : <div className="menu-dropdown"></div>}

    </div>
}

function MenuDropdown({ items }) {
    return <div className="menu-dropdown">
        <ul>
            {items.map((item, index) => (
                <li key={index}><a href={item.href} onClick={() => alert(`${item.text}`)}><em>{item.text}</em></a></li>
            ))}
        </ul>
    </div>
}
export function Navbar({ menuConfig }) {
    return <nav className="container">
        {menuConfig.map((menu, index) => (
            <Menu key={index} menu={menu}></Menu>
        ))}
    </nav>
}