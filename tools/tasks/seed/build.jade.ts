import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import { APP_DEST, APP_SRC } from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src(join(APP_SRC, '**', '*.jade'))
    .pipe(plugins.jade())
    .pipe(gulp.dest(APP_DEST));
};
