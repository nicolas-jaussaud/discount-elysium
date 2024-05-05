export default {
  build: [
    {
      src   : './assets/src/index.js',
      dest  : './assets/build/app.min.js',
      watch : './assets/src/**',
      raw   : {
        include : 'assets/src/**/*.glsl',
      },
      importToGlobal : {
        three : 'window.discore.THREE'
      },
    }
  ],
  serve: {
    dir: '.'
  }
}
