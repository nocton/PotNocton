<template>
    <!-- Os css estão em arquivos separados,
     o css das divs de posicionamento de layout está no arquivo 'css/divs.css',exemplo:'container, posi_projan' ,
     o css dos componentes/conteúdo está no arquivo 'css/componentes.css', exemplo:'bolinha, title',
     todo css relacionado as sombras está no arquivo 'css/sombras.css', exemplo:'sombralateraldireita, sombra_logo'
    -->
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

        <!-- Logo, contato, mostrar projetos prontos -->
        <!--organização: 
        div principal{
            div bolinha (bolinha aonde se clica para mostrar os contatos)
            div sombra da logo
            div logo
            div contato (div dos contatos)
            div sombra lateral da div projetos
            div englobamento{
                div titulo ("Todos projetos")
                div posicionamento dos projetos{
                    div projetos{
                        4 divs de conteudo (fase teste)
                    }
                    div complemento da sombra
                }
                div sombra inferior
            }
        }
        -->

        <div v-bind:class="{pago:show, npago:!show}" class="align-center h-100 w-100 d-flex justify-center">
            <div v-if="!contato" @click="mostrar" class="position-fixed h-100 d-flex-align-items">
                <button id="bolinha">a</button>
            </div>
            <div id="sombra_logo" class="position-fixed">
            </div>
            <img id="img" height="270" class="position-fixed" src="@/assets/Group 8.png"/>
            <div v-if="contato" id="posicionamento" class=" position-fixed d-flex align-top justify-center">
                <div id="bolona" transition="scale-transition" class=" position-fixed align-center d-flex justify-center">
                    <b-button @click="mostrar" >X</b-button>
                </div>
            </div>
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
                <div id="title" class=" position-fixed">
                          <v-stage ref="stage" :config="stageSizeTitle">
                            <v-layer>
                                <v-shape :config="{
                                sceneFunc: function(context, shape) {

                                context.font = '25px Ubuntu Mono'; //Define Tamanho e fonte
                                context.fillStyle = 'black'; //Define a cor
                                context.fillText('Todos', 5, stageSizeTitle.titlecima);
                                context.fillText('Projetos.',5, stageSizeTitle.titlebaixo)
                                context.fillStrokeShape(shape);
                                },
                                fill: 'rgb(0,0,0,0.4)',
                                stroke: '',
                                strokeWidth: 2
                            }"/>
                            </v-layer>
                        </v-stage>
                    </div>
                <div id="posi_projetos" class=" d-flex flex-column justify-end">
                    <div id="projetos" v-bind:class="{compro:ver_projetos, sempro:!ver_projetos}" class=" d-flex position-fixed justify-center ">
                        <div v-bind:class="{aparecer:adicionar1, desaparecer:!adicionar1}" class="flex-column">
                            <projeto />
                            <projeto />
                            <projeto />
                        </div>
                        <div v-bind:class="{aparecer:adicionar2, desaparecer:!adicionar2}" class="flex-column">
                            <projeto />
                            <projeto />
                            <projeto />
                        </div>
                        <div class="flex-column">
                            <projeto/>
                            <projeto/>
                            <projeto/>
                        </div>
                        <div class="flex-column">
                            <projeto/>
                            <projeto/>
                            <div id="projeto" @click="ajustar" class="black mt-4 mx-1 d-flex justify-content-center align-items-center">
                                <b-icon-plus class="text-white shadow" font-size="2rem" ></b-icon-plus>
                            </div>
                        </div>
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

        <!-- mostrar projetos em andamento-->
        <!--organização:
        div principal(posi_projan){
            div projan (projetos em adamento){
                ainda sem conteúdo
            }
            div complemento sombra
            div sombra inferior{
                canvas da sombra -e- do titulo
            }
        }
        -->
        
        <div id="posi_projan" class=" d-flex flex-column align-end">
            <div id="projan" v-bind:class="{comprojan:projan, semprojan:!projan}" class="position-fixed black d-flex justify-center align-center">
                <b-button @click="ajustar2" >
                    <p v-if="!show" >+</p>
                    <p v-if="show" >-</p>
                </b-button>
            </div>
            <div id="complementosombradireita"></div>
            <div id="sombrabaixadireita" v-bind:class="{comsombra:projan, semsombra:!projan}" class=" d-flex align-end">
                <v-stage ref="stage" :config="stageSizeSombraBaixaDireita">
                <v-layer>
                    <v-shape :config="{
                    sceneFunc: function(context, shape) {
                    context.beginPath();
                    context.moveTo(stageSizeSombraBaixaDireita.inicio,0);
                    context.lineTo(stageSizeSombraBaixaDireita.width, stageSizeSombraBaixaDireita.mudança)
                    context.lineTo(stageSizeSombraBaixaDireita.width, 0)
                    context.closePath();

                    context.font = '24px Ubuntu Mono'; //Define Tamanho e fonte
                    context.fillStyle = 'white'; //Define a cor
                    context.fillText('Em', stageSizeSombraBaixaDireita.titulocima, 15);
                    context.fillText('processo.',stageSizeSombraBaixaDireita.titulobaixo,35)
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
        
        <!-- Sombra lateral direita-->

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

import projeto from '@/components/Projetos.vue'
import { BIconPlus } from 'bootstrap-vue'

export default{
    components:{
        projeto,
        BIconPlus,
    },
    data(){
        return{
            adicionar1:false,
            adicionar2:false,
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
                height: 430,
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
                titulocima:265,
                titulobaixo:195,
            },
            stageSizeSombraLateralDireita:{
                width: 50,
                height:600,
                mudançax:50,
                mudançay:500,
                mudançaz:480,
            },
            stageSizeTitle:{
                titlecima:122,
                titlebaixo:142,
                height:395,
                width:150
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
            setTimeout(()=>{
            this.adicionar1=!this.adicionar1
           },0)

           setTimeout(()=>{
            this.adicionar2=!this.adicionar2
           },500)

           setTimeout(()=>{
            this.stageSizeTitle.titlecima=115;
            this.stageSizeTitle.titlebaixo=140;
          },250)

          setTimeout(()=>{
            this.stageSizeTitle.titlecima=110;
            this.stageSizeTitle.titlebaixo=135;
          },300)

          this.stageSizeSombraBaixa.width=550;  
        }
        else if(!this.ver_projetos){
          setTimeout(()=>{
            this.adicionar2=!this.adicionar2
          },0)
          

          setTimeout(()=>{
            this.adicionar1=!this.adicionar1
           },500)

          setTimeout(()=>{
            this.stageSizeTitle.titlecima=115;
            this.stageSizeTitle.titlebaixo=140;
          },450)

          setTimeout(()=>{
            this.stageSizeTitle.titlecima=122;
            this.stageSizeTitle.titlebaixo=142;
          },500)

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
            this.stageSizeSombraBaixaDireita.titulocima=765
            this.stageSizeSombraBaixaDireita.titulobaixo=690
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
            this.stageSizeSombraBaixaDireita.titulocima=265
            this.stageSizeSombraBaixaDireita.titulobaixo=195
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
