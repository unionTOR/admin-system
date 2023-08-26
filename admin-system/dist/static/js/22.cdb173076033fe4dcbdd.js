webpackJsonp([22],{"NLQ/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3cXf"),o=a.n(n),r={name:"GroupCompany",data:function(){return{companyData:{id:1,name:"总公司",code:"001",twoDimensionCodeImageUrl:"http://cgtzimage.b0.upaiyun.com/matrix/image/000000000000000B.png"},searchInfo:{list:[]},addInfo:{isOpen:!1,form:{name:"",code:"",guaranteed:"",isEnd:"",area:"",principalArea:"",parentId:""}},changeInfo:{isOpen:!1,form:{}},statusInfo:{isOpen:!1,form:{}},bangDepartment:{isOpen:!1,list:[]},bangRole:{isOpen:!1,list:[]},companyRules:{name:[{required:!0,message:"公司名称不能为空",trigger:"change"}],code:[{required:!0,message:"公司编码不能为空",trigger:"change"}],guaranteed:[{required:!0,message:"投资担保账户不能为空",trigger:"change"}],isEnd:[{required:!0,message:"请选择是否为最终节点",trigger:"change"}],area:[{required:!0,message:"请选择并确认地址区域",trigger:"change"}],principalArea:[{required:!0,message:"请选择并添加负责区域",trigger:"change"}]}}},methods:{getListAjax:function(){console.log("发送ajax查询数据或分页规则处理"),this.searchInfo.list=[{area:"330000",areaName:"浙江省",code:"0001",guaranteed:"55",hasChild:"1",id:24,isEnd:"0",name:"浙江金爱农网络科技有限公司",parentId:"1",parentName:"总公司",principalArea:"330000",principalAreaName:"浙江省",status:"0",type:"0",twoDimensionCodeImageUrl:"http://cgtzimage.b0.upaiyun.com/matrix/image/000000000000000B.png"}]},formatValue:function(e,t,a){if("status"===t.property)return this.fomatLoopValue(a,[{text:"1",value:"禁用"},{text:"0",value:"启用"}])},sendAddAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送addInfo.form数据"),console.log(t.addInfo.form)})},resetAddInfo:function(){this.resetForm("formByAdd"),this.addInfo.isOpen=!1},openChange:function(e){var t=this;this.changeInfo.isOpen=!0,setTimeout(function(){t.$refs.formByChange.resetFields(),t.changeInfo.form={name:e.name,code:e.code,guaranteed:e.guaranteed,isEnd:e.isEnd,area:e.area,principalArea:e.principalArea,parentId:e.parentId,parentName:e.parentName,areaName:e.areaName,principalAreaName:e.principalAreaName}},100)},sendChangeAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送changeInfo.form数据"),console.log(t.changeInfo.form)})},resetChangeInfo:function(){this.$refs.formByChange.resetFields(),this.changeInfo.isOpen=!1},openStatus:function(e){this.statusInfo={isOpen:!0,form:e}},sendStatusAjax:function(){console.log("确认启用或禁用")},openDepartment:function(e){var t=this;this.bangDepartment={isOpen:!0,list:[{bangStatus:"1",id:41,name:"超级管理员"},{bangStatus:"1",id:33,name:"业务部"},{bangStatus:"1",id:34,name:"外访部"},{bangStatus:"0",id:35,name:"总经理"},{bangStatus:"1",id:36,name:"财务部"},{bangStatus:"1",id:42,name:"风控部"},{bangStatus:"0",id:43,name:"内务部"}]},setTimeout(function(){t.checkBangDefault("bangDepartment",t.bangDepartment.list)},100)},sendDepartmentAjax:function(){console.log("绑定部门---实际上是发送this.bangDepartment.list经过修改后的数据"),console.log(o()(this.bangDepartment.list))},selectDepartmentChange:function(e){this.checkBangStatus(e,this.bangDepartment.list)},openRole:function(e){var t=this;this.bangRole={isOpen:!0,list:[{bangStatus:"1",id:1,name:"管理员"},{bangStatus:"1",id:21,name:"超级管理员"},{bangStatus:"0",id:2,name:"县级业务员"},{bangStatus:"0",id:3,name:"县级风控"},{bangStatus:"0",id:4,name:"县级外访员"},{bangStatus:"0",id:5,name:"县级负责人"},{bangStatus:"1",id:6,name:"市级风控"},{bangStatus:"1",id:7,name:"市级负责人"},{bangStatus:"1",id:8,name:"总经理"},{bangStatus:"0",id:9,name:"县级内务"},{bangStatus:"0",id:10,name:"市级财务"},{bangStatus:"1",id:20,name:"省级风控"},{bangStatus:"1",id:22,name:"市级管理员"},{bangStatus:"1",id:24,name:"市级指派员"},{bangStatus:"1",id:25,name:"副总经理"}]},setTimeout(function(){t.checkBangDefault("bangRole",t.bangRole.list)},100)},closeBang:function(e){this.bangDepartment.isOpen=!1,this.bangRole.isOpen=!1,this.$refs[e].clearSelection()},sendRoleAjax:function(){console.log("绑定角色---实际上是发送this.bangRole.list经过修改后的数据"),console.log(o()(this.bangRole.list))},selectRoleChange:function(e){this.checkBangStatus(e,this.bangRole.list)},checkBangStatus:function(e,t){for(var a=[],n=0;n<e.length;n++)a.push(e[n].id);for(var o=0;o<t.length;o++)t[o].bangStatus=a.indexOf(t[o].id)>=0?"1":"0"},checkBangDefault:function(e,t){for(var a=this,n=[],o=0;o<t.length;o++)"1"===t[o].bangStatus&&n.push(t[o]);n.length>0&&n.forEach(function(t){a.$refs[e].toggleRowSelection(t)})}},mounted:function(){this.getListAjax()}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-col",{attrs:{span:20}},[a("div",{staticClass:"company-big-title"},[e._v("\n    公司管理（"),a("span",[e._v(e._s(e.companyData.name))]),e._v("）\n  ")]),e._v(" "),a("SearchWarp",[a("el-form",[a("el-form-item",[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.$router.push("/group/company/staff")}}},[e._v("\n          进入员工管理\n        ")]),e._v(" "),a("el-button",{attrs:{plain:""},on:{click:function(t){return e.openDepartment(e.companyData.id)}}},[e._v("\n          分配部门\n        ")]),e._v(" "),a("el-button",{attrs:{plain:""},on:{click:function(t){return e.openRole(e.companyData.id)}}},[e._v("\n          分配角色\n        ")]),e._v(" "),1!==e.companyData.id?[a("el-button",{attrs:{plain:""},on:{click:function(t){return e.openChange(e.companyData)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){return e.openStatus(e.companyData)}}},[e._v("禁用")])]:e._e(),e._v(" "),a("el-button",{attrs:{plain:""},on:{click:function(t){return e.$qr([e.companyData.twoDimensionCodeImageUrl,e.companyData.name])}}},[e._v("二维码")])],2)],1)],1),e._v(" "),a("div",{staticClass:"company-little-title"},[a("span",{staticClass:"el-icon-location"}),e._v("公司负责区域\n  ")]),e._v(" "),a("div",{staticClass:"company-has-address"},[a("span",[e._v("常州市")]),e._v(" "),a("span",[e._v("钟楼区")]),e._v(" "),a("span",[e._v("天宁区")]),e._v(" "),a("span",[e._v("新北区")]),e._v(" "),a("span",[e._v("武进区")]),e._v(" "),a("span",[e._v("金坛区")]),e._v(" "),a("span",[e._v("溧阳市")])]),e._v(" "),a("div",{staticClass:"company-little-title"},[a("span",{staticClass:"el-icon-setting"}),e._v("子公司管理\n    "),a("el-button",{attrs:{type:"text"},on:{click:function(t){e.addInfo.isOpen=!0}}},[e._v("\n      添加子公司\n    ")])],1),e._v(" "),a("el-table",{attrs:{border:"",stripe:"",data:e.searchInfo.list,size:"small"}},[a("el-table-column",{attrs:{align:"center",label:"子公司名称",prop:"name","min-width":"340px",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"code",prop:"code",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"地址",prop:"areaName",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",prop:"status",formatter:e.formatValue,width:"60"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"550px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(a){return e.openChange(t.row)}}},[e._v("\n          修改\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",plain:""},on:{click:function(a){return e.openDepartment(t.row.id)}}},[e._v("\n          分配部门\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",plain:""},on:{click:function(a){return e.openRole(t.row.id)}}},[e._v("\n          分配角色\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",plain:"",disabled:""}},[e._v("\n          员工管理\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"1"===t.row.status?"success":"danger",plain:""},on:{click:function(a){return e.openStatus(t.row)}}},[e._v("\n          "+e._s("1"===t.row.status?"启用":"禁用")+"\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",plain:""},on:{click:function(a){return e.$qr([t.row.twoDimensionCodeImageUrl,t.row.name])}}},[e._v("\n          二维码\n        ")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"添加子公司",width:"600px",center:"",visible:e.addInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.addInfo,"isOpen",t)}}},[a("el-form",{ref:"formByAdd",attrs:{model:e.addInfo.form,rules:e.companyRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"子公司名称",prop:"name"}},[a("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.name,callback:function(t){e.$set(e.addInfo.form,"name",t)},expression:"addInfo.form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"子公司Code",prop:"code"}},[a("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.code,callback:function(t){e.$set(e.addInfo.form,"code",t)},expression:"addInfo.form.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投资担保账户",prop:"guaranteed"}},[a("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.guaranteed,callback:function(t){e.$set(e.addInfo.form,"guaranteed",t)},expression:"addInfo.form.guaranteed"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级公司"}},[a("el-input",{attrs:{type:"text",disabled:!0},model:{value:e.companyData.name,callback:function(t){e.$set(e.companyData,"name",t)},expression:"companyData.name"}})],1),e._v(" "),e.addInfo.isOpen?[a("el-form-item",{attrs:{label:"地址区域",prop:"area"}},[a("SelectAddress",{attrs:{btnText:"确认"},model:{value:e.addInfo.form.area,callback:function(t){e.$set(e.addInfo.form,"area",t)},expression:"addInfo.form.area"}}),e._v(" "),a("div",{staticClass:"disNone"},[a("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.area,callback:function(t){e.$set(e.addInfo.form,"area",t)},expression:"addInfo.form.area"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"负责区域",prop:"principalArea"}},[a("SelectAddress",{attrs:{multiple:"",btnText:"添加"},model:{value:e.addInfo.form.principalArea,callback:function(t){e.$set(e.addInfo.form,"principalArea",t)},expression:"addInfo.form.principalArea"}}),e._v(" "),a("div",{staticClass:"disNone"},[a("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.principalArea,callback:function(t){e.$set(e.addInfo.form,"principalArea",t)},expression:"addInfo.form.principalArea"}})],1)],1)]:e._e(),e._v(" "),a("el-form-item",{attrs:{label:"是否最终节点",prop:"isEnd"}},[a("el-radio-group",{model:{value:e.addInfo.form.isEnd,callback:function(t){e.$set(e.addInfo.form,"isEnd",t)},expression:"addInfo.form.isEnd"}},[a("el-radio",{attrs:{label:"0"}},[e._v("不是")]),e._v(" "),a("el-radio",{attrs:{label:"1"}},[e._v("是")])],1)],1)],2),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendAddAjax("formByAdd")}}},[e._v("新 增")]),e._v(" "),a("el-button",{on:{click:e.resetAddInfo}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"修改公司信息",width:"600px",center:"",visible:e.changeInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.changeInfo,"isOpen",t)}}},[a("el-form",{ref:"formByChange",attrs:{model:e.changeInfo.form,rules:e.companyRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"子公司名称",prop:"name"}},[a("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.name,callback:function(t){e.$set(e.changeInfo.form,"name",t)},expression:"changeInfo.form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"子公司Code",prop:"code"}},[a("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.code,callback:function(t){e.$set(e.changeInfo.form,"code",t)},expression:"changeInfo.form.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投资担保账户",prop:"guaranteed"}},[a("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.guaranteed,callback:function(t){e.$set(e.changeInfo.form,"guaranteed",t)},expression:"changeInfo.form.guaranteed"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级公司"}},[a("el-input",{attrs:{type:"text",disabled:!0},model:{value:e.companyData.name,callback:function(t){e.$set(e.companyData,"name",t)},expression:"companyData.name"}})],1),e._v(" "),!0===e.changeInfo.isOpen?[a("el-form-item",{attrs:{label:"地址区域",prop:"area"}},[a("SelectAddress",{attrs:{name:e.changeInfo.form.areaName,btnText:"确认"},model:{value:e.changeInfo.form.area,callback:function(t){e.$set(e.changeInfo.form,"area",t)},expression:"changeInfo.form.area"}}),e._v(" "),a("div",{staticClass:"disNone"},[a("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.area,callback:function(t){e.$set(e.changeInfo.form,"area",t)},expression:"changeInfo.form.area"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"负责区域",prop:"principalArea"}},[a("SelectAddress",{attrs:{name:e.changeInfo.form.principalAreaName,multiple:"",btnText:"添加"},model:{value:e.changeInfo.form.principalArea,callback:function(t){e.$set(e.changeInfo.form,"principalArea",t)},expression:"changeInfo.form.principalArea"}}),e._v(" "),a("div",{staticClass:"disNone"},[a("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.principalArea,callback:function(t){e.$set(e.changeInfo.form,"principalArea",t)},expression:"changeInfo.form.principalArea"}})],1)],1)]:e._e(),e._v(" "),a("el-form-item",{attrs:{label:"是否最终节点",prop:"isEnd"}},[a("el-radio-group",{model:{value:e.changeInfo.form.isEnd,callback:function(t){e.$set(e.changeInfo.form,"isEnd",t)},expression:"changeInfo.form.isEnd"}},[a("el-radio",{attrs:{label:"0"}},[e._v("不是")]),e._v(" "),a("el-radio",{attrs:{label:"1"}},[e._v("是")])],1)],1)],2),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendChangeAjax("formByChange")}}},[e._v("修 改")]),e._v(" "),a("el-button",{on:{click:e.resetChangeInfo}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"1"===e.statusInfo.form.status?"启用":"禁用",width:"600px",center:"",visible:e.statusInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.statusInfo,"isOpen",t)}}},[a("p",{staticClass:"text-center"},[e._v("\n      确定"+e._s("1"===e.statusInfo.form.status?"启用":"禁用")+"\n      "),a("span",{staticClass:"text-red"},[e._v(" "+e._s(e.statusInfo.form.name)+" ")]),e._v("吗？\n    ")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.sendStatusAjax}},[e._v("确 认")]),e._v(" "),a("el-button",{on:{click:function(t){e.statusInfo.isOpen=!1}}},[e._v("取 消")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"分配部门",width:"360px",center:"",visible:e.bangDepartment.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.bangDepartment,"isOpen",t)}}},[a("el-table",{ref:"bangDepartment",attrs:{height:"290",data:e.bangDepartment.list,border:"",stripe:"",size:"small"},on:{"selection-change":e.selectDepartmentChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{label:"部门名称",prop:"name"}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.sendDepartmentAjax}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){return e.closeBang("bangDepartment")}}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"分配部门",width:"360px",center:"",visible:e.bangRole.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.bangRole,"isOpen",t)}}},[a("el-table",{ref:"bangRole",attrs:{height:"290",data:e.bangRole.list,border:"",stripe:"",size:"small"},on:{"selection-change":e.selectRoleChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{label:"角色名称",prop:"name"}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.sendRoleAjax}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){return e.closeBang("bangRole")}}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]},s=a("C7Lr")(r,i,!1,null,null,null);t.default=s.exports}});