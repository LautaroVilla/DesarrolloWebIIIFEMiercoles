let resultado=0;
function suma(){
    resultado = 10;
    return resultado
}
console.log(resultado)
console.log(suma())

let participantes=['junior', 'luis', 'ivana']

function render(){
    let contenedor = document.getElementById('root');
    participantes.forEach(part=>contenedor.innerHTML+=
        `<div class='card col-4' style='width: 18rem;'>
            <img src='...' class='card-img-top' alt='...'>
            <div class='card-body'>
                <h5 class='card-title'>${part}</h5>
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='#' class='btn 
btn-primary'>Go somewhere</a>
            </div>
        </div>` 
        );
}
render();
