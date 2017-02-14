/**
 * Created by muhammetali on 05.12.2016.
 */

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
alnusfxApp.factory('priceSocket', ['socketFactory', '$location', function (socketFactory, $location) {

    var path = (window.location.hostname != 'localhost' && window.location.hostname != '127.0.0.1') ? 'http://10.34.12.51:1337' : 'http://10.34.12.51:1337';

    var path = "ws://fiyatlar.alnustv.com:8080";
    var myIoSocket = io.connect(path);

    mySocket = socketFactory({
        ioSocket: myIoSocket,
    });

    return mySocket;
}]);


alnusfxApp.directive('prices', ['priceSocket', '$rootScope', function(priceSocket, $rootScope){

    return{
        restrict: 'E',
        replace: true,
        scope: {
            size: '@size'
        },
        link: function(scope){
            scope.data = [];
            scope.activeDatas = [];
            scope.fixSlickArray = [];

            scope.ajaxActive = $rootScope.ajaxActive;
            $rootScope.$watch('ajaxActive', function () {
                scope.ajaxActive = $rootScope.ajaxActive;
            });
            scope.$watch('ajaxActive', function () {
                $rootScope.ajaxActive = scope.ajaxActive;
            });

            for(var i=0; i<scope.size; i++){
                scope.fixSlickArray.push(i);
            }

            scope.showAdvanced = function($event, type){
                return scope.$parent.showAdvanced($event, type);
            };

            priceSocket.on('connect', function(){
                priceSocket.on('message',function(data){
                    scope.tmpData = angular.fromJson(data);

                    scope.data[scope.tmpData.symbol] = scope.tmpData;

                    // aktif dataların tutulduğu liste güncelleniyor
                    if (scope.activeDatas.indexOf(scope.tmpData.symbol) == -1){
                        scope.activeDatas.push(scope.tmpData.symbol);
                    }


                    // silme işlemi yapılıyor
                    if(scope.tmpData.action == 'remove'){
                        var deleteIndex = scope.activeDatas.indexOf(scope.tmpData.symbol);
                        scope.activeDatas.remove(deleteIndex);
                    }

                });
            });
        },
        templateUrl: 'bundles/main/app/directives/prices/prices_directive.html?v='+Math.random()
    }

}]);
