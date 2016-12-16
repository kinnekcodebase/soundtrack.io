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
    }
})
.controller('HeaderController', function( $scope, consts ){
    var $ctrl = this;
    $ctrl.consts = consts;

    $ctrl.init = function(){
    }
})
.controller('RoomListController', function( $scope, $http ){
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
        if( typeof str !== 'string' ){
            return '';
        }
        return str.toLowerCase()
                .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
                .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
                .replace(/^-+|-+$/g, ''); // remove leading, trailing -
    }

    $ctrl.onNameKeyup = function( e ){
        var slugInput = $ctrl.createRoomForm.slug;
        if( slugInput.$dirty && $ctrl.createRoomFormData.slug && $ctrl.createRoomFormData.slug.length > 0){
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
            if( $ctrl.createRoomForm ){
                $ctrl.createRoomForm.$setPristine();
                $ctrl.createRoomForm.$setUntouched();
            }

            $ctrl.createRoomFormData = {};

            this.close();
        },
        submit: function(){
            if( !$ctrl.createRoomForm.$valid ){
                return;
            }

            var params = {
                method  : 'POST',
                url     : '/rooms',
                data    : $.param($ctrl.createRoomFormData),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            };

            $http(params).then( this.onSubmitSuccess.bind(this), this.onSubmitError.bind(this) );
        },
        onSubmitSuccess: function( res ){
            console.log( res )
        },
        onSubmitError: function( err ){
            console.log( err )
        }
    };
})
;
