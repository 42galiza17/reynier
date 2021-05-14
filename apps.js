const sideBar = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('.content')
   
    menu.addEventListener('click', () => { 
    
        // toggle nav
        nav.classList.toggle('nav-active') ; 
        
        // animate links
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `sideBarFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            
        });
        
        
        
        // menu animation
        menu.classList.toggle('toggle');

        

    });
    
    
}

sideBar();  


// animation when scroll

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);





// // when scroll appear text
