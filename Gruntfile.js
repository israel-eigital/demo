// wrapper function
module.exports = function (grunt) {
    
    // Project configuration. Definimos tareas
    grunt.initConfig({
        
        // we can store the project settings from the package.json, import metadata
        pkg: grunt.file.readJSON('package.json'),
        // aún no var serveStatic = require('serve-static');

        // compile SASS
        /*
        sass: {
            dist: {
              files: [{
                expand: true,
                flatten: true,
                src: ['assets/source/sass/*.scss'],
                dest: 'assets/source/css/',
                ext: '.css'
              }]
            }
        },
        */

        // concat and minify CSS
        /*
        cssmin: {
            styles: {    
                files: {
                    'public/css/style.min.css': ['assets/source/css/*.css']
                }
            }
        },
        */

        
        jshint: { // se configura jshint
            options: [], // todas las tareas tienen opciones
            // esto ejecuta la tare jshint:all
            all: ['Gruntfile.js', 'app/**/*.js'] // app/ todos los archivos .js 
        },
        
        concat:{
            options: {
                separator: '',
                stripBanners: true,
                banner: '/*!\nConcat: <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist:{
                src: ['app/controllers/*.js'],
                dest: 'app/controllers/ctrls.js'
            }
        },
        
        watch: {
            files: ['Gruntfile.js', 'app/**/*.js'],// archivos que serán monitoreados
            tasks: ['jshint'] // tareas que serán ejecutadas cuando cambien los archivos
        },
        
        uglify: { // ver más opciones
            options: {
              banner: '/*!\nUglify  <%= pkg.name %>\nv: <%= pkg.version %>\nBy: <%= pkg.author %>\n<%= grunt.template.today("yyyy-mm-dd") %> */\n',
              footer: '\n/*Fin chido*/'
            },
            build: {
              src: 'app/**/*.js', // todos los archivos
              dest: 'build/<%= pkg.name %>.min.js' // arma un solo archivo
            }
        },
          
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: {
                        path: 'app',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    },
                    keepalive: true
                }
            }
        }
    });
    
    // después de instalar el paquete, lo ponemos aquí para que sea cargado
    grunt.loadNpmTasks('grunt-contrib-jshint'); // <-- libreria instalñada con npm
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    // Default task(s).
    grunt.registerTask('build', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('default', ['connect', 'watch']);
    
};
