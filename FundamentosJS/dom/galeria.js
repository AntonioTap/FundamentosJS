const containerGal = document.querySelector('.container');
const imageCon = document.querySelector('.modal-body img')

function getImage(e) {
    const image = e.target.src
    imageCon.src = image;
}

containerGal.addEventListener('click', getImage);