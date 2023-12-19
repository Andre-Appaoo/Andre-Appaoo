const app = {
    init: function() {
        const burgerButton = document.querySelector('.burger');
        burgerButton.addEventListener('click', app.toggleShowHeaderNavItems);

        const headerNavLinks = document.querySelectorAll('.headerNav-link');
        headerNavLinks.forEach(function (link) {
            link.addEventListener('click', app.toggleShowHeaderNavItems);
        });
    },

    toggleShowHeaderNavItems: function() {
        const headerNavItems = document.querySelector('.headerNav-items');
        headerNavItems.classList.toggle('show-headerNav-items');
    }
}

document.addEventListener('DOMContentLoaded', app.init);