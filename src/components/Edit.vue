<template>
  <div style="width: 100%;height: 50vh">
  <el-container style="width: 100%;height: 100%" class="mainContainer">
    <el-header style="height:20%">
      <h1 style="font-size: 30px">修改周报</h1>
    </el-header>
    <el-main style="height:60%">
      <el-input style="width: 50%;height: 15%"
                placeholder="请输入周报名称" v-model="name">

      </el-input>
      <el-input  type="textarea" :rows="10" placeholder="请输入周报内容"
                 style="width: 50%;height: 80%" v-model="text">
      </el-input>
    </el-main>
    <el-footer style="height:10%">
      <el-button type="primary" @click="Post">
        提交
      </el-button>
    </el-footer>
  </el-container>
  </div>
</template>
<script>
import axios from 'axios'
import userUtils from '../const/username'
export default {
  data () {
    return {
      text: '',
      name: ''
    }
  },
  methods: {
    Post () {
      let alert = this.$alert
      let studentId = userUtils.studentId
      console.log(studentId)
      let weeklyContent = this.text
      let name = this.name
      let studyTime = new Date().getTime()
      let url = 'http://118.25.54.183:8080/weekly/commit?name=' + name + '&studentId=' + studentId + '&weeklyContent=' + weeklyContent + '&studyTime=' + studyTime
      axios.post(url, {
        params: {
        }
      }).then(function (response) {
        if (response.data.status === 0) {
          alert('提交成功', '提交成功', {
            confirmButtonText: '确定'
          })
        } else {
          alert('提交失败,请重新提交', '提交失败', {
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
