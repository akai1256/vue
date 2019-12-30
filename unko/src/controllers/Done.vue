<template>
    <div>
        <h1>完了したToDo</h1>
        <div class="list">
            <ul>
                <li v-for="todo in list" v-bind:key="todo.id" >
                    {{ todo.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import  { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({ list: 'todo/done' })
    },
}
</script>