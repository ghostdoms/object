var pictab = function(opt) {

    var def = {
        "width": 520,
        "height": 280,
        "picnum": 3,
        "speed": '1000'
    };

    for (i in opt) {
        if (opt.hasOwnProperty(i)) {
            def[i] = opt[i]
        }
    };

    console.log(def)
    this.picwidth = def.width;
    this.picheight = def.height;
    this.picnum = def.picnum;
    this.speed = def.speed;
    this.timer = null;
    this.inde = 0;
};
pictab.prototype = {
    $: function(ele) {
        return document.getElementById(ele);
    },
    init: function() {
        var that = this;
        var wrap = that.$('wrap');
        var ulbox = that.$('ulbox');
        var olbox = that.$('olbox');
        wrap.style.cssText = "width: " + that.picwidth + "px;height: " + that.picheight + "px;"
        ulbox.style.cssText = "width: " + (that.picwidth * that.picnum) + "px;height: " + that.picheight + "px;";
        that.tab();
    },
    tab: function() {
        var that = this;
        var ollist = olbox.getElementsByTagName('li');
        clearInterval(that.timer);
        that.timer = setInterval(tabpic, that.speed);

        function tabpic() {
            if (that.inde >= that.picnum - 1) {
                that.inde = 0;
            } else {
                that.inde++;
            };
            for (var j = 0; j < ollist.length; j++) {
                ollist[j].className = "";
                ollist[that.inde].className = "active";
            };
            ulbox.style.left = -(that.inde * that.picwidth) + "px";
        };
        ulbox.onmouseleave = function() {
            clearInterval(that.timer);
            that.timer = setInterval(tabpic, that.speed);
        };
        that.clicks();
    },
    clicks: function(i) {
        var that = this;
        var ollist = olbox.getElementsByTagName('li');
        for (var i = 0; i < ollist.length; i++) {
            ollist[i].index = i;
            ollist[i].onclick = function() {
                clearInterval(that.timer);
                for (var j = 0; j < ollist.length; j++) {
                    ollist[j].className = "";
                    this.className = "active";
                }
                ulbox.style.left = -(this.index * that.picwidth) + "px";
            };

        };
    }
}
var obj = new pictab({
    "width": 520,
    "height": 280,
    "picnum": 3,
    "speed": '3000'
});
obj.init();
