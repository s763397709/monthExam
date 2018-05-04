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
    var tabArr2 = ['商品', '详情', '测评'];
    new Swiper('.wrap2', {
        pagination: ".page2",
        paginationClickable: true,
        paginationBulletRender: function(swiper, index, className) {
            return '<span class="' + className + '">' + tabArr2[index] + '</span>'
        }
    });
    $('#btn').on('click', function() {
        location.href = 'index.html';
    })
})