
let currentTitle = 1;
const totalTitles = 5;
const titles = document.querySelectorAll('.title');


showTitle(currentTitle);

document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentTitle < totalTitles) {
        currentTitle++;
        showTitle(currentTitle);
    }
});

document.getElementById('skipBtn').addEventListener('click', function() {

    hideAllTitles();
});

document.getElementById('yesBtn').addEventListener('click', function() {
    alert("You selected Yes");
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert("You selected No");
});


function showTitle(titleNumber) {
    hideAllTitles();
    const title = document.getElementById(titleNumber);
    if (title) {
        title.style.display = 'block';
    }
}


function hideAllTitles() {
    titles.forEach(function(title) {
        title.style.display = 'none';
    });
}
