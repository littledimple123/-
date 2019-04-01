/**
 * Created by a1 on 2017/5/27.
 */
define(['jquery','scrollto'],function($,scrollto){
    function BackTop(el,opts){
        this.opts= $.extend({},backTop.DEFAULTS,opts);
        this.$el=$(el);
        this.scroll=new scrollto.ScrollTo({
            dest:0,
            speed:this.opts.speed
        });
        this._checkPosition();
        if(this.opts.mode=='move'){
            this.$el.on('click', $.proxy(this._move,this));
        }else {
            this.$el.on('click', $.proxy(this._go,this));
        }
        $(window).on('scroll', $.proxy(this._checkPosition.this));
    }
    BackTop.DEFAULTS={
        mode:'move',
        pos:$(window).height(),
        speed:800
    }
    BackTop.prototype._move=function(){
        this.scroll.move()
    };
    BackTop.prototype._go=function(){
        this.scroll.go()
    };
    BackTop.prototype._checkPosition=function(){
        if($(window).scrollTop()>this.opts.pos){
            $el.fadeIn();
        }else {
            $el.fadeOut();
        }
    }
    //jquery插件
    $.fn.extend({
        backtop:function(){
            //防止class选中的是class，有多个
            return this.each(function(){
                new BackTop(this,opts)
            })


            //this指点击的按钮

        }
    })
    return {
        BackTop:BackTop
    };
});