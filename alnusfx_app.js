/**
 * Created by muhammet.dere on 28.10.2016.
 */
var alnusfxApp = angular.module('AlnusfxApp', ['ngAnimate', 'ngAria','ngMaterial', 'satellizer', 'btford.socket-io', 'slickCarousel']);

alnusfxApp.config(['$sceProvider', '$authProvider', '$mdDateLocaleProvider', function($sceProvider, $authProvider, $mdDateLocaleProvider){

    $mdDateLocaleProvider.months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    $mdDateLocaleProvider.shortMonths = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];


    $sceProvider.enabled(false);

    $authProvider.google({
        clientId: '610122655087-d4tphhjhndipr8gre14l4uuh8at80t6c.apps.googleusercontent.com',
        redirectUri: window.location.origin,
        responseType: 'token'
    });

    $authProvider.facebook({
        clientId: '1601877573452157',
        responseType: 'token'
    });

    // $authProvider.twitter({
    //     clientId: 'CUKWTw2KjcK4H87ciasn4JbFz',
    //     responseType: 'token'
    // });

    $authProvider.twitter({
        name: 'twitter',
        url: '/auth/twitter',
        responseType:'token'
    });

    $authProvider.linkedin({
        clientId: '86l6cduo8xew72'
    });

    // $sceProvider.enabled(false);
    //
    // $routeProvider
    //
    //     .when('/', {
    //         templateUrl: '/pages/homePage.html?v='+Math.random(),
    //         controller: 'HomePageController'
    //     })
    //
    //
    //     .otherwise({
    //         templateUrl: '/pages/contentPage.html?v='+Math.random(),
    //         controller : 'ContentPageController'
    //     });

    //$locationProvider.html5Mode(true).hashPrefix('!');
    //$locationProvider.html5Mode(true);
    //LogglyLoggerProvider.inputToken('TOKEN').sendConsoleErrors(true);
}]);
