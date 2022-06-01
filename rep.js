var next_click=document.querySelectorAll(".next_btn");
var prev_click=document.querySelectorAll(".prev_btn");
var sbmt_click=document.querySelectorAll(".sbmt_btn");
var main_page=document.querySelectorAll(".main");
var p_bar =document.querySelectorAll(".progres_bar li");
var written_name=document.querySelector(".written_name");
var shown_name=document.querySelector(".shown_name");
var shown_contact=document.querySelector(".shown_contact");

let formnumber=0;

var lmmObject = {
    "Yes": { 
    },
    "No": {
    }
}
window.onload = function () {
    var lmmSel = document.getElementById("lmmSel");

    for (var lmm in lmmObject) {
        lmmSel.options[lmmSel.options.length] = new Option(lmm, lmm);
    }

}

var passeye=document.querySelector(".text");
var pass_type=document.querySelector(".text");
var set_pass=document.querySelector(".text");

var confirm_passeye=document.querySelector(".text");
var confirm_pass_type=document.querySelector(".text");
var confirm_set_pass=document.querySelector(".text");

// var tick=document.querySelector(".agree span");
// tick.addEventListener('click',function(){
//     tick.classList.toggle('agree_green');
// });

// var tick_green=document.querySelector(".agree_submit span");
// tick_green.addEventListener('click',function(){
//     tick_green.classList.toggle('agree_submit_green');
// });


passeye.addEventListener('click',function(){

if(pass_type.type=="password"){
pass_type.type="text";
set_pass.classList.remove('fa-eye-slash');
set_pass.classList.add('fa-eye');
}
else{
pass_type.type="password";
set_pass.classList.add('fa-eye-slash');
set_pass.classList.remove('fa-eye');
}
});


confirm_passeye.addEventListener('click',function(){

if(confirm_pass_type.type=="password"){
confirm_pass_type.type="text";
confirm_set_pass.classList.remove('fa-eye-slash');
confirm_set_pass.classList.add('fa-eye');
}
else{
confirm_pass_type.type="password";
confirm_set_pass.classList.add('fa-eye-slash');
confirm_set_pass.classList.remove('fa-eye');
}
});

//
// var powerObject = {
//     "Does not power ": { 
//     },
//     "Does not charge": {
//     },
//     "Short battery life": {
//     }
// }
// window.onload = function () {
//     var powerSel = document.getElementById("powerSel");

//     for (var power in powerObject) {
//         powerSel.options[powerSel.options.length] = new Option(power, power);
//     }

// }

next_click.forEach(function(btn){
btn.addEventListener('click',function(){
if(!validate_form()){
return false;
}
formnumber++;
update_form();
progress_forward();
});
});

prev_click.forEach(function(btn){
btn.addEventListener('click',function(){
formnumber--;
update_form();
progress_backward();
});
});

//

    
// 

sbmt_click.forEach(function(btn){
btn.addEventListener('click',function(){
if(!validate_form()){
return false;
}
formnumber++;
update_form();
shown_name.innerHTML=written_name.value;
shown_contact.innerHTML=written_contact.value;
});
});

function progress_forward(){
p_bar[formnumber].classList.add('active');
}

function progress_backward(){
var f_num = formnumber+1;
p_bar[f_num].classList.remove('active');
}



function update_form(){
main_page.forEach(function(main_pages){
main_pages.classList.remove('active');
});
main_page[formnumber].classList.add('active');
}

function validate_form(){
var validate=true;
var all_inputs=document.querySelectorAll(".main.active input");
all_inputs.forEach(function(inpt){
inpt.classList.remove('warning');
if(inpt.hasAttribute("require")){
if(inpt.value.length=="0"){
validate=false;
inpt.classList.add('warning');
}
}
});
return validate;
}



 