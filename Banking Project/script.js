let balanceMoney = 15080.72;
let checkBalance = () => {
    document.getElementById('bal').innerHTML = `Balance : &#x20B9 xxxxx.xx`
    document.getElementById('loader').style.visibility = "visible";
    setTimeout(() => {
        document.getElementById('loader').style.visibility = "hidden";
        document.getElementById('bal').innerHTML = `Balance : &#x20B9 ${balanceMoney}`
    }, 3000);

    // document.getElementById('loader').innerHTML = `Balance : &#x20B9 ${balanceMoney}`
    // setTimeout(() => {
    // }, 4000);
}

let num = 1;
const transferMoney = () => {
    let amountTransfer = parseFloat(document.getElementById('transferAmount').value);
    let amountTo = document.getElementById('transferTo').value;

    balanceMoney = balanceMoney - amountTransfer;
    document.getElementById('transferAmount').value = "";
    document.getElementById('transferTo').value = "";

    document.getElementById(`t-${num}`).innerHTML = `&#x20B9 ${amountTransfer} transfered to ${amountTo}`;
    document.getElementById('bal').innerHTML = `Balance : &#x20B9 ${balanceMoney}`
    num++;
}

const loanRequest = () => {
    let loanValue = parseFloat(document.getElementById('loanAmount').value);
    confirm(`You have applied for loan of Rs ${loanValue}. Are you sure!`)
    balanceMoney = balanceMoney + loanValue;
    document.getElementById(`t-${num}`).innerHTML = `&#x20B9 ${loanValue} credited to your account as a Loan`;
    document.getElementById('bal').innerHTML = `Balance : &#x20B9 ${balanceMoney}`
    document.getElementById('loanAmount').value = "";
    num++;
}


const loginFunc=()=>{
    const userName = document.getElementById('userInput').value;
    const password = document.getElementById('passInput').value;

    if(userName==="yash" && password==="123"){
        document.getElementById('content-body').style.display="block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
    document.getElementById('userInput').value="";
    document.getElementById('passInput').value="";
    
    document.getElementById('d-none').style.display="none";
    
    setTimeout(() => {
        document.getElementById('content-body').style.display="none";
        document.getElementById('d-none').style.display="block";
    }, 50000);
}
