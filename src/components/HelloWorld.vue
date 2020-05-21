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
    <div v-if="!contato" id="bolinha_posi" @click="mostrar" class="position-fixed h-100 d-flex-align-items">
      <button id="bolinha">a</button>
    </div>
    <img id="img" height="300" class="position-fixed" src="@/assets/Group 8.png"/>
    <div v-if="contato" id="posicionamento" class=" position-fixed d-flex align-top justify-center">
       <div id="bolona" class=" position-fixed align-center d-flex justify-center">
          <b-button @click="mostrar" >X</b-button>
       </div>
    </div>
    <div id="posi_projetos" class=" d-flex flex-column justify-end">
      <div id="title" class=" d-flex justify-top">
        <p>Todos</p>
        <p>projetos</p>
      </div>
      <div id="projetos" v-bind:class="{compro:ver_projetos, sempro:!ver_projetos}" class="position-fixed shadow d-flex justify-center align-center">
        <b-button @click="ver_projetos=!ver_projetos, show=!show" >
          <p v-if="!show" >+</p>
          <p v-if="show" >-</p>
        </b-button>
      </div>
    </div>
    <div id="posi_projan" class="d-flex flex-column align-end">
      <div id="projan" v-bind:class="{comprojan:projan, semprojan:!projan} " class="position-fixed black d-flex justify-center align-center">
        <b-button @click="projan=!projan, show=!show" >
          <p v-if="!show" >+</p>
          <p v-if="show" >-</p>
        </b-button>
      </div>
      <div id="title" class="d-flex align-end">
        <p>Em</p>
        <p>processo</p>
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
        ver_projetos:false,
        projan:false,
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
#title{
  height:400px;
  width:100px;
}
#posi_projetos{
  min-width:300px;
  min-height:400px;
  margin-right:700px;
  margin-top:100px;
}
#projetos{
  min-height:350px;
  border-radius:15px;
  background-color:#EEEEEE;
}
#posi_projan{
  min-width:300px;
  min-height:400px;
  margin-bottom:150px;
}
#projan{
  min-height:350px;
  border-radius:15px;
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
#posicionamento{
  width:400px;
  height:500px;
}
#bolona{
  width:280px;
  height:280px;
  background-color:#151515;
  border-radius:200px;
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
  height: 470px;
}
.b{
  transition: height  0.5s;
  overflow: hidden;
  height : 0px;
}
.compro{
  -webkit-transition: min-width 0.7s;
  overflow: hidden;
  min-width: 600px;
}
.sempro{
  transition: min-width  0.5s;
  overflow: hidden;
  min-width : 300px;
}
.comprojan{
  -webkit-transition: min-width 0.7s;
  overflow: hidden;
  min-width: 800px;
}
.semprojan{
  transition: min-width  0.5s;
  overflow: hidden;
  min-width : 300px;
}
</style>
