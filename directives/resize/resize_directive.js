/**
 * Created by muhammetali on 16.12.2016.
 */
alnusfxApp.directive('resize', [function(){

    return function (scope, element, attr) {

        // element.addListener('resize', function () {
        //     console.log("sdzfsdf");
        // });

        console.log("blalala");

        // var w = angular.element($window);
        // scope.$watch(function () {
        //     return {
        //         'h': w.height(),
        //         'w': w.width()
        //     };
        // }, function (newValue, oldValue) {
        //     scope.windowHeight = newValue.h;
        //     scope.windowWidth = newValue.w;
        //
        //     scope.resizeWithOffset = function (offsetH) {
        //
        //         scope.$eval(attr.notifier);
        //
        //         return {
        //             'height': (newValue.h - offsetH) + 'px'
        //             //,'width': (newValue.w - 100) + 'px'
        //         };
        //     };
        //
        // }, true);
        //
        // w.bind('resize', function () {
        //     scope.$apply();
        // });
    }
}]);