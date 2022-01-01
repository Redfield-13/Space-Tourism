
var pos = 0
var dess = ["MOON","MARS","EUROPA","TITAN"]
var infos = ["See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
,"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."]
var distances = ["384,400 km","225 MIL. km","628 MIL. km","1.6 BIL. km"]
var days =["3 DAYS","9 MONTHS","3 YEARS","7 YEARS"]

var pdays = document.getElementById('day')
var pdis = document.getElementById('dis')
var pinfos = document.getElementById('see')
var pdess = document.getElementById('pm')

pdays.innerText = days[pos]
pdis.innerText = distances[pos]
pinfos.innerText = infos[pos]
pdess.innerText = dess[pos]


var logo = document.getElementById('logo')
var nav  = document.getElementById('nav')
var tog  = document.getElementById('tog')

logo.addEventListener('click',function(){
    nav.style.display = 'block'
})

tog.addEventListener('click',function(){
    nav.style.display = 'none'
})


var moon = document.getElementById('moon')
var mars = document.getElementById('mars')
var europa = document.getElementById('europa')
var titan = document.getElementById('titan')



var selects = document.getElementsByClassName('sp')

selects[pos].classList.add('select')

moon.addEventListener('click',function(){
    selects[pos].classList.remove('select')
    pos = 0
    pdays.innerText = days[pos]
pdis.innerText = distances[pos]
pinfos.innerText = infos[pos]
pdess.innerText = dess[pos]
selects[pos].classList.add('select')
})
mars.addEventListener('click',function(){
    selects[pos].classList.remove('select')
    pos = 1
    pdays.innerText = days[pos]
pdis.innerText = distances[pos]
pinfos.innerText = infos[pos]
pdess.innerText = dess[pos]
selects[pos].classList.add('select')
})
europa.addEventListener('click',function(){
    selects[pos].classList.remove('select')
    pos = 2
    pdays.innerText = days[pos]
pdis.innerText = distances[pos]
pinfos.innerText = infos[pos]
pdess.innerText = dess[pos]
selects[pos].classList.add('select')
})
titan.addEventListener('click',function(){
    selects[pos].classList.remove('select')
    pos = 3
    pdays.innerText = days[pos]
pdis.innerText = distances[pos]
pinfos.innerText = infos[pos]
pdess.innerText = dess[pos]
selects[pos].classList.add('select')
})






