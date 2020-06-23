<template>
    <!-- Os css estão em arquivos separados,
     o css das divs de posicionamento de layout está no arquivo 'css/divs.css',exemplo:'container, posi_projan' ,
     o css dos componentes/conteúdo está no arquivo 'css/componentes.css', exemplo:'bolinha, title',
     todo css relacionado as sombras está no arquivo 'css/sombras.css', exemplo:'sombralateraldireita, sombra_logo'
     todo css relacionado ao conteudo está no arquivo 'css/conteudo.css', exemplo:'dados, img_icon'
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
                    context.lineTo(stageSize.width, stageSize.height)
                    context.lineTo(80,stageSize.height*stageSize.div);
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
            <div @click="mostrar" class="position-fixed h-100 d-flex-align-items">
                <button id="bolinha">
                <font-awesome-icon icon="phone-alt" class="pt-2" id="phone_button"/>
                <font-awesome-icon icon="envelope" class="mb-2" id="envelope_button"/>
                </button>
            </div>
            <div id="sombra_logo" class="position-fixed">
            </div>
            <img id="img" height="270" class="position-fixed" src="@/assets/Group 67.svg"/>
            <div v-bind:class="{transiBolona:contato, semtransiBolona:!contato}" id="posicionamento" class=" position-fixed d-flex fixed-top align-center">
                <div v-if="bolona" v-bind:class="{hover:contato, nohover:!contato}" id="bolona" class=" position-fixed align-center d-flex justify-center flex-column">
                    <font-awesome-icon icon="phone-alt" id="phone"/>
                    <p id="contato_text" class="pb-1">Contato</p>
                    <p id="phone_number" class="mb-0">55 83 987745514</p>
                    <font-awesome-icon icon="envelope" id="envelope"/>
                    <p id="email_text" >Email</p>
                    <p id="email_contato" >contato@nocton.tech</p>
                    <b-button class="bg-transparent border-0" @click="mostrar" >X</b-button>
                </div>
            </div>
             <div id="sombralateral">
                <v-stage ref="stage" :config="stageSizeSombra">
                    <v-layer>
                    <v-shape :config="{
                    sceneFunc: function(context, shape) {
                        // context.beginPath();
                        // context.moveTo(80, 0);
                        // context.lineTo(0, 60);
                        // context.lineTo(80, 100000);
                        // context.closePath();

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
                <!--
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
                        -->
                
                <!-- Projetos -->
                <div id="posi_projetos" class=" d-flex flex-column justify-end">
                    <!-- Container -->
                    <div id="title">
                        <p id="title11">Todos</p>
                        <p id="title11" >Projetos</p>
                    </div>
                    <div id="projetos" v-bind:class="{comproapenas3:ver_projetos && !projetos[8],compro:ver_projetos && projetos[8], sempro:!ver_projetos}" class="d-flex justify-center ">
                        <!-- Coluna disnâmica de projetos -->
                        
                        <div v-if="projetos[8]" v-bind:class="{aparecer:adicionar1, desaparecer:!adicionar1}">
                            <projeto :url="projetos[8].url" :name="projetos[8].name"/>
                            <projeto v-if="projetos[9]" :url="projetos[9].url" :name="projetos[9].name"/>
                            <projeto v-if="projetos[10]" :url="projetos[10].url" :name="projetos[10].name"/>
                        </div>

                        <div v-if="projetos[6]" v-bind:class="{aparecer:adicionar1, desaparecer:!adicionar1}">
                            <projeto :url="projetos[5].url" :name="projetos[5].name"/>
                            <projeto :url="projetos[6].url" :name="projetos[6].name"/>
                            <projeto v-if="projetos[7]" :url="projetos[7].url" :name="projetos[7].name"/>
                        </div>

                        <!-- Coluna fixa de projetos -->
                        <div v-if="projetos[6]" class="d-flex flex-column">
                            <projeto :url="projetos[2].url" :name="projetos[2].name"/>
                            <projeto :url="projetos[3].url" :name="projetos[3].name"/>
                            <projeto :url="projetos[4].url" :name="projetos[4].name"/>
                        </div>

                        <div v-if="!projetos[6] && projetos[3]">
                            <projeto :url="projetos[3].url" :name="projetos[3].name"/>
                            <projeto v-if="projetos[4]" :url="projetos[4].url" :name="projetos[4].name"/>
                            <projeto v-if="projetos[5]" :url="projetos[5].url" :name="projetos[5].name"/>
                        </div>
                        <!-- Coluna fixa de projetos -->
                        <div class="flex-column">
                            <projeto :url="projetos[0].url" :name="projetos[0].name" img="Checaqui.jpeg" />
                            <projeto :url="projetos[1].url" :name="projetos[1].name" img="SeuChefe.jpeg" />
                            <projeto v-if="!projetos[7] && projetos[2]" :url="projetos[2].url" :name="projetos[2].name"/> 
                            <!-- Projeto que aumenta div -->
                            <div v-if="projetos[6]"  id="projeto" v-on:click="ajustar" class="black mt-4 mx-1 d-flex justify-content-center align-items-center">
                                <b-icon-plus class="text-white shadow" font-size="2rem" ></b-icon-plus>
                            </div>
                        </div>
                    </div>
                    <div id="complementosombra" v-bind:class="{comprosombra:ver_projetos, semprosombra:!ver_projetos}"></div>
                </div>
                <div id="sombrabaixa" v-bind:class="{comprosombra:ver_projetos, semprosombra:!ver_projetos}">
                    <v-stage ref="stage" :config="stageSizeSombraBaixa">
                        <v-layer>
                        <v-shape :config="{
                        sceneFunc: function(context, shape) {
                            // context.beginPath();
                            // context.moveTo(stageSizeSombraBaixa.width, 0);
                            // context.lineTo(0, 200);
                            // context.lineTo(0, 0);
                        
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
            <div id="projan" v-bind:class="{comprojan:projan, semprojan:!projan}" class="position-fixed black d-flex justify-center align-top">
                    <div v-if="projan" class="d-flex">
                        <projeto/>
                        <projeto />
                        <div id="projeto2" @click="ajustar2" class="white mt-4 mx-1 d-flex justify-content-center align-items-center">
                                <b-icon-plus class="font-weight-bold" font-size="2rem" ></b-icon-plus>
                         </div>
                    </div>
                    <div v-if="!projan" class="flex-column">
                        <projeto name="Tahan"/>
                        <!--
                        <div id="projeto2" @click="ajustar2" class="white mt-4 mx-1 d-flex justify-content-center align-items-center">
                                <b-icon-plus class="font-weight-bold" font-size="2rem" ></b-icon-plus>
                        </div>
                        -->
                    </div>
            </div>
            <div id="complementosombradireita"></div>
            <div id="sombrabaixadireita" v-bind:class="{comsombra:projan, semsombra:!projan}" class=" d-flex align-end">
                <v-stage ref="stage" :config="stageSizeSombraBaixaDireita">
                <v-layer>
                    <v-shape :config="{
                    sceneFunc: function(context, shape) {
                    // context.beginPath();
                    // context.moveTo(stageSizeSombraBaixaDireita.inicio,10);
                    // context.lineTo(stageSizeSombraBaixaDireita.width, stageSizeSombraBaixaDireita.mudança)
                    // context.lineTo(stageSizeSombraBaixaDireita.width, 10)
                    // context.closePath();

                    context.font = '24px Ubuntu Mono'; //Define Tamanho e fonte
                    context.fillStyle = 'white'; //Define a cor
                    context.fillText('Em', stageSizeSombraBaixaDireita.titulocima, stageSizeSombraBaixaDireita.titulocimay);
                    context.fillText('processo.',stageSizeSombraBaixaDireita.titulobaixo,stageSizeSombraBaixaDireita.titulobaixoy)
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
                    // context.beginPath();
                    // context.moveTo(0, 6);
                    // context.lineTo(70,40);
                    // context.lineTo(stageSizeSombraLateralDireita.mudançax,stageSizeSombraLateralDireita.mudançay);
                    // context.lineTo(0,stageSizeSombraLateralDireita.mudançaz);

                    context.fillStrokeShape(shape);
                    },
                    fill: 'rgb(0,0,0,0.4)',
                    stroke: '',
                    strokeWidth: 2
                }"/>
                </v-layer>
                </v-stage>
        </div>  

        <!--corte inferior e div info-->
        <div class="fixed-bottom d-flex flex-column justify-center align-center">
            <button @click="show=!show, info=!info" id="btn">i</button>
            <div id="info" class="w-75" v-bind:class="{informar:info, ninformar:!info}">
                <div id="dados" >
                    <p id="texto_explicativo" class="text-white font-weight-bold ml-3" >     Texto explicativo referente a equipe. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="d-flex justify-center">
                        <icon img="Adson_icon.jpeg"  Nome="Adson" Funct="Designer"/>
                        <icon img="Paulo_icon.jpeg" Nome="Paulo" Funct="Backend"/>
                        <icon img="Petrus_icon.jpeg" Nome="Petrus" Funct="Mobile"/>
                        <icon img="Raquel_icon.jpeg" Nome="Raquel" Funct="Frontend"/>
                    </div>
                </div>
            </div>
            <v-stage ref="stage" :config="stageSize">
                <v-layer>
                <v-shape :config="{
                sceneFunc: function(context, shape) {
                    context.beginPath();
                    context.moveTo(0, stageSize.height);
                    context.lineTo(stageSize.width, stageSize.height);
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
const height = window.innerHeight

import icon from '@/components/Icons.vue'
import projeto from '@/components/Projetos.vue'
import { BIconPlus } from 'bootstrap-vue'

import {get_nocton_projects} from '@/services/api';

export default{
    components:{
        projeto,
        BIconPlus,
        icon,
    },
    data(){
        return{
            bolona:false,
            mostrar1:false,
            mostrar2:false,
            adicionar1:false,
            adicionar2:false,
            show:false,
            info:false,
            contato:false,
            ver_projetos:false,
            projan:false,
            projetos:{},
            stageSize: {
                div: 1336/width,
                divi: width/1336,
                width: width,
                height: ((((height-657)/194)*10)+37)
            },
            stageSizeSombra:{
                width: 80,
                height: 450,
            },
            stageSizeSombraBaixa:{
                width: 170,
                height: 90,
            },
            stageSizeSombraBaixaDireita:{
                width: 300,
                height: 340,
                mudança:140,
                inicio:120,
                titulocima:265,
                titulocimay:null,
                titulobaixo:195,
                titulobaixoy:null,
            },
            stageSizeSombraLateralDireita:{
                width: 80,
                height:600,
                mudançax:80,
                mudançay:520,
                mudançaz:465,
            },
            // stageSizeTitle:{
            //     titlecima:170,
            //     titlebaixo:190,
            //     height:3000,
            //     width:150
            // }
        }
    },
    created(){
        if(height<657){
            this.stageSizeSombraBaixaDireita.titulocimay=15;
            this.stageSizeSombraBaixaDireita.titulobaixoy=35;
        }
        else{
            this.stageSizeSombraBaixaDireita.titulocimay=((((height-657)/73)*55)+115);
            this.stageSizeSombraBaixaDireita.titulobaixoy=((((height-657)/73)*55)+130);
        }
        alert(height)
    },
    methods:{
      mostrar(){
        if(this.contato){
        this.contato=!this.contato;
        this.show=!this.show;

        setTimeout(()=>{
            this.bolona=!this.bolona
           },400)
        }
        else{
        this.contato=!this.contato;
        this.show=!this.show;
        this.bolona=!this.bolona
        }
      },
      ajustar(){
        this.ver_projetos=!this.ver_projetos,
        this.show=!this.show

        if(this.ver_projetos){
         
            //  Adicionar colunas de projetos
           setTimeout(()=>{
            this.adicionar2=!this.adicionar2
           },300)

           setTimeout(()=>{
            this.adicionar1=!this.adicionar1
           },800)


            // Sobre título
            setTimeout(()=>{
                this.stageSizeTitle.titlecima=115;
                this.stageSizeTitle.titlebaixo=140;
            },250)

            setTimeout(()=>{
                this.stageSizeTitle.titlecima=110;
                this.stageSizeTitle.titlebaixo=135;
            },300)

            // Sombras
            if(this.projetos[8]){
            this.stageSizeSombraBaixa.width=550;}
            else{
                this.stageSizeSombraBaixa.width=450
            }  
        }
        else if(!this.ver_projetos){

        //   Remover colunas de projetos
            setTimeout(()=>{
            this.adicionar1=!this.adicionar1
            }, 100)
            
            setTimeout(()=>{
            this.adicionar2=!this.adicionar2
            },250)


            // Desce título
            setTimeout(()=>{
            this.stageSizeTitle.titlecima=115;
            this.stageSizeTitle.titlebaixo=140;
            },450)

            setTimeout(()=>{
            this.stageSizeTitle.titlecima=122;
            this.stageSizeTitle.titlebaixo=142;
            },500)


            // Sombras
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
            this.stageSizeSombraBaixa.width=170
            }, 300);
        }
      },
      ajustar2(){
        this.projan=!this.projan,
        this.show=!this.show
        if(this.projan){
            this.stageSizeSombraBaixaDireita.titulocima=765
            this.stageSizeSombraBaixaDireita.titulobaixo=690
            this.stageSizeSombraBaixaDireita.inicio=0
            this.stageSizeSombraBaixaDireita.width=800
            this.stageSizeSombraBaixaDireita.mudança=1000

            this.stageSizeSombraLateralDireita.mudançax=100
            this.stageSizeSombraLateralDireita.mudançay=800
            this.stageSizeSombraLateralDireita.mudançaz=808
        }
        else if(!this.projan){
            
          setTimeout(()=>{
            this.stageSizeSombraBaixaDireita.mudança=500
            this.stageSizeSombraBaixaDireita.inicio=120
          },0)

          

            setTimeout(()=>{
            this.stageSizeSombraBaixaDireita.titulocima=290
            this.stageSizeSombraBaixaDireita.titulobaixo=245
          },450)

          setTimeout(()=>{
            this.stageSizeSombraBaixaDireita.titulocima=265
            this.stageSizeSombraBaixaDireita.titulobaixo=195
          },500)

         setTimeout(()=>{
          this.stageSizeSombraLateralDireita.mudançax=90
          this.stageSizeSombraLateralDireita.mudançay=600
          this.stageSizeSombraLateralDireita.mudançaz=565 
          },250)

          setTimeout(()=>{
          this.stageSizeSombraLateralDireita.mudançax=80
          this.stageSizeSombraLateralDireita.mudançay=520
          this.stageSizeSombraLateralDireita.mudançaz=465 
          },300)
        }
      }
    },
    
    mounted: async function () {
    const formated = await get_nocton_projects();
    this.projetos = formated
    console.log(this.projetos[0]);
  }
} 
</script>
