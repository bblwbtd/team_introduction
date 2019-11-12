<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="12">
                <v-carousel>
                    <v-carousel-item>
                        <v-img
                                src="https://cdn.damo.alibaba.com/7212cfd584db879c76cd72f849effff5/shiyanshitoutu.jpg"
                                contain
                                height="100%"
                                width="100%"
                        ></v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-row justify="center">
                    <div class="mt-12" style="font-size: 40px">
                        The future start here
                    </div>
                </v-row>
                <v-row justify="center">
                    <div class="mt-6" style="font-size: 32px">
                        deep dark fantasy
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Laboratory from "./laboratory";
    export default {
        name: "home_page",
        components: {Laboratory},
        watch:{
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
