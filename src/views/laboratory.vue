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
          <v-col cols="8" >
              <v-row>
                  <v-col cols="3">
                      <v-list>
                        <v-list-item-group v-model="selected">
                            <v-list-item
                                v-for="item in items"
                                :key="item.title"
                            >
                                <v-list-item-icon>
                                    <v-icon>{{item.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <div>
                                        {{item.title}}
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                      </v-list>
                  </v-col>
                  <v-col cols="9">
                      <div>
                          <p>23232323</p>
                          <p>23232323</p>
                          <p>23232323</p>
                          <p>23232323</p>
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
        data(){
            return{
                selected: 1,
                items:[
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
                ]
            }
        }
    }
</script>

<style scoped>

</style>
