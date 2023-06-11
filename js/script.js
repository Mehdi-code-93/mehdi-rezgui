let body = document.getElementsByTagName('body');
let nav = document.getElementsByTagName('nav');
// let header = document.getElementsByTagName('header');
let form = document.getElementsByTagName('form');
let btnTheme = document.getElementsByClassName('btnTheme');
let iconTheme = document.getElementsByClassName('iconTheme');
let title = document.getElementsByClassName('title');
let li = document.getElementsByClassName('li');
let liC = document.getElementById('liC');
let reseau = document.getElementsByClassName('reseau');
let fleche = document.getElementsByClassName('fleche');
let section1 = document.getElementsByClassName('section1');
let section2 = document.getElementsByClassName('section2');
let section3 = document.getElementsByClassName('section3');
let section4 = document.getElementsByClassName('section4');
let section5 = document.getElementsByClassName('section5');
let boxProjet = document.getElementsByClassName('boxProjet');
let imgProjet = document.getElementsByClassName('imgProjet');
let textBlue = document.getElementsByClassName('textBlue');
let navbarScroll = document.getElementsByClassName('navbar-scroll');
let input = document.getElementsByClassName('input');
let competence = document.getElementsByClassName('competence');
let secs = document.getElementsByClassName('secs');
let blokAbout = document.getElementsByClassName('blokAbout');
let blockHQ = document.getElementsByClassName('block-hq');
let burger = document.getElementsByClassName('burger');
let menuBurger = document.getElementsByClassName('menu-burger');
let headerBurger = document.getElementsByClassName('header-burger');
let barreBurger = document.getElementsByClassName('barre-burger');

let count = 0;
let nbBurger = 0;









burger[0].onclick = function funcBurger() {
    if (nbBurger == 0) {
        burger[0].style.justifyContent = 'center';
        barreBurger[0].style.transform = 'rotate(45deg)';
        barreBurger[1].style.display = 'none';
        barreBurger[2].style.transform = 'rotate(-45deg)';
        headerBurger[0].style.height = '100vh';
        menuBurger[0].style.display = 'flex';
        menuBurger[0].style.justifyContent = 'center';
        menuBurger[0].style.alignItems = 'center';
        menuBurger[0].style.height = '90%';
        nbBurger = 1;
    }
    else{
        burger[0].style.justifyContent = 'space-between';
        barreBurger[0].style.transform = 'rotate(180deg)';
        barreBurger[1].style.display = 'block';
        barreBurger[2].style.transform = 'rotate(-180deg)';
        headerBurger[0].style.height = '50px';
        menuBurger[0].style.display = 'none';
        nbBurger = 0;
    }
}








for (let i = 0; i < btnTheme.length; i++) {

btnTheme[i].onclick = function start() {
    
    if (count == 0) {

        for (let i = 0; i < barreBurger.length; i++) {
            barreBurger[i].style.backgroundColor = 'white';
        }
        reseau[0].src = './asset/linkedin2.png';
        reseau[1].src = './asset/github2.png';
        reseau[2].src = './asset/twitter2.png';
        fleche[0].src = './asset/fleche2.png';
        for (let i = 0; i < iconTheme.length; i++) {
            iconTheme[i].style.marginLeft = "55%";
            iconTheme[i].style.backgroundImage = "url(./asset/sun1.png)";
        }
        body[0].style.transition = '0.5s';
        body[0].style.backgroundColor = '#181818';
        body[0].style.color = '#fff';
        title[0].style.color = '#fff';
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'white';
        }
        section1[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./asset/paris5c.jpg)';
        section2[0].style.transition = '0.5s';
        section2[0].style.color = 'black';
        for (let i = 0; i < boxProjet.length; i++) {
            boxProjet[i].style.backgroundColor = '#181818';
            boxProjet[i].style.boxShadow = '0px 0px 10px #575757';
        }
        for (let i = 0; i < input.length; i++) {
            input[i].style.backgroundColor = 'rgb(24 24 24 / 0%)';
            input[i].style.borderBottom = '1px solid white';
            input[i].style.color = 'white';
            input[i].style.transition = '0.5s';
        }
        for (let i = 0; i < competence.length; i++) {
            competence[i].style.backgroundColor = '#181818';
            competence[i].style.boxShadow = '0px 0px 10px #575757';
        }
        for (let i = 0; i < secs.length; i++) {
            secs[i].style.backgroundColor = '#151515';
        }
        blokAbout[0].style.backgroundColor = '#151515';
        blokAbout[0].style.boxShadow = '0px 0px 10px #575757';
        blokAbout[0].style.color = 'white';
        for (let i = 0; i < blockHQ.length; i++) {
            blockHQ[i].style.backgroundColor = '#151515';
            blockHQ[i].style.boxShadow = '0px 0px 10px #575757';
            blockHQ[i].style.color = 'white';
        }
        form[0].style.backgroundColor = '#151515';
        form[0].style.boxShadow = '0px 0px 10px #575757';

        count = 1;

    }
    else{

        for (let i = 0; i < barreBurger.length; i++) {
            barreBurger[i].style.backgroundColor = 'black';
        }
        reseau[0].src = './asset/linkedin.png';
        reseau[1].src = './asset/github.png';
        reseau[2].src = './asset/twitter.png';
        fleche[0].src = './asset/fleche.png';
        body[0].style.backgroundColor = 'white';
        for (let i = 0; i < iconTheme.length; i++) {
            iconTheme[i].style.marginLeft = "5%";
            iconTheme[i].style.backgroundImage = "url(./asset/moon2.png)";
        }
        body[0].style.color = 'black';
        title[0].style.color = 'black';
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'black';
        }
        for (let i = 0; i < boxProjet.length; i++) {
            boxProjet[i].style.backgroundColor = 'white';
        }
        section1[0].style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(./asset/paysage14.jpg)';
        section2[0].style.color = '#fff';
        for (let i = 0; i < input.length; i++) {
            input[i].style.backgroundColor = 'rgb(24 24 24 / 0%)';
            input[i].style.borderBottom = '1px solid black';
            input[i].style.color = 'black';
            input[i].style.transition = '0.5s';
        }
        for (let i = 0; i < competence.length; i++) {
            competence[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
        }
        for (let i = 0; i < secs.length; i++) {
            secs[i].style.backgroundColor = '#f9f9f9';
        }
        blokAbout[0].style.backgroundColor = 'white';
        blokAbout[0].style.boxShadow = '0px 0px 20px rgb(229, 229, 229)';
        blokAbout[0].style.color = 'black';
        for (let i = 0; i < blockHQ.length; i++) {
            blockHQ[i].style.backgroundColor = 'white';
            blockHQ[i].style.boxShadow = '0px 0px 20px rgb(229, 229, 229)';
            blockHQ[i].style.color = 'black';
        }
        form[0].style.backgroundColor = 'white';
        form[0].style.boxShadow = '0px 0px 20px rgb(229, 229, 229)';

        count = 0;
    }
}
}







// window.onscroll = function() { changerCouleurNavbar() };

// function changerCouleurNavbar() {
//   var navbar = document.getElementById("myNavbar");
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     if (count === 0) {
        
//         navbar.classList.add("navbar-scroll");
//     }
//     else{
//         navbar.classList.add("navbar-scroll2");
//     }
//   } else {
//     navbar.classList.remove("navbar-scroll");
//     navbar.classList.remove("navbar-scroll2");
//   }
// }


















const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
       if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
       } 
    })     
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})






const handleIntersect3 = function (entries, observer) {
    entries.forEach(function (entry) {
       if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible-left')
        observer.unobserve(entry.target)
       } 
    })       
}
const observer3 = new IntersectionObserver(handleIntersect3, options)
document.querySelectorAll('.reveal-left').forEach(function (r){
    observer3.observe(r)
})










const handleIntersect2 = function (entries, observer) {
    entries.forEach(function (entry) {
       if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('animeTxt-visible')
        observer.unobserve(entry.target)
       } 
    })
        
}
const observer2 = new IntersectionObserver(handleIntersect2, options)
document.querySelectorAll('[class*="animeTxt-"]').forEach(function (r){
    observer2.observe(r)
})
// console.log(observer);

















var lo = document.getElementById('loading-overlay');
    function loadingOverlay() {
        lo.addEventListener('animationend', () => {
            lo.style.display = "none";
            document.querySelector('body').style.overflowY = "scroll";
            document.querySelector("header ul").style.opacity = "1";

        });
    }
    loadingOverlay();