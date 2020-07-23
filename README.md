# SystemJS Loader Proof of Concept
An example repo of how to connect separate builds using an [import map](https://github.com/WICG/import-maps), [webpack externals](https://webpack.js.org/configuration/externals/), and [SystemJS](https://github.com/systemjs/systemjs).

### Test it in your browser
Run `npx serve` from the project root and navigate to the local server in your browser.

### Import maps
[Import maps](https://github.com/WICG/import-maps) provide a way to map a "bare import specifier", such as `"doc-center"` to a URL. This allows modules to lazy load and get references to the other modules without knowing the full URL.

### Webpack externals
[Webpack externals](https://webpack.js.org/configuration/externals/) is just a configuration option preventing webpack from including certain dependencies in the bundle. This allows dependencies to be reused across different modules and reduces the bundle sizes.

### SystemJS
[SystemJS](https://github.com/systemjs/systemjs) is a module loader that follows the [native ES modules spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), works in IE 11, and is a [library target in webpack](https://webpack.js.org/configuration/output/#outputlibrarytarget). This allows us to write native ES modules in our code and have them work exactly as expected at runtime, even in IE 11.

### How it works
`index.html` loads the import map and SystemJS. SystemJS loads `<script type="systemjs-module"` modules in parallel and finds any required dependencies. It will then load all of those dependencies in parallel and this process continues until all dependencies are loaded. Each module contains import specifiers of its dependencies so the dependency chain is essentially discovered at runtime. This is similar to the native ES modules spec.

We speed up part of this process by preloading modules we know will be used by every feature module. You can see toolkit is included in the `index.html` even though it is a nested dependency. If we remove it from `index.html`, everything will still work but toolkit will be downloaded at a later time.

### Node.js builds
There are Node.js builds included in the `dist` directories. These can be used for unit/integration tests.
