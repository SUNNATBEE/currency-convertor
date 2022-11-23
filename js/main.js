var elForm = document.querySelector(".form-wrapper");
var elInput = document.querySelector(".input-js");
var elResult = document.querySelector(".result");
var cash = 11200;


elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    var elInputValue = elInput.value;
    var resultMoney = Number(elInputValue * cash);
    elResult.textContent =  resultMoney;
})