const form_filled1=document.getElementById("form-filled");
const inputTask = document.getElementById("task");
const task_list = document.getElementById("task-list");

form_filled1.addEventListener('submit',(e)=>{
    e.preventDefault()

    const taskTitle = inputTask.value;
    // console.log(task);
    if(taskTitle==''){
        alert('you are not allowed!!')
    }
    else{
        const listItem = document.createElement('li');
        listItem.innerHTML=taskTitle;
        task_list.append(listItem);
        let span = document.createElement('span');
        span.innerHTML= `&times;`
        listItem.appendChild(span);
        inputTask.value=" ";
        saveData()
    }
   
})

task_list.addEventListener('click',(e)=>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    if(e.target.tagName=='SPAN'){
        let li = e.target.parentElement
        li.remove();
        saveData()
    }
})
function saveData(){
    localStorage.setItem('ListItem',task_list.innerHTML)
}

function showData(){
    task_list.innerHTML=localStorage.getItem('ListItem')
}
showData()