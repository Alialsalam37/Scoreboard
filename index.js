let homeScore = document.getElementById("hScore")

let guestScore = document.getElementById("gScore")

let hScore=0
let gScore=0
function hPlus1(){
    hScore+=1
    homeScore.textContent=hScore
}
function hPlus2(){
    hScore+=2
    homeScore.textContent=hScore
}
function hPlus3(){
    hScore+=3
    homeScore.textContent=hScore
}
function gPlus1(){
    gScore+=1
    guestScore.textContent=gScore
}
function gPlus2(){
    gScore+=2
    guestScore.textContent=gScore
}
function gPlus3(){
    gScore+=3
    guestScore.textContent=gScore
}