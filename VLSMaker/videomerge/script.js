document.querySelector('.file-upload-container').addEventListener('change', function(event) {
    if (event.target.classList.contains('fileInput')) {
        const fileInput = event.target;
        const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file chosen';
        const output = fileInput.nextElementSibling; // Assuming <span> is the next sibling

        if (output && output.classList.contains('output')) {
            output.textContent = fileName;
        }
        
        // Apply styles to the SVG
        const svgIcon = fileInput.previousElementSibling; // Assuming <svg> is the previous sibling
        if (svgIcon && svgIcon.classList.contains('svgIcon')) {
            svgIcon.style.position = 'absolute';
            svgIcon.style.opacity = '0';
        }
    }
});
