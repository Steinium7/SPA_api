<template>
    <div>
        <nav>
            <router-link to="/home">Home</router-link>
            <router-link to="/create">Create</router-link>
        </nav>
        <form>
            <input type="text" placeholder="firstname" />
            <input type="text" placeholder="last name" />
            <input type="text" placeholder="address" />
            <input type="tel" placeholder="eg. 444 666 1212" />
            <input type="date" />
            <input type="email" placeholder="eg. johndign@gmail.com" />
            <button>submit</button>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
input,
button {
    display: block;
}
form {
    width: 50%;
    margin: auto;
    padding: 10px;
}
input {
    padding: 8px;
    margin: 3px auto;
    width: 80%;
    font-size: 20px;
}
button {
    padding: 4px 10px;
    margin: auto;
    font-size: 16px;
    letter-spacing: 2px;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
