require.config({
    baseUrl: "libs/",
    paths: {
        'jq': "jquery-2.1.1.min",
        "handlebars": "handlebars-v4.0.11",
        "swiper": "swiper-3.4.2.min"
    }
})
require(['jq', 'handlebars', 'swiper'], function($, handlebars, swiper) {
    document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px';
    var tabArr = ['床品', '被套', '家具', '收纳', '布艺', '家饰'];
    new Swiper('.wrap', {
        pagination: ".page",
        paginationClickable: true,
        paginationBulletRender: function(swiper, index, className) {
            return '<span class="' + className + '">' + tabArr[index] + '</span>'
        }
    });

    $.ajax({
        url: "/index",
        dataType: "json",
        success: function(res) {
            var tpl = $('#tpl').html();
            var handl = handlebars.compile(tpl);
            var html = handl(res.bed);
            $('.main').html(html)
        }
    });
    $('.main').on('click', 'dl', function() {
        location.href = 'particulars.html';
    })
})