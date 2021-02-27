 const InputTitle = document.querySelector('#title'),
 inputTasks = document.querySelector('#text'),
 addButton = document.querySelector('button'),
 container = document.querySelector('.tasks__container')
 
addButton.addEventListener('click',()=>{
    let textTitle = InputTitle.value
    let textBody = inputTasks.value
    if(!textBody  || !textTitle){
        return new Error(alert('Заполните поля !'))
        
    }else{
        func(textTitle,textBody)
        InputTitle.value = ''
        inputTasks.value = ''
    }
})

 function func(title,text){

let fragment = document.createDocumentFragment()
let div = document.createElement('div')
div.innerHTML = `
<div class="card__output">

<div class="out__title">${title}</div>
<div class="text__out">${text}</div>
<button class="remove__btn">delete</button>
</div>
`;
div.addEventListener('click',(e)=>{
 if(e.target.classList.contains('remove__btn')){
    deleteBlock(div)
 }
})
 

fragment.appendChild(div)
container.appendChild(fragment)
}
function deleteBlock(div){
div.remove()
}
// SAFE COLLECTION
const saveBtn = document.querySelector('.save__btn')
saveBtn.addEventListener('click',saveInArr)
let arrObj = []
function saveInArr(){
    let [...divs] = container.children
    arrObj = divs.map(item=>{
        return{
            title:item.querySelector('.card__output').querySelector('.out__title').textContent,
            textBody:item.querySelector('.card__output').querySelector('.text__out').textContent,
            id:Math.random()
        }
    })
   
    localStorage.setItem('tasks', JSON.stringify(arrObj));
}


//localStorage

   if (localStorage.getItem('tasks')){
     tasks = JSON.parse(localStorage.getItem('tasks'));
    }
function local(arrOfTasks){
  const  container = document.querySelector('.tasks__container')
  
  
   arrOfTasks.forEach(item=> {
    let div = document.createElement('div')
    div.innerHTML = `<div class="card__output">

    <div class="out__title">${item.title}</div>
    <div class="text__out">${item.textBody}</div>
    <button class="remove__btn">delete</button>
    </div>
    `;
    container.appendChild(div)
    div.addEventListener('click',(e)=>{
        if(e.target.classList.contains('remove__btn')){
           deleteBlock(div)
        }
       })
  })
  
}
if(typeof tasks[0]==='object'){
    local(tasks)
}

