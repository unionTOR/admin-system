webpackJsonp([14],{Iogj:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-main",[l("Breadcrumb"),e._v(" "),l("SearchWarp",[l("el-form",{ref:"searchInfo.form",attrs:{inline:!0,model:e.searchInfo.form}},[l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{attrs:{placeholder:"请输入员工姓名"},model:{value:e.searchInfo.form.name,callback:function(t){e.$set(e.searchInfo.form,"name",t)},expression:"searchInfo.form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"手机号"}},[l("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.searchInfo.form.phone,callback:function(t){e.$set(e.searchInfo.form,"phone",t)},expression:"searchInfo.form.phone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"身份证"}},[l("el-input",{attrs:{placeholder:"请输入身份证号码"},model:{value:e.searchInfo.form.name,callback:function(t){e.$set(e.searchInfo.form,"name",t)},expression:"searchInfo.form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"状态"}},[l("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.searchInfo.form.status,callback:function(t){e.$set(e.searchInfo.form,"status",t)},expression:"searchInfo.form.status"}},[l("el-option",{attrs:{label:"正常",value:1}}),e._v(" "),l("el-option",{attrs:{label:"注销",value:0}})],1)],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"success"}},[e._v("查询")])],1)],1)],1),e._v(" "),l("ContentWarp",[l("el-table",{attrs:{border:"",stripe:"",data:e.searchInfo.list,size:"small"}},[l("el-table-column",{attrs:{align:"center",label:"ID",prop:"id",width:"60px"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"姓名",prop:"name","min-width":"100"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"手机号",prop:"phone","min-width":"120"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"身份证号",prop:"code","min-width":"160"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"地区",prop:"area","min-width":"320"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"状态",prop:"status",width:"80"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",icon:"el-icon-search",plain:""},on:{click:function(l){return e.openFind(t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"查看用户信息",width:"400px",center:"",visible:e.findInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.findInfo,"isOpen",t)}}},[l("el-form",{staticClass:"find-info-warp",attrs:{model:e.findInfo.form,"label-position":"right","label-width":"110px"}},[l("el-form-item",{attrs:{label:"姓名："}},[e._v(e._s(e.findInfo.form.name))]),e._v(" "),l("el-form-item",{attrs:{label:"手机号："}},[e._v(e._s(e.findInfo.form.phone))]),e._v(" "),l("el-form-item",{attrs:{label:"身份证号："}},[e._v(e._s(e.findInfo.form.code))]),e._v(" "),l("el-form-item",{attrs:{label:"身份证有效期："}},[e._v(e._s(e.findInfo.form.valid))]),e._v(" "),l("el-form-item",{attrs:{label:"地区："}},[e._v(e._s(e.findInfo.form.area))]),e._v(" "),l("el-form-item",{attrs:{label:"状态："}},[e._v(e._s(e.findInfo.form.status))])],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.findInfo.isOpen=!1}}},[e._v("关 闭")])],1)],1)],1)},staticRenderFns:[]},a=l("C7Lr")({name:"UserFind",data:function(){return{searchInfo:{list:[{id:1,name:"张三",phone:"15012345678",code:"222123199910102323",valid:"2027-10-10",status:"正常",area:"南京市玄武区花园路12号"}],form:{name:"",phone:"",code:"",status:""}},findInfo:{isOpen:!1,form:{}}}},methods:{openFind:function(e){this.findInfo={isOpen:!0,form:e}}}},n,!1,null,null,null);t.default=a.exports}});