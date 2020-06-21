<template>
    <div v-on:mouseover="mostrarsub" v-on:mouseout="sub=!sub" v-bind:class="{hover:hover, nohover:!hover, mostrarsub:sub, escondersub:!sub}" class="d-flex flex-column align-items-center mx-1 mt-4" id="projeto" >
        <a target="_blank" :href="url" v-if="img" ><img id="img_img" :src="require('@/assets/' + img)"/></a>
        <img v-else src="https://picsum.photos/140/80?random=2"/>
        <p id="subtitulo" :href="url" class="font-weight-bold text-center mb-2">{{name}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                hover:false,
                sub:false,
            }
        },
        props:{
            url: String,
            name:String,
            img:String,
        },
        methods:{
            mostrarsub(){
                this.sub=!this.sub
            }
        },
        created: function (){
            setTimeout(()=>{
            this.hover=!this.hover
           },300)
        }
    }
</script>

