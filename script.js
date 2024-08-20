window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementsByClassName("playlist_ka_main__ka_text");
var sticky = 511; // Adjust this value to set the scroll point

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }


};

var inputElements = document.getElementsByClassName("text_box");

// Loop through each element and add a click event listener
for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener("click", function() {
        // Inside the event listener, "this" refers to the clicked element
        // Change properties when clicked
        this.value = "";
        this.style.backgroundColor = "#2A2A2A";
        this.style.color = "rgb(101,101,101)";
        this.style.fontWeight = "bold";
        this.style.border = "1px solid #2A2A2A"; // Adding border needs to specify the style, width, and color
    });
}


var divElements = document.getElementsByClassName("search_bar");

// Loop through each element and add a click event listener
for (var i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener("click", function() {
        // Inside the event listener, "this" refers to the clicked element
        // Change properties when clicked
        this.style.backgroundColor = "#2A2A2A";
        this.style.color = "rgb(101,101,101)";
        this.style.fontWeight = "bold";
        this.style.border = "1px solid rgb(255,255,255)"; // Adding border needs to specify the style, width, and color
    });
}

document.getElementById("search_button").addEventListener("click", function() {
    var divsToHide = document.getElementsByClassName("search_div_off");
    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
  });


  document.getElementById("search_button").addEventListener("click", function() {
    var divsToShow = document.getElementsByClassName("search_div_on");
    for (var i = 0; i < divsToShow.length; i++) {
      divsToShow[i].style.display = "block";
    }
  });  

  document.getElementById("home_button").addEventListener("click", function() {
    var divsToHide = document.getElementsByClassName("home_button_off");
    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
  });


  document.getElementById("home_button").addEventListener("click", function() {
    var divsToShow = document.getElementsByClassName("home_button_on");
    for (var i = 0; i < divsToShow.length; i++) {
      divsToShow[i].style.display = "block";
    }
  });  
  
  
  document.getElementById("playlist_button").addEventListener("click", function() {
    var divsToHide = document.getElementsByClassName("playlist_button_off");
    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
  });


  document.getElementById("playlist_button").addEventListener("click", function() {
    var divsToShow = document.getElementsByClassName("playlist_button_on");
    for (var i = 0; i < divsToShow.length; i++) {
      divsToShow[i].style.display = "block";
    }
  });  







  