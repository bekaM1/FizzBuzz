var elButoon = document.querySelector(".btn")

elButoon.addEventListener("click", function () {
    var elInput = document.querySelector(".input").value
    var elResult = document.querySelector(".result")
    var haftaKunlari = 0
    if (elInput == 1) {
        haftaKunlari = "Dushanba"
    }else if (elInput == 2) {
        haftaKunlari = "Seshanba"
    }else if (elInput == 3) {
        haftaKunlari = "Chorshanba"
    }else if (elInput == 4) {
        haftaKunlari = "Payshanba"
    }else if (elInput == 5) {
        haftaKunlari = "Juma"
    }else if (elInput == 6) {
        haftaKunlari = "Shanba"
    }else if (elInput == 7) {
        haftaKunlari = "Yakshanba"
    }else if (elInput < 1 ) {
        haftaKunlari = "7 dan kichkinasi yo-ku bratiwka"
    }else {
        haftaKunlari = "7 dan kottasi yo-ku bratiwka"
    }
        




    elResult.innerHTML = haftaKunlari
})

var elButton2 = document.querySelector(".btn-success")

elButton2.addEventListener("click", function () {
    var elInputNumber = document.querySelector(".number").value
    var elJavob = document.querySelector(".number-answer")
    var i = 0

    if (elInputNumber % 3 == 0) {
        i = "Fizz"
    } else if (elInputNumber % 5 == 0) {
        i = "Buzz"
    } else if (elInputNumber % 5 === 0 && elInputNumber % 3 === 0){
        i = "FizzBuzz"
    } else{
        i = elInputNumber
    }




    elJavob.innerHTML = i
})


