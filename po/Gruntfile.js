module.exports = function(grunt) {

    grunt.initConfig({
        nggettext_extract: {
            pot: {
                files: {
                    'csr-toolbox.pot': [
                        'csr-toolbox/web/app/assets/**/*.html',
                        'csr-toolbox/web/app/assets/**/*.js',
                        'csr-toolbox/ui/app/assets/**/*.js',
                        'csr-toolbox/web/app/views/**/*.html',
                        '!csr-toolbox/web/app/views/**/rp.scala.html',
                        '../spec/config-extension/application.js'
                    ]
                }
            }
        },
        nggettext_compile: {
            all: {
                options: {
                    format: 'json'
                },
                files: [
                  {
                      expand: true,
                      dot: true,
                      cwd: '.',
                      dest: '../spec/languages',
                      src: ['*.po'],
                      ext: '.json'
                  }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-gettext');
};
