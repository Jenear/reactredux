require('babel-core/register');

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
const flatten = require('gulp-flatten');

// const fix = false;

// function isFixed(file) {
//   console.log('file:', file.eslint, file.eslint.fixed);
//   return file.eslint !== null && file.eslint.fixed;
// }

const srcFiles = ['src/*.js', 'src/**/*.js', 'src/*.css', 'src/**/*.css'];

// const libFiles = ['lib/*.js', 'lib/**/*.js', 'src/*.css', 'src/**/*.css'];

gulp.task('flatten', () =>
  // flatten ALL js fils to lib/ at begin
  gulp
    .src(srcFiles)
    .pipe(flatten())
    .pipe(gulp.dest('lib'))
);

// gulp.task('eslint', ['flatten'], () =>
//   gulp
//     .src(libFiles)
//     .pipe(eslint({ fix }))
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError())
//     .pipe(gulpIf(isFixed, gulp.dest('lib')))
// );

gulp.task('watch', () => {
  // watch event, and flatten only CHANGED js file to lib/
  console.log(`
------------------------------------------------------------
|              Do NOT close this session.                  |
| gulp will watch changed file and auto flatten it to lib |
------------------------------------------------------------
`);
  return gulp.watch(srcFiles, (event) => {
    console.log('e', event, event.file);
    const file = event.path.split('/').pop();
    console.log('file', file, 'path', event.path);
    // console.log('Flatten: %s  -  %s',
    //   file.concat(Array(39 - file.length).join(' ')),
    //   new Date().toLocaleTimeString());
    gulp
      .src(event.path)
      .pipe(flatten())
      .pipe(gulp.dest('lib'));
  });
});
// gulp.task('default', ['flatten', 'watch']);
