/* Sass imports
========================================================= */

// Bootstrap @import
import 'bootstrap/scss/bootstrap.scss';

// Now UI Kit and Overrides
import './styles/styles.scss';


/* javascript imports
========================================================= */

// setup jQuery, because it's special
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Bootstrap JS
import 'popper.js';
import 'bootstrap';

// Now UI Kit js
import './js/now-ui-kit';