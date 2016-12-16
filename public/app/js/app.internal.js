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

    $ctrl.init = function( pageData ){
        $ctrl.config = pageData.config;
        $ctrl.rooms = pageData.rooms;
    }
})

;
