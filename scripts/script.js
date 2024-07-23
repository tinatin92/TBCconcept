document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');

    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');

        if (currentDropdown.classList.contains('active')) {
           
            document.querySelector('[data-dropdown-big]').classList.add('highlight');
        } else {
           
            document.querySelector('[data-dropdown-big]').classList.remove('highlight');
        }
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown !== currentDropdown) {
            dropdown.classList.remove('active');
        }
    });

    
    const anyActiveDropdown = document.querySelector('[data-dropdown].active');
    if (!anyActiveDropdown) {
        document.querySelector('[data-dropdown-big]').classList.remove('highlight');
    }
});
