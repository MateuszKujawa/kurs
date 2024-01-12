let todoInput // Miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo // Info o braku zadań / konieczności wpisania tekstu
let addBtn // przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi ul
let newTodo // nowo dodany LI, nowe zadanie

const main = () => {   
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    // pobieramy wszystkie elementy
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
}




const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()


        ulList.append(newTodo)

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    // tools Div
    const toolsPanel = document.createElement('div'); 
    toolsPanel.classList.add('tools');
    newTodo.append(toolsPanel);

    // Complete button    
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDIT';

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    

    toolsPanel.append(completeBtn, editBtn, deleteBtn);

}   





document.addEventListener('DOMContentLoaded', main);