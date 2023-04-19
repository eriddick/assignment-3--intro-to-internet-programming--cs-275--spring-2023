let main = document.getElementsByTagName(`main`)[0];
let jsTriggers = document.getElementById(`js-triggers`);
let menu = document.getElementsByTagName(`ul`)[0];
let showMenu = document.getElementById(`show-menu`);
let showModal = document.getElementById(`show-modal`);
let modalPanel = document.getElementById(`modal-panel`);


showMenu.addEventListener(`click`, () => {
    let menuCounter = 0;
    if (menuCounter == 0) {
        console.log(`Menu Opened`);
        menu.style.top = 25 + `px`;
        menuCounter = menuCounter++;
    }
    if (menuCounter == 2) {
        console.log(`Menu Closed`);
        menu.style.top = -200 + `px`;
        // menu2.style.top = 200 + `px`;
        menuCounter = 0;
    }
});

showModal.addEventListener(`click`, () => {
    console.log(`Modal Open`);
    main.style.opacity = 0.1;
    modalPanel.style.top = 25 + `px`;
    modalPanel.style.opacity = 1;
});


jsTriggers.appendChild(menu);

// body.addEventListener(`click`, () => {
//     if (modal.style.opacity == 1) {
//         body.style.opacity = 1;
//         modal.style.zIndex = -1;
//     }
// });
