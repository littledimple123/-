/**
 * Created by a1 on 2017/5/23.
 */
//ʹ��requirejs.config�������
requirejs.config({
    paths:{
        //����jquery.js����
        jquery:'jquery-1.11.3'
    }
});
//ʹ��requirejs���붨���ģ��jquery,������������һ�������顾������дģ���������������������ģ�������Ÿ����������д�����
requirejs(['jquery','validata'],function($,validata){
    //��֤jquery�Ƿ���ȷ����
    //$('body').css('background-color','#e4393c');
    //��֤validataģ���Ƿ����
    console.log(validata.isEqual(1,2));
});