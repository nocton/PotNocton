<template>
    <div v-bind:class="{hover:hover, nohover:!hover}" class="d-flex flex-column align-items-center mx-1 mt-4" id="projeto" >
        <a :href="url" v-if="img" ><img width="130" class="mt-1" :src="require('@/assets/' + img)"/></a>
        <img v-else class="mt-1" src="https://picsum.photos/120/90?random=2"/>
        <p id="subtitulo" :href="url" class="font-weight-bold text-center mb-2">{{name}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                hover:false,
            }
        },
        props:{
            url: String,
            name:String,
            img:String,
        },
        created: function (){
            setTimeout(()=>{
            this.hover=!this.hover
           },300)
        }
    }
</script>

