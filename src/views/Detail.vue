<template>
  <div class="detail">

    <van-cell-group class="box">
            <van-cell class="name">
                <template slot="title">
                    <van-icon name="contact" size="10px" :color="params.sexy === '男性'?'#409EFF':'#F56C6C'"/>
                    <span class="van-cell-text">{{ params.iname }}</span>
                    <van-tag type="danger">{{ params.areaName }}</van-tag>
                </template>
            </van-cell>
            <van-cell class="content">
                <template slot="title">
                    <span>年龄：</span>
                    <span>{{ params.age }}</span>
                    <div>{{ params.cardNum }}</div>
                </template>
            </van-cell>
    </van-cell-group>

    <van-cell-group class="box">
            <van-cell class="content" title="执行法院" :label=" params.courtName"/>
            <van-cell class="content" title="案号" :label=" params.caseCode"/>
            <van-cell class="content" title="发布时间" :label=" params.publishDate"/>
             <van-cell class="content" title="状态简述" :label=" params.desc"/>
    </van-cell-group>

    <van-cell-group class="box">
            <van-cell class="content" title="生效法律文书确定的义务" :label=" params.duty"/>
            <van-cell class="content" title="被执行人的履行情况" :label=" params.performance"/>
            <van-cell class="content" title="失信被执行人行为具体情形" :label=" params.disruptTypeName"/>
    </van-cell-group>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "detail",
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
                this.params = this.$route.params.data
            }else {
                this.$router.push({
                    name: 'home',
                })
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
/* .detail{
    padding-bottom: 50px;
} */
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

