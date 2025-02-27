document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pin= getInputValueByID("pin");
    const account = document.getElementById("Account-number").value ;
    const mainBalance = getInnerTextByID("main-balance")
    console.log(mainBalance)

    if(account.length===11){
        if(pin===1234){
            const sum = mainBalance + amount;
            // document.getElementById("main-balance").innerText=sum;
            setInnerTextByIDandValue("main-balance",sum)

    const container = document.getElementById("transection-container");        

    const p = document.createElement("p");
    p.innerText = `
    added ${amount} from ${account} account

    `
    container.appendChild(p)

        }
        else{
            console.log("wrong pin")
        }

    }
    else{
        console.log("wrong account number")
    }



})