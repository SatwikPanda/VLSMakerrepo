
function redirectAfterDelay() {
    setTimeout(function() {
        window.location.href = "../backgroundmusic/index.html";
    }, 3000);
}

const pfp = document.getElementById('pfp');
const dropdown = document.getElementById('pfpdropdown');

    pfp.addEventListener('click', function() {
        dropdown.classList.toggle('not-present');
        dropdown.classList.toggle('present');
    });
