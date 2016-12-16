angular
.module('InternalApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ngTouch',
    'SharedApp'
])
.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('<{');
    $interpolateProvider.endSymbol('}>');
})
.controller('InternalController', function( $scope ){
    var $ctrl = this;

    $ctrl.init = function( pageData ){
        $ctrl.user = pageData.user;
        console.log('%cpageData', 'color:purple;', pageData);
    }
})
.controller('HeaderController', function( $scope, consts ){
    var $ctrl = this;
    $ctrl.consts = consts;

    $ctrl.init = function(){
    }
})
.controller('RoomListController', function( $scope ){
    var $ctrl = this;
    $ctrl.createRoomForm = null;

    $ctrl.init = function( pageData ){
        $ctrl.createRoomFormData = {};
        $ctrl.config = pageData.config;
        $ctrl.rooms = pageData.rooms;
        $ctrl.host = window.location.host;
        console.log('%c$ctrl', 'color:purple;', $ctrl);
    }

    // https://gist.github.com/mathewbyrne/1280286
    $ctrl.toSlug = function( str ){
        return str.toLowerCase()
                .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
                .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
                .replace(/^-+|-+$/g, ''); // remove leading, trailing -
    }

    $ctrl.onNameKeyup = function( e ){
        var slugInput = $ctrl.createRoomForm.slug;
        if( slugInput.$dirty ){
            return;
        }

        $ctrl.createRoomFormData.slug = $ctrl.toSlug( $ctrl.createRoomFormData.name );
    }

    $ctrl.modal = {
        show: false,
        open: function(){
            this.show = true;
            $('.app').css('overflow', 'hidden');
        },
        close: function(){
            this.show = false;
            $('.app').css('overflow', 'auto');
        },
        cancel: function(){
            this.close()
        },
        submit: function(){

        }
    };
})

;
