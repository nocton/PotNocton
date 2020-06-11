<template>
    <div class="d-flex flex-column">
        <img id="img_icon" width="180" heigth="180" class="mb-1" :src="require('@/assets/' + img)" />
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