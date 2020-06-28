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
            <div id="sombra_logo" class="position-fixed"></div>
            <img id="img" class="position-fixed" src="@/assets/Group 67.svg"/>
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
                <!-- Projetos -->
                <div id="posi_projetos" class=" d-flex flex-column justify-end align-start">
                    <!-- Container -->
                    <div id="title" v-bind:class="{subiu:ver_projetos,desceu:!ver_projetos}">
                        <p id="title11">Todos</p>
                        <p id="title11" >Projetos</p>
                    </div>
                    <div id="projetos" v-bind:class="{compro:ver_projetos, sempro:!ver_projetos}" class="d-flex justify-start align-end position-fixed">
                        <div v-if="!stageSize.width<=500" class="flex-column">
                            <projeto v-if="stageSize.width>500" :url="projetos[0].url" :name="projetos[0].name" img="Checaqui.jpeg" />
                            <projeto v-if="stageSize.width>500" :url="projetos[1].url" :name="projetos[1].name" img="SeuChefe.jpeg" />

                        </div>
                        <div v-if="stageSize.width<=500">
                            <div v-if="ver_projetos" class="ml-1">
                                <projeto :url="projetos[0].url" :name="projetos[0].name" img="Checaqui.jpeg" />
                                <projeto :url="projetos[1].url" :name="projetos[1].name" img="SeuChefe.jpeg" />
                            </div>
                            <div  id="projeto1" v-on:click="ajustar" class="black mt-2 mx-2 d-flex justify-content-center align-items-center">
                                <b-icon-plus v-if="!ver_projetos" class="text-white shadow" font-size="2rem" ></b-icon-plus>
                                <h3 v-else class=" text-white mt-2" >—</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <!--
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
                -->
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
                    <div v-if="stageSize.width>500" class="flex-column">
                        <projeto name="Tahan" img="Tahan.jpeg"/>
                    </div>
                     <div v-if="stageSize.width<=500" class="d-flex">
                        <projeto v-if="projan" img="Tahan.jpeg" name="Tahan"/>
                        <div id="projeto2" @click="ajustar2" class="white mt-2 mx-2 d-flex justify-content-center align-items-center">
                                <b-icon-plus v-if="!projan" class="font-weight-bold" font-size="2rem" ></b-icon-plus>
                                <h3 v-else class=" mt-2" >—</h3>
                        </div>
                    </div>
            </div>
            <div id="complementosombradireita" v-bind:class="{po:projan, pa:!projan}"></div>
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

                    context.font = `${stageSizeSombraBaixaDireita.fonteSize}px Ubuntu Mono`; //Define Tamanho e fonte
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <div id="infoinfo" class="fixed-bottom d-flex flex-column justify-center align-center">
            <button @click="mostrar_info" id="btn">i</button>
            <div id="info" class="w-75" v-bind:class="{informar:info, ninformar:!info}">
                <div id="dados" >
                    <p id="texto_explicativo" class="text-white font-weight-bold ml-3 text-justify" >TNocton é um time de desenvolvimento de software independente, formado por estudantes do Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, atualmente trabalhando em projetos de freelance e de pesquisa científica focado nas tecnologias para web, mobile, hardware e servidores com Django, Node, React, React Native, Vue e Arduino. A equipe foi formada em 2020, sempre abertos a novos conhecimentos e experiências no mundo da tecnologia.</p>
                    <div id="aloja" class="d-flex justify-center">
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
                fonteSize:23,
                width: 300,
                height: 380,
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
        if(width>=1400){
            this.stageSizeSombraBaixaDireita.titulocimay=310;
            this.stageSizeSombraBaixaDireita.titulobaixoy=325;
        }
        else if(width<1400 && width>600){
            this.stageSizeSombraBaixaDireita.titulocimay=240
            this.stageSizeSombraBaixaDireita.titulobaixoy=255
        }
        else if(width<600){
            this.stageSizeSombraBaixaDireita.fonteSize=18
            this.stageSizeSombraBaixaDireita.titulobaixo=220
            this.stageSizeSombraBaixaDireita.titulocima=275
            this.stageSizeSombraBaixaDireita.height=200
            this.stageSize.height=0
            this.stageSize.width=0
            this.stageSizeSombraBaixaDireita.titulocimay=15
            this.stageSizeSombraBaixaDireita.titulobaixoy=30
        }
    },
    methods:{
      mostrar_info(){
        if(this.info){
            this.info=!this.info;
            this.show=!this.show;
        }
        else{
            if(this.show){
                this.contato=false;
                this.bolona=false;
                this.info=true;
                this.projan=false;
                this.ver_projetos=false;
            }
            else{
                this.info=!this.info;
                this.show=!this.show;
            }
        }
      },
      mostrar(){
        if(this.contato){
            this.contato=!this.contato;
            this.show=!this.show;

            setTimeout(()=>{
                this.bolona=!this.bolona
            },400)
            }
        else{
            if(this.show){
                this.contato=true;
                this.bolona=true;
                this.info=false;
                this.projan=false;
                this.ver_projetos=false;
            }
            else{
                this.contato=!this.contato;
                this.show=!this.show;
                this.bolona=!this.bolona
            }
        }
      },
      ajustar(){
        if(this.ver_projetos){
            this.ver_projetos=!this.ver_projetos;
            this.show=!this.show;
        }
        else{
            if(this.show){
                this.contato=false;
                this.bolona=false;
                this.info=false;
                this.projan=false;
                this.ver_projetos=true;
            }
            else{
                this.ver_projetos=!this.ver_projetos;
                this.show=!this.show;
            }
        }

      },
      ajustar2(){
        if(this.projan){
            this.projan=!this.projan,
            this.show=!this.show

            setTimeout(()=>{
                this.stageSizeSombraBaixaDireita.titulobaixo=320
                this.stageSizeSombraBaixaDireita.titulocima=375
                this.stageSizeSombraBaixaDireita.titulocimay=15
                this.stageSizeSombraBaixaDireita.titulobaixoy=30
            },450)
        }
        else{
            if(this.show){
                this.contato=false;
                this.bolona=false;
                this.info=false;
                this.projan=true;
                this.ver_projetos=false;

                this.stageSizeSombraBaixaDireita.titulocimay=180
                this.stageSizeSombraBaixaDireita.titulobaixoy=190
                this.stageSizeSombraBaixaDireita.titulocima=765
                this.stageSizeSombraBaixaDireita.titulobaixo=710
                this.stageSizeSombraBaixaDireita.inicio=0
                this.stageSizeSombraBaixaDireita.width=800
            }
        
            else{
                this.projan=!this.projan,
                this.show=!this.show

                this.stageSizeSombraBaixaDireita.titulocimay=180
                this.stageSizeSombraBaixaDireita.titulobaixoy=190
                this.stageSizeSombraBaixaDireita.titulocima=765
                this.stageSizeSombraBaixaDireita.titulobaixo=710
                this.stageSizeSombraBaixaDireita.inicio=0
                this.stageSizeSombraBaixaDireita.width=800
            }
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
