angular
.module('ExternalApp', [
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
.controller('ExternalController', function( $scope ){

})
.controller('HeaderController', function( $scope, consts ){
    var $ctrl = this;
    $ctrl.consts = consts;

    $ctrl.init = function(){
    }
})
.controller('LandingController', function( $scope, consts ){
    var $ctrl = this;
    $ctrl.consts = consts;

    $('.app').addClass('show-gif');

    $ctrl.init = function( pageData ){
        $ctrl.rooms = pageData.rooms;
        // console.log('%c$ctrl.rooms ', 'color:purple;', $ctrl.rooms );
    }
})
.controller('RegisterController', function( $scope, consts ){
    var $ctrl = this;
    $ctrl.consts = consts;

    $ctrl.init = function(){
    }
})
.controller('LoginController', function( $scope, consts ){
    var $ctrl = this;
    $ctrl.consts = consts;

    $ctrl.init = function(){
    }
})

;
