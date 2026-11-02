function combaineTask(event){
    //event.preventDefault();
    let task = new Object;
    task.description = document.getElementById('input_task').value;
    task.deadline = document.getElementById('deadline').value;
    task.created = new Date();
    task.status = 0;
    localStorage.setItem(localStorage.length++, JSON.stringify(task));
}
document.querySelector('form').addEventListener('submit', combaineTask);
let table_tasks = document.getElementById('list_tasks');

// localStorage.clear()
for(let i=0; i<localStorage.length; i++){
    console.log(JSON.parse(localStorage.getItem(i)));
        if(typeof(cureentTask)!== 'undefined'){
            let cureentTask = JSON.parse(localStorage.getItem(i));
            
            let status_current = cureentTask.status;
            let status_task_id = i;
            let status = `<form class='form_status'>
            <input type='hidden' value=${status_task_id} name="task_id"></input>
            <input type='hidden' value=${status_current} name="status"></input>
            <input class=${status_current==0?'none_completed':'completed'}
            type='submit' value=${status_current==0?'выполнить':'выполнено'}></input>
            </form>`;
            console.log(status);
            table_tasks.innerHTML += `<tr><td>${i+1}</td><td>${cureentTask.description}</td>
        <td>${cureentTask.created}</td><td>${cureentTask.deadline}</td><td>${status}</td>
        <td><button onclick='deletTask(${i})'>удалить</button></td>
        </tr>`;
    }
}
document.addEventListener('submit', (event) => {
  // Проверяем, что событие произошло именно на элементе <form>
  if (event.target.matches('.form_status')) {
    //event.preventDefault();
    console.log('Сработал submit на форме:', event.target);
    //let actual_status = event.target.querySelector('input[name="status"]').value;
    let current_key = event.target.querySelector('input[name="task_id"]').value;
    let current_task = JSON.parse(localStorage.getItem(current_key));
    let actual_status = current_task.status;
    actual_status == 0 ? current_task.status = 1:current_task.status = 0
    localStorage.setItem(current_key, JSON.stringify(current_task));
  }
}, true); // Обратите внимание на `true` в третьем аргументе!
function deletTask(key){
    localStorage.removeItem(key);
    location.reload();
}