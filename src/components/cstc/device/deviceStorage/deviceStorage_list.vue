<template>
  <!-- 设备入库 -->
  <div id="nosocomial" ref="nosocomial">
    <!--<el-row>-->
    <ab-table-search :contenHeight="contenHeight-40" :loadTableData="loadTableData" :tableURL="tableURL"
                     :searchObj="searchObj" @search="search" @selectionChange="handleSelectionChange">
      <!-- 操作按钮 -->
      <template slot="todoBtns">
        <el-button type="warning" @click="storage">入库</el-button>
        <el-button type="info" @click="leadin">导入</el-button>
        <el-button type="info" @click="excelExport">导出</el-button>
        <el-button type="danger" @click="remove">{{ 'delete' | sysLan }}</el-button>
        <el-button type="info" @click="print">打印二维码</el-button>
      </template>
      <!-- 搜索部分 -->
      <template slot="search">
        <el-form-item label="设备名称：">
          <el-input v-model="searchObj.deviceTypeName"></el-input>
        </el-form-item>
        <el-form-item label="设备编号：">
          <el-input v-model="searchObj.deviceIdentifier"></el-input>
        </el-form-item>
        <el-form-item label="存放地点：">
          <el-input v-model="searchObj.storageLocation"></el-input>
        </el-form-item>
        <el-form-item label="设备规格：">
          <el-input v-model="searchObj.specifications"></el-input>
        </el-form-item>
        <el-form-item label="设备型号：">
          <el-input v-model="searchObj.model"></el-input>
        </el-form-item>
        <el-form-item label="供应商：" label-width="82px">
          <el-input v-model="searchObj.supplier"></el-input>
        </el-form-item>
        <el-form-item label="使用方向：">
          <el-input v-model="searchObj.directionUse"></el-input>
        </el-form-item>
        <el-form-item label="保修期限：">
          <el-date-picker v-model="searchObj.guaranteeDate" @change="changeGuaranteeDate" :editable="false" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="发票号：" label-width="82px">
          <el-input v-model="searchObj.invoiceNumber"></el-input>
        </el-form-item>
        <el-form-item label="购置来源：">
          <el-input v-model="searchObj.purchaseSource"></el-input>
        </el-form-item>
        <el-form-item label="折旧方式：">
          <el-input v-model="searchObj.depreciationMethod"></el-input>
        </el-form-item>
        <el-form-item label="设备状态：">
          <el-select v-model="searchObj.status" placeholder="请选择">
            <el-option v-for="item in stateOption" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </template>
      <!-- 表格部分 -->
      <template slot="tableItem">
        <el-table-column label="操作" width="140">
          <template scope="props">
            <el-button size="small" @click="show(props.row.id)">查看</el-button>
            <el-button size="small" type="success" @click="edit(props.row.id)">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column label="存放地点" prop="storageLocation" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="设备名称" prop="deviceTypeName" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="设备编号" prop="deviceIdentifier" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="规格" prop="specifications" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="型号" prop="model" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="单价（元）" prop="price" show-overflow-tooltip width="110"></el-table-column>
        <el-table-column label="供应商" prop="supplier" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="设备状态" prop="status" show-overflow-tooltip width="100">
          <template scope="scope">
            {{ scope.row.status | typeText }}
          </template>
        </el-table-column>
        <el-table-column label="使用方向" prop="directionUse" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="使用部门" prop="useDepartment" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="责任人" prop="personLiable" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="购置日期" prop="purchaseDate" show-overflow-tooltip width="100">
          <template scope="scope">
            {{ scope.row.purchaseDate | formatDate('yyyy-MM-dd') }}
          </template>
        </el-table-column>
        <el-table-column label="出厂编号" prop="factoryNumber" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="出厂日期" prop="manufactureDate" show-overflow-tooltip width="100">
          <template scope="scope">
            {{ scope.row.manufactureDate | formatDate('yyyy-MM-dd') }}
          </template>
        </el-table-column>
        <el-table-column label="发票号" prop="invoiceNumber" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="购置来源" prop="purchaseSource" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="折旧方式" prop="depreciationMethod" show-overflow-tooltip width="100"></el-table-column>
        <el-table-column label="备注" prop="describes" show-overflow-tooltip width="100"></el-table-column>
      </template>
    </ab-table-search>
    <!--<el-col :xs="24" :md="14">-->
    <!--&lt;!&ndash; 操作按钮 &ndash;&gt;-->
    <!--<div class="buttonList">-->
    <!--<el-button size="small" type="warning" @click="storage">入库</el-button>-->
    <!--<el-button size="small" type="info" @click="leadin">导入</el-button>-->
    <!--<el-button size="small" type="info" @click="excelExport">导出</el-button>-->
    <!--<el-button size="small" type="info" @click="print">打印二维码</el-button>-->
    <!--</div>-->
    <!--</el-col>-->
    <!--<el-col :xs="5" :md="10" align="right">-->
    <!--&lt;!&ndash; 搜索 &ndash;&gt;-->
    <!--<el-form :inline="true" class="el-form-item-search">-->
    <!--<el-form-item label="设备名称：">-->
    <!--<el-input size="small" v-model="deviceTypeName"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item>-->
    <!--<el-button type="primary" size="small" @click="search">查询</el-button>-->
    <!--</el-form-item>-->
    <!--</el-form>-->
    <!--</el-col>-->
    <!--</el-row>-->
    <!-- 表格数据 -->
    <!--<div id="deviceTable" ref="deviceTable">-->
    <!--<el-table align="center" :height="dynamicHt" :context="self" :data="tableData" tooltip-effect="dark"-->
    <!--class="tableShowMoreInfo" ref="multipleTable"-->
    <!--style="width: 100%" @selection-change="handleSelectionChange">-->
    <!--<el-table-column type="selection" width="55"></el-table-column>-->
    <!--<el-table-column label="序号" type="index" width="80" align="center"></el-table-column>-->
    <!--<el-table-column label="操作" prop="deviceTypeName" width="80">-->
    <!--<template scope="props">-->
    <!--<el-button size="small" @click="show(props.row.id)">查看</el-button>-->
    <!--</template>-->
    <!--</el-table-column>-->
    <!--<el-table-column label="存放地点" prop="storageLocation" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="设备名称" prop="deviceTypeName" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="设备编号" prop="deviceIdentifier" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="规格" prop="specifications" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="型号" prop="model" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="单价（元）" prop="price" show-overflow-tooltip width="110"></el-table-column>-->
    <!--<el-table-column label="供应商" prop="supplier" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="设备状态" prop="status" show-overflow-tooltip width="100">-->
    <!--<template scope="scope">-->
    <!--{{ scope.row.status | typeText }}-->
    <!--</template>-->
    <!--</el-table-column>-->
    <!--<el-table-column label="使用方向" prop="directionUse" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="使用部门" prop="useDepartment" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="责任人" prop="personLiable" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="购置日期" prop="purchaseDate" show-overflow-tooltip width="100">-->
    <!--<template scope="scope">-->
    <!--{{ scope.row.createTime | formatDate('yyyy-MM-dd') }}-->
    <!--</template>-->
    <!--</el-table-column>-->
    <!--<el-table-column label="出厂编号" prop="factoryNumber" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="出厂日期" prop="manufactureDate" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="发票号" prop="invoiceNumber" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="购置来源" prop="purchaseSource" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="折旧方式" prop="depreciationMethod" show-overflow-tooltip width="100"></el-table-column>-->
    <!--<el-table-column label="备注" prop="describe" show-overflow-tooltip width="100"></el-table-column>-->

    <!--&lt;!&ndash;<el-table-column label="数量" prop="deviceNum" show-overflow-tooltip>&ndash;&gt;-->
    <!--&lt;!&ndash;<template scope="scope">&ndash;&gt;-->
    <!--&lt;!&ndash;{{ scope.row.deviceNum || 0 }}&ndash;&gt;-->
    <!--&lt;!&ndash;</template>&ndash;&gt;-->
    <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
    <!--&lt;!&ndash;<el-table-column label="描述" prop="describes" show-overflow-tooltip></el-table-column>&ndash;&gt;-->
    <!--&lt;!&ndash;<el-table-column label="创建人" prop="createrName" show-overflow-tooltip></el-table-column>&ndash;&gt;-->
    <!--&lt;!&ndash;<el-table-column label="创建时间" prop="createTime" show-overflow-tooltip>&ndash;&gt;-->
    <!--&lt;!&ndash;<template scope="scope">&ndash;&gt;-->
    <!--&lt;!&ndash;{{ scope.row.createTime | formatDate('yyyy-MM-dd HH:mm:ss') }}&ndash;&gt;-->
    <!--&lt;!&ndash;</template>&ndash;&gt;-->
    <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
    <!--</el-table>-->
    <!--</div>-->
    <!--&lt;!&ndash; 分页 &ndash;&gt;-->
    <!--<div style="float: right;margin-top:10px;">-->
    <!--<el-pagination @size-change="changePageSize" @current-change="changePage"-->
    <!--:current-page="myPages.currentPage" :page-sizes="myPages.pageSizes"-->
    <!--:page-size="myPages.pageSize" layout="total, sizes, prev, pager, next, jumper"-->
    <!--:total="totalCount"></el-pagination>-->
    <!--</div>-->
    <!-- 模态框 打印二维码（add） -->
    <Modal :mask-closable="false" v-model="printModal" height="200" title="对话框标题" class-name="vertical-center-modal"
           :width="800">
      <modal-header slot="header" :content="button.printId"></modal-header>
      <print v-if="printModal" @cancel="cancel" :codeList="codeList" @print="subCallback"></print>
      <div slot="footer"></div>
    </Modal>
    <!--模态框 删除（del） -->
    <Modal close-on-click-modal="false" height="200" v-model="removeModal" title="对话框标题"
           class-name="vertical-center-modal" :loading="loading"
           :width="500">
      <modal-header slot="header" :content="button.removeId"></modal-header>
      <remove v-if="removeModal" :deleteUrl="api.delete" @remove="subCallback" @cancel="cancel"
              :operaility-data="operailityData"></remove>
      <div slot="footer"></div>
    </Modal>
    <!--导出弹窗-->
    <Modal :mask-closable="false" close-on-click-modal="false" height="200" v-model="deriveModal" title="对话框标题"
           class-name="vertical-center-modal"
           :width="500">
      <modal-header slot="header" :content="button.deriveId"></modal-header>
      <div>
        <div class="remove">确认导出吗</div>
        <el-row>
          <el-col :span="10" :offset="14">
            <a :href="derUrl">
              <el-button @click="affirmDerive" type="primary">确定</el-button>
            </a>
            <el-button class="but-col" @click=" deriveModal=false">取消</el-button>
          </el-col>
        </el-row>
      </div>
      <div slot="footer"></div>
    </Modal>
    <!-- 模态框 设备入库（storage） -->
    <Modal :mask-closable="false" v-model="storageModal" height="200" title="对话框标题"
           class-name="vertical-center-modal" :width="1100">
      <modal-header slot="header" :content="button.storageId"></modal-header>
      <storage v-if="storageModal" @cancel="cancel" @storage="subCallback" :operaility-data="operailityData" :depId="depId"
               :url-params="api"></storage>
      <div slot="footer"></div>
    </Modal>
    <!-- 模态框 编辑设备入库 -->
    <Modal :mask-closable="false" v-model="editModal" height="200" title="对话框标题"
           class-name="vertical-center-modal" :width="1100">
      <modal-header slot="header" :content="button.editId"></modal-header>
      <storage v-if="editModal" @cancel="cancel" @edit="subCallback" :operaility-data="operailityData" :depId="depId"
               :id="todoId" :url-params="api"></storage>
      <div slot="footer"></div>
    </Modal>
    <!-- 模态框 导入设备（leadin） -->
    <Modal :mask-closable="false" v-model="leadinModal" height="200" title="对话框标题"
           class-name="vertical-center-modal" :width="800">
      <modal-header slot="header" :content="button.leadinId"></modal-header>
      <leadin v-if="leadinModal" :id="depId" :url="api" @cancel="cancel" @toChannel="subCallback"
              :operaility-data="operailityData"
              :url-params="api.leadin"></leadin>
      <div slot="footer"></div>
    </Modal>
    <!-- 模态框 编辑（edit） -->
    <Modal :mask-closable="false" v-model="showModal" height="200" title="对话框标题" class-name="vertical-center-modal"
           :width="1100">
      <modal-header slot="header" :content="button.showId"></modal-header>
      <show v-if="showModal" @cancel="cancel" :operaility-data="operailityData" :id="todoId" :get-url-params="api.get" :url="api"></show>
      <div slot="footer"></div>
    </Modal>
    <!--模态框 删除（del） -->
    <Modal close-on-click-modal="false" height="200" v-model="removeModal" title="对话框标题"
           class-name="vertical-center-modal" :loading="loading" :width="500">
      <modal-header slot="header" :content="button.removeId"></modal-header>
      <remove v-if="removeModal" :deleteUrl="api.delete" @remove="subCallback" @cancel="cancel"
              :operaility-data="operailityData"></remove>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
  //当前组件引入全局的util
  let Util = null;

  // API
  import api from './api';
  import stateOption from './stateOption';

  // 模态框
  import storage from './deviceStorageMoreInfo/deviceStorageMoreInfo_add'; // 设备入库
  import leadin from './deviceStorage_toChannel'; // 导入设备
  import print from './deviceStorageMoreInfo/deviceStorage_printCode.vue';
  import show from './deviceStorageMoreInfo/deviceStorageMoreInfo_view';

  export default {
    props: {
      contenHeight: { // 接收父组件的高度
        type: Number,
        default: 860
      },
      depId: { // 部门id
        type: [Number],
        default: -1
      }
    },
    data () {
      return {
        stateOption,
        printModal: false,

        tableAllIds: {}, // 记录表格中的所有id对应关系 id:{sid:[子id],index:所在行}
        tableDeviceListObj: {}, // 记录所有的设备供打印使用
        qrCodeIds: [],
        selectQrCodeItemParentId: '',

        codeList: [], // 需要打印二维码的数据

        self: this,
        api,
        // 表格数据
        totalCount: 0,
        tableData: [],
        searchObj: {
          depId: this.depId,
          deviceTypeName: '', // 搜索设备名称
          deviceIdentifier: '', // 设备编号
          storageLocation: '', // 存放地点
          specifications: '', // 规格
          model: '', // 型号
          supplier: '', // 供应商
          status: '', // 设备状态
          directionUse: '', // 使用方向
          guaranteeDate: '', // 保修期限
          invoiceNumber: '', // 发票号
          purchaseSource: '', // 购置来源
          depreciationMethod: '' // 折旧方式
        },
        multipleSelection: '', // 选项
        operailityData: '', // 操作的数据
        loading: false,
        dynamicHt: 100,
        listTotal: 0,
        // 按钮
        button: {
          addId: {
            id: 'addId',
            title: '新建设备'
          },
          showId: {
            id: 'editId',
            title: '查看设备信息'
          },
          removeId: {
            id: 'removeId',
            title: '删除设备信息'
          },
          storageId: {
            id: 'storageId',
            title: '设备入库'
          },
          editId: {
            id: 'editId',
            title: '编辑设备'
          },
          leadinId: {
            id: 'leadinId',
            title: '导入设备'
          },
          deriveId: {
            id: 'deriveId',
            title: '导出设备'
          },
          printId: {
            id: 'printId',
            title: '打印二维码'
          }

        },
        storageModal: false,
        leadinModal: false,
        deriveModal: false,
        // 操作id
        todoId: '',
        // 设备入库的部门id的
        addDepId: '',
        derUrl: '',

        // 新加属性
        tableURL: api.list,
        loadTableData: 0
      };
    },
    methods: {
      //初始化请求列表数据
      init () {
        Util = this.$util;
        //ajax请求参数设置
        this.myPages = Util.pageInitPrams;

        this.queryQptions = {
          url: this.api.list.path,
          method: this.api.list.method,
          params: {
            curPage: 1,
            pageSize: Util.pageInitPrams.pageSize
          }
        };
//        this.setTableData();
      },
      changeGuaranteeDate (val) {
        this.searchObj.guaranteeDate = this.conductDate(val, 'yyyy-MM-dd') || '';
      },
      //*--------------------------- 表格 -----------------------*//
      /*
       * checkbox 选择后触发事件
       * @param val Array 存在所有的选择每一个行数据
       */
      handleSelectionChange (val) {
        this.multipleSelection = val;
      },
      /*
       * 设置表格数据
       * @param isLoading Boolean 是否加载
       */
      setTableData () {
        this.searchObj.depId = this.depId;
        this.loadTableData++;

//        this.tableData = [];
//        this.queryQptions.params.deviceTypeName = this.deviceTypeName || '';
//        this.ajax({
//          ajaxSuccess: 'listDataSuccess',
//          ajaxParams: this.queryQptions,
//        })
      },
      // 数据请求成功回调
      listDataSuccess (res, m, loading) {
        this.totalCount = res.totalCount || 0;
        this.tableData = res.data;
        let tableAllIds = {};
        let tableDeviceListObj = {};
        this.tableData.map(function (item, index) {
          tableAllIds[item.id] = {sid: [], index, selAll: false};
          if (item.deviceList) {
            for (var i = 0; i < item.deviceList.length; i++) {
              item.deviceList[i].deviceTypeName = item.deviceTypeName;
              tableAllIds[item.id].sid.push(item.deviceList[i].id);
              tableDeviceListObj[item.deviceList[i].id] = item.deviceList[i];
            }
          }
        });
        console.log(this.tableData);
        console.log(tableDeviceListObj);
        console.log(tableAllIds);
        console.log('表格行与id对应关系：', tableAllIds);
        this.tableAllIds = tableAllIds;
        this.tableDeviceListObj = tableDeviceListObj;
      },
      //设置表格及分页的位置
      setTableDynHeight () {
        let deviceTable = this.$refs.deviceTable;
        let paginationHt = 50 * 2;
        this.dynamicHt = this.contenHeight - deviceTable.offsetTop - paginationHt;
      },
      /*
       * 列表数据只能选择一个
       * @param isOnly true  是否只选择一个
       */
      isSelected (isOnly) {
        let len = this.multipleSelection.length;
        let flag = true;
        if (len == 0) {
          this.showMess('请选择数据!');
          flag = false;
        }
        if (len > 1 && isOnly) {
          this.showMess('只能修改一条数据!');
          flag = false;
        }
        return flag;
      },
      /************************************** 模态框处理 **************************************************/
      // 增加
      add () {
        this.openModel('add');
      },
      print () {
        if (this.multipleSelection.length == 0) {
          this.showMess('请选择需要打印的数据!');
          return false;
        }
        this.codeList = this.multipleSelection;
        this.openModel('print');
      },
      // 编辑
      edit(id){
        this.todoId = id;
        this.openModel('edit');
      },
//      // 编辑
//      edit () {
//        if (this.isSelected(true)) {
//          this.todoId = this.multipleSelection[0].id;
//          this.openModel('edit');
//        }
//      },
      // 查看
      show (id) {
        this.todoId = id;
        this.openModel('show');
      },
      // 取消
      cancel (targer) {
        this[targer + 'Modal'] = false;
      },
      // 删除
      /*--点击--删除--按钮--*/
      remove () {
        if (this.isSelected()) {
          this.operailityData = this.multipleSelection;
          this.openModel('remove');
        }
      },
      // 设备入库
      storage () {
//        if (this.isSelected(true)) {
//          this.todoId = this.multipleSelection[0].id;
//          this.addDepId = this.multipleSelection[0].depId || 1;
//          this.openModel('storage');
//        }
        this.openModel('storage');
      },
      // 导出设备
      excelExport () {
        if (this.isSelected()) {
          this.openModel('derive');
          let deviceTypeIds = [];
          for (let i = 0; i < this.multipleSelection.length; i++) {
            deviceTypeIds.push(this.multipleSelection[i].id);
          }
          deviceTypeIds = deviceTypeIds.join(',');
          // let http = this.$store.getters.getEnvPath.http;
          this.derUrl = '/api/device/excelExport' + '?depId=' + this.depId + '&deviceTypeIds=' + deviceTypeIds;
        }
      },
      // 导入设备
      leadin () {
        this.openModel('leadin');
      },
      // 搜索
      search () {
        this.queryQptions.params.curPage = 1; // 从第一页开始
        this.setTableData();
      },
      // 回调
      subCallback (target, title, updata) {
        this.cancel(target);
        if (title) {
          this.successMess(title);
        }
        if (!updata) {
          this.setTableData();
        }
      },
      /*
       * 打开指定的模态窗体
       * @param options string 当前指定的模态:"add"、"edit"
       * */
      openModel (options) {
        this[options + 'Modal'] = true;
      },

      //确定导出
      affirmDerive () {

        this.cancel('derive');
      }
    },
    components: {
      print,
      storage,
      leadin,
      show
    },
    mounted () {
      //页面dom稳定后调用
      this.$nextTick(function () {
        //初始表格高度及分页位置
//        this.setTableDynHeight();
//        //为窗体绑定改变大小事件
//        let Event = Util.events;
//        Event.addHandler(window, 'resize', this.setTableDynHeight);
      });
    },
    created () {
      this.init();
    },
    watch: {
//      contenHeight (val) {
//        this.setTableDynHeight()
//      },
      depId (val) {
        this.searchObj.deptId = val || '';
        //   this.depId = val;
//        this.deviceTypeName = '';
        this.setTableData();
      }
    }
  };

</script>

<style lang="scss">
  .tableShowMoreInfo {
    .el-table__expanded-cell {
      padding: 0;
    }
    .tsmiSonCheckBox {
      .el-checkbox__input {
        margin-right: 0;
      }
    }
  }

</style>
