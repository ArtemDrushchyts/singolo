let navbar = document.getElementsByClassName('navbar')[0];
let navbarItems = document.querySelectorAll('.navbar .navbar__item a');

function clearActiveLink(e) {
    navbarItems.forEach(item => {
        item.classList.remove('active');
    })
}

navbar.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList != 'active') {
        clearActiveLink();
    }
    target.classList.add('active');
});

window.onscroll = () => {
    let servicesTop = document.querySelector('#services').offsetTop,
        portfolioTop = document.querySelector('#portfolio').offsetTop,
        aboutTop = document.querySelector('#about').offsetTop,
        contactTop = document.querySelector('#contact').offsetTop,
        header = document.querySelector('.header'),
        fromTop = document.documentElement.scrollTop;

    if(fromTop >= 100) {
        header.style.height = '50px';
    }
    if(fromTop < 49){
        header.style.height = '95px';
    }
    if(fromTop < servicesTop) {
        clearActiveLink();
        document.querySelector('a[href="#home"]').classList.add('active');
    }
    if(fromTop >= servicesTop) {
        clearActiveLink();
        document.querySelector('a[href="#services"]').classList.add('active');
    }
    if(fromTop >= portfolioTop) {
        clearActiveLink();
        document.querySelector('a[href="#portfolio"]').classList.add('active');
    }
    if(fromTop >= aboutTop) {
        clearActiveLink();
        document.querySelector('a[href="#about"]').classList.add('active');
    }
    if(fromTop >= contactTop-45) {
        clearActiveLink();
        document.querySelector('a[href="#contact"]').classList.add('active');
    }

};

let slides = document.querySelectorAll('.slider__item'),
    slidBg = document.getElementsByClassName('slider')[0],
    arrayLeft = document.querySelector('.array-left'),
    arrayRight = document.querySelector('.array-right'),
    currentItem = 0,
    isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + slides.length) % slides.length;
    if(currentItem != 0) {
        slidBg.classList.add('background-slider');
    } else {
        slidBg.classList.remove('background-slider');
    }
}

function hideItem(direction) {
    isEnabled = false;
    slides[currentItem].classList.add(direction);
    slides[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active-slide', direction);
    });
}

function showItem(direction) {
    slides[currentItem].classList.add('next', direction);
    slides[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active-slide');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n-1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n+1);
    showItem('from-right');
}

arrayLeft.addEventListener('click', function () {
    if(isEnabled) {
        previousItem(currentItem);
    }
});
arrayRight.addEventListener('click', function () {
    if(isEnabled) {
        nextItem(currentItem);
    }
});


let home1 = document.getElementsByClassName('home1')[0],
    home2 = document.getElementsByClassName('home2')[0],
    home3 = document.getElementsByClassName('iphone-group-home')[0],
    display1 = document.getElementsByClassName('display1')[0],
    display2 = document.getElementsByClassName('display2')[0],
    display3 = document.getElementsByClassName('iphone-group-display')[0];

home1.addEventListener('click', () => {
    display1.classList.toggle('disable');
});

home2.addEventListener('click', () => {
    display2.classList.toggle('disable');
});

home3.addEventListener('click', () => {
    display3.classList.toggle('disable');
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