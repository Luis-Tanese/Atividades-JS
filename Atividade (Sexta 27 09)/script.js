var modal = document.getElementById("MeuModal");
var openBtn = document.getElementById("AbrirModal");
var closeBtn = document.getElementsByClassName("Fechar")[0];

openBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}