console.log("hey")
let addItem=document.getElementById('addItem')

function finish(){
    return `<li></li>`
}
addItem.addEventListener('click',()=>{
    
    let task=document.getElementById('input').value
    let ul=document.getElementById('listtask')
    let li=document.createElement('li')
    let img =document.createElement("img")
    img.src="img/cancel.svg"
    li.style.width="30vw";
    li.style.height="6vh";
    li.style.border= "2px solid black";
    li.style.backgroundColor= 'rgb(234, 227, 218)';
   
  
    li.append(task,img)
    li.style.display='flex';
    li.style.justifyContent='space-between'
    ul.append(li)
    img.onclick=function(){
        deleteimg(li)}
    li.onclick=function(){
        taskcomplete(li)
    }
   
}) 
function deleteimg(li){
li.remove()

}
function taskcomplete(li){
    li.style.backgroundColor='rgb(93, 86, 82)'
    let img =document.createElement("img")
    img.src='img/right.svg'
    li.prepend(img)

}


