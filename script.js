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

function showSlides(n) {
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

let home1 = document.getElementsByClassName('home1')[0],
    home2 = document.getElementsByClassName('home2')[0],
    display1 = document.getElementsByClassName('display1')[0],
    display2 = document.getElementsByClassName('display2')[0];

home1.addEventListener('click', () => {
    display1.classList.toggle('disable');
});

home2.addEventListener('click', () => {
    display2.classList.toggle('disable');
});

let portfolio = document.getElementsByClassName('portfolio-switch')[0],
    portfolioLink =document.querySelectorAll('.portfolio-switch__item'),
    portfolioList = document.getElementsByClassName('portfolio-list')[0],
    portfolioImg = document.getElementsByClassName('portfolio-img');

portfolio.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('portfolio-switch__item')) {

        for(let item of portfolioImg) {
            item.classList.remove('border-img');
        }

        for(let item of portfolioLink) {
            item.classList.remove('active-tab');
        }

        target.classList.add('active-tab');

        let random = shuffle([1,2,3,4,5,6,7,8,9,10,11,12]);
        for(let i = 0;  i < random.length; i++) {
            portfolioImg[i].src = `./assets/img/portfolio/image${random[i]}.png`
        }
    }
});

portfolioList.addEventListener('click', (event) => {
   let target = event.target;
   if(target.classList.contains('portfolio-img')) {
       for(let item of portfolioImg) {
           item.classList.remove('border-img');
       }
       target.classList.toggle('border-img');
   }

});

function shuffle(a) {
    let j, x;
    for (let i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

let popup = document.getElementsByClassName('popup')[0],
    buttonOk = document.getElementsByClassName('popup__btn')[0],
    subject = document.getElementsByClassName('popup__subject')[0],
    describe = document.getElementsByClassName('popup__describe')[0],
    form = document.getElementsByClassName('quote-form')[0],
    subjectText = document.getElementsByClassName('subject-text')[0],
    textareaText = document.getElementsByClassName('textarea-text')[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(form.checkValidity()) {
        subject.innerHTML = subjectText.value ? `Тема: ${subjectText.value}` : 'Без темы';
        describe.innerHTML = textareaText.value ? `Описание: ${textareaText.value}` : 'Без описания';
        popup.classList.remove('disable');
    }
    form.reset();
});

buttonOk.addEventListener('click', () => {
    popup.classList.add('disable');
});