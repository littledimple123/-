/**
 * Created by a1 on 2017/5/26.
 */
define(['jquery'],function($){
    //定义一个方法，参数传一个对象
    function ScrollTo(opts){
        // extend(dest,src1,src2,src3...);
        //  var newSrc=$.extend({},src1,src2,src3...)//也就是将"{}"作为dest参数。
        //将src1,src2,src3...合并到dest中,返回值为合并后的dest,不修改dest的结构
        this.opts= $.extend({},ScrollTo.DEFAULTS,opts);
        this.$el=$('html,body');
    }
    //把移动的方法放到原型上，(悠悠的)
    ScrollTo.prototype.move=function(){
        var opts=this.opts;
        //console.log(this)//指向的是单击返回顶部的按钮
        //滚动的位置是否等于目的地，不等于目的地并且不是运动的的时候执行animate,防止多次点击返回按钮时再下滑滚动条滚动不下来
        if($(window).scrollTop()!=this.opts.dest){
            if(!this.$sel.is(':animated')){
                this.$el.animate({
                    scrollTop:opts.dest
                },opts.speed);
            }
        }
    };
    //把移动的方法放到原型上，
    ScrollTo.prototype.go=function(){
        this.$el.scrollTop(this.opts.dest);
    };
    //初始化
    ScrollTo.DEFAULTS={
        dest:0,//滚动的目的地
        speed:800//滚动的速度
    };
    return {
        //把上面定义的ScrollTo方法返回
        ScrollTo:ScrollTo
    }
});