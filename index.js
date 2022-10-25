
// // cybersecurity
// var slider = document.getElementById("myRange");
// var output = document.getElementById("value");

// output.innerHTML = slider.value;

// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

// // Developer
// var slide = document.getElementById("myRanger");
// var outpu = document.getElementById("valuer");

// outpu.innerHTML = slide.value;

// slide.oninput = function() {
//     outpu.innerHTML = this.value;
// }

// // DevOps
// var slider1 = document.getElementById("myRange1");
// var output1 = document.getElementById("value1");

// output1.innerHTML = slider1.value;

// slider1.oninput = function() {
//     output1.innerHTML = this.value;
// }

// // Designer
// var slid = document.getElementById("myRanges");
// var out = document.getElementById("values");

// out.innerHTML = slid.value;

// slid.oninput = function() {
//     out.innerHTML = this.value;
// }


// // Project Manager
// var slider2 = document.getElementById("myRange2");
// var output2 = document.getElementById("value2");

// output2.innerHTML = slider2.value;

// slider2.oninput = function() {
//     output2.innerHTML = this.value;
// }

// // Product Manager
// var slider3 = document.getElementById("myRange3");
// var output3 = document.getElementById("value3");

// output3.innerHTML = slider3.value;

// slider3.oninput = function() {
//     output3.innerHTML = this.value;
// }

// Marketer
// var slider4 = document.getElementById("myRange4");
// var output4 = document.getElementById("value4");

// output4.innerHTML = slider4.value;

// slider4.oninput = function() {
//     output4.innerHTML = this.value;
// }

// // Writer
// var slider5 = document.getElementById("myRange5");
// var output5 = document.getElementById("value5");

// output5.innerHTML = slider5.value;

// slider5.oninput = function() {
//     output5.innerHTML = this.value;
// }

function page() {
    document.location.href = "range.html";
}


let btns = document.querySelector(".btns");
let graduates = document.getElementById("graduates");



btns.addEventListener('click', function(){
    if (graduates.style.display != 'flex')
      {graduates.style.display = 'flex';    
  } 

})