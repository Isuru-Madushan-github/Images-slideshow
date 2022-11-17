const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');

let index=1;

showSlides(index);

function plusSlides(n){
    showSlides(index=index+n);
}

function currentSlide(n){
    showSlides(index=n);
}

function showSlides(n){
    if(n>slides.length){
        index=1;
    }
    if(n<1){
        index=slides.length;
    }
    for(let a=0; a<slides.length; a++){
        slides[a].style.display="none";
        dots[a].className=dots[a].className.replace('active','');
    }
    slides[index-1].style.display="block";
    dots[index-1].className=dots[index-1].className+' active';
}