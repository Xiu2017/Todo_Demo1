// 视图的更新

/**
 * 更新整个列表
 */
function refreshTodoList(todos){
    $(".todo-list").empty();
    for(let todo of todos){
        let li = createLi(todo.status, todo.content);
        $(".todo-list").append(li);
    }
}

/**
 * 创建单个Todo list项
 */
function createLi(status, content){
    let li = '' +
        '<li class="todo '+status+'">' +
            '<div class="view">' +
                '<input class="toggle" type="checkbox">' +
                '<label>'+content+'</label>' +
                '<button class="destroy"></button>' +
            '</div>' +
            '<input class="edit" type="text">' +
        '</li>';
    return li;
}