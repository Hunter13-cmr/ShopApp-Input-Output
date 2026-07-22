
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
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
    'index.csr.html': {size: 328, hash: '13bd366e0359feb7d934d58924bf5834adc78eb774f2751d572f0be8d3af3599', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 868, hash: 'ca6364338104a30b3bd425fa65baf946f91c7dad4ba828e12f55f0b1774c933d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38648, hash: '4bf1abefd3d47d64828bffd6f645976d15f95b3804726431010a6dcbd7e54ad5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 38661, hash: 'a27cc0d844c57157395b8f5b85f71414c6d9d2a86c743718daa035a3abfbd760', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)}
  },
};
