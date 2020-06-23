<template>
    <div class="d-flex flex-column">
        <img id="img_icon" class="mb-1 mx-5" :src="require('@/assets/' + img)" />
        <h1 id="nome" class="text-white">{{Nome}}</h1>
        <p id="function">{{Funct}}</p>
    </div>
</template>

<script>
export default{
    props:{
        img:String,
        Nome: String,
        Funct: String,
    }
}
</script>