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
    //实例化一个对象
    var scroll=new scrollto.ScrollTo({
       // dest:500,
        //speed:2000
    })
    //$('body').css('background-color','#f00');
    //$.proxy 方法接受一个已有的函数，并返回一个带特定上下文的新的函数。
    $('#backTop').on('click', $.proxy(scroll.move,scroll));
    ////直接滑到顶部
    //$('#backTop').on('click',go);
    $('window').on('scroll',function(){
        checkPosition($(window).height())
    });
    checkPosition($(window).height());
    function move(){
        $('html,body').animate({scrollTop:0},800);
    }
    //直接滑到顶部
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
    //引用插件
    $('#backTop').backtop({
        mode:'go'
    })
})



































