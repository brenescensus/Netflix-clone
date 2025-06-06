window.addEventListener('scroll',()=>{
    const navbar=document.querySelector('.navbar');
    if(window.scrollY>100){
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
})


const profileIcon = document.querySelector('.profile-pic'); 
profileIcon.addEventListener('click', () => {
window.location.href = "profile.html";
});

