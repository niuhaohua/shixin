<template>
  <div class="home">
  <van-cell-group>
    <van-field
      v-model="name"
      required
      clearable
      label="姓名"
      placeholder="请输入被查询人姓名"
    />

    <van-field
      v-model="cardNum"
      type="password"
      label="身份证号"
      placeholder="请输入被查询人身份证号码"
    />
    <van-field
      v-model="areaName"
      type="previce"
      label="选择省份"
      placeholder="请选择被查询人户籍省份"
      @click="searchPrevice"
    />
  </van-cell-group>
  <!-- 提交按钮 -->
  <van-row>
    <van-col class="btn" span="16" offset="4">
      <van-button v-show="!loadingShow" type="primary" size="large" @click="search" dis>点击查询</van-button>
      <van-button v-show="loadingShow" loading type="primary" size="large" @click="search"></van-button>
    </van-col>
  </van-row>
  
  <!-- 省份选择框 -->
  <van-popup v-model="show" position="bottom">
    <van-picker
      show-toolbar
      title="选择省份"
      :columns="columns"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </van-popup>

  <!-- loding -->
  <!-- <van-loading v-show="loadingShow" class="loading" type="spinner" color="#303133"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {
  },
  data() {
    return {
      name: '',
      cardNum: '',
      areaName: '',
      show: false,
      loadingShow: false,
      columns: ['全部','北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆维吾尔自治区', '江苏', '浙江', '江西', '湖北', '广西壮族自治区', '甘肃', '山西', '内蒙古自治区', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏自治区', '四川', '宁夏回族自治区', '海南省', '台湾省', '香港特别行政区', '澳门特别行政区']
    }
  },
  methods: {
    searchPrevice() {
      this.show = true
    },
    onConfirm(value, index) {
      this.show = false
      this.areaName = value
    },
    onCancel() {
      this.show = false
    },
    search() {
      let that = this
      let areaName = ''
      this.areaName === '全部' ? areaName = '':areaName = this.areaName
      let data = {
        'appKey': '81fc70c6512942c39ed538bdbafa7b4b',
        'name': that.name,
        'cardNum': that.cardNum,
        'areaName': areaName
      }
      that.loadingShow = true
      that.$api.get('/api/trust/search', data,
        (res) => {
          that.loadingShow = false
          that.$router.push({
            name: 'list',
            params: {
              data: res
            }
          })
        },
        (res) => {
          that.loadingShow = false
          let message = that.$errorCodeAlert.errorCodeAlert(res)
          that.$dialog.alert({
            message: message
          })
        })
    }
  }
};
</script>
<style scoped>
.btn {
  margin-top: 50px;
}
</style>

