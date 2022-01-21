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
   "string functions":
   "<p># Strings in python&nbsp;</p> <p>st = &quot;Harsha&quot;</p> <p>st.find(&quot;a&quot;) # finds first occurance of char and returns index</p> <p>st.rfind(&quot;a&quot;) # finds last occurance of char and returns index</p> <p>st.upper() # converts to upper case , we can also use lower( )</p> <p>st.replace(&quot;ars&quot;,&quot;qwe&quot;) # replace all ocurrances of ars in string to qwe.</p>",
   "file handling" : "<p>with open(&quot;file.txt&quot;) as file:</p> <p>&nbsp; &nbsp; # we can also use below code instead of reading &nbsp;lines &nbsp;</p> <p>&nbsp; &nbsp; # data = file.read()</p> <p>&nbsp; &nbsp; # &nbsp; &nbsp; print(data)</p> <p>&nbsp; &nbsp; data2 = file.readlines()</p> <p>&nbsp; &nbsp; for line in data2:</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; word = line.split()</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; print (word)</p> <p>with open(&quot;file2.txt&quot;, &quot;w&quot;) as f:&nbsp;</p> <p>&nbsp; &nbsp; f.write(&quot;Hello World &quot;)&nbsp;</p>"
   ,
   "oop":"<p>class Person:</p> <p>&nbsp; &nbsp; def __init__(self,firstName,lastName): # constructor</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.first = firstName</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.last = lastName</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.name = firstName+ lastName </p> <p>&nbsp; &nbsp; def email(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;{}{}@gmail.com &quot;.format(self.first,self.last.lower())</p> <p>&nbsp; &nbsp; def __del__(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; print(&quot;I am destructor&quot;)</p> <p>&nbsp; &nbsp;&nbsp;</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p> <p>john = Person(&quot;John&quot;,&quot;Smith&quot;)</p> <p>print(john.name)</p> <p>print(john.email())</p>" ,
   "class":"<p>class Person:</p> <p>&nbsp; &nbsp; def __init__(self,firstName,lastName): # constructor</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.first = firstName</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.last = lastName</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.name = firstName+ lastName </p><p>&nbsp; &nbsp; &nbsp; &nbsp;  # here if we change first or second -&gt; name doesnot change </p> <p>&nbsp; &nbsp; def email(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;{}{}@gmail.com &quot;.format(self.first,self.last.lower())</p> <p>&nbsp; &nbsp; def __del__(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; print(&quot;I am destructor&quot;)</p> <p>&nbsp; &nbsp;&nbsp;</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p> <p>john = Person(&quot;John&quot;,&quot;Smith&quot;)</p> <p>print(john.name)</p> <p>print(john.email())</p>"
  ,
  "inheritance":"<p>class Person:</p> <p>&nbsp; &nbsp; def __init__(self,firstName,lastName): # constructor</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.first = firstName</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.last = lastName</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.name = firstName+ lastName</p><p>&nbsp; &nbsp; &nbsp; &nbsp;  # here if we change first or second -&gt; name doesnot change</p> <p>&nbsp; &nbsp; def email(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;{}{}@gmail.com &quot;.format(self.first,self.last.lower())</p> <p>&nbsp; &nbsp; def __del__(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; print(&quot;I am destructor&quot;)</p> <p>&nbsp; &nbsp;&nbsp;</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p> <p>class Teacher(Person):</p> <p>&nbsp; &nbsp; def __init__(self,firstName,secondName,teaches):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; #Person.__init__(self,firstName,secondName) -&gt; used when inherited from multiple classes</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; super().__init__(firstName,secondName)</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.teaches = teaches</p> <p>&nbsp; &nbsp; def summary(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;{}{} teaches for {}&quot;.format(self.first,self.last,self.teaches)</p> <p><br></p> <p>teacher = Teacher(&quot;John&quot;,&quot;Smith&quot;,&quot;engineering Students&quot;)</p> <p>print(teacher.summary())</p>"
  ,
  "magic methods":"<p>class Student:</p> <p>&nbsp; &nbsp; def __init__(self,name,math,phy):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.name = name</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.maths = math</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.physics = phy</p> <p>&nbsp; &nbsp; def __repr__(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; # we can also use __str__</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;{}&apos;s marks in maths is {}, physics is {}&quot;.format(self.name,self.maths,self.physics)</p> <p>&nbsp; &nbsp; def __add__(self,other):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return Student(&quot;total student&quot;,self.maths+other.maths,self.physics+other.physics)</p> <p>stu1 = Student(&quot;bieber&quot;,50,90)</p> <p>stu2 = Student(&quot;bruno&quot;,10,0)</p> <p>total = stu1+stu2</p> <p>print(total)</p>" 
  ,"special methods":"<p>class Student:</p> <p>&nbsp; &nbsp; def __init__(self,name,math,phy):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.name = name</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.maths = math</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; self.physics = phy</p> <p>&nbsp; &nbsp; def __repr__(self):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; # we can also use __str__</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return &quot;{}&apos;s marks in maths is {}, physics is {}&quot;.format(self.name,self.maths,self.physics)</p> <p>&nbsp; &nbsp; def __add__(self,other):</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; return Student(&quot;total student&quot;,self.maths+other.maths,self.physics+other.physics)</p> <p>stu1 = Student(&quot;bieber&quot;,50,90)</p> <p>stu2 = Student(&quot;bruno&quot;,10,0)</p> <p>total = stu1+stu2</p> <p>print(total)</p>" 

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
document.body.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
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
  if (event.keyCode == 27) {
    inpt.value="";
  answer.innerHTML=" ";
  }
  
});
function pointers(){
  answer.innerHTML = data["advanced data types"] +'<button class="btn btn-warning" onclick="copying()">Copy Code </button>';
}
function string(){
  answer.innerHTML = data["string functions"]+'<button class="btn btn-warning" onclick="copying()">Copy Code </button>'; 
}

