/**
 * Created by a1 on 2017/5/23.
 */
//define 定义模块 通过return实现内外互通
define(['jquery'],function($){
    return {
        isEqual:function(str1,str2){
            return str1===str2;
        }
    }
})
//简单的值对定义
define({
    color:'#ddd',
    size:'10px'

})