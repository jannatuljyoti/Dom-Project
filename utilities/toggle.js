document.getElementById("cashout").style.display = "none";

document.getElementById("add-money").addEventListener("click",function(){
    handleToggle("addmoney","block")
    handleToggle("cashout","none")
    handleToggle("transection-history","none")

})
document.getElementById("cash-out").addEventListener("click",function(){
    handleToggle("addmoney","none")
    handleToggle("cashout","block")
    handleToggle("transection-history","none")

})

