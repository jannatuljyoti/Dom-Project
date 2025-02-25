


document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber =document.getElementById("Account-number").value;
    console.log(accountNumber)
    const pin =document.getElementById("pin").value;
    if(accountNumber.length === 11){
        
        if(pin==="1234"){
            window.location.href="./main.html"
        }else{
            alert("wrong pin number")
        }
    }
    else{
        console.log("need valid account number")
    }
})