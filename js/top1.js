/**
 * Created by a1 on 2017/5/26.
 */
requirejs({
    paths:{
        jquery:'jquery-1.11.3'
    }
});
/*
requirejs(['jquery','scrollto'],function($,scrollto){
    //ʵ����һ������
    var scroll=new scrollto.ScrollTo({
       // dest:500,
        //speed:2000
    })
    //$('body').css('background-color','#f00');
    //$.proxy ��������һ�����еĺ�����������һ�����ض������ĵ��µĺ�����
    $('#backTop').on('click', $.proxy(scroll.move,scroll));
    ////ֱ�ӻ�������
    //$('#backTop').on('click',go);
    $('window').on('scroll',function(){
        checkPosition($(window).height())
    });
    checkPosition($(window).height());
    function move(){
        $('html,body').animate({scrollTop:0},800);
    }
    //ֱ�ӻ�������
    function go(){
        $('html, body').scrollTop(0);
    }
    function checkPosition(pos){
        if($(window).scrollTop()>pos){
            $('#backTop').fadeIn();
        }else {
            $('#backTop').fadeOut();
        }
    }
});*/
requirejs(['jquery','backtop'],function($,backtop){
    /*new backtop.BackTop($('#backTop'),{
        mode:'move',
        pos:100,
        speed:2000
    })*/
    /*new backtop.BackTop($('#backTop'),{
        mode:'go',
        pos:100,
        speed:2000
    })*/
    //���ò��
    $('#backTop').backtop({
        mode:'go'
    })
})



































