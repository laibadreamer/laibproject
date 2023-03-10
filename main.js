" use strick"

document.addEventListener("click" , documentActions);

function documentActions(e) {
    const targetElement = e.target;
    
    if (targetElement.closest('[data-goto]')) {

        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior:"smooth"
            });
        } 
    }
}