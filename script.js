
///// MODO ESCURO /////
document.getElementById("btnTema").addEventListener("click", function(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        this.textContent = "Modo Claro";
    } else {
        this.textContent = "Modo Escuro";
    }
})

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");
    menuToggle.setAttribute("aria-expanded", aberto);
});

document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});