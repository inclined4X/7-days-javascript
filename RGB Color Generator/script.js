// for the range sliders for red, bluee and green

const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');


// for the span element , to update the 0 to specificc numbers when the slider is dragged
const redValueSpan = document.getElementById('redValue');
const greenValueSpan = document.getElementById('greenValue');
const blueValueSpan = document.getElementById('blueValue');


// for the color box which will be changing according to the slider , copy button for copying the values,
// the inputtype for the update of the rgb values

const colorBox = document.getElementById('color-box');
const copyButton = document.getElementById('copyButton');
const inputTypeRGBValue = document.getElementById('inputType');


redSlider.addEventListener('input', updateColor)
greenSlider.addEventListener('input', updateColor)
blueSlider.addEventListener('input', updateColor)
copyButton.addEventListener('click', copyRGBValue)


function updateColor(){

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;


    //console.log(redValue, greenValue, blueValue)

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    //console.log(rgbColor)


    colorBox.style.backgroundColor = rgbColor;


    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;


    inputTypeRGBValue.textContent = rgbColor



}


updateColor()


function copyRGBValue(){
     
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;


    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("RGB Color Value copied to Clipboard: " + rgbColor);
    })

    .catch((error)=>{
        console.error("Failed to copy RGB Values", error); 
    });

}