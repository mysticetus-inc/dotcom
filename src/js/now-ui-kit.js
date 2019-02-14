/*!

 =========================================================
 * Now-ui-kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

(function () {
	const config = {
		classList: {
			navbar: {
				transparent: 'navbar-transparent',
				color: ['navbar-white', 'bg-white']
			}
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
		navbar: {
			element: document.getElementById('navbar-fixed'),
			threshold: document.getElementById('navbar-fixed').getAttribute('color-on-scroll') || 0
		}
	};

	const mysticetus = {
		updateNavbar: () => {
			const scrollTop = document.documentElement.scrollTop,
						{ element: navbar, threshold} = config.navbar,
						{ transparent, color } = config.classList.navbar;
			
			const isNavTransparent = navbar.classList.contains(transparent);

			if (scrollTop > threshold) {
				if (isNavTransparent) {
					navbar.classList.add(...color);
					navbar.classList.remove(transparent);
				}
			} else {
				if (!isNavTransparent) {
					navbar.classList.remove(...color);
					navbar.classList.add(transparent);
				}
			}
		},
		init: () => {
			if (config.navbar.element) {
				mysticetus.updateNavbar();
				window.addEventListener('scroll', config.throttle(mysticetus.updateNavbar.bind(this), 100));
			}

			// is collapsable nav button visible?
			// if yes, setup click event for toggling mobile nav
		}
	}

	mysticetus.init();
}());

var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
    backgroundOrange = false,
		toggle_initialized = false;

window.addEventListener('load', () => {
	// $navbar = $('.navbar[color-on-scroll]');
	// scroll_distance = $navbar.attr('color-on-scroll') || 500;

	// if ($('.navbar[color-on-scroll]').length != 0) {
	// 		nowuiKit.checkScrollForTransparentNavbar();
	// 		$(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
	// }
})

$(document).on('click', '.navbar-toggler', function() {
    $toggle = $(this);

    if (nowuiKit.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        nowuiKit.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function() {
            $toggle.removeClass('toggled');
        }, 550);
    } else {
        setTimeout(function() {
            $toggle.addClass('toggled');
        }, 580);
        div = '<div id="bodyClick"></div>';
        $(div).appendTo('body').click(function() {
            $('html').removeClass('nav-open');
            nowuiKit.misc.navbar_menu_visible = 0;
            setTimeout(function() {
                $toggle.removeClass('toggled');
                $('#bodyClick').remove();
            }, 550);
        });

        $('html').addClass('nav-open');
        nowuiKit.misc.navbar_menu_visible = 1;
    }
});

nowuiKit = {
    misc: {
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function() {
        if ($(document).scrollTop() > scroll_distance) {
            if (transparent) {
                transparent = false;
								$('.navbar[color-on-scroll]')
									.removeClass('navbar-transparent')
									.addClass('navbar-white bg-white');
            }
        } else {
            if (!transparent) {
                transparent = true;
								$('.navbar[color-on-scroll]')
									.removeClass('navbar-white bg-white')
									.addClass('navbar-transparent');
            }
        }
    }, 17)
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};