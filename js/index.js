const menu = document.getElementById('show__menu');
const moblie = document.querySelector('.moblie__nav__menu');
let isShown = false
menu.addEventListener('click',()=>{
    if (!isShown) 
    {
        moblie.style.transform = 'translateX(-50%) scale(1)'
        isShown = true;
    } 
    else if (isShown)
    {
        moblie.style.transform = 'translateX(-50%) scale(0)'
        isShown = false;
    }
})



const arrow = document.getElementById('down')
arrow.addEventListener('click', () => {
    document.querySelector('#main').scrollIntoView({
        behavior: 'smooth'
      });
})

fecha = new Date()
dat = fecha.getFullYear()
document.getElementById('fechaa').innerHTML = dat;