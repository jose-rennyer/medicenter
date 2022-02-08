/*window.onload = function(){
    document.querySelector(".menumobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
}*/

let menunormal = document.querySelector(".menu nav ul")
function abrirmenu(){
    menunormal.classList.toggle("aberto")
}