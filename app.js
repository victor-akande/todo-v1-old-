const addForm = document.querySelector('.add');
const todosList = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Function to add a new todo
const addTodo = (todo) => {
    const todoHtmlTemplate = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todosList.innerHTML += todoHtmlTemplate;
};

addForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const todo = addForm.add.value.trim();
    if(todo.length){
        addTodo(todo);
        addForm.reset();
    }
    
});

// Deleting todos
todosList.addEventListener('click', event => {
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
    
});

// Filter Todo function
const filterTodos = (term) => {
    Array.from(todosList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>  todo.classList.add('filtered'));
    
    Array.from(todosList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>  todo.classList.remove('filtered'));
};

// 
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
});