<template>
<div id="container">
  <div class="fixed-top">
      <v-stage ref="stage" :config="stageSize">
        <v-layer>
          <v-shape :config="{
          sceneFunc: function(context, shape) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(stageSize.width, 0);
            context.lineTo(stageSize.width, 36)
            context.lineTo(80,36);
            context.lineTo(0,0);
            context.closePath();

            context.fillStrokeShape(shape);
          },
          fill: 'black',
          stroke: 'black',
          strokeWidth: 4
        }"/>
      </v-layer>
    </v-stage>
  </div>
  <div v-bind:class="{pago:show, npago:!show}" id="conteir_img" class="align-center h-100 w-100 d-flex justify-center">
    <div v-if="!contato" @click="mostrar" class="h-100 d-flex-align-items">
      <button id="bolinha">a</button>
    </div>
    <img id="img" height="300" class="position-fixed" src="@/assets/Group 8.png"/>
    <div v-if="contato" id="posicionamento" class="d-flex align-top justify-center">
       <div id="bolona" class=" position-fixed align-center d-flex justify-center">
          <b-button @click="mostrar" >X</b-button>
       </div>
    </div>
  </div>
  <div class="fixed-bottom d-flex flex-column justify-center align-center">
     <button @click="show=!show, info=!info" id="btn">i</button>
     <div id="info" class="w-75" v-bind:class="{a:info, b:!info}"></div>
     <v-stage ref="stage" :config="stageSize">
        <v-layer>
          <v-shape :config="{
          sceneFunc: function(context, shape) {
            context.beginPath();
            context.moveTo(0, 36);
            context.lineTo(stageSize.width, 36);
            context.lineTo((stageSize.width-80),0);
            context.lineTo(0,0);
            context.closePath();

            context.fillStrokeShape(shape);
          },
          fill: ' black',
          stroke: 'black',
          strokeWidth: 4
        }"/>
      </v-layer>
  </v-stage>
  </div>
</div>
</template>

<script>
const width = window.innerWidth;
  export default {
  
    name: 'HelloWorld',
    data(){
      return{
        show:false,
        info:false,
        contato:false,
        stageSize: {
          width: width,
          height: 36
      }
      }
    },
    methods:{
      mostrar(){
        this.contato=!this.contato;
        this.show=!this.show;
      }
    }
  }
</script>

<style>
#container{
  height:100vh;
  weight:100vh;
  background:linear-gradient(to top right, white 50%, #ff2323 50%)
}
html{
overflow-y:hidden !important;
}
#img{
  -webkit-transform: rotate(-6deg);
}
#btn{
  font-size:24px;
  border-bottom:0px;
  border-top-left-radius:48px;
  border-top-right-radius:48px;
  background-color:#151515;
  color:white;
  width:100px;
  height:75px;
  font-family: Merriweather;
}
#info{
  background-color:#151515;
  border-top-left-radius:48px;
  border-top-right-radius:48px;
}
#bolinha{
  color:white;
  margin-top:80px;
  background-color:#151515;
  width:71px;
  height:71px;
  border-radius:50px;
}
#bolona{
  width:280px;
  height:280px;
  background-color:#151515;
  border-radius:200px;
}
#posicionamento{
  width:400px;
  height:500px;
}
.pago{
  -webkit-transition: background-color 0.5s;
  background-color:rgba(0, 0, 0, 0.4)
}
.npago{
  -webkit-transition: background-color 0.8s;
  background-color:transparent;
}
.a{
  -webkit-transition: height 0.7s;
  overflow: hidden;
  height: 450px;
}
.b{
  transition: height  0.5s;
  overflow: hidden;
  height : 0px;
}
</style>
