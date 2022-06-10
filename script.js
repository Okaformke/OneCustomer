// for my drop down buttons
var dropdownContent = document.getElementsByClassName("dropdown-container");
var dropdown = document.getElementsByClassName("btn");
var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("btn");
//     var dropdownContent = document.getElementsByClassName("dropdown-container");
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "block";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }
// drop down button
var dropdown = document.getElementsByClassName("month");
var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("month");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

// for my two cards showing account details
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-container");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

  // for my hide balance

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// for my e-signature
var wrapper = document.getElementById("signature-pad"),
    canvas = wrapper.querySelector("canvas"),
    signaturePad;

var signaturePad = new SignaturePad(canvas);
signaturePad.minWidth = 1; 
signaturePad.maxWidth = 5; 
signaturePad.penColor = "#000000";
signaturePad.backgroundColor = "#FFFFFF";

// to resize the window of the browser for my e-signature
function resizeCanvas() {
  var oldContent = signaturePad.toData();
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
  signaturePad.clear();
  signaturePad.fromData(oldContent);
}

// We assign this function to the event of the browser window and also call the method once with the first call as once the browser size changes, it miight deplete or compress the signature so the below is to give it a function so that the original size can be retained as in my own system wen i imported it to my work:
window.onresize = resizeCanvas;
resizeCanvas();

function submitForm() {
  //Unterschrift in verstecktes Feld übernehmen
  document.getElementById('signature').value = signaturePad.toDataURL();
}




// for my drop down buttons
function show_hide() {  
  var click = document.getElementById("dropdown-container");  
  if(click.style.display ==="none") {  
     click.style.display ="block";  
  } else {  
     click.style.display ="none";  
  }  
}
function licks() {  
  var click = document.getElementById("trouser");  
  if(click.style.display ==="none") {  
     click.style.display ="block";  
  } else {  
     click.style.display ="none";  
  }  
}
function lips() {  
  var click = document.getElementById("nikas");  
  if(click.style.display ==="none") {  
     click.style.display ="block";  
  } else {  
     click.style.display ="none";  
  }  
}
function ant() {  
  var click = document.getElementById("table");  
  if(click.style.display ==="none") {  
     click.style.display ="block";  
  } else {  
     click.style.display ="none";  
  }  
}




// for my sucessful buttons in forms
const form = document.getElementById('form-id');

form.addEventListener('submit', event => {
  event.preventDefault();
  alert('submitting');
});

