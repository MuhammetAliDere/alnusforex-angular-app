/**
 * Created by muhammetali on 13.01.2017.
 */
alnusfxApp.directive('homeForm', ['$http', '$filter', '$rootScope', function ($http, $filter, $rootScope) {

    return{
        restict: 'E',
        replace: true,
        scope: {
            token: '@token',
            class: '@addClass'
        },
        link: function (scope) {

            scope.ajaxActive = $rootScope.ajaxActive;
            $rootScope.$watch('ajaxActive', function () {
                scope.ajaxActive = $rootScope.ajaxActive;
            });
            scope.$watch('ajaxActive', function () {
                $rootScope.ajaxActive = scope.ajaxActive;
            });

            scope.homeAjaxPasif = $rootScope.homeAjaxPasif;
            $rootScope.$watch('homeAjaxPasif', function () {
                scope.homeAjaxPasif = $rootScope.homeAjaxPasif;
            });
            scope.$watch('homeAjaxPasif', function () {
                $rootScope.homeAjaxPasif = scope.homeAjaxPasif;
            });



            scope.formData = {};
            scope.formData._x_token = scope.token;

            // dummy data
            // scope.formData.firstname =  window.location.pathname.substring(1) + " test_" + parseInt(Math.random() * 100000);
            // scope.formData.clientEmail = "test_"+ parseInt(Math.random() * 100000) +"@mail.com";
            // scope.formData.phone = parseInt(Math.random() * 10000000000);

            scope.submitAction = function(){
                scope.homeAjaxPasif = false;
                scope.ajaxActive = true;

                setTimeout(function () {
                    canceler.resolve();
                    scope.ajaxActive = false;
                    alertify.error("İşlem Tamamlanamadı.");
                    setTimeout(function () {
                        window.location = "/";
                    }, 5000);
                }, 30000);



                $http({
                    method: 'POST',
                    url: Routing.generate('new_lead'),
                    data: $.param(scope.formData, true),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    scope.ajaxActive = false;
                    scope.homeAjaxPasif = true;

                    window.location.href = Routing.generate('thankyou');

                }, function errorCallback(response) {

                    response.data.errors.forEach(function(elem){
                        alertify.error(elem)
                    });
                    console.log("error response", response);

                });

            };
            /** phoneFilter */
            scope.phoneFilter = function () {
                if( typeof scope.formData.phone != "undefined"){

                    if( String(scope.formData.phone).charAt(0) == "0" ){
                        scope.formData.phone = scope.formData.phone.substring(1);
                    }else if(scope.formData.phone.length > 10){
                        scope.formData.phone = scope.formData.phone.substring(0, 10);
                    }
                    scope.formData.phone = scope.formData.phone.replace(/[^0-9]/g, '');

                }
            };


        },
        templateUrl: 'bundles/main/app/directives/homeform/homeform_directive.html'
    }

}]);
