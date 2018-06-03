(function ($) {

    $.fn.circleNav = function (option) {
        var html = '',
            self = this;

        // navList
        if($.isArray(option.navList)) {
            html += '<div class="ring">';

            $.each(option.navList, function (i, item) {
                var left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / option.navList.length) * i * Math.PI)).toFixed(4) + "%",
                    top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / option.navList.length) * i * Math.PI)).toFixed(4) + "%";
                
                html += '<a href="' + (item.href || 'javascript:void(0);') + '" class="menuItem fa ' + item.iconClass + ' fa-2x" style="left: ' + left + '; top: ' + top + ';"></a>';
            });

            html += '</div>';
        }

        // 中间的按钮
        if (option.center  && option.center.iconClass) {
            html += '<a href="javascript:void(0);" class="center fa ' + option.center.iconClass + ' fa-2x"></a>';
        }

        // 生成DOM
        self.html(html);

        // 绑定事件
        self.off('click.circleNav').on('click.circleNav', '.center', function (e) {
            e.preventDefault();
            self.toggleClass('open');
        });

        return self;
    };
})(jQuery);