<template>

  <div class="showWrapper">
    <el-form class="demo-form-inline" label-width="100px">


      <el-row >
        <el-col :span="8" :offset="2">
          <el-form-item label="大楼名称:" class="feildFontweight">
           {{data.name}}
          </el-form-item>
        </el-col>
        <el-col :span="8" :offset="2">
          <el-form-item label="办公室电话:" class="feildFontweight">
            {{data.phone}}
          </el-form-item>
        </el-col>
      </el-row >

      <el-row >
        <el-col :span="16" :offset="2">
          <el-form-item label="地址:" class="feildFontweight">
            {{data.address}}
          </el-form-item>
        </el-col>
      </el-row >

      <el-row >
        <el-col :span="16" :offset="2">
          <el-form-item label="备注:" class="feildFontweight" >
            <el-input
              type="textarea"
              :rows="5"
              readonly
              resize="none"
              v-model="data.remark">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row >
    </el-form>
  </div>
</template>
<script>
  //当前组件引入全局的util
  let Util=null;
  export default {
    //props接收父组件传递过来的数据
    props: ['operailityData','url'],
    data (){
      return{
        //当前组件默认请求(list)数据时,ajax处理的 基础信息设置
        "data":{
//          "id":1,
//          "name":"1号宿舍大楼",
//          "address":"北京市海淀区紫竹园路青东商务区A座栋楼11层",
//          "phone":"029-2100000",
//          "remark":"员工宿舍大楼"
        },
        listMessTitle:{
          paramsData:'listUrl',
          ajaxSuccess:'SuccessGetCurrData',
          ajaxParams:{
//            url:this.url.buildGet+this.operailityData.id,
          }
        }
      }
    },
    created(){
      //给当前组件注入全局util
      Util = this.$util;
    },
    mounted(){
      //初始化
      this.init();
    },
    methods:{
      /*
       * 默认组件第一次请求数据
       * @param res JSON  数据请求成功后返回的数据
       * */
      SuccessGetCurrData(responseData){
        let data = responseData.data;
        this.data = data;
      },
      /*
       * 当前组件发送事件给父组件
       * 发送关闭(cancel)模态事件给父组件,请求关闭当前模态窗
       * */
      cancel(){
        this.$emit('cancel','show');
      },
      /*
       * 组件初始化入口
       * */
      init(){
        //默认请求加载数据
        this.ajax(this.listMessTitle);
      },
    }
  }
</script>
