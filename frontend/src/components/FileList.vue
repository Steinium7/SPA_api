<template>
    <div class="list">
        <div v-for="name in main" :key="name" class="name">
            <a href= @directedLink(name[0])> {{ name[1] }}, {{ name[2] }} </a>
        </div>
    </div>
</template>

<script>
import { getAllEmployees } from '@/services/EmployeeService';
export default {
    data() {
        return {
            main: [],
        };
    },
    methods: {
        // write any function you want to use over here
        async modifyData() {
            // let data = getAllEmployees();
            const res = await fetch('http://localhost:3000/api/all');
            let data = await res.json();
            this.main = Object.values(data);
            // console.log(data)
        },

        directedLink(id){
            return "http://localhost:3000/api/" + id
        }
    },
    created() {
        // do your fetch request here and store the data in the data like ive done
        this.modifyData();
    },
};
</script>

<style>
.list {
    width: 70%;
    border: 1px solid #ccc;
    padding: 15px;
    padding-bottom: 0;
    margin: 20px auto;
}
.name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: larger;
    border-bottom: 1px solid #ccc;
    padding: 8px;
}
</style>
