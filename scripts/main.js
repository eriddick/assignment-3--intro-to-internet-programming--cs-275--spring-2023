let body = document.querySelector(`body`);
let header = document.getElementsByTagName(`header`)[0];
let main = document.getElementsByTagName(`main`)[0];
let menu = document.getElementsByTagName(`ul`)[0];
let showMenu = document.getElementById(`show-menu`);
let showModal = document.getElementById(`show-modal`);
let modalPanel = document.getElementById(`modal-panel`);

let clickCounter = 0;

showMenu.addEventListener(`click`, () => {
    if (clickCounter == 0 | clickCounter == 1) {
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
});

if (visualViewport.width <= 736 + `px`) {
    menu.style.top = 50 + `px`;
    menu.style.left = visualViewport.width - 100 + `px`;
    showMenu.addEventListener(`click`, () => {
        if (clickCounter == 0 | clickCounter == 1) {
            console.log(`Menu Opened`);
            menu.style.left = visualViewport.width + 800 + `px`;
            menu.style.zIndex++;
            clickCounter++;
        }
        if (clickCounter == 2) {
            console.log(`Menu Closed`);
            menu.style.left = visualViewport.width - 100 + `px`;
            menu.style.zIndex = 0;
            clickCounter = 0;
        }
    });
}

showModal.addEventListener(`click`, () => {
    console.log(`Modal Open`);
    body.style.backgroundColor = `rgba(0,0,0,0.5)`;
    header.style.backgroundColor = `rgba(0,225,225,0.5)`;
    modalPanel.style.top = 25 + `px`;
    modalPanel.style.zIndex = 2;
});

main.addEventListener(`click`, () => {
    if (modalPanel.style.zIndex == 2) {
        console.log(`Modal Closed`);
        body.style.backgroundColor = `rgba(0,0,0,0)`;
        header.style.backgroundColor = `rgba(0,225,225,0)`;
        modalPanel.style.top = -700 + `px`;
        modalPanel.style.zIndex = 0;
    }
});

document.addEventListener(`keydown`, (e) => {
    if (e.key == `Escape`) {
        if (modalPanel.style.zIndex == 2) {
            console.log(`Modal Closed`);
            body.style.backgroundColor = `rgba(0,0,0,0)`;
            header.style.backgroundColor = `rgba(0,225,225,0)`;
            header.backgroundColor = `rgb(0, 225, 225)`;
            modalPanel.style.top = -700 + `px`;
            modalPanel.style.zIndex = 0;
        }
    }
});


header.appendChild(menu);
