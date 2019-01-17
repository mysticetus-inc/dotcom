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

// vendor SASS
import "./styles/theme/now-ui-kit.scss";

// custom SASS
import "./styles/custom.scss";
import "./styles/main.scss";