let body = document.querySelector(`body`);
let main = document.getElementsByTagName(`main`)[0];
let jsTriggers = document.getElementById(`js-triggers`);
let menu = document.getElementsByTagName(`ul`)[0];
let showMenu = document.getElementById(`show-menu`);
let showModal = document.getElementById(`show-modal`);
let modalPanel = document.getElementById(`modal-panel`);


showMenu.addEventListener(`click`, () => {
    const menuCounter = menu.style.zIndex;
    if (menuCounter == 0) {
        console.log(`Menu Opened`);
        menu.style.top = 30 + `px`;
        menu.style.zIndex++;
    }
    if (menu.style.zIndex == 2) {
        console.log(`Menu Closed`);
        menu.style.top = -30 + `px`;
        menu.style.zIndex = 0;
    }
});

showModal.addEventListener(`click`, () => {
    console.log(`Modal Open`);
    body.style.backgroundColor = `rgba(0,0,0,0.5)`;
    jsTriggers.style.backgroundColor = `rgba(0,0,0,0.5)`;
    modalPanel.style.opacity = 1;
    modalPanel.style.top = 25 + `px`;
    modalPanel.style.zIndex = 2;
});

main.addEventListener(`click`, () => {
    if (modalPanel.style.zIndex == 2) {
        console.log(`Modal Closed`);
        body.style.backgroundColor = `rgba(0,0,0,0)`;
        jsTriggers.style.backgroundColor = `rgba(0,0,0,0)`;
        modalPanel.style.opacity = 1;
        modalPanel.style.top = -700 + `px`;
        modalPanel.style.zIndex = 0;
    }
});

document.addEventListener(`keydown`, (e) => {
    if (e.key == `Escape`) {
        if (modalPanel.style.zIndex == 2) {
            console.log(`Modal Closed`);
            body.style.backgroundColor = `rgba(0,0,0,0)`;
            jsTriggers.style.backgroundColor = `rgba(0,0,0,0)`;
            modalPanel.style.opacity = 1;
            modalPanel.style.top = -700 + `px`;
            modalPanel.style.zIndex = 0;
        }
    }
});


jsTriggers.appendChild(menu);

// body.addEventListener(`click`, () => {
//     if (modal.style.opacity =q= 1) {
//         body.style.opacity = 1;
//         modalPanel.style.zIndex = -1;
//     }
// });
