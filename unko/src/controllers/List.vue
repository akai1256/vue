<template>
    <div>
        <h1>いちらん</h1>
        <div class="list">
            <ul>
                <li v-for="todo in list" v-bind:key="todo.id" >
                    {{ todo.title }}
                    <input type="button" value="完了" @click="done(todo.id)">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({ list: 'todo/notDone' })
    },
    methods: {
        ...mapActions({ done: 'todo/complete'})
    }
}
</script>