import gulp from 'gulp';
import concat from 'gulp-concat'; //unifica os arquivos   
import cssmin from 'gulp-cssmin'; //minifica os arquivos css
import rename from 'gulp-rename'; //renomeia os arquivos/libs
import uglify from 'gulp-uglify'; //minifica os arquivos js
import image from 'gulp-image'; //minifica os arquivos img

export const tarefasCSS = () => {

    return gulp.src([
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        "./vendor/owl/css/owl.css",
        "./node_modules/font-awesome/css/font-awesome.css",
        "./vendor/jquery-ui-1.13.2.custom/jquery-ui-1.13.2.custom/jquery-ui.js",
        "./src/css/style.css"
        ]) //arquivos que ele vai buscar 
        //cada pipe eu passo uma task
        .pipe(concat('styles.css')) //unifica todos os arquivos que estão na pasta vendor em libs 
        .pipe(cssmin()) //faz a minificação nos arquivos css sem precisar passar parâmetros
        .pipe(rename({ suffix: '.min'})) //renomeio e adiciono o sufixo 'min', ficando libs.min.css. Também posso passar uma string como parâmetro ao invés do obejeto
        .pipe(gulp.dest('./dist/css')) //pasta onde ele vai jogar esses arquivos 
};

export const tarefasJS = () => {

    return gulp.src([
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js",
        "./vendor/owl/js/owl.js",
        "./vendor/jquery-mask/jquery.mask.js",
        "./vendor/jquery-ui-1.13.2.custom/jquery-ui-1.13.2.custom/jquery-ui.js",
        "./src/js/custom.js"
    ]) //para buscar arquivos js nesta pasta, também passo como array como path de arq do sistema
    .pipe(concat('scripts.js')) //unifica tudo em libs js
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'})) //adiciona o arquivo libs.min.js
    .pipe(gulp.dest('./dist/js')) //pipe de saída, que indica a pasta destino
};

export const tarefasIMG = () => {

    return gulp.src('./src/images/*') //para buscar arquivos img nesta pasta
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent:10,
        quiet: true
    }))
    .pipe(gulp.dest('./dist/images')) //pipe de saída, que indica a pasta destino
}

