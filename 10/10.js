var formm=document.getElementById("login-form");
formm.addEventListener('submit',function(event)
{
event.preventDefault();
var age = document.getElementById("age").value;
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("number").value;
var pass = document.getElementById("pass").value;
var conpass = document.getElementById("cpass").value;
var matchpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
var phonepass=/^(?=.*\d).{10}$/;
var namepass=/^(?=.*\s)(?=.*[a-z])(?=.*[A-Z]).{1,30}$/;
var emailpass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let flag=0
if(namepass.test(name)==false)
{
alert("NAMES SHOULD ONLY CONTAIN LETTERS MAXIMUM LEN = 30")
flag=1
}
else
{
flag=0
}
if(age<=0)
{
alert("PLEASE ENTER CORRECT AGE")
flag=1
}
else
{
flag=0
}
if(emailpass.test(email)==false)
{
alert("ENTER VALID EMAIl")
flag=1
}
else
{
flag=0
}
if(phonepass.test(phone)==false)
{
alert("PHONE NUMBER SHOULD BE ONLY DIGITS AND 10 DIGIT LONG")
flag=1
}
else
{
flag=0
}
if(matchpass.test(pass)==false)
{
alert("PASSWORD SHOULD BE ATLEAST 1 CAPITAL,1 SMALL,1 DIGIT AND 8 CHAR LONG");
flag=1
}
else
{
flag=0
}
if(conpass!=pass)
{
alert("PLEASE MAKE SURE CONFIRM PASSWORD SAME");
flag=1
}
else
{
flag=0
}
if(flag==0)
{
alert("FORM SUBMITTED")
}
})