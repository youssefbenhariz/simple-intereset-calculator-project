// calculating interest
function compute()
{
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = amount * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (amount <= 0)// condition
    {
        alert("enter a positive number");
        amount.focus();
    }
    // result
    document.getElementById("result").innerHTML = "If you deposit:"+amount+",\<br\>At an interest rate of :"+rate+"%\<br\>You will receive an amount of :"+interest+",\<br\>In the year :"+year+"\<br\>";
}

function updateRate(){

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}