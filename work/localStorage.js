function combaineTask(event){
    event.preventDefault();
    let task = new Object;
    task.description = document.getElementById('input_task').value;
    task.deadline = document.getElementById('deadline').value;
    task.created = new Date();
    localStorage.setItem(localStorage.length++, JSON.stringify(task));
}
document.querySelector('form').addEventListener('submit', combaineTask);
let table_tasks = document.getElementById('list_tasks');

// localStorage.clear()
for(let i=0; i<localStorage.length; i++){
    let cureentTask = JSON.parse(localStorage.getItem(i));
    console.log(cureentTask);
    table_tasks.innerHTML += `<tr><td>${i+1}</td><td>${cureentTask.description}</td>
<td>${cureentTask.created}</td><td>${cureentTask.deadline}</td></tr>`;
}