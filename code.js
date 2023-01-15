//variables
const mensajeEntrante =  document.querySelector("#entrada_de_text");
const mensajeResultante = document.querySelector("#salida_de_texto");
const encriptarTexto = document.querySelector("#accionEncriptar");
const desencriptarTexto = document.querySelector("#accionDesencriptar");
const copiar = document.querySelector("#copiar");
var permitir = true;
//funciones

function varificarTexto()
{
  var mensaje = mensajeEntrante.value;
  if(mensaje == mensaje.toLowerCase())
  {
   permitir = true;
  }
  else
  {
    alert("Solo se aceptan letras minusculas");
    permitir = false;
  }
}


function encriptar(){ //esta funcion sirve para encriptar el texto
    varificarTexto();
    if(permitir == true)
    {
      var mensaje = mensajeEntrante.value;
      var mensajeFinal = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
      if(mensajeEntrante.value == "")
      {
        document.getElementById("parte1").style.display = "block";
        document.getElementById("parte2").style.display = "none";
      }
      else
      {
        document.getElementById("parte1").style.display = "none";
        document.getElementById("parte2").style.display = "block";
      }
      document.getElementById("salida_de_texto").innerHTML = mensajeFinal;
      texto = mensajeFinal;
    }
}

function desencriptar(){ //esta funcion sirve para desencriptar el texto
  varificarTexto();
  if(permitir == true)
  {
    var mensaje = mensajeEntrante.value;
    var mensajeFinal = mensaje.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
     if(mensajeEntrante.value == "")
     {
      document.getElementById("parte1").style.display = "block";
      document.getElementById("parte2").style.display = "none";
     }
     else
     {
      document.getElementById("parte1").style.display = "none";
      document.getElementById("parte2").style.display = "block";
     }
     document.getElementById("salida_de_texto").innerHTML = mensajeFinal;
     texto = mensajeFinal;
  }
}

function copiarTexto(){ //esta funcion sirve para copiar el texto
   var mensaje = texto;
   navigator.clipboard.writeText(mensaje);

}

encriptarTexto.onclick = encriptar; //aca se toma el click del usuario en encriptar
desencriptarTexto.onclick = desencriptar;//aca se toma el click del usuario en desencriptar

copiar.onclick = copiarTexto;//aca se toma el click del usuario en copiar
