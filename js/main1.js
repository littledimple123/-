/**
 * Created by a1 on 2017/5/23.
 */
//使用requirejs.config定义别名
requirejs.config({
    paths:{
        //定义jquery.js别名
        jquery:'jquery-1.11.3'
    }
});
//使用requirejs引入定义的模块jquery,两个参数，第一个是数组【】里面写模块名，引号引起来，多个模块名逗号隔开。函数中传参数
requirejs(['jquery','validata'],function($,validata){
    //验证jquery是否正确引入
    //$('body').css('background-color','#e4393c');
    //验证validata模块是否调用
    console.log(validata.isEqual(1,2));
});