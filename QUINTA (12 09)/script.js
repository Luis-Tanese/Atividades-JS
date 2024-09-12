function salvar(){
    const womp = document.getElementById("numero1");
    if(!womp.value){
        alert("Adicione um número");
        return;
    }
    if(isNaN(womp.value)){
        alert("Adicione um número");
        return;
    }
    localStorage.setItem(1, womp.value);
    alert("numero adicionado.");
}
