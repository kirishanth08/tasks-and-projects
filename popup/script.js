var popoverlay = document.querySelector(".popoverlay")
var popupbox = document.querySelector(".popupbox")
var but = document.getElementById("addpop")

but.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelbut = document.getElementById("cancelbook")
cancelbut.addEventListener("click",function(event){
    event.preventDefault()
})
 var addbut = document.getElementById("addbook")
 addbut.addEventListener("click",function(event){
    event.preventDefault()
 })


 // to select main,addbook,booktitle,bookauthor,bookdescription


 var container=document.querySelector(".main")
 var addbook=document.getElementById("addbook")
 var booktitle=document.getElementById("booktitle")
 var bookauthor=document.getElementById("bookauthor")
 var bookdescription=document.getElementById("deascription")

 addbook.addEventListener("click",function(event){
   event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=` <h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="del(event)">delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"

 })

 function del(event){
    event.target.parentElement.remove()
 }