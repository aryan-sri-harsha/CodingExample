const answer = document.getElementById("answer");
const inpt = document.getElementById("input");
const data = {
  "for loop":
    "<p>#include &lt;stdio.h&gt;&nbsp;</p> <p>int main() {&nbsp;</p> <p>n = 10;</p> <p>&nbsp;for (int i = 1; i &lt; n; ++i) {&nbsp;</p> <p>printf(&quot;%d &quot;, i);&nbsp;</p> <p>}</p> <p>return 0;&nbsp;</p> <p>}</p>",
  "while loop":
    "<p>#include &lt;stdio.h&gt;</p> <p>int main()</p> <p>{</p> <p>&nbsp; &nbsp; int i = 1, n= 5;</p> <p>&nbsp;while (i &lt;= n)</p> <p>&nbsp; &nbsp; {</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; printf(&quot;%d\n&quot;, i);</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; ++i;</p> <p>&nbsp; &nbsp; }</p> <p>return 0;</p> <p>}</p>",
   "conditionals": 
   "<p>#include &lt;stdio.h&gt;</p> <p>int main (){</p> <p>&nbsp; &nbsp; int a = 10;</p> <p>&nbsp; &nbsp; if(a%2==0){</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;printf(&quot;a is divisible by 2&quot;);</p> <p>}</p> <p>&nbsp; &nbsp;else if (a%3==0){</p> <p>&nbsp; &nbsp; &nbsp;print(&quot;a is divisible by 3&quot;);</p> <p>}</p> <p>&nbsp;else{</p> <p>&nbsp; &nbsp; &nbsp;print(&quot;a is not divisible by 2 and 3&quot;);</p> <p>}</p> <p>return 0;</p> <p>}</p>" 
  ,
  "basic data types":
  "<p>#include &lt;stdio.h&gt;</p> <p>int main (){</p> <p>int a = 10;</p> <p>float b = 10.214;</p> <p>char c = &apos;A&apos;;</p> <p>printf(&quot;%d %f %c&quot; , a,b,c); // specifiers&nbsp;</p> <p>return 0;</p> <p>}</p>"
  ,
  "advanced data types":
  "<p>#include &lt;stdio.h&gt;</p> <p>void fnc(int a) {</p> <p>&nbsp; &nbsp; printf(&quot;%d&quot;,a*a);</p> <p>}</p> <p>int main (){</p> <p>int list[10] ={1,2,3,4,5,6,7,8,9,0}; // array</p> <p>int a = 10;</p> <p>int * p = &amp;a; // pointers &nbsp;can also be char and float</p> <p>int **q = &amp;p; // pointer to pointers</p> <p>void &nbsp;(*fnp)(int) = &amp;fnc; // function pointer</p> <p>return 0;</p> <p>}</p>"  ,
  "string functions":
  "<p>#include &lt;stdio.h&gt;</p> <p>#include&lt;string.h&gt;</p> <p>int main(){</p> <p>char a[10] = &quot;Harsha&quot;;</p> <p>char b[10] = &quot;Aryan1&quot;;</p> <p>int n = strlen(a);</p> <p>int comparision = strcmp(a,b); // compare 2 strings and return 0 if they are equal</p> <p>strcpy(a,b) ;// strcpy(destination, source)</p> <p>strcat(a,b); // adds string b to a but a need to be long enough ( a[&gt; length of a +&nbsp; b])</p> <p>}</p>",
  "file handling":
  "<p>#include&lt;stdio.h&gt;</p> <p><br></p> <p>int main(){</p> <p>&nbsp; &nbsp; FILE *fp = fopen(&quot;test.txt&quot;,&quot;r&quot;); // r means to read so your file should exist</p> <p>&nbsp; &nbsp; FILE *fp2 = fopen(&quot;test2.txt&quot;,&quot;w&quot;);// w means to write in the file&nbsp;</p> <p>&nbsp; &nbsp; if (fp == NULL){</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;printf(&quot;no such file exists &quot;);</p> <p>&nbsp; &nbsp; }</p> <p>&nbsp; &nbsp; else{</p> <p>&nbsp; &nbsp; while(!feof(fp)){</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;char c = fgetc(fp) ;</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;if (feof(fp)) break ;</p> <p>&nbsp; &nbsp; &nbsp; &nbsp;printf(&quot;%c&quot;,c);</p> <p>&nbsp; &nbsp; &nbsp; } &nbsp; &nbsp;</p> <p>&nbsp; &nbsp; fclose(fp);&nbsp;</p> <p>&nbsp; &nbsp; char string[] = &quot;good bye&quot;;</p> <p>&nbsp; &nbsp; for (int i = 0; string[i]!=&apos;\0&apos;; i++)</p> <p>&nbsp; &nbsp; &nbsp; &nbsp; fputc(string[i], fp2); // we can use fprintf to write</p> <p>&nbsp; &nbsp; fclose(fp2);</p> <p>&nbsp; &nbsp;}</p> <p>}</p>"
};
function showing(e) {
  inpt.value = inpt.value.trim();
  inpt.value = inpt.value.toLowerCase();
  if (inpt.value == "") {
    answer.innerHTML = "Please enter a valid input";
  } else if (data[inpt.value] == undefined) {
    answer.innerHTML = "No matching found";
  } else {
    answer.innerHTML =
      data[inpt.value] +
      "<br>" +
      "<br>" +
      '<button class="btn btn-warning" onclick="copying()">Copy Code </button>';
  }
}

function copying() {
  var r = document.createRange();
  r.selectNode(document.getElementById("answer"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("code copied sucessfully");
}
function clearing() {
  inpt.value = "";
  answer.innerHTML = " ";
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
