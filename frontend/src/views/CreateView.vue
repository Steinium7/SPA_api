<template>
    <form >
        <input type="text" placeholder="firstname">
        <input type="text" placeholder="last name">
        <input type="text" placeholder="address">
        <input type="tel" placeholder="eg. 444 666 1212">
        <input type="date">
        <input type="email" placeholder="eg. johndign@gmail.com">
        <button>submit</button>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    input,button{
        display: block;
    }
    form{
        width: 50%;
        margin: auto;
        padding: 10px;
    }
    input{
        padding: 8px;
        margin: 3px auto;
        width: 80%;
        font-size: 20px;
    }
    button{
        padding: 4px 10px;
        margin: auto;
        font-size: 16px;
        letter-spacing: 2px;
    }
</style>