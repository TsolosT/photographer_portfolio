//add on scroll bg on nav
//add on scroll each section active link
//add on scroll header transparent or not 

//Add/Remove Overlay Menu on Max screen width 800px on click 
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
  if(window.pageYOffset > 300)
  {
    btnGoToTop.style.display="block";
  }
  else{
    btnGoToTop.style.display="none";
  }
});

/* end  Back to Top button  */