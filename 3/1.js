    alert("**Welcom to My Website**");
function myfunction(){
    let txt;
    let person =prompt("Please enter your name:","type here");
    if(person==null||person==""){
        txt="User cancelled the prompt";
    }else{
        txt="Hello "+person+" !This is Age validation ."
    }
    document.getElementById("demo").innerHTML=txt;
}
myfunction();
function agevalidation(){
    let txt;
    let a=prompt("Enter your Age :","type here");
    if(a>=18){
        txt="You are Eligible to vote";
    }
    else{
        txt="You are not Eligible to vote";
    }
    document.getElementById("age").innerHTML=txt;
}
agevalidation();