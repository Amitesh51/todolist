
var btn=document.querySelector(".btn");
var text=document.querySelector("input");
text.addEventListener('keyup',function(event){
    if(event.keyCode==13 && text.value!=""){
        var node = document.createElement("div");
  var textnode = document.createTextNode(text.value);
  node.appendChild(textnode);
  document.getElementById("main").appendChild(node);  
        text.value="";
    }
})

btn.addEventListener('click',function(){
    if(text.value!=""){
  var node = document.createElement("div");
  var textnode = document.createTextNode(text.value);
  node.appendChild(textnode);
  document.getElementById("main").appendChild(node); 
    text.value="";
    }
});
 

var act = document.querySelectorAll("#main div");

act.forEachl