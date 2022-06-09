var next_click=document.querySelectorAll(".next_btn");
var prev_click=document.querySelectorAll(".prev_btn");
var sbmt_click=document.querySelectorAll(".sbmt_btn");
var main_page=document.querySelectorAll(".main");
var p_bar =document.querySelectorAll(".progres_bar li");
var written_name=document.querySelector(".written_name");
var shown_name=document.querySelector(".shown_name");
var shown_contact=document.querySelector(".shown_contact");
let navigation = document.querySelectorAll(".button")[0];

let formnumber=0;
let formLength = main_page.length-1




if(formnumber==0){
    navigation.children[0].style.display="none"
    navigation.children[2].style.display="none"
}

next_click.forEach(function(btn){
btn.addEventListener('click',function(){
 

    if(formnumber<formLength){
        formnumber++;
        if(formnumber>0){
            navigation.children[0].style.display="inline-block"
            
        }
    }

    if(formnumber==formLength){
        navigation.children[1].style.display="none"
        loadSummary()
        
        navigation.children[2].style.display="inline-block"
        
    }
    update_form();
    progress_forward();
});
});

prev_click.forEach(function(btn){
btn.addEventListener('click',function(){

    if(formnumber>0){
        formnumber--
        navigation.children[0].style.display="inline-block"
        navigation.children[1].style.display="inline-block"
        navigation.children[2].style.display="none"
        
    }


    if(formnumber==0){
        navigation.children[0].style.display="none"
    }


    update_form();
    progress_backward();
});
});



    
// 

sbmt_click.forEach(function(btn){
btn.addEventListener('click',function(){

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
    console.log("adding class to element", formnumber)
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


 