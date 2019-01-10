// 用于获取数据

/**
 * 获取所有Todo数据
 */
function getTodoList() {
    $.ajax({
        url: BASE_URL + "/TodoServletApi?method=all",
        success: function (result) {
            let todos = JSON.parse(result);
            refreshTodoList(todos);
        }
    });
}

/**
 * 添加Todo
 */
function insertTodo(content) {
    $.ajax({
        url: BASE_URL + "/TodoServletApi?method=insert",
        method: 'POST',
        data: 'content='+content,
        success: function (){
            $(".new-todo").value("");
            getTodoList();
        },
        error: function(error){
            console.log(error.statusText);
        }
    });
}