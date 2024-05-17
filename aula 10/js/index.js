const btnclicar = document.querySelector("#btncriar");

const listafilmes = document.querySelector("#listafilmes");

const inputfilme = document.querySelector("#inputfilme");
btnclicar.addEventListener('click', function(infosdoevento){
    infosdoevento.preventDefault();
    // console.log(infosdoevento.target.parentNode)
    let respostausuario = inputfilme.value

    let novofilme = document.createElement('li')
    novofilme.innerText = respostausuario

    let btneditar = document.createElement('button')
    
    btneditar.innerText = "Editar"
    
    novofilme.append(btneditar)
    
    btneditar.addEventListener('click', function(){

        btneditar.classList.toggle('esconder')
    })

    novofilme.classList.add('link-verde')
    

    listafilmes.append(novofilme)

})

// .append - adiciona um novo elemento html dentro de outro
//.createElement - cria um novo elemento html
// .style.propriedadeCSS - muda uma propriedade
//.classList.add() - adiciona uma classe ao elemento html
//.classList.remove() - remove uma classe do elemento html
//.classList.toggle() - liga/desliga uma classe do elemento html
