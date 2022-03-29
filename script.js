function compute()
{
    principal = document.getElementById("principal").value;
    interest = parseFloat(document.getElementById("rate").value);
    years = document.getElementById("years").value;
    final_year = parseInt(years) + 2020;

    document.getElementById("deposit-calc-value").innerHTML = principal;
    document.getElementById("interest-calc-value").innerHTML = parseFloat(interest * 100).toFixed(1)+"%";
    document.getElementById("amount-calc-value").innerHTML = (parseInt(principal)*(parseFloat(interest))*parseInt(years));
    document.getElementById("year-calc-value").innerHTML = final_year
}
       
function updateTextInput(val) {
    document.getElementById('rate').value=val; 
}
  

function show_value(x)
{
percent_val = (x*100).toFixed(1)+"%"
 document.getElementById("slider_value").innerHTML = percent_val;
}