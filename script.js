
const list=document.getElementById('list');
let add=document.getElementById('add');

function addeer(){
add.addEventListener('click',()=>{
let text=document.getElementById('task').value;
document.getElementById('task').textContent='';
const newParagraph = document.createElement("div");
newParagraph.className='work';
newParagraph.textContent=`${text}`;

const button=document.createElement("button");
button.className='close';
button.textContent='remove';
button.addEventListener('click',()=>{
    list.removeChild(newParagraph);
})
newParagraph.appendChild(button);
newParagraph.addEventListener("click",()=>{
    newParagraph.style.textDecoration='line-through';
    newParagraph.style.backgroundColor='rgba(0, 0, 0, 0.505)';
    button.style.textDecoration='none';
})
list.appendChild(newParagraph);
})

}
addeer();

