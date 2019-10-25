// JavaScript source code


function menuToggle() {
    $('#burgerIcon').on('click', function () {
        $('.burgerMenu').toggle();
        $('.navBar').toggle();
        console.log('running the burgerDiv func');
    })
};

function aboutMeFunc() {
    $('#periodClick').on('click', function () {
        window.location.href = "about.html";
        console.log('aboutMeFunc is running');
    })
};

function homeFunc() {
    $('#homeButton').on('click', function () {
        window.location.href = "index.html";
        console.log('homeFunc is running');
    })
};


function renderFunctions() {
    $(menuToggle);
    $(aboutMeFunc);
    $(homeFunc);
}

$(renderFunctions);



