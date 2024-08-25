document.addEventListener("DOMContentLoaded", function() {  
    document.getElementById('imprimirBtn').addEventListener('click', imprimirDatos);  
});  

function imprimirDatos() {  
    const input1 = document.getElementById('input1').value;  
    const input2 = document.getElementById('input2').value;  
    const select = document.getElementById('select').value;  
    const textarea = document.getElementById('textarea').value;  

    const datosFormulario = {  
        campo1: input1,  
        campo2: input2,  
        seleccion: select,  
        comentario: textarea  
    };  

    // Imprimir el objeto JSON en la consola  
    console.log("Datos del formulario:", JSON.stringify(datosFormulario, null, 2));  

    // Reiniciar el formulario  
    document.getElementById('miFormulario').reset();  
}