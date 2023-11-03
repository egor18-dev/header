window.addEventListener('load', () => {
    let menu = document.querySelector('.menu');
    let a = document.querySelectorAll('a');
    let [time, value, i] = [200, 0, 0];
    let isOpen = false;

    const animate = () => {
        setTimeout(() => {
            a[i].style.transform = `translateX(${value}%)`

            if (i < a.length - 1 && value == 0) {
                i++;
                animate();
            } else if (i > 0 && value == -100) {
                i--;
                animate();
            }
        }, time);
    }

    menu.addEventListener('click', () => {
        isOpen = !isOpen;

        let menuClass = isOpen ? 'fa fa-close menu' : 'fa fa-bars menu';
        value = !isOpen ? -100 : 0;

        menu.className = menuClass;
        animate();
    });
});

