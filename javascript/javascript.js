/*const startButton = document.getElementById("delayPlay");

startButton.addEventListener("click", function() {
  window.location.href = "./dif_load_screens/loadscreen.html"; // Replace "newpage.html" with the URL of the new page
});
*/


const delayPlay = document.getElementById('delayPlay');
const textElements = document.querySelectorAll("body *");

delayPlay.addEventListener('click', function() {
    setTimeout(function() {
        textElements.forEach(function(text) {
          text.classList.add("vanish");
        });
      }, 1000); 
      
    setTimeout(function() {
        window.location.href = "../html/prologue.html"; // Replace with the URL of the new page
      }, 2000);  
});