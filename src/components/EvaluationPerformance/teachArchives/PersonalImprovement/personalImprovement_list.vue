<!--
****--@file     teachingResearch_list
****--@date     2018/10/30 14:23
****--@author   tangll
****--@describe 教学建设
-->
<template>
  <div class="teachingConstruction-list">
    <tables :operaility-data="operailityData" :url="url"></tables>
  </div>
</template>

<script>
  import tables from '../table_itemHonor';
  import url from '../teachingConstruction/api';

  let Util = null;
  export default {
    name: 'teachingResearch_list',
    data () {
      return {
        url: url,
        operailityData: {
          title: '参加教学相关学术会议或培训',
          thData: ['担任职责', '教材系数', '时间'],
          lists: [
            {
              'teachPropertyOne': '',
              'teachPropertyTwo': '',
              'createTime': '',
              'type': 'personal_ability_train',
            }],
        },

        saveMainTitle: {
          successTitle: '保存成功!',
          errorTitle: '保存失败',
          ajaxSuccess: 'ajaxSuccess',
          ajaxError: 'ajaxError',
          ajaxParams: {
            jsonString: true,
            url: url.addTeachArchieves.path,
            method: url.addTeachArchieves.method,
            data: {},
          },
        },
      }
    },
    methods: {
      //初始化请求列表数据
      init () {
        Util = this.$util;
      },
      listData () {
        let options = {
          paramsData: 'listUrl',
          ajaxSuccess: 'loginSuccess',
          ajaxParams: {
            url: '/examination/teachArchieves/listByType',
            method: 'get',
            params: {
              type: 'teaching_building_book',
            },
          },
        }
        this.ajax(options)
      },
      loginSuccess (data) {
        this.formValidate = data;
        console.log(data)
      },
    },
    created () {
      this.init()
    },
    mounted () {
    },
    components: {
      tables,
    },
  }
</script>

<style scoped>
  .teachingConstruction-list {
    height: 100%;
    overflow: auto
  }
  .place th, td, .teachingConstruction-list {
    text-align: center;
  }

  .teachingConstruction-list .items-title {
    font-size: 24px;
    text-align: center;
    line-height: 1;
  }
</style>
