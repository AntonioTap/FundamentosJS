const botonVaciarCarrito = document.querySelector('#vaciar-carrito');
botonVaciarCarrito.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
    carrito.length = 0;  
    cleanTable();  
    fillTable();  
}

const catalogo = document.querySelector('#lista-cursos');
const table = document.querySelector('#carrito tbody');

const carrito = [];

function getProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const item = {}
        const cardParent = e.target.parentElement;
        item.id = e.target.getAttribute('data-id');
        item.name = cardParent.querySelector('h4').innerText;
        item.price = cardParent.querySelector('p span').innerText;
        item.image = cardParent.parentElement.querySelector('img').src;
        item.cantity = 1;
        //Verificar existencia item
        addItem(item);
        cleanTable();
        fillTable();
    }
}

function cleanTable(){
    table.innerHTML = '';
}

function addItem(item){
    if(carrito.some(itemCarrito => itemCarrito.id === item.id)){
        //incrementar cantidad de item
        carrito.forEach(itemCarrito => {
            if(itemCarrito.id === item.id){
                itemCarrito.cantity++;
            }
        });
    } else {
        carrito.push(item);
    }
    console.log(carrito);
}

function createRow (item){
    const row = document.createElement('tr');
    let htmlRow = '';
    htmlRow += `<td><img src="${ item.image }" width="100px"></td>`
    htmlRow += `<td>${ item.name }</td>`
    htmlRow += `<td>${ item.price }</td>`
    htmlRow += `<td>${ item.cantity }</td>`
    row.innerHTML = htmlRow;
    return row;
}

function fillTable(){
    carrito.forEach(itemCarrito => {
        table.appendChild(createRow(itemCarrito));
    });
}
catalogo.addEventListener('click', getProduct);