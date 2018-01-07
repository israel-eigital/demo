/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// wrapper function
module.exports = function (grunt) {
    // Project configuration. Inicializate config object
    grunt.initConfig({
        // we can store the project settings from the package.json
        pkg: grunt.file.readJSON('package.json')
        
    });
};
