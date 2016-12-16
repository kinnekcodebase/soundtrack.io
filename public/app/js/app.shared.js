angular
.module('SharedApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ngTouch'
])
.constant('consts', {
    appname: 'dsko',
    slogan: 'Vibe as a company'
})
.constant('colors', [
    'blue',
    'navy',
    'teal',
    'green',
    'orange',
    'red',
    'gray',
    'dark-gray',
    'magenta',
    'purple'
])
.component('roomCard', {
    templateUrl: '/partials/roomCard',
    bindings: {
        room: '<'
    },
    controller: [
        '$scope',
        '$element',
        '$attrs',
        'colors',
        function ($scope, $element, $attrs, colors ) {
            var $ctrl = this;

            $ctrl.color = _.shuffle( colors )[0];
        }
    ]
});
