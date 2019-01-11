// 视图的更新

/**
 * 更新整个列表
 */
function refreshTodoList(todos) {
    $(".new-todo").val("");
    $(".todo-list").empty();
    for (let todo of todos) {
        let li = createLi(todo.id, todo.status, todo.content);
        $(".todo-list").append(li);
    }
}

/**
 * 创建单个Todo list项
 */
function createLi(id, status, content) {
    //todo状态转为样式名称
    let className = status.toLowerCase();
    //根据todo状态改变checkbox的选中
    let checked = "";
    if (className == "completed") {
        checked = 'checked="checked"';
    }
    //拼接li元素
    let li = '<li class="todo ' + className + '">' +
        '<div class="view">' +
        '<input class="toggle" type="checkbox" ' + checked + ' value="' + id + '">' +
        '<label>' + content + '</label>' +
        '<button class="destroy"></button>' +
        '</div>' +
        '<input class="edit" type="text">' +
        '</li>';
    return li;
}

/**
 * 选择过滤状态
 */
function selectFilterTab() {
    let filterElement = $("a[href='#/" + status + "']");
    $(".filters li a").removeClass("selected");
    $(filterElement).addClass("selected");
}

/**
 * 显示Active数量
 * @param {Active状态Todo的数量} count 
 */
function showActiveTodoCount(count) {
    if(count && count > 0){
        $(".todo-count strong").text(count + " items left");
    }else{
        $(".todo-count strong").text("0 items left");
    }
}

/**
 * 根据Completed数量判断是否显示清除按钮
 * @param {Completed状态的Todo数量} count 
 */
function showClearButton(count){
    if(count && count > 0){
        $(".clear-completed").show();
    }else{
        $(".clear-completed").hide();
    }
}

/**
 * 判断toggleButton的状态
 * @param {Completed状态的Todo数量} count 
 */
function toggleButton(count){
    let todoCount = $("li.todo").length;
    if(todoCount == count){
        $(".toggle-all").attr("checked", true);
    }else{
        $(".toggle-all").attr("checked", false);
    }
}

/**
 * 工具条的显隐
 */
function showToolsBar(result){
    if(result && result.length > 0){
        $(".footer").show();
    }else{
        $(".footer").hide();
    }
}