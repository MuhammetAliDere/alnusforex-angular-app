/**
 * Created by muhammet.dere on 28.10.2016.
 */

/** Alertify Config */
// alertify.set('notifier','position', 'top-right');

alnusfxApp.controller('MainController', ['$scope', '$mdDialog', '$rootScope', '$filter', '$http', function($scope, $mdDialog, $rootScope, $filter, $http){

    $scope.disableDemoButon = false;
    $rootScope.ajaxActive = false;
    $rootScope.homeAjaxPasif = true;

    // $scope.$watch('tab', function (current, old) {
    //     console.log("$scope", $scope);
    // });


    $scope.showAdvanced = function(ev, type) {
        // default dialog type
        $rootScope.dialogType = type ? type : 'demo';
        $scope.disableDemoButon = !$scope.disableDemoButon;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: Routing.generate('new_lead'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                $scope.disableDemoButon = !$scope.disableDemoButon;
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
                $scope.disableDemoButon = !$scope.disableDemoButon;
            });
    };

    $scope.redirectToCustomerPanel = function(){
        window.open("http://musteripaneli.alnusforex.com/Account/", "_blank");
    };

    $(".announcements").on('click', function(e){
        var target = e.target;
        if(target.name == 'popup-link'){
            var data = JSON.parse(e.target.title);
            data.hideFooter = true;
            data.hideImg = true;
            $scope.showPopup(data);
        }
    });

    $scope.showPopup = function(data) {
        $mdDialog.show({
            controller: popupController,
            templateUrl: Routing.generate('analiz_popup'),
            parent: angular.element(document.body),
            locals: {
                item: data
            },
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                console.log("answer", answer);
            }, function() {
                // console.log("anlaliz datası çekilemedi.");
            });
    };

    function popupController($scope, $mdDialog, item) {
        $scope.item = item;
        $scope.isBigImg = false;
        $scope.changeImgStatus = function () {
            if(document.body.offsetWidth > 991){
                $scope.isBigImg = !$scope.isBigImg;
            }
        };

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }
    }

    /** Analizler Begin */
    // $scope.analizData = [
    //     {
    //         "title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //         "content": "dolar Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.",
    //         "author": "özgür cinbiş",
    //         "author_title": "Projeck Manager",
    //         "parite": "eurusd",
    //         "date": "2017-01-02 10:5:23"
    //     }
    // ];

    $scope.formatDate = function (date) {

        var dt = date.split(" ")[0].split("-");
        return dt[2]+"-"+dt[1]+"-"+dt[0];
    };


    $scope.postDate = new Date();
    $scope.dateFilter = $filter('date')($scope.postDate,'dd-MM-yyyy');

    $scope.getAnalizData = function () {
        //$scope.postDate
        $scope.dateFilter = $filter('date')($scope.postDate,'dd-MM-yyyy');
        // console.log("$scope.dateFilter", $scope.dateFilter);

        //$scope.postDate
        // console.log("$scope.pariteFilter", $scope.pariteFilter);



        // if($scope.analizData.length < 3){
        //     $scope.analizData.push({
        //         "title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        //         "content": "dolar Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.",
        //         "author": "özgür cinbiş",
        //         "author_title": "Projeck Manager",
        //         "parite": "usdtry",
        //         "date": "2017-01-02 10:5:23"
        //     });
        // }else{
        //     $scope.analizData = $scope.analizData.slice(-1);
        // }

        $scope.analizData = $scope.submitActionGeneral({"date":$filter('date')($scope.postDate,'yyyy-MM-dd'),"filter":$scope.pariteFilter}, Routing.generate("analizler"),
            function(respData){
                $scope.analizData = respData;
            }
        );

    };

    $scope.submitActionGeneral = function(data, url, func){

        //console.log(data);
        var formData = data;
        var formUrl = url;

        $scope.$parent.disableDemoButon = true;
        $http({
            method: 'POST',
            url: formUrl,
            data: $.param(formData),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function successCallback(response) {
            $scope.$parent.disableDemoButon = false;
            // this callback will be called asynchronously
            // when the response is available
            //console.log(response);
            func(response.data);

        }, function errorCallback(response) {

            response.data.errors.forEach(function(elem){
                alertify.error(elem)
            });
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("error response", response);

        });

    };


    // $scope.minDate = new Date(
    //     $scope.filterDate.getFullYear(),
    //     $scope.filterDate.getMonth() - 2,
    //     $scope.filterDate.getDate());
    //
    // $scope.maxDate = new Date(
    //     $scope.filterDate.getFullYear(),
    //     $scope.filterDate.getMonth() + 2,
    //     $scope.filterDate.getDate());
    /** Analizler End */


    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    };


    /** phoneFilter */
    $scope.phoneFilter = function () {
        //console.log("phoneFilter is running");
        if( typeof $scope.sikayetPhone != "undefined"){

            if( String($scope.sikayetPhone).charAt(0) == "0" ){
                $scope.sikayetPhone = $scope.sikayetPhone.substring(1);
            }else if($scope.sikayetPhone.length > 10){
                $scope.sikayetPhone = $scope.sikayetPhone.substring(0, 10);
            }
            $scope.sikayetPhone = $scope.sikayetPhone.replace(/[^0-9]/g, '');

        }
    };


    /** From Controller */
    function DialogController($scope, $mdDialog, $http, $auth, $rootScope, $q) {
        // popup form images links

        $scope.data = {
            demo : {
                header: "FOREX’İ ÜCRETSİZ ÖĞRENİN",
                content: "Forex hakkında herşeyi risk almadan ücretsiz öğrenin.",
                img: "/bundles/main/assets/images/demo_hesap_gorsel.png",
                link: "Ücretsiz Eğitime Başvur"
            },
            gercek : {
                header: "ALNUSFX AYRICALIKLARI İLE TANIŞIN",
                content: "Rekabetçi spreadler, kişiye özel müşteri temsilcisi, kişiye özel analizler ve dahası.",
                img: "/bundles/main/assets/images/gercek_hesap_gorsel.png",
                link: "Ücretsiz Eğitime Başvur"
            },
            alsat : {
                header: "REKABETÇİ FİYATLAR ALNUSFX’TE!",
                content: "AlnusFX ile ayrıcalıklı forex işlemlerine başlayın.",
                img: "/bundles/main/assets/images/forex_alsat_gorsel.png",
                link: "Ücretsiz Deneyin"
            },
            mt4 : {
                header: "METATRADER4 İNDİRİN",
                content: "AlnusFX işlem platformunu hemen indirin.",
                img: "/bundles/main/assets/images/mt4_indir_gorsel.png",
                link: "Metatrader4 indirin"
            },
            diamond : {
                header: "0,6 GÖRÜNCE AKLINIZA FOREX GELİYORSA DOĞRU YERDESİNİZ.",
                content: "EURUSD paritesinde 0,6 ile işlem yapmak ve diamond hesap ayrıcalıkları ile hemen tanışın.",
                img: "/bundles/main/assets/images/diamond_hesap_gorsel.jpg",
                link: "Detaylı Bilgi Alın"
            },
            lira : {
                header: "FOREX İŞLEMLERİNDE TÜRK LİRASI DÖNEMİ",
                content: "Türk lirası ile uluslar arası piyasalarda yatırım yapın.",
                img: "/bundles/main/assets/images/tl_hesap_gorsel.jpg",
                link: "Detaylı Bilgi Alın"
            }
        };
        $scope.getFormData = function (dataType) {

            return $scope.data[$rootScope.dialogType];
        };

        /** phoneFilter */
        $scope.phoneFilter = function () {
            //console.log("phoneFilter is running");
            if( typeof $scope.formData.phone != "undefined"){

                if( String($scope.formData.phone).charAt(0) == "0" ){
                    $scope.formData.phone = $scope.formData.phone.substring(1);
                }else if($scope.formData.phone.length > 10){
                    $scope.formData.phone = $scope.formData.phone.substring(0, 10);
                }
                $scope.formData.phone = $scope.formData.phone.replace(/[^0-9]/g, '');

            }
        };


        $scope.formData = {};
        $scope.test = 'test';
        /** Dummy data */
        // $scope.formData.firstname = "Muhammet Ali Dere";
        // $scope.formData.clientEmail = "mali@gmail.com";
        // $scope.formData.phone = "1234567890";


        $scope.dataesle = function(data){
            $scope.formData.firstname = data.name;
            $scope.formData.clientEmail = data.email;
            $scope.formData.phone = data.phone;
        };


        $scope.authenticate = function(provider) {
            $auth.authenticate(provider).then(function (response) {
                //console.log("response", response);
                switch (provider){
                    case 'facebook':
                        $http.get("https://graph.facebook.com/me?fields=id,name,email&access_token="+response.access_token)
                            .then(function(res){
                                $scope.dataesle(res.data);
                            });
                        break;
                    case 'google':
                        $http.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+response.access_token)
                            .then(function(res){
                                $scope.dataesle(res.data);
                            });
                        break;

                    case 'linkedin':
                            var user = {'name': response.data.firstName + " " + response.data.lastName, 'email': response.data.emailAddress, 'phone': ''};
                            $scope.dataesle(user);
                        break;
                    case 'twitter':
                        $http.get("https://api.twitter.com/oauth/authenticate?oauth_token="+response.oauth_token)
                            .then(function(res){
                                $scope.dataesle(res.data);
                            });
                        break;
                }

            });
        };


        /** SUBMİT */
        $scope.submitAction = function(){

            $scope.formData._x_token = $('.form-token').val();

            $rootScope.ajaxActive = true;

            var canceler = $q.defer();

            setTimeout(function () {
                canceler.resolve();
                $rootScope.ajaxActive = false;
                alertify.error("İşlem Tamamlanamadı.");
                setTimeout(function () {
                    window.location = "/";
                }, 5000);
            }, 30000);

            $http({
                method: 'POST',
                url: Routing.generate('new_lead'),
                data: $.param($scope.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
                timeout: canceler.promise
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $rootScope.ajaxActive = false;

                window.location.href = Routing.generate('thankyou');

            }, function errorCallback(response) {

                response.data.errors.forEach(function(elem){
                    alertify.error(elem)
                });
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("error response", response);

            });


        };



        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };

        /** Dialog Functions */
        $scope.openFromLeft = function() {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Yeni Hesap')
                    .textContent('Demo hesabınız başarıyla oluşturuldu.')
                    .ariaLabel('Left to right demo')
                    .ok('Tamam')
                    // You can specify either sting with query selector
                    .openFrom('#left')
                    // or an element
                    .closeTo(angular.element(document.querySelector('#right')))
            );
        };

        $scope.openOffscreen = function() {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Opening from offscreen')
                    .textContent('Closing to offscreen')
                    .ariaLabel('Offscreen Demo')
                    .ok('Amazing!')
                    // Or you can specify the rect to do the transition from
                    .openFrom({
                        top: -50,
                        width: 30,
                        height: 80
                    })
                    .closeTo({
                        left: 1500
                    })
            );
        };
    }

    /** content menu scroll handler */
    $(function () {
        if( $('.content-nav-wrap').length ) {
            //config
            var offsetTop = 170;
            var cntManuMrgTop = 60;
            var cntPageHeight = $('#cnt-block')[0].clientHeight;
            // var cntPageHeight = document.getElementsByClassName('cnt-block')[0].innerHeight;
            var cntMenuHeight = $('.content-nav-wrap').height();



            var top = $(window).scrollTop();

            $(document).scroll(function () {
                cntPageHeight = $('#cnt-block')[0].clientHeight;
                var fixTop = function () {
                    if ($('.content-nav-wrap').css("top").charAt(0) == "-") {
                        $('.content-nav-wrap').css("top", "0");
                    }
                };

                top = $(window).scrollTop();

                // position: fix
                if ((top >= offsetTop) && (top <= (cntPageHeight - cntMenuHeight - cntManuMrgTop)) ) {
                    fixTop();
                    if (!$('.content-nav-wrap').hasClass("fix")) {
                        $('.content-nav-wrap').addClass("fix");
                    }

                // position: bottom
                } else if (top >= (cntPageHeight - cntMenuHeight - cntManuMrgTop)) {
                    $('.content-nav-wrap').css("top", (cntPageHeight - cntMenuHeight - cntManuMrgTop - top));

                // position: top
                } else {
                    fixTop();
                    if ($('.content-nav-wrap').hasClass("fix")) {
                        $('.content-nav-wrap').removeClass("fix");
                    }
                }

                //console.log(top);
            });
        }
    });
}]);


