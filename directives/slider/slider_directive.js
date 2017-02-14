/**
 * Created by muhammet.dere on 28.10.2016.
 */
/**
 * -Slider a add-class la class eklenebilir
 * orn: <slider add-class="className"></slider>
 *
 * -Slider type "area" veya "image" olmalı. varsayılan olarak image tanımlanır
 * orn: <slider type="area"></slider>
 *
 */


alnusfxApp.directive('slider', ['$http', '$sce', '$interval', function($http, $sce, $interval){

    // scope.slides = [
    //     {image: 'http://placehold.it/800x400', description: 'Image 00'},
    //     {image: 'http://placehold.it/800x401', description: 'Image 01'},
    //     {image: 'http://placehold.it/800x402', description: 'Image 02'},
    //     {image: 'http://placehold.it/800x403', description: 'Image 03'},
    //     {image: 'http://placehold.it/800x404', description: 'Image 04'}
    // ];
    var apiUrl = '';


    return{
        restrict: 'E',
        replace: true,
        scope: {
            addClass: '@addClass',
            type: '@type',
            testImg: '@testImg',
            dataurl: '@dataurl'
        },
        link: function(scope){
            console.log("lalala");
            scope.makeTrusted= function(html_code) {
                return $sce.trustAsResourceUrl(html_code);
            };

            scope.showAdvanced = function($event, type, url){

                if(typeof url != 'undefined'){
                    window.open(url, "_blank");
                }else{
                    return scope.$parent.showAdvanced($event, type);
                }
            };

            scope.addClass = scope.addClass ? scope.addClass : '';
            scope.type = scope.type ? scope.type : 'image';
            scope.dataUrl = scope.dataUrl ? scope.dataUrl : '';

            // test imajı
            if(scope.testImg && scope.type == 'image'){
                scope.slides = [
                    {image: scope.testImg, description: 'Image 00'},
                    {image: scope.testImg, description: 'Image 01'}
                ];
            }

            //$http.get('dummy_data/musteri_yorumlari.json')

            if(scope.dataurl){

                $http.get(apiUrl+scope.dataurl)
                    .then(function(resp){
                        scope.slides = scope.makeTrusted(resp.data);
                    });
            }

            scope.direction = 'left';
            scope.currentIndex = 0;

            scope.setCurrentSlideIndex = function (index) {
                scope.direction = (index > scope.currentIndex) ? 'left' : 'right';
                scope.currentIndex = index;
            };

            scope.isCurrentSlideIndex = function (index) {
                return scope.currentIndex === index;
            };

            scope.prevSlide = function () {
                scope.direction = 'left';
                scope.currentIndex = (scope.currentIndex < scope.slides.length - 1) ? ++scope.currentIndex : 0;
            };

            scope.nextSlide = function () {
                scope.direction = 'right';
                scope.currentIndex = (scope.currentIndex > 0) ? --scope.currentIndex : scope.slides.length - 1;
            };

            $interval(function () {
                scope.prevSlide();
            }, 7000);

        },
        templateUrl: function(elem, attr){

            var tempUrl;

            if(attr.type == 'html'){
                tempUrl = 'bundles/main/app/directives/slider/slider_directive_html.html';
            }else if(attr.type == 'comment'){
                tempUrl = 'bundles/main/app/directives/slider/slider_directive_comment.html';
            }else{
                tempUrl = 'bundles/main/app/directives/slider/slider_directive.html';
            }

            return tempUrl
        }
        //templateUrl: 'app/directives/slider/'+tempUrl
    };
}]);
