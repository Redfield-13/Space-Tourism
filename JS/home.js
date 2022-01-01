var g2 = document.getElementById("g2")

var logo = document.getElementById('logo')
var nav  = document.getElementById('nav')
var tog  = document.getElementById('tog')

logo.addEventListener('click',function(){
    nav.style.display = 'block'
})

tog.addEventListener('click',function(){
    nav.style.display = 'none'
})
