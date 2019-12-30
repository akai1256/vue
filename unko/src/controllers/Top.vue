<template>
    <div>
            <h1>トップ</h1>
            <p>やること</p>
            <input type="text" name="title" v-model="title">
            <input type="button" value="+" @click="add(title)">
            <router-link to="/list">いちらん</router-link>
            <router-link to="/done">おわったやつ</router-link>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return { title: '' }
    },
    methods: {
        ...mapActions({ add: 'todo/add'})
    }
}
</script>

<style scoped>

</style>