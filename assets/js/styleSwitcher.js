
(function ($) {
    "use strict";
    var mainAppNew = {

        main_fun: function () {

            /*=====================================
             THEME SWITCHER SCRIPTS 
            ===================================*/
            jQuery('#switch-panel').click(function () {
                if (jQuery(this).hasClass('show-panel')) {
                    jQuery('.switcher').css({ 'left': '-50px' });
                    jQuery('#switch-panel').removeClass('show-panel');
                    jQuery('#switch-panel').addClass('hide-panel');
                } else if (jQuery(this).hasClass('hide-panel')) {
                    jQuery('.switcher').css({ 'left': 0 });
                    jQuery('#switch-panel').removeClass('hide-panel');
                    jQuery('#switch-panel').addClass('show-panel');
                }
            });

            $('#pink').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/pink.css');
            });
            $('#emerald').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/emerald.css');
            });
            $('#blue').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/blue.css');
            });
            $('#Brown').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/Brown.css');
            });
            $('#Olive').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/Olive.css');
            });
			$('#orange').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/orange.css');
            });
			$('#yellow').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/yellow.css');
            });
			$('#Green').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/Green.css');
            });
        },

        initialization: function () {
            mainAppNew.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainAppNew.main_fun();
    });

}(jQuery));
