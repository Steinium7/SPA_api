<template>
  <div class="home">
    <div class="search">
      <input type="text" placeholder="search for a name">
      <button>search</button>
    </div>
    <div class="sort">
      <button>sort by first name</button>
      <button>sort by last name</button>
    </div>
    <FileList/>
  </div>
</template>

<script>
import FileList from '../components/FileList.vue';
// @ is an alias to /src

export default {
    components: { FileList }
}
</script>
<style scoped>
.search{
  width: 80%;
  padding: 5px;
}
.search input{
  font-size: 20px;
  padding: 8px;
  margin-right: 10px;
  width: 250px;
  color: #333;
}
.search button{
  font-size: 18px;
  padding: 7px;
  letter-spacing: 1px;
  cursor: pointer;
}
.sort{
  display: flex;
  justify-content: center;
}
.sort button{
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 4px;
  margin: 5px 10px;
}
</style>