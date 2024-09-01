const box1 = document.getElementById('box-1');
const circle11 = document.getElementById('circle-11');
const circle12 = document.getElementById('circle-12');


const box2 = document.getElementById('box-2');
const circle21 = document.getElementById('circle-21');
const circle22 = document.getElementById('circle-22');

function activateBox(selectedBox, selectedCircle1, selectedCircle2) {
    // Remove styles from all boxes and circles
    box1.style.border = '1px solid #88888877';
    circle11.style.border = '3px solid #D9D9D9';
    circle12.style.backgroundColor = '#D9D9D9';

    box2.style.border = '1px solid #88888877';
    circle21.style.border = '3px solid #D9D9D9';
    circle22.style.backgroundColor = '#D9D9D9';

    // Add styles to the selected box and circles
    selectedBox.style.border = '1px solid #864AF9';  // Example style for box-border
    selectedCircle1.style.border = '3px solid #864AF9';  // Example style for circle-outer
    selectedCircle2.style.backgroundColor = '#864AF9';  // Example style for circle-inner
}

// Event listener for box1
box1.addEventListener('click', function () {
    activateBox(box1, circle11, circle12);
    console.log('box1 clicked');
});

// Event listener for box2
box2.addEventListener('click', function () {
    activateBox(box2, circle21, circle22);
    console.log('box2 clicked');
});

const fileUpload = document.getElementById('fileUpload');
const fileName = document.getElementById('fileName');

fileUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        fileName.textContent = `${file.name}`;
    } else {
        fileName.textContent = 'No file selected';
    }
});

const slider = document.getElementById("mySlider");
const sliderValue = document.getElementById("SliderValue");

slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value;
    previewText.style.fontSize = `${slider.value}px`;
});

slider.addEventListener('input', function() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(to right, #864AF9 0%, #864AF9 ${value}%, #D9D9D9 ${value}%, #D9D9D9 100%)`;
    slider.style.background.border = ``;
});

// Initialize the background on page load
slider.dispatchEvent(new Event('input'));

const color1 = document.getElementById('color1');
const colorPicker1 = document.getElementById('colorPicker1');
const colortext1 = document.getElementById('colortext1');
let colorvalue1 = '#FFFFFF';
const previewText = document.getElementById('previewText');

    colorPicker1.addEventListener('input', function() {
         // Update the background color of the div in real-time
        color1.style.background = colorPicker1.value;
        colortext1.value = colorPicker1.value;
        previewText.style.color = colortext1.value;

        if(color1.style.border === '1px solid red') {
            color1.style.border = '1px solid #000000B2';
            colortext1.style.border = '1px solid #000000B2';
            color1.style.background = colortext1.value;
        }
    });
    colortext1.addEventListener('input', function() {
    colorvalue1 = colortext1.value;

    if(colorvalue1.charAt(0) === '#'){
        color1.style.border = '1px solid #000000B2';
        colortext1.style.border = '1px solid #000000B2';
        color1.style.background = colortext1.value;
    }
    else{
        color1.style.border = '1px solid red';
        colortext1.style.border = '1px solid red';
        color1.style.background = '#FFFFFF';
    }
});


const color2 = document.getElementById('color2');
const colorPicker2 = document.getElementById('colorPicker2');
const colortext2 = document.getElementById('colortext2');
const previewBackground = document.getElementById('previewBackground');
let colorvalue2 = '#FFFFFF';

    colorPicker2.addEventListener('input', function() {
         // Update the background color of the div in real-time
        color2.style.background = colorPicker2.value;
        colortext2.value = colorPicker2.value;
        previewBackground.style.background = colortext2.value;
        if(color2.style.border === '1px solid red') {
            color2.style.border = '1px solid #000000B2';
            colortext2.style.border = '1px solid #000000B2';
            color2.style.background = colortext1.value;
        }
    });
    colortext2.addEventListener('input', function() {
    colorvalue2 = colortext2.value;

    if(colorvalue2.charAt(0) === '#'){
        color2.style.border = '1px solid #000000B2';
        colortext2.style.border = '1px solid #000000B2';
        color2.style.background = colortext2.value;
    }
    else{
        color2.style.border = '1px solid red';
        colortext2.style.border = '1px solid red';
        color2.style.background = '#FFFFFF';
    }
});



const pfp = document.getElementById('pfp');
const dropdown = document.getElementById('pfpdropdown');

    pfp.addEventListener('click', function() {
        dropdown.classList.toggle('not-present');
        dropdown.classList.toggle('present');
    });

