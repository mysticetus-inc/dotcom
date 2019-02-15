/*!

 =========================================================
 * Mysticetus Navbar
 =========================================================

 Utilizing pre-built logic put in place by Bootstrap, this file contains all
 the custom code for the navbar:
	- Mobile navbar show/hide
	- Fixed navbar color change on scroll

----------

 * Product Page: https://www.mysticetus.com/product
 * Copyright 2019 Mysticetus, LLC (http://www.mysticetus.com)
 * Licensed under MIT (https://github.com/mysticetus-inc/dotcom/blob/master/LICENSE)

 * Designed and coded by Tyler Goelz (https://github.com/yaboi)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */

(function () {
	const config = {
		global: {
			elements: {
				html: document.getElementsByTagName('html')[0]
			}
		},
		navbarFixed: {
			element: document.getElementById('navbar-fixed'),
			get: () => {
				const navbar = document.getElementById('navbar-fixed'),
							threshold = navbar.getAttribute('color-on-scroll') || 0,
							classList = {
								transparent: 'navbar-transparent',
								color: ['navbar-white', 'bg-white']
							};

				return { navbar, threshold, classList };
			}
		},
		navbarCollapse: {
			element: document.getElementById('navbar-toggle')
		},
		throttle: (func, wait, options ={}) => {
			var context, args, result;
			var timeout = null;
			var previous = 0;
	
			var later = function() 
			{
				previous = options.leading === false ? 0 : Date.now();
				timeout = null;
				result = func.apply(context, args);
				if (!timeout)
				{
					context = args = null;
				}
			};
			return function() {
				var now = Date.now();
				if (!previous && options.leading === false)
				{
					previous = now;
				}
				var remaining = wait - (now - previous);
				context = this;
				args = arguments;
				if (remaining <= 0 || remaining > wait) 
				{
					if (timeout) 
					{
						clearTimeout(timeout);
						timeout = null;
					}
					previous = now;
					result = func.apply(context, args);
					if (!timeout)
					{
						context = args = null;
					}
				}
				else if (!timeout && options.trailing !== false)
				{
					timeout = setTimeout(later, remaining);
				}
				return result;
			};
		},
	};

	const mysticetus = {
		_onNavbarToggleClick: (event) => {
			event.preventDefault();
			setTimeout(() => { // 14 Feb 2019 - @yaboi - timout seems necessary to coordinate this and bootstrap's jQuery
				config.global.elements.html.classList.toggle('nav-open');
			});
		},
		_onFixedNavbarScroll: () => {
			const navConfig = navConfig || config.navbarFixed.get();

			const { 
				navbar,
				threshold,
				classList: {
					transparent,
					color
				}
			} = navConfig;

			
			const scrollTop = document.documentElement.scrollTop;

			const isNavTransparent = navbar.classList.contains(transparent);

			if (scrollTop > threshold && isNavTransparent) {
				navbar.classList.add(...color);
				navbar.classList.remove(transparent);
			} else if (scrollTop < threshold && !isNavTransparent) {
				navbar.classList.remove(...color);
				navbar.classList.add(transparent);
			}
		},
		_fixedNavbarInit: () => {
			mysticetus._onFixedNavbarScroll();
		},
		init: () => {
			const {
				navbarFixed: {
					element: fixedNavbar
				},
				navbarCollapse: {
					element: navbarToggler
				}
			} = config;
			
			if (fixedNavbar) {
				mysticetus._fixedNavbarInit();
				window.addEventListener('scroll', config.throttle(mysticetus._onFixedNavbarScroll.bind(this), 200));
			}

			if (navbarToggler) {
				navbarToggler.addEventListener('click', mysticetus._onNavbarToggleClick.bind(this));
			}
		}
	}

	mysticetus.init();
}());