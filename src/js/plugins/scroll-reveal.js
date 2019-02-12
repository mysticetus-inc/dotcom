import ScrollReveal from 'scrollreveal';

const commonOptions = {
	distance: '20px',
	easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
	delay: 150
}

ScrollReveal().reveal('.reveal-bottom', { 
	...commonOptions,
	origin: 'bottom',
	distance: '40px',
	duration: 800,
});

ScrollReveal().reveal('.reveal-left', {
	...commonOptions,
	origin: 'left',
	duration: 500,
});

ScrollReveal().reveal('.reveal-right', { 
	...commonOptions,
	origin: 'right',
  duration: 500,
});