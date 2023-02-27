// Provides background image and greeting based on time of day
function changeBackground() {
    var element = document.body;
    if (element.classList.contains("dark-mode")) {
        document.getElementById("time").innerHTML = "Good Night";
        element.style.backgroundImage = "url('images/best night.svg')";
    } else {
        document.getElementById("time").innerHTML = "Good morning";
        element.style.backgroundImage = "url('images/best day.svg')";
    }
}

$(document).ready(function () {
    changeBackground();
});

// Create a function to change the background image on toggle
function changeBackgroundToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        document.getElementById("time").innerHTML = "Good Night";
        element.style.backgroundImage = "url('images/best night.svg')";
    } else {
        document.getElementById("time").innerHTML = "Good morning";
        element.style.backgroundImage = "url('images/best day.svg')";
    }
    // Update the background image when the sun is clicked
    changeBackground();
    $('.sun-checkbox').toggleClass('sun-checked');
}

$(document).ready(function () {
    $('.sun').click(function () {
        $(this).find('i').toggleClass('fa-solid fa-sun fa-solid fa-moon');
        changeBackgroundToggle();
    });
});
