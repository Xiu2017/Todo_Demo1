// 用于获取数据

/**
 * 获取所有Todo数据
 */
function getTodoList() {
    let url = BASE_URL + "/TodoServletApi?method=" + status;
    $.get(url, function (result) {
        refreshTodoList(result);
        //showToolsBar(result);
        getActiveTodoCount();
        getCompletedTodoCount();
    });
}

/**
 * 获取Active状态的Todo的数量
 */
function getActiveTodoCount() {
    let url = BASE_URL + "/TodoServletApi?method=count&status=Active";
    $.get(url, function (result) {
        showActiveTodoCount(result);
    });
}

/**
 * 获取Completed状态的Todo的数量
 */
function getCompletedTodoCount() {
    let url = BASE_URL + "/TodoServletApi?method=count&status=Completed";
    $.get(url, function (result) {
        showClearButton(result);
        toggleButton(result);
    });
}

/**
 * 将全部Todo状态标记为Active或Completed
 */
function toggleAll() {
    let url = BASE_URL + "/TodoServletApi?method=toggleAll";
    $.get(url, function (result) {
        handleResult(result);
    });
}

/**
 * 添加Todo
 */
function insertTodo() {
    let url = BASE_URL + "/TodoServletApi?method=insert";
    let formData = $("#new-todo-form").serialize();
    $.post(url, formData, function (result) {
        handleResult(result);
    });
}

/**
 * 删除Todo
 * @param {要删除的Todo的id} id 
 */
function deleteTodo(id) {
    let url = BASE_URL + "/TodoServletApi?method=delete";
    $.post(url, "id=" + id, function (result) {
        handleResult(result);
    });
}

/**
 * 更新Todo状态
 * @param {要更新Todo的id} id 
 * @param {要更新的状态} status 
 */
function updateTodoStatus(id, status) {
    let url = BASE_URL + "/TodoServletApi?method=update";
    let params = "id=" + id + "&status=" + status;
    $.post(url, params, function (result) {
        handleResult(result);
    });
}

/**
 * 更新Todo内容
 * @param {要更新Todo的id} id 
 * @param {要更新的内容} content 
 */
function updateTodoContent(id, content){
    let url = BASE_URL + "/TodoServletApi?method=update";
    let params = "id=" + id + "&content=" + content;
    $.post(url, params, function (result) {
        handleResult(result);
    });
}

/**
 * 删除状态为Completed的Todo
 */
function deleteCompletedTodo(){
    let url = BASE_URL + "/TodoServletApi?method=deleteAllCompleted";
    $.get(url, function(result){
        handleResult(result);
    });
}

/**
 * 增、删、改返回结果的处理
 */
function handleResult(result) {
    //如果操作成功，则刷新列表
    if (result && result > 0) {
        getTodoList();
    }
}