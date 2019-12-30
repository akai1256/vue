const state = {
    todoList: [
    ]
}

const getters = {
    notDone: state => state.todoList.filter(todo => !todo.isDone),
    done: state => state.todoList.filter(todo => todo.isDone)
}

const actions = {
    add({ commit }, title){
        commit('insertTodo', title)
    },
    complete({ commit }, id) {
        commit('done', id)
    }
}

const mutations = {
    done(state, id) {
        const todo = state.todoList.find(todo => id === todo.id)
        todo.isDone = true
    },
    insertTodo(state, title) {
        const todo = {}
        todo.title = title
        todo.isDone = false
        if (state.todoList.length == 0) {
            todo.id = 1
        } else {
            todo.id = 1
          
            for (let i = 0; i < state.todoList.length; i++) {
                if( state.todoList[i].id > todo.id ) {
                    todo.id = state.todoList[i].id
                }
            }
            todo.id++
          }
        state.todoList.push(todo)
    }
}

const todo = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

export default todo;