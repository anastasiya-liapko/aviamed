<template>
    <div class="services">
        <div class="container">
            <router-link 
                :to="{name: 'service', params: { id: i }}"
                tag="a"
                class="service mb-3"
                v-for="i in 4" 
                style="border: 1px solid red">
                <div v-cloak>{{ i }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="sass">
    .service
        display: block
        height: 200px
</style>