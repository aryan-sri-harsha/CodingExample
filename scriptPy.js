const answer = document.getElementById("answer");
const inpt = document.getElementById("input");
const data = {
  "for loop":
    "n = int(input())" +
    "<br>" +
    "for i in range(0,n):" +
    "<br>" +
    " &nbsp &nbsp print(i)",
    "while loop":
    "n = int(input())"+
    "<br>"+
    "i = 0"+
    "<br>"+
    "while i < n: "+
    "<br />"+
    " &nbsp &nbsp i++"+
    "<br>"+
    " &nbsp &nbsp print(i)",
    "conditionals":
    "n = int(input())" +
    "<br>" +
    "if n%2==0:"+
    "<br>" +
    ' &nbsp  &nbsp print("it is divisible by2")'+
    "<br>" +
    'elif n%3==0:'+
    "<br>" +
    '&nbsp &nbsp print("it is divisible by 3") '+
    "<br>"+
    'else:'+
    "<br>" +
    '&nbsp &nbsp print("it is not divisible by 2 and 3") ',
    "basic data types" :
    "<p>n = 23 # integer</p>"+
    "<p>a = 23.21 # float&nbsp;</p>"+
    "<p>b = &quot;hello world &quot; #string</p>"+
    "<p>c = [n,a,b] # list</p>",
    "advanced data types":
    "<p>n = {&quot;name&quot; : &quot;aryan&quot; , &quot;age&quot; : 18} # dictionary</p>" +
   " <p>a = (1,2,3) # tuples&nbsp;</p> "+
   "<p>b = {1,6,5,4} # set</p>",


};
function showing(e) {
  inpt.value = inpt.value.trim();
  inpt.value = inpt.value.toLowerCase();
  if (inpt.value==""){
    answer.innerHTML ="Please enter a valid input"
  }
  else if (data[inpt.value] == undefined) {
    answer.innerHTML = "No matching found";
  } else {
    answer.innerHTML = data[inpt.value] +
    "<br>"+
    "<br>"+
    '<button class="btn btn-warning" onclick="copying()">Copy Code </button>';
  }
}

  function copying()
{
var r = document.createRange();
r.selectNode(document.getElementById("answer"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
alert("code copied sucessfully");
}
function clearing(){
  inpt.value="";
  answer.innerHTML=" ";
}


