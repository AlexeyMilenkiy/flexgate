// import './index.scss';
// import 'normalize.css';

import createMenu from '../menu/menu';

var menu = createMenu(['Main', 'About', 'Portfolio'], 'menu');

document.body.appendChild(menu);