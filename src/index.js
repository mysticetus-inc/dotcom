// setup jQuery, because it's special
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// vendor JS
import 'popper.js';
import 'bootstrap';

// plugin JS
// for some reason this is getting put into main.js after now-ui-kit, so it goes boom
// import './js/plugins/nouislider.min';

// custom js
import './js/now-ui-kit';

// vendor Sass
import 'bootstrap/scss/bootstrap.scss';

// theme Sass
import './styles/theme/now-ui-kit.scss';

// child theme (theme override) Sass
import './styles/theme-child/now-ui-kit-child.scss';