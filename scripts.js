//navbar
function openNav() {
    // document.getElementById("sideNav").style.display = "block";
    document.getElementById("sideNav").style.width = "90%";
    const togglex = document.getElementsByClassName("fa-xmark")[0];
    togglex.style.display = "block";
    const togglebars = document.getElementsByClassName("fa-bars")[0];
    togglebars.style.display = "none";
  }
function closeNav() {
    // document.getElementById("sideNav").style.display = "none";
    document.getElementById("sideNav").style.width = "0px";
    const togglebars = document.getElementsByClassName("fa-xmark")[0];
    togglebars.style.display = "none";
    const togglex = document.getElementsByClassName("fa-bars")[0];
    togglex.style.display = "block";
  }

//typing animation
const typingClass = document.querySelector("#typing");
const words = ['Victor Eneojo Omale', 'A Web Developer'];
let count = 0;
let letterCount = 0;

function type(){
    if(count === words.length){
        count = 0;
        }
        let currentWords = words[count];
        let letters = currentWords.slice(0,++letterCount);
        typingClass.textContent = letters;
        if(letters.length === currentWords.length){
            letterCount = 0;
            count++;
        }
        setTimeout(type, 200);
}
type();


//services sliding
const left1 = document.getElementById("left1");

window.addEventListener("scroll", appearOnScroll1);

function appearOnScroll1(){
  let leftPosition1 = left1.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.5;
  if(windowHeight>leftPosition1){
    left1.classList.remove("left1");
  }else{
    left1.classList.add("left1");
  }
}


const left2 = document.getElementById("left2");

window.addEventListener("scroll", appearOnScroll2);

function appearOnScroll2(){
  let leftPosition2 = left2.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.5;
  if(windowHeight>leftPosition2){
    left2.classList.remove("left2");
  }else{
    left2.classList.add("left2");
  }
}
const left3 = document.getElementById("left3");

window.addEventListener("scroll", appearOnScroll3);

function appearOnScroll3(){
  let leftPosition3 = left3.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.5;
  if(windowHeight>leftPosition3){
    left3.classList.remove("left2");
  }else{
    left3.classList.add("left2");
  }
}

// sliding up animation
const shows = document.querySelectorAll(".show");
window.addEventListener("scroll", showOnScroll);
function showOnScroll(){
  let windowHeight = window.innerHeight;
  shows.forEach ((show) => {
  let showPosition = show.getBoundingClientRect().top;
  if(showPosition<windowHeight){
    show.classList.remove("show");
  }else{
    show.classList.add("show");

  }})
}
//tech stack sliding down
const downs = document.querySelectorAll(".down");
window.addEventListener("scroll", scrollDown);
function scrollDown(){
  let windowHeight = window.innerHeight/1.5;
  downs.forEach ((down) => {
  let downPosition = down.getBoundingClientRect().top;
  if(downPosition<windowHeight){
    down.classList.remove("down");

  }else{
    down.classList.add("down");

  }
})
}