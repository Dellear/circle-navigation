
var items = document.querySelectorAll('.menuItem');

for (var i = 0, len = items.length; i < len; i++) {
    var item = items[i];
    item.style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / len) * i * Math.PI)).toFixed(4) + "%";

    item.style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / len) * i * Math.PI)).toFixed(4) + "%";
}

document.querySelector('.center').onclick = function (e) {
    e.preventDefault();
    var circleDom = document.querySelector('.circle');
    circleDom.classList.toggle('open');
}