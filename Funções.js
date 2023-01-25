/* Função para inserir  */
function insert(num){


    var numero = document.getElementById("resultado").innerHTML 
    document.getElementById("resultado").innerHTML = numero + num
}

/* Função para limpar tudo*/
function limpar(){
    document.getElementById("resultado").innerHTML = ""
}

/* Função para deletar um numero de cada vez */
function deletar(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
    
}

/* Função para calcular */
function calcular(){
    var resultado = document.getElementById("resultado").innerHTML
    if (resultado) {
    
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
}