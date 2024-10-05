let tasks = [];
let style;

function count(){
    return tasks.length;
}

function getToDo(){
    let todo = 0;
    for(let i = 0; i<tasks.length; i++){
        if(tasks[i].classList.has('to-do')){
            todo++;
        }
    }
    return todo;
}

function saveTask(){
    const newTask = document.getElementById('task');

    if(newTask.value != ''){
        const task = document.createElement('div');
        task.className = 'task';
        task.id = 'task1'

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check'

        const label = document.createElement('label');
        label.textContent = newTask.value;
        
        task.classList.add('to-do');

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                label.style.textDecoration = 'line-through';
                task.classList.remove('to-do');
                task.classList.add('done'); 
            } else {
                label.style.textDecoration = 'none';  
                task.classList.remove('done');
                task.classList.add('to-do'); 
            }
        });

        task.appendChild(checkbox);
        task.appendChild(label);

        document.getElementById('taskview').appendChild(task);
        tasks.push(task);
        newTask.value = '';
    }
}

function viewAll(){
    if (style) {
        document.head.removeChild(style);
        style = null;
    }
}

function viewToDo(){
    if (style) {
        document.head.removeChild(style);
        style = null;
    }

    style = document.createElement('style');
    style.innerHTML = '.done {display: none !important;}';
    document.head.appendChild(style);
}

function viewDone(){
    if (style) {
        document.head.removeChild(style);
        style = null;
    }

    style = document.createElement('style');
    style.innerHTML = '.to-do {display: none !important;}';
    document.head.appendChild(style);
}