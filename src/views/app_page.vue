<template>
    <div>
        <div class="header">
            <v-row style="background-color: gray; height: 25px;">
                <v-spacer></v-spacer>
                <div class="mr-10">
                    <v-menu>
                        <template v-slot:activator="{on}">
                            <div>
                                {{$t('language')}}
                            </div>
                        </template>
                    </v-menu>
                </div>
            </v-row>
            <v-row justify="center" align="center">
                <v-col cols="1" >
                    <div class="text-center tab" @click="selected = 'home_page'">
                        {{$t('index')}}
                    </div>
                </v-col>
                <v-col cols="1">
                    <div class="text-center tab" @click="selected = 'laboratories'">
                        {{$t('laboratories')}}
                    </div >
                </v-col>
                <v-col cols="1">
                    <div class="text-center tab">
                        {{$t('collaboration')}}
                    </div>
                </v-col>
                <v-col cols="2">
                    <v-img
                            src="https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3813059919,2109101456&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=63a08baf14d0dbeb90d3ea11600057c2"
                            height="100px"
                            contain
                    ></v-img>
                </v-col>
                <v-col cols="1">
                    <div class="text-center tab">
                        {{$t('project')}}
                    </div>
                </v-col>
                <v-col cols="1" align-self="center">
                    <div class="text-center tab">
                        {{$t('event')}}
                    </div>
                </v-col>
                <v-col cols="1">
                    <div class="text-center tab">
                        {{$t('about')}}
                    </div>
                </v-col>
            </v-row>
        </div>

        <div class="content">
            <home_page v-if="selected === 'home_page'"></home_page>
            <laboratory v-if="selected === 'laboratories'"></laboratory>
        </div>
    </div>
</template>

<script>
    import Home_page from "./home_page";
    import Laboratory from "./laboratory";
    export default {
        name: "app_page",
        components: {Laboratory, Home_page},
        data(){
            return{
                selected: 'home_page',
                tabs:{
                    laboratories: false
                }
            }
        },
    }
</script>

<style scoped>
    .tab{
        cursor: pointer;
    }
    .header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 144px;
        z-index: 2333;
        background-color: white;
    }
    .content{
        margin-top: 144px;
    }


</style>
