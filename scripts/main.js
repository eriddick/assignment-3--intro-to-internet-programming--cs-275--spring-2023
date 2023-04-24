let body = document.querySelector(`body`);
let header = document.getElementsByTagName(`header`)[0];
let main = document.getElementsByTagName(`main`)[0];
let menu = document.getElementsByTagName(`ul`)[0];
let showMenu = document.getElementById(`show-menu`);
let showModal = document.getElementById(`show-modal`);
let modalPanel = document.getElementById(`modal-panel`);

let clickCounter = 0;

showMenu.addEventListener(`click`, () => {
    menu.style.left = -100 + `px`;
    if (clickCounter == 0| clickCounter == 1) {
        console.log(`Menu Opened`);
        menu.style.top = 50 + `px`;
        menu.style.zIndex++;
        clickCounter++;
    }
    if (clickCounter == 2) {
        console.log(`Menu Closed`);
        menu.style.top = -200 + `px`;
        menu.style.zIndex = 0;
        clickCounter = 0;
    }
    if (clickCounter == 3 | clickCounter == 4) {
        console.log(`Side tray opened`);
        menu.style.left = -250 + `px`;
        menu.style.zIndex++;
        clickCounter++;
    }
    if (clickCounter == 5) {
        console.log(`Side tray closed`);
        menu.style.left = -500 + `px`;
        menu.style.zIndex = 0;
        clickCounter = 3;
    }
});

window.onload = () => {
    if (window.innerWidth <= 736) {
        menu.style.top = 50 + `px`;
        menu.style.left = -500 + `px`;
        clickCounter = 3;
    }
    else {
        clickCounter = 0;
        menu.style.left = -100 + `px`;
    }
};

window.onresize = () => {
    if (window.innerWidth <= 736) {
        menu.style.top = 50 + `px`;
        menu.style.left = -500 + `px`;
        clickCounter = 3;
    }
    else {
        clickCounter = 0;
        menu.style.left = -100 + `px`;
    }
};

showModal.addEventListener(`click`, () => {
    console.log(`Modal Open`);
    body.style.backgroundColor = `rgba(0,0,0,0.5)`;
    header.style.backgroundColor = `rgba(0,0,0,0.5)`;
    modalPanel.style.marginTop = 20 + `px`;
    modalPanel.style.zIndex = 2;
});

main.addEventListener(`click`, () => {
    if (modalPanel.style.zIndex == 2) {
        console.log(`Modal Closed`);
        body.style.backgroundColor = `rgba(0,0,0,0)`;
        header.style.backgroundColor = `rgba(0,0,0,0)`;
        modalPanel.style.marginTop = -700 + `px`;
        modalPanel.style.zIndex = 0;
    }
});

document.addEventListener(`keydown`, (e) => {
    if (e.key == `Escape`) {
        if (modalPanel.style.zIndex == 2) {
            console.log(`Modal Closed`);
            body.style.backgroundColor = `rgba(0,0,0,0)`;
            header.style.backgroundColor = `rgba(0,0,0,0)`;
            modalPanel.style.marginTop = -700 + `px`;
            modalPanel.style.zIndex = 0;
        }
    }
});


header.appendChild(menu);
