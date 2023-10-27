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
//scrollbar indication 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

if (localStorage.getItem("popupShown") !== "true") {
$(document).ready(function () {
    // Calculate the middle of the page
    var middleOfPage = $(window).height() / 2;

    // Show the popup when scrolling to the middle
    $(window).scroll(function () {
        if ($(window).scrollTop() >= middleOfPage) {
            $("#popup").fadeIn();
        }
    });

    // Close the popup when the close button is clicked
    $("#close-popup").click(function () {
        $("#popup").fadeOut();
    localStorage.setItem("popupShown", "true");

    });
})
};