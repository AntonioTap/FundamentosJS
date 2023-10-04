const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

function createAlert(message) {
    const alerta = document.createElement('div');
    alerta.classList.add('alert');
    alerta.classList.add('alert-primary');
    alerta.setAttribute('role', 'alert');
    alerta.innerText = message;

    // Botón de "+"
    const btnPlus = document.createElement('button');
    btnPlus.classList.add('btn', 'btn-success', 'btn-plus');
    btnPlus.innerText = '✚';
    btnPlus.addEventListener('click', () => {
        alerta.classList.remove('alert-danger');
        alerta.classList.add('alert-success');
        alert("Eso es todo");
    });

    // Botón de "X"
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn', 'btn-danger', 'btn-delete');
    btnDelete.innerText = '✗';
    btnDelete.addEventListener('click', () => {
        alerta.classList.remove('alert-success');
        alerta.classList.add('alert-danger');
        alert("Inténtalo de nuevo");
    });



    // Botón "DELETE" con ícono de eliminación
    const btnRemove = document.createElement('button');
    btnDelete.classList.add('btn', 'btn-danger', 'btn-delete');
    btnDelete.innerHTML = '<i class="fa fa-trash"></i>';
    btnDelete.addEventListener('click', () => {
        alerta.remove();
        alert("Tarea eliminada");
    });

    alerta.appendChild(btnPlus);
    alerta.appendChild(btnDelete);
    alerta.appendChild(btnRemove);

    return alerta;
}


function addTarea() {
    const data = inputTarea.value;
    const alerta = createAlert(data);
    tareas.appendChild(alerta);
    inputTarea.value = '';
}

btnTarea.addEventListener('click', addTarea);
