var picks_url =  ['../assets/crew/image-douglas-hurley.png','../assets/crew/image-mark-shuttleworth.png','../assets/crew/image-victor-glover.png','../assets/crew/image-anousheh-ansari.png']
var jobs = ['COMMANDER','MISSION SPECIALIST','PILOT','FLIGHT ENGINEER']
var names = ['DOUGLAS HURLEY','MARK SHUTTLEWORTH','VICTOR GLOVER','ANOUSHEH ANSARI']
var descs = ['Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.','Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.','Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ','Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ']
var pos = 0

var img = document.getElementById('image')
var job = document.getElementById('job')
var name = document.getElementById('name')
var desc = document.getElementById('desc')

var ov1 = document.getElementById('ov1')
var ov2 = document.getElementById('ov2')
var ov3 = document.getElementById('ov3')
var ov4 = document.getElementById('ov4')

var selects = document.getElementsByClassName('ov')
selects[pos].classList.add('ovv')


ov1.addEventListener('click',function(){
    
    selects[pos].classList.remove('ovv')
    pos = 0
    img.src = picks_url[pos]
    job.innerText = jobs[pos]
    desc.innerText = descs[pos]
    document.getElementsByClassName('doug')[0].innerHTML=names[pos]
    selects[pos].classList.add('ovv')
    
})

ov2.addEventListener('click',function(){
    
    selects[pos].classList.remove('ovv')
    pos = 1
    img.src = picks_url[pos]
    job.innerText = jobs[pos]
    desc.innerText = descs[pos]
    document.getElementsByClassName('doug')[0].innerHTML=names[pos]
    selects[pos].classList.add('ovv')
    
})

ov3.addEventListener('click',function(){
    
    selects[pos].classList.remove('ovv')
    pos = 2
    img.src = picks_url[pos]
    job.innerText = jobs[pos]
    desc.innerText = descs[pos]
    document.getElementsByClassName('doug')[0].innerHTML=names[pos]
    selects[pos].classList.add('ovv')
    
})

ov4.addEventListener('click',function(){
    
    selects[pos].classList.remove('ovv')
    pos = 3
    img.src = picks_url[pos]
    job.innerText = jobs[pos]
    desc.innerText = descs[pos]
    document.getElementsByClassName('doug')[0].innerHTML=names[pos]
    selects[pos].classList.add('ovv')
    
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