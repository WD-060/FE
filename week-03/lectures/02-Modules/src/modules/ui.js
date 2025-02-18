export const addTodo = (todo) => {
    const list = document.querySelector('.todo-list');
    const item = document.createElement('li');
    item.textContent = todo;
    list.appendChild(item);
};

export const addPost = (post) => {
    const list = document.querySelector('.post-list');
    const item = document.createElement('li');
    item.textContent = post;
    list.appendChild(item);
};

// export { addTodo, addPost };
