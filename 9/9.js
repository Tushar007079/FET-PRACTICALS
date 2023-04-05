const menu = document.querySelector('#menu');
const myfunc = function (event) {
    const ps = document.querySelectorAll('p');
    for (let i = 0; i < ps.length; i++) {
        if (!ps[i].hasAttribute('hidden')) {
            ps[i].setAttribute('hidden', '');
        }
    }
    if (event.target.tagName == "H1") {
        const content =
            document.getElementById(event.target.nextElementSibling.id
            );
        content.hidden = !content.hidden
    }
};
menu.addEventListener('click', myfunc);