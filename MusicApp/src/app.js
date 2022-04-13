import page from '../node_modules/page/page.mjs';
import { renderNavigation } from './middlewares/navMiddleware.js';
page(renderNavigation)
page('/',homeView);
page.start();
