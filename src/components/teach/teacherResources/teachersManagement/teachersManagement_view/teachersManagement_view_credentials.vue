<!--档案管理查看-->
<!--资格证书取得情况-->

<template>
  <div >
    <!--标题-->
    <el-row >
      <el-col :span="10" :offset="10" class="lose-margin2">
        <span class="table-headline ">资格证书取得情况(如医师资格证书、医师执业证书等)</span>
      </el-col >
    </el-row >
    <!--内容-->
    <el-row>
      <el-col :span = "20" :offset="2">
        <el-table
          align="center"
          :data="tableData"
          tooltip-effect="dark"
          highlight-current-row
          style="width: 100%"
         >
          <el-table-column
            type="index"
            label="序号"
            width="70">
          </el-table-column>
          <el-table-column
            prop="certificateName"
            label="证书名称">
          </el-table-column>
          <el-table-column
            prop="certificateNo"
            label="证书编号"
          >
          </el-table-column>
          <el-table-column
            prop="obtainDate"
            label="取得时间">
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  //当前组件引入全局的util
  let Util=null;
  export default {
    //props接收父组件传递过来的数据
    props: ['dataId'],
    data (){
      return{
        //医师资格级别
        options: [{
          value: '0',
          label: '职业'
        }, {
          value: '1',
          label: '助理'
        }, {
          value: '2',
          label: '无'
        }],

        courses: [{
          type: '',
          bizDict: ''
        }],
        //保存按钮基本信息
        loadBtn:{title:'提交',callParEvent:'listenSubEvent'},
        countDate:0,
        //表格数据
        tableData:[],
        //当前组件默认请求(list)数据时,ajax处理的 基础信息设置
        initMessTitle:{
          paramsData:'/archives/get/basic/',
          ajaxSuccess:'SuccessGetCurrData',
          ajaxParams:{
            url:'/archives/list/qualified/'+this.dataId
          }
        }
      }
    },
    created(){
      //给当前组件注入全局util
      Util = this.$util;
      //初始化
      this.init();
    },
    mounted(){

    },
    methods:{
      /*
       * 组件初始化入口
       * */
      init(){
        //默认请求加载数据
        this.ajax(this.initMessTitle);
      },

      /*
       * 默认组件第一次请求数据
       * @param res JSON  数据请求成功后返回的数据
       * */
      SuccessGetCurrData(responseData){
        let type = [];
        let data = responseData.data;
        this.tableData = data;
      },



    }
  }
</script>


