var
    gulp                = require('gulp'),
    plugins             = require('gulp-load-plugins')(),
    config              = require('../config').copy;

// Copy files
gulp.task('copy', function() {

  gulp.src(config.layout_src)
  .pipe(gulp.dest(config.layout_build));

  gulp.src(config.snippets_src)
  .pipe(gulp.dest(config.snippets_build));

  gulp.src(config.templates_src)
  .pipe(gulp.dest(config.templates_build));

  // fonts and font icons
  gulp.src(config.font_src)
  .pipe(plugins.flatten())
  .pipe(gulp.dest(config.font_build));

  // Shopify config files
  gulp.src(config.config_src)
  .pipe(gulp.dest(config.config_build));

});