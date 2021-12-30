
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
const toDoData = JSON.parse(localStorage.getItem('list')) || [];

const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    toDoData.forEach (function (item, index) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' + 
                    '<div class="todo-buttons">' +
					'<button class="todo-remove"></button>' +
					'<button class="todo-complete"></button>' +
				    '</div>'
        
        if (item.completed) {
            todoCompleted.append(li);
        } else {        
            todoList.append(li);
};
li.querySelector('.todo-complete').addEventListener ('click', function () {
    item.completed = !item.completed;
    render();
});
li.querySelector('.todo-remove').addEventListener ('click', function () {   
    toDoData.splice(index, 1);
    render();    
});
localStorage.setItem('list', JSON.stringify(toDoData));
    });   
    console.log(JSON.parse(localStorage.getItem('list')));
};

todoControl.addEventListener ('submit', function (event) {
    event.preventDefault();

    const newToDo = {
        text: headerInput.value,
        completed: false
    };
    if (headerInput.value != 0) {
    toDoData.push(newToDo);
};
    headerInput.value = '';
    render();
    
});
render();


