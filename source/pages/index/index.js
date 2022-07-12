import './index.scss'

import createMenu from '../menu/menu';

var menu = createMenu(['Main', 'About', 'Portfolio'], 'menu');

document.body.appendChild(menu);