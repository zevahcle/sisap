$(document).ready(function () {
    $(".fancybox").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        openOpacity: false,
        closeBtn: false,
        tpl: {
            next: '<a title="' + texts.data('next') + '" class="fancybox-nav fancybox-next"><span></span></a>',
            prev: '<a title="' + texts.data('previous') + '" class="fancybox-nav fancybox-prev"><span></span></a>',
        },
        helpers: {
            title: {
                type: 'over' // 'float', 'inside', 'outside' or 'over'
            },
            buttons: {
                tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="' + texts.data('previous') + '" href="javascript:;"></a></li><li><a class="btnPlay" title="' + texts.data('start_slideshow') + '" href="javascript:;"></a></li><li><a class="btnNext" title="' + texts.data('next') + '" href="javascript:;"></a></li><li><a class="btnToggle" title="' + texts.data('toggle_size') + '" href="javascript:;"></a></li><li><a class="btnClose" title="' + texts.data('close') + '" href="javascript:;"></a></li></ul></div>'
            }
        },
        onPlayStart: function () {
            $(".btnPlay").attr('title', texts.data('pause_slideshow'));
        }
    });
}
);