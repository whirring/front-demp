<template>
  <div style="width: 100%;height: 50vh">
  <el-container style="width: 100%;height: 100%" class="mainContainer">
    <el-header style="height:20%">
      <h1 style="font-size: 30px">查看周报</h1>
    </el-header>
    <el-main style="height:60%">
      <div>
        周报序号:
        <el-input style="width: 39.5%;height: 15%" placeholder="请输入周报ID"
                  v-model="id">
        </el-input>
        <el-button style="width: 10%" type="primary" @click="Check">
          查询
        </el-button>
      </div>
      <div>
        周报名称:
        <el-input style="width: 50%;height: 15%"
                   v-model="name">
        </el-input>
      </div>
      <div>
        周报内容:
        <el-input
                   style="width: 50%;height: 40%" v-model="text">
        </el-input>
      </div>
      <div>
        提交时间:
        <el-input style="width: 50%;height: 15%" v-model="time">
        </el-input>
      </div>
    </el-main>
    <el-footer style="height:10%">

    </el-footer>
  </el-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      id: '',
      text: '',
      name: '',
      time: ''
    }
  },
  methods: {
    Check () {
      let that = this
      let url = 'http://118.25.54.183:8080/weekly/find/' + this.id
      axios.get(url).then(function (response) {
        if (response.data.status === 0) {
          that.name = response.data.weekly.name
          that.text = response.data.weekly.weeklyContent
          that.time = response.data.weekly.commitDate
        } else {
          that.$alert('查询失败: 根据此ID查不到周报,请重新输入', '查询失败', {
            confirmButtonText: '确定'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .mainContainer{
    height: 100%;
    width: 100%;
  }
</style>
