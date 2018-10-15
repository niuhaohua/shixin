<template>
  <div class="list">
    <van-cell-group class="box" v-for="item in this.params">
        <div  @click="lookDetail(item)">
            <van-cell class="name">
                <template slot="title">
                    <van-icon name="contact" size="10px" :color="item.sexy === '男性'?'#409EFF':'#F56C6C'"/>
                    <span class="van-cell-text">{{ item.iname }}</span>
                    <van-tag type="danger">{{ item.areaName }}</van-tag>
                </template>
            </van-cell>
            <van-cell class="content">
                <template slot="title">
                    <span>年龄：</span>
                    <span>{{ item.age }}</span>
                    <div>{{ item.cardNum }}</div>
                </template>
            </van-cell>
        </div>
    </van-cell-group>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "list",
    components: {
    },
    data() {
        return {
            params: null
        }
    },

    created() {
        this.forList()
    },
    activated() {
        this.forList()
    },
    methods: {
        //渲染列表
        forList() {
            if (this.$route.params.data) {
                this.params = this.$route.params.data.result
            }

        },
        lookDetail(data) {
            this.$router.push({
                name: 'detail',
                params: {
                    data: data
                }
            })
        }
    }
}
</script>
<style scoped>
.list {
  padding: 0 10px;
}
.box {
  /* border: 1px solid red; */
  margin-bottom: 20px;
  border: 1px solid #e4e7ed;
  border-radius: 10px;
  overflow: hidden;
  -moz-box-shadow: 0px 0px 7px #e4e7ed;
  -webkit-box-shadow: 0px 0px 7px #e4e7ed;
  box-shadow: 0px 0px 7px #e4e7ed;
}
.btn {
  margin-top: 50px;
}
.van-cell-text {
  margin-left: 10px;
  margin-right: 10px;
}
.name {
  text-align: left;
  padding-left: 36px;
}
.content {
  text-align: left;
  padding-left: 36px;
}
</style>

