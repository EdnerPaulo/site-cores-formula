function Verde(){
    document.getElementById("corpo").style.backgroundColor="#0f0";
}
function Azul(){
    document.getElementById("corpo").style.backgroundColor="#00f";
}
function Amarelo(){
    document.getElementById("corpo").style.backgroundColor="#ff0";
}
function nome() {
    if(document.getElementById("cxnome").value=="" || document.getElementById("cxemail").value==""){
        alert("Dgt um valor, campo em branco");
    }
    else{
        alert("Gravado com sucesso!");
        window.location.href= 'index.html';
        //retorna ou manda pra tela que grava
    }
}