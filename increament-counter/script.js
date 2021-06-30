const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = 2000;
        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target) {
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
})

