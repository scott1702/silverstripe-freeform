let mix = require('laravel-mix');

mix.js('client/src/app.js', 'client/dist')
   .sass('src/app.scss', 'client/dist')
   .setPublicPath('client/dist');
