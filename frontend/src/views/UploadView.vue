<template>
    <div class="main">
        <h1>Upload File here</h1>
        <div class="upload">
            <form @submit.prevent="sendFile"  method="post" enctype="multipart/form-data">
                <input type="file" @change="previewFiles" ref="myfile" name="employeeData" id="employeeData" />
                <button type="Submit">Upload</button>
            </form>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            file:{},
            isposting: true
        }
    },
    methods:{
        previewFiles(){
            this.file = this.$refs.myfile.files[0];
            console.log(this.$refs.myfile.files[0])
        },
        sendFile(){
            console.log(this.$refs.myfile.files[0])
            fetch("http://localhost:3000/api/upload",{
                method:'POST',
                body: this.file
            }).then(() =>{
                console.log("uploaded")
                this.isposting = false
            })
            // your post request here
        }
    }
};
</script>

<style scoped>
.upload {
    width: 500px;
    height: 250px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.main {
    height: 95vh;
    width: 95wh;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.link {
    text-decoration: none;
    padding: 7px;
    border: 1px solid cyan;
    border-radius: 10px;
    
}
</style>
