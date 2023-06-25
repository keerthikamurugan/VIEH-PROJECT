// JavaScript code for redirection
window.onload = function () {
    const links = document.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            redirectToPage(href);
        });
    }

    function redirectToPage(page) {
        window.location.href = page;
    }
};
