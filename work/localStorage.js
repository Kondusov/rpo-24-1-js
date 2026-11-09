function combaineTask(event){
    //event.preventDefault();
    let task = new Object;
    task.description = document.getElementById('input_task').value;
    task.deadline = new Date(document.getElementById('deadline').value).getTime();
    task.created = new Date();
    task.status = 0;
    localStorage.setItem(crypto.randomUUID(), JSON.stringify(task));
}
document.querySelector('form').addEventListener('submit', combaineTask);
let table_tasks = document.getElementById('list_tasks');

// localStorage.clear()
for(let i=0; i<localStorage.length; i++){
    console.log(JSON.parse(localStorage.getItem(i)));
    let currentKey = localStorage.key(i).trim();
    let cureentTask = JSON.parse(localStorage.getItem(currentKey));
        if(cureentTask!= null){
            console.log(cureentTask);
            let deadline = (cureentTask.deadline - Date.now())/1000/60/60; // получили кол-во часов до дедлайна
            let deadlineStyle = '';
            if(cureentTask.status != 1){
                if(deadline < 24 && deadline > 0){deadlineStyle = 'less24'}
                if(deadline<0){deadlineStyle ='less0';}
            }else{deadlineStyle = 'completed'}
            console.log(deadline);
            let status_current = cureentTask.status;
            let status_task_id = currentKey;
            let status = `<form class='form_status'>
            <input type='hidden' value=${status_task_id} name="task_id"></input>
            <input type='hidden' value=${status_current} name="status"></input>
            <input class=${status_current==0?'none_completed':'completed'}
            type='submit' value=${status_current==0?'выполнить':'выполнено'}></input>
            </form>`;
            //console.log(status);
            table_tasks.innerHTML += `<tr><td>${i+1}</td><td>${cureentTask.description}</td>
        <td>${new Date(cureentTask.created).toLocaleString()}</td><td class='${deadlineStyle}' >${new Date(cureentTask.deadline).toLocaleString()}</td><td>${status}</td>
        <td><button onclick="deletTask('${currentKey}')">удалить</button></td>
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