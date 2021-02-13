let firstI = document.querySelector(".firstinput");
let secondI = document.querySelector(".secondinput");
let thirdI = document.querySelector(".thirdinput");
let fourthI = document.querySelector(".fourthinput");
let fifthI = document.querySelector(".fifthinput");
let sixthI = document.querySelector(".sixthinput");
let seventhI = document.querySelector(".seventhinput");
let eightI = document.querySelector(".eighthinput");
let firstAns = document.querySelector(".firstans");
let secondAns = document.querySelector(".secondans");
let firstT = document.querySelector("#Itext");
let secondT = document.querySelector("#Itext2");
let btn = document.querySelector("button")
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset")


btn.addEventListener("click", function () {
   firstE = sixthI.value * thirdI.value
   secondE = firstI.value * eightI.value
   thirdE = sixthI.value * firstAns.value
   fourthE = firstI.value * secondAns.value

   fifthE = eightI.value * firstI.value
   sixthE = thirdI.value * sixthI.value
   seventhE = eightI.value * firstAns.value
   eightE = thirdI.value * secondAns.value

   sumThree = fifthE - sixthE
   sumFour = seventhE - eightE

   sumOne = firstE - secondE
   sumTwo = thirdE - fourthE
   console.log(sumOne)
   console.log(sumTwo)
   console.log(sumThree)
   console.log(sumFour)
   final = sumTwo / sumOne
   final2 = sumFour / sumThree
   firstT.textContent = fourthI.value + " = " + final + " or " + secondI.value + " = " + final2
   
   reset.style.display = "block"

})