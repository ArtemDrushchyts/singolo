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


let slides = document.getElementsByClassName('slider__item'),
    prev = document.getElementsByClassName('array-left')[0],
    next = document.getElementsByClassName('array-right')[0],
    slidBg = document.getElementsByClassName('slider')[0],
    slideIndex = 1;
// '#F06C64'
// '#648BF0'
function showSlides(n) {
    console.log(n);
    if(n%2 == 0) {
        slidBg.style.backgroundColor = '#648BF0';
        slidBg.style.borderBottom ='6px solid #4C79EE'
    } else {
        slidBg.style.backgroundColor = '#F06C64';
        slidBg.style.borderBottom ='6px solid #EA676B'
    }

    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = 'block';


}

showSlides(slideIndex);

function plusSlides (n) {
    showSlides(slideIndex +=n)
}

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});