let navbar = document.getElementsByClassName('navbar')[0];
let navbarItems = document.querySelectorAll('.navbar .navbar__item a');

navbar.addEventListener('click', (e) => {
    let target = e.target
    if(target.classList != 'active') {
        navbarItems.forEach(item => {
            item.classList.remove('active');
        })
    }
    target.classList.add('active');
});
