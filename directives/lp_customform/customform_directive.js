/**
 * Created by muhammetali on 18.01.2017.
 */
/*****
 * Template Index
 *
 * @landing.html.twig -> @form.html
 *
 * resp-1 -> scroolform
 *        -> resform
 *        -> msgform
 *
 * form_left_image_full -> mainform
 *
 * form_left_image_right -> mainform
 *
 * landing_page -> rightform
 *              -> siziarayalim
 *
 * nologo_dikey -> nologo_dikey
 *
 * nologo_yatay -> nologo_yatay
 *
 */
lpApp.directive('customForm', function ($http) {

    return {
        restrict: 'E',
        replace: true,
        scope: {
            token: '@token',
            class: '@class',
            buttonText: '@buttonText'
        },
        link: function (scope, element, attrs) {

            scope.formData = {};
            scope.formData._x_token = attrs.token;
            scope.buttonText = (typeof scope.buttonText != 'undefined') ? scope.buttonText : 'Ücretsiz Deneyin';

            /** dummy data */
            // scope.formData.firstname =  window.location.pathname.substring(1) + " test_" + parseInt(Math.random() * 100000);
            // scope.formData.clientEmail = "test_"+ parseInt(Math.random() * 100000) +"@mail.com";
            // scope.formData.phone = parseInt(Math.random() * 10000000000);

            scope.className = function (string) {

                var classes;
                classes = (typeof attrs.class != 'undefined') ? string.split(' ') : '';

                return classes;
            };

            scope.submitAction = function(){

                console.log("scope.formData;");
                $http({
                    method: 'POST',
                    url: Routing.generate('new_lead'),
                    data: $.param(scope.formData, true),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
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

            scope.contentUrl = 'bundles/main/app/directives/lp_customformss/' + attrs.templateName + '_directive.html';

            attrs.$observe("templateName",function(n) {
                scope.contentUrl = 'bundles/main/app/directives/lp_customform/' + n + '_directive.html';
            });
            console.log("attrs.templateName", attrs.templateName);

        },
        template: '<div ng-include="contentUrl"></div>'
    }

});
