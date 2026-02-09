function mafonction(){
    document.querySelector("#texte").classList.remove("val")
    document.querySelector("#texte").classList.remove("titre")
    document.querySelector("#texte").classList.add("fonc")}

function validation(){
    document.querySelector("#texte").classList.remove("fonc")
    document.querySelector("#texte").classList.remove("titre")
    document.querySelector("#texte").classList.add("val")}
function db(){    
    document.querySelector("#texte").classList.remove("fonc")
    document.querySelector("#texte").classList.remove("val")
    document.querySelector("#texte").classList.add("titre")
}
function entre(){
    document.querySelector("#id").classList.remove("h1")
    document.querySelector("#id").classList.add("AAA")
    document.querySelector("#id").innerHTML="Le trio HTML, CSS et JavaScript"
}
function quitte(){
    document.querySelector("#id").classList.remove("AAA")
    document.querySelector("#id").classList.add("h1")
    document.querySelector("#id").innerHTML="Le trio HTML, CSS et JavaScript"}

function grand(){document.querySelector("#grand").innerHTML="GRAND"}
function petit(){document.querySelector("#grand").innerHTML="grand"}