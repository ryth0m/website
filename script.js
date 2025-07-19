
function getdatafrominput(dataid) {
     document.body.style.background = dataid.value;
     console.log(dataid,dataid.value)
}
function headingcolor(dataid) {
     document.getElementById('heading').style.color = dataid.value;
     console.log(dataid,dataid.value)
}
function bgcolor(dataid) {
    document.querySelectorAll('.cloud').forEach(element => {
        element.style.backgroundColor = dataid.value;
    });
}
function hbgcolor(dataid) {
     document.querySelector('.centre').style.backgroundColor = dataid.value;
}
function q1color(real,fake) {
     let fake1 = document.getElementById(fake);
     let real1 = document.getElementById(real);
     fake1.onclick = function () {
          real1.click();
     }
     real1.oninput = function(){
          fake1.style.backgroundColor = real1.value;
          document.querySelector('.question1').style.color = real1.value;
     }
}
function q2color(real,fake) {
     let fake2 = document.getElementById(fake);
     let real2 = document.getElementById(real);
     fake2.onclick = function () {
          real2.click();
     }
     real2.oninput = function(){
          fake2.style.backgroundColor = real2.value;
          document.querySelector('.question2').style.color = real2.value;
     }
}
function q3color(real,fake) {
     let fake3 = document.getElementById(fake);
     let real3 = document.getElementById(real);
     fake3.onclick = function () {
          real3.click();
     }
     real3.oninput = function(){
          fake3.style.backgroundColor = real3.value;
          document.querySelector('.question3').style.color = real3.value;
     }
}
function q4color(real,fake) {
     let fake4 = document.getElementById(fake);
     let real4 = document.getElementById(real);
     fake4.onclick = function () {
          real4.click();
     }
     real4.oninput = function(){
          fake4.style.backgroundColor = real4.value;
          document.querySelector('.question4').style.color = real4.value;
     }
}