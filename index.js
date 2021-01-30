
//Slider

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}


//

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}



const homebtn = document.querySelector(".homeBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const admissionBtn = document.querySelector(".admissionBtn");
const adminBtn = document.querySelector(".adminBtn");
const researchBtn = document.querySelector(".researchBtn");
const libraryBtn = document.querySelector(".libraryBtn");
const CampusBtn = document.querySelector(".CampusBtn");
const sixBtn= document.querySelector(".sixBtn");
const sevenBtn=document.querySelector(".sevenBtn");
const eightBtn=document.querySelector(".eightBtn");
/*const ninetBtn=document.querySelector(".nineBtn");
const eightBtn=document.querySelector(".eightBtn");
*/
const trustBtn=document.querySelector(".trustBtn");
const chairmanBtn=document.querySelector(".chairmanBtn");
const goalBtn=document.querySelector(".goalBtn");
const instituteBtn=document.querySelector(".instituteBtn");
const irtBtn=document.querySelector(".irtBtn");
const professionBtn=document.querySelector(".professionBtn");
const serviceBtn=document.querySelector(".serviceBtn");
const studentBtn=document.querySelector(".studentBtn");
const officeBtn=document.querySelector(".officeBtn");
const regiterBtn=document.querySelector(".regiterBtn");
const libraryBtn_1=document.querySelector(".libraryBtn_1");








const aboutPage = document.querySelector(".about");
const homePage = document.querySelector(".home");
const admissionPage = document.querySelector(".admission");
const adminPage = document.querySelector(".administration");
const researchpage=document.querySelector(".research");
const librarypage=document.querySelector(".library");
const campuspage=document.querySelector(".campus")
const sixpage=document.querySelector(".six")
const sevenpage=document.querySelector(".seven")
const eightpage=document.querySelector(".eight")
const trustpage=document.querySelector(".trust")
const chairmanpage=document.querySelector(".chairman")
const goalpage=document.querySelector(".goal")
const institutepage=document.querySelector(".institute")
const irtpage=document.querySelector(".IRT")
const professionpage=document.querySelector(".profession")
const servicepage=document.querySelector(".service")
const studentpage=document.querySelector(".student")
const officepage=document.querySelector(".office")
const regiterpage=document.querySelector(".registar")
const librarypage_1=document.querySelector(".library_1")





  homebtn.addEventListener("click", function () {
    aboutPage.classList.remove("active")
    homePage.classList.add("active")
    admissionPage.classList.remove("active")
    adminPage.classList.remove("active")
    researchpage.classList.remove("active")
    librarypage.classList.remove("active")
    campuspage.classList.remove("active")
  })
  aboutBtn.addEventListener("click", function () {
    aboutPage.classList.add("active")
    homePage.classList.remove("active")
    admissionPage.classList.remove("active")
    adminPage.classList.remove("active")
    researchpage.classList.remove("active")
    librarypage.classList.remove("active")
    campuspage.classList.research("active")
  })
  admissionBtn.addEventListener("click", function () {
    aboutPage.classList.remove("active")
    homePage.classList.remove("active")
    admissionPage.classList.add("active")
    adminPage.classList.remove("active")
    researchpage.classList.remove("active")
    librarypage.classList.remove("active")
    campuspage.classList.remove("active")
  })
  adminBtn.addEventListener("click", function () {
    aboutPage.classList.remove("active")
    homePage.classList.remove("active")
    admissionPage.classList.remove("active")
    adminPage.classList.add("active")
    researchpage.classList.remove("active")
    librarypage.classList.remove("active")
    campuspage.classList.remove("active")
  })



  researchBtn.addEventListener("click",function(){
    aboutPage.classList.remove("active")
    homePage.classList.remove("active")
    admissionPage.classList.remove("active")
    adminPage.classList.remove("active")
    researchpage.classList.add("active")
    librarypage.classList.remove("active")
    campuspage.classList.remove("active")

  })
  libraryBtn.addEventListener("click",function(){
    aboutPage.classList.remove("active")
    homePage.classList.remove("active")
    admissionPage.classList.remove("active")
    adminPage.classList.remove("active")
    researchpage.classList.remove("active")
    librarypage.classList.add("active")
    campuspage.classList.remove("active")
  })
  CampusBtn.addEventListener("click",function(){
    aboutPage.classList.remove("active")
    homePage.classList.remove("active")
    admissionPage.classList.remove("active")
    adminPage.classList.remove("active")
    researchpage.classList.remove("active")
    librarypage.classList.remove("active")
    campuspage.classList.add("active")
  })

  
  sixBtn.addEventListener("click",function(){
    sixpage.classList.add("active")
    sevenpage.classList.remove("active")
    eightpage.classList.remove("active")
  })
  sevenBtn.addEventListener("click",function(){
    sixpage.classList.remove("active")
    sevenpage.classList.add("active")
    eightpage.classList.remove("active")
  })
  eightBtn.addEventListener("click",function(){
    sixpage.classList.remove("active")
    sevenpage.classList.remove("active")
    eightpage.classList.add("active")
  })

  trustBtn.addEventListener("click",function(){
    trustpage.classList.add("active")
    chairmanpage.classList.remove("active")
    goalpage.classList.remove("active")
  })
  chairmanBtn.addEventListener("click",function(){
    trustpage.classList.remove("active")
    chairmanpage.classList.add("active")
    goalpage.classList.remove("active")
  })
  goalBtn.addEventListener("click",function(){
    trustpage.classList.remove("active")
    chairmanpage.classList.remove("active")
    goalpage.classList.add("active")
  })  
  instituteBtn.addEventListener("click",function(){
    institutepage.classList.add("active")
    irtpage.classList.remove("active")
    
  })
  irtBtn.addEventListener("click",function(){
    irtpage.classList.add("active")
    institutepage.classList.remove("active")
    
  })  
  professionBtn.addEventListener("click",function(){
    professionpage.classList.add("active")
    servicepage.classList.remove("active")
    studentpage.classList.remove("active")
  })
  serviceBtn.addEventListener("click",function(){
    professionpage.classList.remove("active")
    servicepage.classList.add("active")
    studentpage.classList.remove("active")
  })
  studentBtn.addEventListener("click",function(){
    professionpage.classList.remove("active")
    servicepage.classList.remove("active")
    studentpage.classList.add("active")
  })
  officeBtn.addEventListener("click",function(){
      officepage.classList.add("active")
      regiterpage.classList.remove("active")
      librarypage_1.classList.remove("active")
  })
  regiterBtn.addEventListener("click",function(){
    officepage.classList.remove("active")
    regiterpage.classList.add("active")
    librarypage_1.classList.remove("active")
  })
  libraryBtn_1.addEventListener("click",function(){
    officepage.classList.remove("active")
    regiterpage.classList.remove("active")
    librarypage_1.classList.add("active")
  })
  

