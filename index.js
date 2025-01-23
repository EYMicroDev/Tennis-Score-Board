let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

let setScoreHomeEl = document.getElementById("set-score-home")
let setScoreGuestEl = document.getElementById("set-score-guest")


let setScoreHome = 0
let setScoreGuest = 0



function increaseHomeScore15(){
    homeScore = 15
    homeScoreEl.textContent = homeScore
    
}
function increaseHomeScore30(){
    homeScore = 30
    homeScoreEl.textContent = homeScore
}
function increaseHomeScore40(){
    homeScore = 40
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreAd(){
    homeScore = "AD"
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreGame(){
    homeScore = 0
    homeScoreEl.textContent = homeScore
    
}
function increaseGuestScore15(){
    guestScore = 15
    guestScoreEl.textContent = guestScore
}
function increaseGuestScore30(){
    guestScore = 30
    guestScoreEl.textContent = guestScore
}
function increaseGuestScore40(){
    guestScore = 40
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreAD(){
    guestScore = "AD"
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreGame(){
    guestScore = 0
    guestScoreEl.textContent = guestScore
    }
function addGameHome() {
    setScoreHome += 1
    setScoreHomeEl.textContent = setScoreHome
}
function addGameGuest(){
    setScoreGuest += 1
    setScoreGuestEl.textContent = setScoreGuest
}
function resetScoreHome(){
    setScoreHome = 0
    setScoreHomeEl.textContent = setScoreHome
    setScoreGuestEl.textContent = setScoreHome
}
