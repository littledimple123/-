/**
 * Created by a1 on 2017/5/26.
 */
define(['jquery'],function($){
    //����һ��������������һ������
    function ScrollTo(opts){
        // extend(dest,src1,src2,src3...);
        //  var newSrc=$.extend({},src1,src2,src3...)//Ҳ���ǽ�"{}"��Ϊdest������
        //��src1,src2,src3...�ϲ���dest��,����ֵΪ�ϲ����dest,���޸�dest�Ľṹ
        this.opts= $.extend({},ScrollTo.DEFAULTS,opts);
        this.$el=$('html,body');
    }
    //���ƶ��ķ����ŵ�ԭ���ϣ�(���Ƶ�)
    ScrollTo.prototype.move=function(){
        var opts=this.opts;
        //console.log(this)//ָ����ǵ������ض����İ�ť
        //������λ���Ƿ����Ŀ�ĵأ�������Ŀ�ĵز��Ҳ����˶��ĵ�ʱ��ִ��animate,��ֹ��ε�����ذ�ťʱ���»�����������������
        if($(window).scrollTop()!=this.opts.dest){
            if(!this.$sel.is(':animated')){
                this.$el.animate({
                    scrollTop:opts.dest
                },opts.speed);
            }
        }
    };
    //���ƶ��ķ����ŵ�ԭ���ϣ�
    ScrollTo.prototype.go=function(){
        this.$el.scrollTop(this.opts.dest);
    };
    //��ʼ��
    ScrollTo.DEFAULTS={
        dest:0,//������Ŀ�ĵ�
        speed:800//�������ٶ�
    };
    return {
        //�����涨���ScrollTo��������
        ScrollTo:ScrollTo
    }
});