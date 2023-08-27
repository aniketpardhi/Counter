// select element
let showcountervalue = document.querySelector('.spn');
let value2 = document.querySelector('.container');
let value3 = document.querySelector('.spn2');

// count value set to 0
let  count=0;
function firstone(arg){
    if(arg==1){
        count++;
        showcountervalue.style.color="blue"
    }
    else if(arg==2){
        count--;
        showcountervalue.style.color="yellow"
    }
    else if(arg==3){
        count=0;
        showcountervalue.style.color="white";
    }
    showcountervalue.innerHTML=count;

} 