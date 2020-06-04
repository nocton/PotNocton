<template>
    <div id="container">
        <!-- corte superior -->
        <div class="fixed-top">
            <v-stage ref="stage" :config="stageSize">
            <v-layer>
                <v-shape :config="{
                sceneFunc: function(context, shape) {
                    context.beginPath();
                    context.moveTo(0, 0);
                    context.lineTo(stageSize.width, 0);
                    context.lineTo(stageSize.width, 36)
                    context.lineTo(80,36*stageSize.div);
                    context.lineTo(0,0);
                    context.closePath();

                    context.fillStrokeShape(shape);
                },
                fill: '#041D34',
                stroke: '#041D34',
                strokeWidth: 4
                }"/>
            </v-layer>
            </v-stage>
        </div>

        <!-- logo e contato -->

        <div v-bind:class="{pago:show, npago:!show}" class="align-center h-100 w-100 d-flex justify-center">
            <div v-if="!contato" @click="mostrar" class="position-fixed h-100 d-flex-align-items">
                <button id="bolinha">a</button>
            </div>
            <div id="sombra_logo" class="position-fixed">
            </div>
            <img id="img" height="270" class="position-fixed" src="@/assets/Group 8.png"/>
            <div v-if="contato" id="posicionamento" class=" position-fixed d-flex align-top justify-center">
                <div id="bolona" class=" position-fixed align-center d-flex justify-center">
                    <b-button @click="mostrar" >X</b-button>
                </div>
            </div>
            <!--mostrar projetos completos (sombra lateral e sombrainferior incluidas, na sequência: sombralateral/(divprojetos/sombrainferior))-->
             <div id="sombralateral">
                <v-stage ref="stage" :config="stageSizeSombra">
                    <v-layer>
                    <v-shape :config="{
                    sceneFunc: function(context, shape) {
                        context.beginPath();
                        context.moveTo(80, 0);
                        context.lineTo(0, 60);
                        context.lineTo(80, 100000);
                        context.closePath();

                        context.fillStrokeShape(shape);
                    },
                    fill: 'rgb(0,0,0,0.3)',
                    stroke: '',
                    strokeWidth: 2
                    }"/>
                </v-layer>
                </v-stage>
            </div>
            <div>
                <div id="posi_projetos" class=" d-flex flex-column justify-end">
                    <div id="title" class="d-flex font-weight-bold position-fixed">
                        <p class="fixed" >Todos<br/>projetos.</p>
                    </div>
                    <div id="projetos" v-bind:class="{compro:ver_projetos, sempro:!ver_projetos}" class="position-fixed d-flex justify-center align-center">
                        <b-button @click="ajustar" >
                        <p v-if="!show" >+</p>
                        <p v-if="show" >-</p>
                        </b-button>
                    </div>
                    <div id="complementosombra" v-bind:class="{comprosombra:ver_projetos, semprosombra:!ver_projetos}">a</div>
                </div>
                <div id="sombrabaixa" v-bind:class="{comprosombra:ver_projetos, semprosombra:!ver_projetos}">
                    <v-stage ref="stage" :config="stageSizeSombraBaixa">
                        <v-layer>
                        <v-shape :config="{
                        sceneFunc: function(context, shape) {
                            context.beginPath();
                            context.moveTo(stageSizeSombraBaixa.width, 0);
                            context.lineTo(0, 200);
                            context.lineTo(0, 0);
                        
                            context.fillStrokeShape(shape);
                        },
                        fill: 'rgb(0,0,0,0.3)',
                        stroke: '',
                        strokeWidth: 2
                        }"/>
                    </v-layer>
                    </v-stage>
                </div>
            </div>
        <!-- mostrar projetos em andamento incluindo sombras, na sequencia (divprojan/sombra baixa)/sombralateral-->
        <div id="posi_projan" class=" d-flex flex-column align-end">
            <div id="projan" v-bind:class="{comprojan:projan, semprojan:!projan}" class="position-fixed black d-flex justify-center align-center">
                <b-button @click="ajustar2" >
                    <p v-if="!show" >+</p>
                    <p v-if="show" >-</p>
                </b-button>
            </div>
            <div id="complementosombradireita"></div>
            <div id="sombrabaixadireita" v-bind:class="{comsombra:projan, semsombra:!projan}" class="d-flex align-end">
                <v-stage ref="stage" :config="stageSizeSombraBaixaDireita">
                <v-layer>
                    <v-shape :config="{
                    sceneFunc: function(context, shape) {
                    context.beginPath();
                    context.moveTo(stageSizeSombraBaixaDireita.inicio,0);
                    context.lineTo(stageSizeSombraBaixaDireita.width, stageSizeSombraBaixaDireita.mudança)
                    context.lineTo(stageSizeSombraBaixaDireita.width, 0)
                    context.closePath();

                    context.font = '22px Fredoka One'; //Define Tamanho e fonte
                    context.fillStyle = 'white'; //Define a cor
                    context.fillText('Em', stageSizeSombraBaixaDireita.titulocima, 15);
                    context.fillText('Processo.',stageSizeSombraBaixaDireita.titulobaixo,35)
                    context.fillStrokeShape(shape);
                    },
                    fill: 'rgb(0,0,0,0.4)',
                    stroke: '',
                    strokeWidth: 2
                }"/>
                </v-layer>
                </v-stage>
            </div>
        </div>
        <div id="sombralateraldireita">
           <v-stage ref="stage" :config="stageSizeSombraLateralDireita">
                <v-layer>
                    <v-shape :config="{
                    sceneFunc: function(context, shape) {
                    context.beginPath();
                    context.moveTo(0, 6);
                    context.lineTo(40,40);
                    context.lineTo(stageSizeSombraLateralDireita.mudançax,stageSizeSombraLateralDireita.mudançay);
                    context.lineTo(0,stageSizeSombraLateralDireita.mudançaz);

                    context.fillStrokeShape(shape);
                    },
                    fill: 'rgb(0,0,0,0.4)',
                    stroke: '',
                    strokeWidth: 2
                }"/>
                </v-layer>
                </v-stage>
        </div>      
        <!--corte inferior-->
        <div class="fixed-bottom d-flex flex-column justify-center align-center">
            <button @click="show=!show, info=!info" id="btn">i</button>
            <div id="info" class="w-75" v-bind:class="{informar:info, ninformar:!info}"></div>
            <v-stage ref="stage" :config="stageSize">
                <v-layer>
                <v-shape :config="{
                sceneFunc: function(context, shape) {
                    context.beginPath();
                    context.moveTo(0, 36);
                    context.lineTo(stageSize.width, 36);
                    context.lineTo((stageSize.width-((80*stageSize.divi)-2)),0);
                    context.lineTo(0,0);
                    context.closePath();

                    context.fillStrokeShape(shape);
                },
                fill: '#041D34',
                stroke: '#041D34',
                strokeWidth: 4
                }"/>
            </v-layer>
            </v-stage>
        </div>
    </div>
    </div>
</template>

<script>
const width = window.innerWidth
export default{
    data(){
        return{
            show:false,
            info:false,
            contato:false,
            ver_projetos:false,
            projan:false,
            stageSize: {
                div: 1336/width,
                divi: width/1336,
                width: width,
                height: 36
            },
            stageSizeSombra:{
                width: 80,
                height: 400,
            },
            stageSizeSombraBaixa:{
                width: 300,
                height: 60,
            },
            stageSizeSombraBaixaDireita:{
                width: 300,
                height: 340,
                mudança:155,
                inicio:-25,
                titulocima:260,
                titulobaixo:215,
            },
            stageSizeSombraLateralDireita:{
                width: 50,
                height:600,
                mudançax:50,
                mudançay:500,
                mudançaz:480,
            }
        }
    },
    methods:{
      mostrar(){
        this.contato=!this.contato;
        this.show=!this.show;
      },
      ajustar(){
        this.ver_projetos=!this.ver_projetos,
        this.show=!this.show
        if(this.ver_projetos){
          this.stageSizeSombraBaixa.width=550;  
        }
        else{
          setTimeout(()=>{
            this.stageSizeSombraBaixa.width=500
          }, 50);
           setTimeout(()=>{
            this.stageSizeSombraBaixa.width=450
          }, 80);
           setTimeout(()=>{
            this.stageSizeSombraBaixa.width=400
          }, 120);
           setTimeout(()=>{
            this.stageSizeSombraBaixa.width=350
          }, 200);
          setTimeout(()=>{
            this.stageSizeSombraBaixa.width=300
          }, 300);
        }
      },
      ajustar2(){
        this.projan=!this.projan,
        this.show=!this.show
        if(this.projan){
            this.stageSizeSombraBaixaDireita.titulocima=755
            this.stageSizeSombraBaixaDireita.titulobaixo=710
            this.stageSizeSombraBaixaDireita.inicio=-5
            this.stageSizeSombraBaixaDireita.width=800
            this.stageSizeSombraBaixaDireita.mudança=1000

            this.stageSizeSombraLateralDireita.mudançax=100
            this.stageSizeSombraLateralDireita.mudançay=800
            this.stageSizeSombraLateralDireita.mudançaz=808
        }
        else if(!this.projan){
            
          setTimeout(()=>{
            this.stageSizeSombraBaixaDireita.mudança=392
            this.stageSizeSombraBaixaDireita.inicio=-25
          },50)

          

            setTimeout(()=>{
            this.stageSizeSombraBaixaDireita.titulocima=290
            this.stageSizeSombraBaixaDireita.titulobaixo=245
          },450)

          setTimeout(()=>{
            this.stageSizeSombraBaixaDireita.titulocima=260
            this.stageSizeSombraBaixaDireita.titulobaixo=215
          },500)

          setTimeout(()=>{
          this.stageSizeSombraLateralDireita.mudançax=50
          this.stageSizeSombraLateralDireita.mudançay=500
          this.stageSizeSombraLateralDireita.mudançaz=480 
          },250)
        }
      }
    }
} 
</script>
