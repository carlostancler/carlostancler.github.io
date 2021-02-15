const app = document.getElementsByClassName('app')[0];
const header = document.getElementsByClassName('header')[0];
const button = document.getElementsByClassName('button')[0];

const toggleClass = ( component, className ) => {
    if ( component.classList.contains(className) ) {
        component.classList.remove(className);
    } else {
        component.classList.add(className);
    }
};

app.addEventListener('scroll', e => {
    if ( e.currentTarget.scrollTop > 40 ) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

button.addEventListener('click', e => {
    const nav = e.currentTarget.parentNode;
    toggleClass(nav, 'active');
    toggleClass(header, 'menu-active');
});

if ( location.pathname.startsWith('/salas') ) {
    const sections = document.getElementsByClassName('section-title');
    for ( let i = 0; i < sections.length; i++ ) {
        const element = sections[i];
        element.addEventListener('click', e => {
            toggleClass(e.currentTarget.parentNode, 'active');
        });
    }
}
