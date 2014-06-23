(function( $ ) {

    $.fn.hoverized = function( options ) {

        var settings = $.extend({
            width: '100%',
            height: '30px',
            color: '#f8f8f8',
            position: 'top',
            timer: 500,
            opacity: 1,
            inverse: false,
            endheight: 0

        }, options);

        var css = {};
        css['width'] = settings.width;
        css['height'] = settings.inverse == true ? settings.height : 0;
        css['background-color'] = settings.color;
        css['position'] = 'absolute';
        css[settings.position] = 0;
        css['opacity'] = settings.opacity;
        css['filter'] = 'alpha(opacity=' + settings.opacity * 100 + ')';

        var text = $(this).data('hoverized') === undefined ? '' : $(this).data('hoverized');
        var hoverized_ele = $('<div>').css( css );

        $(this).append(hoverized_ele);
        $(hoverized_ele).append('<span class="hoverized_text"><p>'+ text +'</p></span>');

        if( !settings.inverse ) {
            $(hoverized_ele).css( { display: 'none' } );
        }
        //else if( settings.inverse && )

        $( this ).hover( function() {
            settings.inverse === true ? hoverized_hide() : hoverized_show();
        },

        function() {
            settings.inverse === true ? hoverized_show() : hoverized_hide();
        });

        var hoverized_show = function() {
            $(hoverized_ele).css( { display : 'block' } ).stop( true, false ).animate( { height: settings.height, width: settings.width }, settings.timer);
        }

        var hoverized_hide = function() {
            $( hoverized_ele ).stop( true, false ).animate( { height : settings.endheight }, settings.timer, function() {
                if(parseInt(settings.endheight) > 0) return;

                $( this ).css( { display: 'none' } );
            });

        }

        return this;
    };

}( jQuery ));