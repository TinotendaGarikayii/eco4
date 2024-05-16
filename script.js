const ham = document.getElementById('hamburger');
const nav = document.getElementById('pc-nav');
const body = document.body

ham.addEventListener('click', function(event){
    body.classList.toggle('active')
})