// typed animation 
var typing=new Typed(".typed",{
    strings:["web developers...","web designer...","software developers..."],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})

// button open about html
function moreopen(){
    window.open("/portfolio/about section/about.html ","_parent")
}



let homes=document.querySelector('.home');
homes.addEventListener('mouseover',function(){
    homes.style.color="orangered";
});
homes.addEventListener('mouseout',function(){
    homes.style.color="white";
});



let about1=document.querySelector('.about1');
about1.addEventListener('mouseover',function(){
    about1.style.color="orangered";
});
about1.addEventListener('mouseout',function(){
    about1.style.color="white";
});


let contact=document.querySelector('.contact');
contact.addEventListener('mouseover',function(){
    contact.style.color="orangered";
});
contact.addEventListener('mouseout',function(){
    contact.style.color="white";
});


let potofolio=document.querySelector('.portofolio');
potofolio.addEventListener('mouseover',function(){
    potofolio.style.color="orangered";
});
potofolio.addEventListener('mouseout',function(){
    potofolio.style.color="white";
});