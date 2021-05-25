import { v4 as uuid } from 'uuid';

export class Todo {
 
  constructor(title) {
    this.title = title;
    this.checked = false;
    this.id = uuid();
  }

  toHtml() {
    return `
      <li class="list-group-item" id="${this.id}">
        <div class="row align-items-center">
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="todo-${this.id}">
              <label class="form-check-label" for="todo-${this.id}">
                ${this.title}
              </label>
            </div>
          </div>
          <div class="col todo-actions" >
            <button class="btn btn-info me-1" id="edit-${this.id}">Editar</button>
            <button class="btn btn-danger" id="delete-${this.id}">Eliminar</button>
          </div>
        </div>
      </li>
    `;
  }

  removeTodo() {
    console.log('is removed todo', this.id);
    const liElement = document.getElementById(this.id);
    liElement.remove()
  }

  editTodo() {
    const result = prompt('Change your to do');

     if(!result){
       alert('Write a to do')
       return;
     }
    const editedTodo = document.getElementById(this.id);
    const label = editedTodo.querySelector('label');
    label.innerText = result;
    this.title = result;
  }
}
