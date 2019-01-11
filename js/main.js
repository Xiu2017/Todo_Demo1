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

var status = "all";
const BASE_URL = "http://127.0.0.1:8088/todos";

/**
 * 网页加载完成时初始化数据
 */
$(function(){
    //初始化要加载的Todo的状态
    setStatus(window.location.hash);
    //设置选显卡状态
    selectFilterTab();
    //加载数据
    getTodoList();

    //初始化输入框按键事件监听
    $(".new-todo").bind("keyup",function(event){
        if(event.keyCode === 13){
            addTodo(this.value);
        }
    });

    //为选中按钮绑定点击事件
    $("body").on("click", ".toggle", function(){
        todoStatus(this);
    });

    //为删除按钮绑定点击事件
    $("body").on("click", ".destroy", function(){
        let id = $(this).siblings(".toggle").val();
        deleteTodo(id);
    });

    //为状态过滤按钮绑定点击事件
    $(".filters li").bind("click", function(){
        filterTodo(this);
    });

    //为全选按钮绑定点击事件
    $(".main label").bind("click", function(){
        toggleAll();
    });

    //为label绑定双击事件
    $("body").on("dblclick", ".view label", function(){
        isCancleEdit = false;
        editMode(this);
    });

    //为edit编辑框绑定失焦事件和按键事件
    $("body").on("blur", "input.edit", function(){
        if(!isCancleEdit){
            editSuccess(this);
        }else{
            isCancleEdit = false;
        }
    });
    $("body").on("keyup", "input.edit", function(event){
        if(event.keyCode === 13){
            editSuccess(this);
        }else if(event.keyCode === 27){
            cancelEdit(this);
        }
    });

    //为清除Completed状态Todo按钮绑定点击事件
    $(".clear-completed").bind("click", function(){
        deleteCompletedTodo();
    });
});

/**
 * 取消编辑
 */
var isCancleEdit = false;  //取消编辑标记，解决和失焦事件发生冲突
function cancelEdit(element){
    isCancleEdit = true;
    $(element).val("");
    $("li.todo").removeClass("editing");
}

/**
 * 编辑完成
 */
function editSuccess(element){
    let id = $(element).siblings(".view").find(".toggle").val();
    let content = $(element).val();
    cancelEdit(element);
    if(isEmptyString(content)){
        deleteTodo(id);
    }else{
        updateTodoContent(id, content);
    }
}

/**
 * 编辑模式
 */
function editMode(element){
    let editElement = $(element).parent().parent();
    let editText = $(element).text();
    $(editElement).addClass("editing");
    $(editElement).find("input.edit").val(editText).focus();
}

/**
 * 过滤Todo
 */
function filterTodo(element){
    let filterElement = $(element).find("a:first");
    let filter = $(filterElement).attr("href");
    setStatus(filter);
    selectFilterTab();
    getTodoList();
}

/**
 * 更新todo的状态
 */
function todoStatus(element){
    let id = $(element).val();
    let todoStatus = $(element).is(":checked") ? "Completed" : "Active" ;
    updateTodoStatus(id, todoStatus);
}

/**
 * 添加待办事项
 */
function addTodo(value) {
    if(!isEmptyString(value)){
        insertTodo(value);
    }
}