module.exports = {
  build: [
    {
      src   : './assets/src/index.js',
      dest  : './assets/build/app.min.js',
      watch : './assets/src/**',
      raw   : {
        include: 'assets/src/**/*.glsl',
      }
    }
  ],
  serve: {
    dir: '.'
  }
}
