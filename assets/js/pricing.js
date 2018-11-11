"use strict";

$(document).on('change', '.st-pricing-switcher input[type="radio"]', function(e){
    e.preventDefault();
 
    var $self = $(this),
        $val  = $self.val(),
        $container = $('.st-pricing-wrapper');
 
    if ( !$val.length ) { return false; }
   
    $container.find('li[data-type="'+$val+'"]').addClass('is-selected');
    $container.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        $container.find('li[data-type]').each(function(){
            var $current = $(this),
                $type = $current.attr('data-type');
            if ( $type == $val ) {
                $current.addClass('is-visible').removeClass('is-hidden is-selected');
            } else {
                $current.removeClass('is-visible is-selected').addClass('is-hidden');
            }
        });
        $container.removeClass('is-switched');
        if($self.find('.st-pricing-list').hasClass('st-bounce-invert')) $container.toggleClass('reverse-animation');
    });
});