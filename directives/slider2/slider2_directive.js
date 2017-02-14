/**
 * Created by muhammetali on 08.12.2016.
 */
alnusfxApp.directive('slider2', [function(){

    return{
        restrict: 'E',
        replace: true,
        scope: {},
        link: function(scope, elem, attr){

            $(document).ready( function() {
                $('#myCarousel').carousel({
                    interval:   5000
                });
                var clickEvent = false;
                $('#myCarousel').on('click', '.nav a', function() {
                    clickEvent = true;
                    $('.nav li').removeClass('active');
                    $(this).parent().addClass('active');
                }).on('slid.bs.carousel', function(e) {
                    if(!clickEvent) {
                        var count = $('.main-banner-wrap .nav').children().length -1;
                        var current = $('.nav li.active');
                        current.removeClass('active').next().addClass('active');
                        var id = parseInt(current.data('slide-to'));
                        if(count == id) {
                            $('.main-banner-wrap .nav li').first().addClass('active');
                        }
                    }
                    clickEvent = false;
                });
            });
        },
        templateUrl: 'bundles/main/app/directives/slider2/slider2_directive.html?v='+Math.random()
    }

}]);