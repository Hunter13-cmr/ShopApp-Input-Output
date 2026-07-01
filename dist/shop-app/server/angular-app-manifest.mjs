
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1037, hash: '81a7234adfae91f41cf74162a68d91586cb9fbd9f4d7500a99badfbea2644888', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 886, hash: '4a575fd90f69fdd73916a03f65facff8d738e7b82b885cef1b8ef7071db89296', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19971, hash: '61c1edf4e51dd377aeb857fcae96b4b92a13fc7b8d5b0e910f1c6ac1282f85de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 19990, hash: '869f8311acf2f0c611ab3983d51b63cad0f3b37ece50e6c5e2c9c0fb9f577631', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-GJC46C3I.css': {size: 75753, hash: 'caXf9yqNx5Q', text: () => import('./assets-chunks/styles-GJC46C3I_css.mjs').then(m => m.default)}
  },
};
