
function Afrekenen()
{
    var boodschap ="";
    var teller = 0;
    for (var i=0; i < document.getElementsByClassName("aantal").length; i++)
    {
        if (document.getElementsByClassName("aantal")[i].textContent!=0)
        {
            var naam = document.getElementsByClassName("aantal")[i].id.replace("aantal_","");
            var aantal = document.getElementsByClassName("aantal")[i].textContent;
            boodschap = aantal + "*" + naam;
            localStorage.setItem(teller, boodschap);
            teller++;
        }
    }
    
    if (boodschap !=""){
    window.location.href = 'overzicht.html';
    }
    else alert("Er is niets om af te rekenen");

}

function Totaal()
{
    var totaal = 0;
    for (var i=0; i < document.getElementsByClassName("aantal").length; i++)
    {
            totaal += parseFloat(document.getElementsByClassName("aantal")[i].textContent * document.getElementsByClassName("prijs")[i].textContent);
    }
    document.getElementById("totaal").textContent = "€ " + totaal;
}

function Plus(id)
{
    var aantal = document.getElementById(id).textContent;
    aantal++;
    if(aantal > 10)
    {
        document.getElementById(id).textContent = 10;
    }
    else{
        document.getElementById(id).textContent = aantal;
    }

    Totaal();
}

function Min(id)
{
    var aantal = document.getElementById(id).textContent;
    if (aantal > 0)
    {
        aantal--;
        document.getElementById(id).textContent = aantal;
    }
    Totaal();
}
