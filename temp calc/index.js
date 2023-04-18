document.getElementById('convert').onclick = tempConvert;
document.getElementById('Reset').onclick = clearForm;

function tempConvert() {

    var fahrenheit = document.getElementById("fah").value;
    var celsius = document.getElementById("cel").value;

  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }



    document.getElementById('fah').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('cel').value = parseFloat(celsius).toFixed(1);
}


function clearForm() {
    document.getElementById('fah').value = '';
    document.getElementById('cel').value = '';
} 
