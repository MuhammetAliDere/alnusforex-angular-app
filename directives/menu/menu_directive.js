/**
 * Created by muhammet.dere on 28.10.2016.
 */
alnusfxApp.directive('menu', [function(){

    return{
        restrict: 'E',
        replace: true,
        link: function(scope){
            $(function(){
                $('.dropdown').mouseenter(function(){
                    var self = $(this);
                    self.addClass('open');
                });

                $('.dropdown').mouseleave(function() {
                    var self = $(this);
                    self.removeClass('open');
                });

                $(document).on('click','.navbar-collapse.in',function(e) {
                    if( $(e.target).is('a') ) {
                        $(this).collapse('hide');
                    }
                });

                // alt menülerin mobil görünümde açılabilmesi için eklendi
                $('.dropdown-submenu>a').unbind('click').click(function(e){
                    $('.dropdown-submenu>ul').hide();
                    $(this).next('ul').toggle();
                    e.stopPropagation();
                    e.preventDefault();
                });
            });
        },
        templateUrl: 'bundles/main/app/directives/menu/menu_directive.html?v='+Math.random()
    }

}]);