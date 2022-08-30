let skillsLink = document.querySelector("#skillsLink");
let myskills = document.querySelector("#mySkills");

skillsLink.addEventListener("click", navigateMySkills,false);

function navigateMySkills(e) {
  myskills.scrollIntoView({
    behavior:"smooth"});
}

let caseStudiesLink = document.querySelector("#csLink");
let caseStudiesSection = document.querySelector("#casestudies");

caseStudiesLink.addEventListener("click",navigatecs,false);
function navigatecs(e){
  caseStudiesSection.scrollIntoView({
    behavior:"smooth"});
}
let contactLink = document.querySelector("#contactLink");
let contactSection = document.querySelector("#contact");

contactLink.addEventListener("click",navigateContactInfo,false);
function navigateContactInfo(e){
  contactSection.scrollIntoView({
    behavior:"smooth"
  });
}



const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]

togglebutton.addEventListener('click',()=> {
  navbarLinks.classList.toggle('active')
})

