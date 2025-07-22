console.log("Hello, World!");
// This is a simple JavaScript file that logs a message to the console.

var task = document.querySelector(".header");

var modal = document.querySelector(".modal");

var closeButton = document.querySelector("#Close");
 
var btn = document.querySelector("#add-task");


 task.addEventListener("click", function() {
    modal.style.display = "block";
});

closeButton.addEventListener("click", function(){
    modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function allowDrop(e){
    e.preventDefault();
}
function drag(e){
    e.dataTransfer.setData("task-card", e.target.id);
}
function drop(e){   
    e.preventDefault();
    var data = e.dataTransfer.getData("task-card");
    if(e.target.id === "card-contents"){
        e.target.appendChild(document.getElementById(data));
    }
}
  

