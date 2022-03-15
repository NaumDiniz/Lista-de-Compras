let input = document.getElementById("itemInput");

let btn = document.getElementById("itemBtn");

let ul = document.getElementById("items");

let items = document.getElementsByTagName("li");

let itemsButtons = document.getElementsByClassName("remove");

function criarElemento (){
  let li = document.createElement("li");
  let btnX = document.createElement("button"); 
  
  btnX.innerHTML = "X";
  btnX.className = "remove";
  
  li.appendChild(btnX);     
  
  let text = document.createTextNode(input.value);
  
  li.appendChild(text);
  
  ul.appendChild(li);     
   
  input.value = "";
  
  buttonEvents();
  
}

function deleteItem(){
  this.parentElement.remove(); 
}

function buttonEvents(){
  for(let i = 0; i < itemsButtons.length; i++){
    itemsButtons[i].addEventListener("click", deleteItem)
 }
  
}

btn.addEventListener("click", criarElemento);

buttonEvents();
