$(document).ready(function () {
    $(".fancybox").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        openOpacity: false,
        closeBtn: false,
        tpl: {
            next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
            prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>',
        },
        helpers: {
            title: {
                type: 'over' // 'float', 'inside', 'outside' or 'over'
            },
            buttons: {
                tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
            }
        },
        onPlayStart: function () {
            $(".btnPlay").attr('title', "Pause slideshow");
        }
    });
}
);