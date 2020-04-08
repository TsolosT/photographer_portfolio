//Add/Remove Overlay Menu on Max screen width 800px on click 
  const navContainer=document.querySelector('.navbar');
  const menuNav=document.querySelector(".nav_menu");
  const menuHam=document.querySelector("#menuHam");
  const menuNavBar=document.querySelector(".navbar__nav");
  const navlinks=document.querySelectorAll(".nav__link");

  menuHam.addEventListener("click",(e)=>{
    e.preventDefault();
    menuNav.classList.toggle("open");
    menuHam.classList.toggle("open");
    menuNavBar.classList.toggle("open");
    navlinks.forEach(link=>{
      link.addEventListener('click',()=>{
        menuNav.classList.remove("open");
        menuHam.classList.remove("open");
        menuNavBar.classList.remove("open");
      });
   });
  });
// End of show/hide overlay menu

//Show/hide Go to top btn if use scroll down 100px
const btnGoToTop=document.querySelector("#btnGoTop");

window.addEventListener('scroll',()=>{
  if(window.pageYOffset > 80){
    navContainer.classList.add('navbar--moving');
  }
  else{
    navContainer.classList.remove('navbar--moving');
  }
  if(window.pageYOffset > 250)
  {
    btnGoToTop.style.display="block";
  }
  else{
    btnGoToTop.style.display="none";
     removeActiveLink();
  }

});

/* end  Back to Top button  */
//remove active link from nav when click logo
document.querySelector('.logo').addEventListener('click',()=>{
   removeActiveLink();
});

//Add Active nav link based on Section
const mainSections=document.querySelectorAll('section[data-map="main"]');
const options={
    threshold:0.5
};

let observer=new IntersectionObserver(navCheck,options);

function navCheck(entries){
    entries.forEach(entry=>{
        const className=entry.target.className;
        if(entry.isIntersecting)
        { 
            removeActiveLink();
            document.querySelector(`a[data-class="${className}"]`).classList.add('nav__link--active');
        }
    });
}

mainSections.forEach(section=>{
    observer.observe(section);
});

function removeActiveLink()
{
  if(document.querySelector('a.nav__link--active')){
    document.querySelector('a.nav__link--active').classList.remove('nav__link--active');
  }
}