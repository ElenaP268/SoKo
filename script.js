/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");
/*when you click button, it toggles between showing and hiding the content */


function dropDown1() {
  document.getElementById("dropDownId1").classList.toggle("show");
 
}

function dropDown2() {
  document.getElementById("dropDownId2").classList.toggle("show");
}

function dropDown3() {
  document.getElementById("dropDownId3").classList.toggle("show");
}


 
/*when clicking screen outside of menu the menu disappears */
/*
window.onclick = function (event) {
  

  if ((event.target.matches(".dropbutton1")) && collapsed == true){
    document.getElementById("mod2Id").style.marginTop = "120px";
 collapsed = false;
  }
if ((event.target.matches(".dropbutton1")) && collapsed == false){
    document.getElementById("mod2Id").style.marginTop = "0px";
  collapsed = true;
  }
  if (
    !event.target.matches(".dropbutton1") &&
    !event.target.matches(".lessonsMod1 button")
  ) {
    var content = document.getElementsByClassName("lessonsMod1");
    var i;
    for (i = 0; i < content.length; i++) {
      var showDropdown = content[i];
      if (showDropdown.classList.contains("show")) {
        showDropdown.classList.remove("show");
        if (i == content.length - 1) {
          document.getElementById("mod2Id").style.marginTop = "0px";
        }
      }
    }
  }
  */

  if (event.target.matches(".dropbutton2")) {
    document.getElementById("mod3Id").style.marginTop = "120px";
  }

  if (
    !event.target.matches(".dropbutton2") &&
    !event.target.matches(".lessonsMod2 button")
  ) {
    var content = document.getElementsByClassName("lessonsMod2");
    var i;
    for (i = 0; i < content.length; i++) {
      var showDropdown = content[i];
      if (showDropdown.classList.contains("show")) {
        showDropdown.classList.remove("show");
        if (i == content.length - 1) {
          document.getElementById("mod3Id").style.marginTop = "0px";
        }
      }
    }
  }

  if (
    !event.target.matches(".dropbutton3") &&
    !event.target.matches(".lessonsMod3 button")
  ) {
    var content = document.getElementsByClassName("lessonsMod3");
    var i;
    for (i = 0; i < content.length; i++) {
      var showDropdown = content[i];
      if (showDropdown.classList.contains("show")) {
        showDropdown.classList.remove("show");
      }
    }
  }


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function currentPage() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*
// adjusts margin when opened and 3 line button disappears to make it less distracting
function openMenu() {
  document.getElementById("soakMenu").style.width = "250px";
  document.getElementById("menuBar").style.marginLeft = "250px";
  document.getElementById("menuBar").style.color = "white";
  document.getElementById("menuBar").style.margainRight = "200px";
}

// readjusts margin when closed and 3 line button reappears
function closeMenu() {
  document.getElementById("soakMenu").style.width = "0";
  document.getElementById("menuBar").style.marginLeft = "0";
  document.getElementById("menuBar").style.color = "#dd2358";
}
*/
