<template>
    <router-link :to="{ path: `/employeeview/${this.id}` }">
        <div class="namee">{{ this.first }}, {{ this.last }}</div>
    </router-link>
</template>

<script>

export default {
    props: ['id','first', 'last'],
    data() {
        return {};
    },

};
</script>

<style scoped>
a {
    text-decoration: none;
}
.namee {
    color: #555;
}
</style>
