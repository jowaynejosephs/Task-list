//Define UI variables

const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners()

//Load all event listeners
function loadEventListeners(){
    form.addEventListener('submit', addTask)
}

//Add task function
function addTask(e){
    if(taskInput.value===''){
        alert('Add a task')
    } else{

    //Create li element
    const li =document.createElement('li')
    //Add class
    li.className="collection-item";
    //Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value))
//Create new link element
const link=document.createElement('a')
//Add class
link.className='delete-item secondary-content';
//Add icon html
link.innerHTML='<i class="fas fa-trash"></i>'
//Append the link to the li
li.appendChild(link)
//Append li to ul
console.log(li)
taskList.appendChild(li)
    }
//Clear input
taskInput.value='';

    e.preventDefault()
}

