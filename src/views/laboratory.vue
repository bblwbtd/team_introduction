<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-carousel>
                    <v-carousel-item>
                        <v-img
                                src="https://cdn.damo.alibaba.com/dda3fadf97f81ce924c780dc4f749e31/1440_456-A-%E8%8B%B1%E6%96%87.jpg"
                        ></v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row class="mt-12" justify="center" align="center">
            <v-col cols="8" xs="12">
                <v-row>
                    <v-col cols="4" xs="1" sm="2" md="3">
                        <v-list class="list" flat>
                            <v-list-item-group>
                                <v-list-item
                                        v-for="(item, index) in items"
                                        :key="item.title">
<!--                                    <v-list-item-icon>-->
<!--                                        -->
<!--                                    </v-list-item-icon>-->
                                    <v-list-item-content @click="jump(index)">
                                        <div>
                                            <v-icon class="item-icon">{{item.icon}}</v-icon>
                                            <p class="item">{{item.title}}</p>
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                    <v-col cols="8" xs="11" sm="10" md="9">
                        <div>
                            <div :id="'title' + index" v-for="(item, index) in items">
                                <p class="title" :id="item.title">{{item.title}}</p>
                                <p>23333</p>
                                <div style="height: 500px"></div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "laboratory",
        data() {
            return {
                selected: 1,
                items: [
                    {
                        title: this.$t('search_direction'),
                        icon: 'mdi-compass'
                    },
                    {
                        title: this.$t('product_and_application'),
                        icon: 'mdi-application'
                    },
                    {
                        title: this.$t('research_team'),
                        icon: 'mdi-account-group'
                    },
                    {
                        title: this.$t('achievement'),
                        icon: 'mdi-trophy'
                    },
                    {
                        title: this.$t('contract'),
                        icon: 'mdi-email'
                    }
                ],

            }
        },
        methods:{
            jump(index){
                const margin = 590;
                scrollTo({
                    top: margin + this.calculateOffsetHeight(index)
                });
            },

            calculateOffsetHeight(index) {
                return index <= 0 ? 0 : new Array(index).fill(0).map((item, index) => {
                    return document.getElementById(`title${index}`).offsetHeight
                }).reduce(((previousValue, currentValue) => previousValue + currentValue))
            }
        }
    }
</script>

<style scoped>
    .list {
        position: sticky;
        top: 150px
    }

    .item {
        display: inline;
        margin: auto 8px;
        height: 100%;
    }

    .item-icon {

    }

    .title{
        position: relative;
    }

    @media screen and (max-width: 960px) {
        .item {
            display: none;
        }

        .item-icon {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            text-align: center;
        }
    }

</style>
