
const $textIn = document.getElementById('textIn'),
    $btnEncriptar = document.getElementById('btnEncriptar'),
    $bntDesencriptar = document.getElementById('btnDesencriptar'),
    $textOut = document.getElementById('textOut'),
    $desencriptar = document.getElementById('desencriptar'),
    $desencriptar2 = document.getElementById('desencriptar2');


	function mostrarOcultar(){		
		let y = $desencriptar;
		if (y.style.display === "none") {
			y.style.display = "block";
		} else {
			y.style.display = "none";
		}

		let x = $desencriptar2;
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	
	}
	function validar(){
		let textoPlano = $textIn;
		if (!textoPlano) return alert(`No hay texto para encriptar`);
	   
	   if (typeof textoPlano !== "string") return alert(`Solo letras minusculas y sin acentos.`);  
	   
	    }

	function encriptar() {
		let text = $textIn.value;
		text = text
		  .replace(/e/gi, "enter")
		  .replace(/i/gi, "imes")
		  .replace(/a/gi, "ai")
		  .replace(/o/gi, "ober")
		  .replace(/u/gi, "ufat");
		  $textOut.value = text;
	  }

	function desencriptar() {
		let text = $textIn.value;
		text = text
		  .replace(/enter/gi, "e")
		  .replace(/imes/gi, "i")
		  .replace(/ai/gi, "a")
		  .replace(/ober/gi, "o")
		  .replace(/ufat/gi, "u");
		  $textOut.value = text;
	  }

    $btnEncriptar.onclick = async () => {
		
		let textoPlano = $textIn.value;
		if (!textoPlano) {
			return alert("No hay texto para encriptar");
		}
				
		encriptar();
		mostrarOcultar();
		}
	$bntDesencriptar.onclick = async () => {
		
		let textoPlano = $textIn.value;
		if (!textoPlano) {
			return alert("No hay texto para encriptar");
		}
				
		desencriptar();
		}