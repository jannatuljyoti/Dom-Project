document.getElementById("cashOut-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;

    const amount = getInputValueByID("cashOut-amount");
    const pinNumber = getInputValueByID("cashOut-pin");
    const mainBalance = getInnerTextByID("main-balance");

    if (accountNumber.length===11) {
        if(pinNumber===1234) {
            const sum = mainBalance - amount;
            setInnerTextByIDandValue("main-balance",sum)

        const container = document.getElementById("transection-container");       
          
        const p = document.createElement("p");
    p.innerText = `
    cashout ${amount} from this ${accountNumber} account

    `
    container.appendChild(p)
    
     }
        else{
            alert("pin not valid")
        }
    }
    else{
        alert("account number not valid")
    }
})