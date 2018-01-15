// wrapper function
module.exports = function (grunt) {
    
    // Project configuration. Definimos tareas
    grunt.initConfig({
        
        // we can store the project settings from the package.json, import metadata
        pkg: grunt.file.readJSON('package.json'),
        
        jshint: { // se configura jshint
            // esto ejecuta la tare jshint:all
            all: ['Gruntfile.js', 'app/**/*.js'] // app/ todos los archivos .js 
        },
        
        watch: {
            files: ['Gruntfile.js', 'app/**/*.js'],// archivos que serán monitoreados
            tasks: ['jshint'] // tareas que serán ejecutadas cuando cambien los archivos
        },
        
        uglify: { // ver más opciones
            options: {
              banner: '/*!\n<%= pkg.name %>\nv: <%= pkg.version %>\nBy: <%= pkg.author %>\n<%= grunt.template.today("yyyy-mm-dd") %> */\n',
              footer: '\n/*Fin chido*/'
            },
            build: {
              src: 'app/**/*.js', // todos los archivos
              dest: 'build/<%= pkg.name %>.min.js' // arma un solo archivo
            }
          }
    });
    
    // después de instalar el paquete, lo ponemos aquí para que sea cargado
    grunt.loadNpmTasks('grunt-contrib-jshint'); // <-- libreria instalñada con npm
    grunt.loadNpmTasks('grunt-contrib-watch'); // <-- libreria instalñada con npm
    grunt.loadNpmTasks('grunt-contrib-uglify'); // <-- libreria instalñada con npm
    
    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);
    
};
