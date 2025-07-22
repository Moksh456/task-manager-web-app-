console.log("Hello, World!");
// This is a simple JavaScript file that logs a message to the console.

var task = document.querySelector(".header");

var modal = document.querySelector(".modal");

var closeButton = document.querySelector("#Close");
 

 task.addEventListener("click", function() {
    modal.style.display = "block";
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    