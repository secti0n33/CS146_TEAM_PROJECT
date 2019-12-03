document.addEventListener("DOMContentLoaded",init);
function init()
{
    document.getElementById("Dropdown").addEventListener("change",formchange,false);
    document.getElementById("swap").addEventListener("change",form2,false);
}
function formchange()
{
    var book=document.getElementById("Dropdown").value;
    document.getElementById("Price").innerHTML=(book=="Math book") ? 
    "$35" : (book=="Science book") ? "$25" : (book=="English book") ? "$12" : (book=="Computer Science book") ?"$3" : "";
    if(book!="Choose a book")
        document.getElementById("Submit").disabled=false;
    return book;
}

var form2 = () =>
{
    var v=document.querySelector('input[name="payment"]:checked').value;
    document.getElementById("swap").innerHTML=
    (v==0)? "Last Name: <input type=\"text\" id=\"ln\"><br>\
    First Name: <input type=\"text\" id=\"First\"><br>\
    <select id=\"cardtype\"><option>MasterCard</option><option>Visa</option></select><br>\
    Card Number: <input type=\"number\" id=\"cn\"><br>\
    Security Code: <input type=\"number\"><br>\
    Billing Address: <input type=\"text\" id=\"ba\"><br>\
    Zip Code: <input type=\"number\"><br>\
    State: <input type=\"text\"><br>\
    City/Town: <input type=\"text\"><br>\
    <button id=\"Submit\" "+((formchange()!="Choose a book")? "":"disabled=\"true\"")+">Submit</button>":
    "<h5>Email <a href=\"mailto:ducklend@gmail.com\">DuckLend@gmail.com</a> to find out if your<br>payment method is acceptable</h5>";
    document.getElementById("Submit").addEventListener("click",subm);
}

function subm()
{
    document.getElementById("sent").innerHTML="Great! It will be sent to: "+document.getElementById("ba").value;
    document.getElementById("swap").innerHTML="Select payment method:<br>\
    <input type=\"radio\" name=\"payment\" value=0>Debit/Credit<br>\
    <input type=\"radio\" name=\"payment\" value=1>Other";
}