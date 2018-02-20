var gulp = require('gulp');
	sass = require('gulp-sass');
	sync = require('browser-sync');

gulp.task('sass', function() {//таск компилит все сассы в цсс 
	return gulp.src('sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('css'))
	.pipe(sync.reload({stream: true}))//и включает в себя автообновление браузер-синка
});

gulp.task('sync', function(){//запускает браузер-синк
	sync({
		server: {
			baseDir: '../src'
		},
		notify: false
	});
});

gulp.task('watch', ['sync', 'sass'], function(){//в этот таск включены таски sync и sass
	gulp.watch('sass/**/*.sass', ['sass']);//такс отслеживает изменения в сасс-файлах и сразу запускает галп сасс
	gulp.watch('../src/*.html', sync.reload);//отслеживает изменения в хтмл и запускает браузер синк
	gulp.watch('../src/js/**/*.js', sync.reload);//отслеживает изменения в js и запускает браузер синк

});

