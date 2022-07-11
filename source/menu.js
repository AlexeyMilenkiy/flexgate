export default function (array, className) {
    var menu = document.createElement('ul');
    menu.className = className;
    var listItem = '';
    array.forEach(function(item) {
        listItem += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItem;
    return menu;
}