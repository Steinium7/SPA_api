<template>
    <div>
        {{ this.EmployeeData }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            EmployeeData: [],
        };
    },
    methods: {
        async modifyData() {
            // let data = getAllEmployees();
            const res = await fetch('http://localhost:3000/api/employee/'+this.$route.params.id);
            let data = await res.json();
            this.EmployeeData = Object.values(data);
            console.log(data)
        }
    },
    mounted(){
        this.modifyData()
    }
};
</script>

<style></style>
