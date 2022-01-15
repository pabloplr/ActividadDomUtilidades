window.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.getElementById('menu');
    const menu_items = 2;
    const submenu_items = 2;
    // ---------------------------------------------------------
    menu.appendChild(document.createElement('ul'));
    for (let i = 0; i < menu_items; i++) {
        menu.firstChild.appendChild(document.createElement('li'));
    }
    // ---------------------------------------------------------
    menu.firstChild.childNodes.forEach((element, index) => {
        element.innerHTML = 'Opcion ' + (index + 1);
        element.addEventListener('click', () => {
            activateMenu(element, index + 1);
        });
    });

    function activateMenu(parent, parent_index) {
        if (parent.childElementCount > 0) { //is open
            parent.innerHTML = "Opcion " + parent_index;
        } else { //menu close
            let u_list = document.createElement('ul');
            for (let i = 1; i <= submenu_items; i++) {
                let li_element = document.createElement('li');
                li_element.innerHTML = 'Subopción ' + parent_index + '.' + i;
                u_list.appendChild(li_element);
            }
            parent.appendChild(u_list);
        }
    }
});