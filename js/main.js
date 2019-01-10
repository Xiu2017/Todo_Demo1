//
//  1、在历史数据加载完成后显示主体
//  2、根据存储记录中已选中的状态展示代办事项
//  3、输入框自动聚焦
//  4、待办事项不记录纯空格和空字符
//  5、输入不限字数、列表无上限
//  6、可输入和展示css html js vue等代码而不被执行
//  7、可单独删除某一项
//  8、可单独标记或取消标记某一项为"Completed"状态
//  9、双击待办任务可进行编辑，为空或者纯空格会被删除
//  10、可将全部待办事项状态置为"Active"或"Completed"
//  11、可统计状态为非"Completed"的数量
//  12、可清除所有状态为"Completed"的待办事项
//

const BASE_URL = "http://127.0.0.1:8088/todos";

/**
 * 网页加载完成时初始化数据
 */
$(function(){
    //加载数据
    getTodoList();
    //初始化输入框按键事件监听
    $(".new-todo").bind("keyup",function(event){
        if(event.keyCode === 13){
            addTodo(this.value);
        }
    });
});

/**
 * 添加待办事项
 */
function addTodo(value) {
    if(!isEmptyString(value)){
        insertTodo(value);
    }
}