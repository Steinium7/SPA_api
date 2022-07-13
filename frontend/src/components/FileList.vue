<template>
    <div class="list">
        <div v-for="name in names" :key="name.age" class="name">{{name.name}}</div>
    </div>
</template>

<script>
export default {
    data (){
        return{
        names:[{name:'dkfjd',age:12},{name:'eirero',age:34},{name:'eirero',age:34},{name:'eirero',age:34},{name:'eirero',age:34}],
        }
    },
    methods:{
        // write any function you want to use over here
    },
    mounted(){
        // do your fetch request here and store the data in the data like ive done
    }
}
</script>

<style>
.list{
    width: 70%;
    border: 1px solid #ccc;
    padding: 15px;
    padding-bottom: 0;
    margin: 20px auto;
}
.name{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: larger;
    border-bottom: 1px solid #ccc;
    padding: 8px;
}

</style>