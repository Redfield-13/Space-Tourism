var pos = 0

var pics_url = ['./assets/technology/image-launch-vehicle-portrait.jpg',
'./assets/technology/image-spaceport-portrait.jpg'
,'./assets/technology/image-space-capsule-portrait.jpg'
]

var terms = ['LAUNCH VEHICLE','SPACEPORT','SPACE CAPSULE']
var descs = ["A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."]

var img = document.getElementById('bitmap')
var term = document.getElementById('term')
var desc = document.getElementById('desc')

var cir1 = document.getElementById('cir1')
var cir2 = document.getElementById('cir2')
var cir3 = document.getElementById('cir3')



var selects = document.getElementsByClassName('cir1')

selects[pos].classList.add('select')

cir1.addEventListener('click',function(){
    selects[pos].classList.remove('select')
    pos = 0
    img.src = pics_url[pos]
    term.innerText = terms[pos]
    desc.innerText = descs[pos]
    selects[pos].classList.add('select')
})

cir2.addEventListener('click',function(){
    selects[pos].classList.remove('select')
    pos = 1
    img.src = pics_url[pos]
    term.innerText = terms[pos]
    desc.innerText = descs[pos]
    selects[pos].classList.add('select')
})

cir3.addEventListener('click',function(){
    selects[pos].classList.remove('select')
    pos = 2
    img.src = pics_url[pos]
    term.innerText = terms[pos]
    desc.innerText = descs[pos]
    selects[pos].classList.add('select')
})

var logo = document.getElementById('logo')
var nav  = document.getElementById('nav')
var tog  = document.getElementById('tog')

logo.addEventListener('click',function(){
    nav.style.display = 'block'
})

tog.addEventListener('click',function(){
    nav.style.display = 'none'
})