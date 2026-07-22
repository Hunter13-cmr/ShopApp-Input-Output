
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
    'index.html': {size: 36455, hash: '8a5a0a2eedec848b329de646a896a2f6e772cdb171a74550886d72bb3d66f756', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 36468, hash: 'c84fe369da559cb191323aea5a421493c727b7bf6b7e7b10bf76976f6b9f2763', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)}
  },
};
