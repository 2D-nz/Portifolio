window.addEventListener('load', (event) =>{
    document.getElementById('js-on').classList.remove('esconder')
    document.getElementById('js-off').classList.add('esconder')
    }
)

if (window.innerWidth < 1000){
    document.getElementById('home-h1').classList.remove('display-2')
    document.getElementById('home-h5').classList.remove('display-4')
    document.getElementById('nomeHabilidade').classList.remove('display-4')
    document.getElementById('nomeHabilidade').innerText = 'Selecione para mais informações'
}


function info(nome){
    if (nome == 'js') {
            document.getElementById('nomeHabilidade').innerHTML='Javascript'
            document.querySelector('#descricao').classList.remove('esconder')
            document.querySelector('#descricao').innerHTML = 'Uma linguagem de programação que serve tanto para front-end quanto back-end. No âmbito de desenvolvimento Web, ela é a responsável por tornar uma página interativa.'
    }
    if (nome == 'html-css'){
            document.getElementById('nomeHabilidade').innerHTML='HTML e CSS'
            document.querySelector('#descricao').classList.remove('esconder')
            document.querySelector('#descricao').innerHTML = 'HTML é uma linguagem de marcação, serve para estruturar sites, e CSS é uma tecnologia que serve para estilizar o HTML, tornando assim as páginas mais bonitas, responsivas e organizadas'
    } 
        if (nome == 'bootstrap'){
            document.getElementById('nomeHabilidade').innerHTML='Boootstrap'
            document.querySelector('#descricao').classList.remove('esconder')
            document.querySelector('#descricao').innerHTML = 'Botstrap é um framework para desevnvolvimento de componentes e interfaces '
    } 
        if (nome == 'react'){
            document.getElementById('nomeHabilidade').innerHTML='React'
            document.querySelector('#descricao').classList.remove('esconder')
            document.querySelector('#descricao').innerHTML = 'React.js é uma biblioteca de javascript, criada pelos engenheiros do Facebook. É utilizada para criar interfaces de usuário em páginas web.'
    }
     
}

function defaultInfo(){
    document.getElementById('nomeHabilidade').innerHTML=' Pause o mouse por cima para mais informações '
    document.querySelector('#descricao').classList.add('esconder')
}