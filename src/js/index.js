const addButton = document.getElementById('add-button');


addButton.addEventListener('click', addTodo);

let index = 3;

function addTodo(){
  const todoInput = document.getElementById('todo-input');
  if (!todoInput.value) {
    return;
  }

  createTodoShort(todoInput.value);
  
  todoInput.value = '';
  
  index++;
}

function createTodoShort(value) {
  const newTodo = `
    <li class="list-group-item">
      <div class="row align-items-center">
        <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="todo-${index}">
            <label class="form-check-label" for="todo-${index}">
              ${value}
            </label>
          </div>
        </div>
        <div class="col todo-actions" >
          <button class="btn btn-info me-1">Editar</button>
          <button class="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </li>
  `;

  const $list = document.querySelector('ul');
  $list.insertAdjacentHTML('beforeend', newTodo);
}

function createTodo(value){
  const $list = document.getElementsByClassName('list-group');

  const $listGroup = document.createElement('li');
  $listGroup.classList.add('list-group-item');
  $list[0].appendChild($listGroup);
  
  const $alignItems = document.createElement('div');
  $alignItems.classList.add('align-items-center');
  $alignItems.classList.add('row');
  $listGroup.appendChild($alignItems);
  
  const $col = document.createElement('div');
  $col.classList.add('col');
  $alignItems.appendChild($col);
  
  const $formCheck = document.createElement('div');
  $formCheck.classList.add('form-check');
  $col.appendChild($formCheck);
  
  const $todo = document.createElement('input');
  $todo.classList.add('form-check-input');
  $todo.type = 'checkbox';
  $todo.id = `todo-${index}`;
  $formCheck.appendChild($todo);
  
  const $label = document.createElement('label');
  $label.classList.add('form-check-label');
  $label.htmlFor = `todo-${index}`;
  $label.innerText = value;
  $formCheck.appendChild($label);
  
  const $todoActions = document.createElement('div');
  $todoActions.classList.add('todo-actions');
  $todoActions.classList.add('col');
  $alignItems.appendChild($todoActions);
  
  const $btnEditar = document.createElement('button');
  $btnEditar.classList.add('btn');
  $btnEditar.classList.add('btn-info');
  $btnEditar.classList.add('me-1');
  $btnEditar.innerText = 'Editar';
  $todoActions.appendChild($btnEditar);
  
  const $btnRemove = document.createElement('button')
  $btnRemove.classList.add('btn');
  $btnRemove.classList.add('btn-danger');
  $btnRemove.innerText = 'Eliminar';
  $todoActions.appendChild($btnRemove);
  
}

