function encriptar(){
    let text = document.getElementById("text").value.toLowerCase();
    let text2 = document.getElementById("text2");
    let txt_encrip = text
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"aufat"); 

    if (text.length !=0){
        document.getElementById("imagen").style.display = "none";
        document.getElementById("tittle_msj").style.display = "none";
        document.getElementById("text2").innerHTML = txt_encrip;
        text2.textContent = txt_encrip;
        alert("Texto encriptado");
    
    } else {
        alert ("NO A INGRESADO NINGUN TEXTO");
        }

}
function desencriptar(){
    let text = document.getElementById("text").value.toLowerCase();
    let text2 = document.getElementById("text2");
    let txt_encrip = text
        .replace(/enter/gi,"e")
        .replace(/ober/igm,"o")
        .replace(/imes/igm,"i")
        .replace(/ai/igm,"a")
        .replace(/ufat/i,"u"); 

    if (text.length !=0){
        document.getElementById("imagen").style.display = "none";
        document.getElementById("text").style.display = txt_encrip;
        document.getElementById("text2").innerHTML = text;
        text2.textContent = text;
        alert("Texto desencriptado");
    
    } else {
        alert ("NO A INGRESADO NINGUN TEXTO");
        }

}

function copiar() {
    var contenido = document.querySelector("#text2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copio!")
}