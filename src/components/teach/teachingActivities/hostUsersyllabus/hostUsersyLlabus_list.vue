<!----------------------------------
****--@name     授课安排
****--@role     老师
****--@date     2017/7/18
****--@author   gx
----------------------------------->
<template>
    <div>
      <syllabus :userType="'hostUser'"></syllabus>
    </div>
</template>
<script>
    /*当前组件必要引入*/
    import syllabus from '../syllabus/syllabus_list.vue'
    //当前组件引入全局的util
    let Util = null;
    export default{
        data() {
            return {}
        },
        methods: {
            //初始化请求列表数据
            init(){

            },

        },
        created(){
            this.init();
        },
        mounted(){
        },
        components: {
          syllabus
        }
    }
</script>
