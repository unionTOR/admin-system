webpackJsonp([3],{WlXF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("a3Yh"),a=n.n(o),r=[{bangStatus:"1",id:41,name:"超级管理员"},{bangStatus:"1",id:33,name:"业务部"},{bangStatus:"1",id:34,name:"外访部"},{bangStatus:"0",id:35,name:"总经理"},{bangStatus:"1",id:36,name:"财务部"},{bangStatus:"1",id:42,name:"风控部"},{bangStatus:"0",id:43,name:"内务部"}],s=[{bangStatus:"1",id:1,name:"管理员"},{bangStatus:"1",id:21,name:"超级管理员"},{bangStatus:"0",id:2,name:"县级业务员"},{bangStatus:"0",id:3,name:"县级风控"},{bangStatus:"0",id:4,name:"县级外访员"},{bangStatus:"0",id:5,name:"县级负责人"},{bangStatus:"1",id:6,name:"市级风控"},{bangStatus:"1",id:7,name:"市级负责人"},{bangStatus:"1",id:8,name:"总经理"},{bangStatus:"0",id:9,name:"县级内务"},{bangStatus:"0",id:10,name:"市级财务"},{bangStatus:"1",id:20,name:"省级风控"},{bangStatus:"1",id:22,name:"市级管理员"},{bangStatus:"1",id:24,name:"市级指派员"},{bangStatus:"1",id:25,name:"副总经理"}],l={name:"GroupStaff",data:function(){return{companyData:{id:1,name:"总公司",code:"001",twoDimensionCodeImageUrl:"http://cgtzimage.b0.upaiyun.com/matrix/image/000000000000000B.png"},departmentList:[],roleList:[],searchInfo:{list:[],form:{name:"",phone:""}},addInfo:{isOpen:!1,form:{loginAccount:"",password:"",name:"",phoneNo:"",email:"",departmentId:"",companyCode:"001",companyId:1,roleIdList:""}},changeInfo:{isOpen:!1,form:{}},statusInfo:{isOpen:!1,form:{}},passInfo:{isOpen:!1,form:{password:"",password2:""},data:{}},rules:{loginAccount:[{required:!0,message:"登录名不能为空",trigger:"change"}],password:[{required:!0,message:"密码不能为空",trigger:"change"}],password2:[{required:!0,message:"确认密码不能为空",trigger:"change"}],name:[{required:!0,message:"姓名不能为空",trigger:"change"}],phoneNo:[{required:!0,message:"手机号不能为空",trigger:"change"}],departmentId:[{type:"number",required:!0,message:"请选择所在部门",trigger:"change"}],roleIdList:[{type:"array",required:!0,message:"所属角色不能为空",trigger:"change"}]}}},methods:{getListAjax:function(){console.log("发送ajax查询数据或分页规则处理"),this.searchInfo.list=[{companyCityCode:"",companyCode:"0",companyId:"1",createTime:1511917213e3,departmentId:"41",departmentName:"超级管理员",email:"",id:150,loginAccount:"admin",name:"admin",phoneNo:"15012345678",twoDimensionCodeImageUrl:"http://cgtzimage.b0.upaiyun.com/matrix/image/000000000000000B.png",roleList:[{hideLevel:100,id:21,name:"超级管理员",status:"0",type:"0"}],status:"0"}]},formatValue:function(e,t,n){if("status"===t.property)return this.fomatLoopValue(n,[{text:"1",value:"禁用"},{text:"0",value:"启用"}]);if("email"===t.property)return n||"未填写";if("roleList"===t.property){for(var o=[],a=0;a<n.length;a++)o.push(n[a].name);return o.join("、")}},sendAddAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送addInfo.form数据"),console.log(t.addInfo.form)})},resetAddInfo:function(){this.resetForm("formByAdd"),this.addInfo.form.email="",this.addInfo.isOpen=!1},openChange:function(e){var t=this;this.changeInfo.isOpen=!0,setTimeout(function(){var n;t.$refs.formByChange.resetFields();var o=[];""!==e.roleList&&e.roleList.forEach(function(e){o.push(parseInt(e.id))}),t.changeInfo.form=(n={id:e.id,loginAccount:e.loginAccount,name:e.name,phoneNo:e.phoneNo,email:e.email,departmentId:parseInt(e.departmentId),companyCode:e.companyCode,companyId:parseInt(e.companyId)},a()(n,"companyId",1),a()(n,"roleIdList",o),n)},100)},sendChangeAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送changeInfo.form数据"),console.log(t.changeInfo.form)})},resetChangeInfo:function(){this.resetForm("formByChange"),this.changeInfo.form.email="",this.changeInfo.isOpen=!1},openStatus:function(e){this.statusInfo={isOpen:!0,form:e}},sendStatusAjax:function(){console.log("确认启用或禁用")},openPass:function(e){this.passInfo.isOpen=!0,this.passInfo.data=e},sendPassAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送passInfo.form数据"),console.log(t.passInfo.form)})},resetPassInfo:function(){this.$refs.formByPass.resetFields(),this.passInfo.isOpen=!1}},created:function(){var e=this;this.getListAjax(),r.forEach(function(t){"1"===t.bangStatus&&e.departmentList.push(t)}),s.forEach(function(t){"1"===t.bangStatus&&e.roleList.push(t)})}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",{attrs:{span:20}},[n("div",{staticClass:"company-big-title"},[e._v("\n      员工管理（"),n("span",[e._v(e._s(e.companyData.name))]),e._v("）\n    ")]),e._v(" "),n("SearchWarp",[n("el-form",{ref:"searchInfo.form",attrs:{inline:!0,model:e.searchInfo.form}},[n("el-form-item",[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.$router.push("/group/company")}}},[e._v("返回公司管理")])],1),e._v(" "),n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{attrs:{placeholder:"请输入员工姓名"},model:{value:e.searchInfo.form.name,callback:function(t){e.$set(e.searchInfo.form,"name",t)},expression:"searchInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.searchInfo.form.photo,callback:function(t){e.$set(e.searchInfo.form,"photo",t)},expression:"searchInfo.form.photo"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:e.getListAjax}}),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.addInfo.isOpen=!0}}},[e._v("新增")])],1)],1)],1),e._v(" "),n("ContentWarp",[n("el-table",{attrs:{border:"",stripe:"",data:e.searchInfo.list,size:"small"}},[n("el-table-column",{attrs:{align:"center",label:"姓名",prop:"name",width:"80",fixed:""}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"登录名",prop:"loginAccount",width:"120",fixed:""}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"ID",prop:"id",width:"50"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"手机号",prop:"phoneNo",width:"110"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"邮箱",prop:"email",formatter:e.formatValue,"min-width":"150px"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"部门",prop:"departmentName",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"角色",prop:"roleList",formatter:e.formatValue,"min-width":"180px"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"状态",prop:"status",formatter:e.formatValue,width:"60"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建时期",prop:"createTime",formatter:e.fomatTime,width:"100"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作","min-width":"350px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(n){return e.openChange(t.row)}}},[e._v("\n              修改\n            ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"warning",plain:""},on:{click:function(n){return e.openPass(t.row)}}},[e._v("重置密码")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"1"===t.row.status?"success":"danger",plain:""},on:{click:function(n){return e.openStatus(t.row)}}},[e._v("\n              "+e._s("1"===t.row.status?"启用":"禁用")+"\n            ")]),e._v(" "),n("el-button",{attrs:{size:"mini",plain:""},on:{click:function(n){return e.$qr([t.row.twoDimensionCodeImageUrl,t.row.name])}}},[e._v("\n              二维码\n            ")])]}}])})],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"新增员工",width:"600px",center:"",visible:e.addInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.addInfo,"isOpen",t)}}},[n("el-form",{ref:"formByAdd",attrs:{model:e.addInfo.form,rules:e.rules,"label-width":"90px"}},[n("el-form-item",{attrs:{label:"登录名",prop:"loginAccount"}},[n("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.loginAccount,callback:function(t){e.$set(e.addInfo.form,"loginAccount",t)},expression:"addInfo.form.loginAccount"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:e.addInfo.form.password,callback:function(t){e.$set(e.addInfo.form,"password",t)},expression:"addInfo.form.password"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.name,callback:function(t){e.$set(e.addInfo.form,"name",t)},expression:"addInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号",prop:"phoneNo"}},[n("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.phoneNo,callback:function(t){e.$set(e.addInfo.form,"phoneNo",t)},expression:"addInfo.form.phoneNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{attrs:{type:"text"},model:{value:e.addInfo.form.email,callback:function(t){e.$set(e.addInfo.form,"email",t)},expression:"addInfo.form.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"所在部门",prop:"departmentId"}},[n("el-select",{attrs:{clearable:""},model:{value:e.addInfo.form.departmentId,callback:function(t){e.$set(e.addInfo.form,"departmentId",t)},expression:"addInfo.form.departmentId"}},[e._l(e.departmentList,function(e,t){return[n("el-option",{key:"departmentList"+t,attrs:{label:e.name,value:e.id}})]})],2)],1),e._v(" "),n("el-form-item",{attrs:{label:"所属角色",prop:"roleIdList"}},[n("el-select",{attrs:{multiple:""},model:{value:e.addInfo.form.roleIdList,callback:function(t){e.$set(e.addInfo.form,"roleIdList",t)},expression:"addInfo.form.roleIdList"}},[e._l(e.roleList,function(e,t){return[n("el-option",{key:"roleList"+t,attrs:{label:e.name,value:e.id}})]})],2)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendAddAjax("formByAdd")}}},[e._v("新 增")]),e._v(" "),n("el-button",{on:{click:e.resetAddInfo}},[e._v("取 消")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"修改员工",width:"600px",center:"",visible:e.changeInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.changeInfo,"isOpen",t)}}},[n("el-form",{ref:"formByChange",attrs:{model:e.changeInfo.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"登录名",prop:"loginAccount"}},[n("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.loginAccount,callback:function(t){e.$set(e.changeInfo.form,"loginAccount",t)},expression:"changeInfo.form.loginAccount"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.name,callback:function(t){e.$set(e.changeInfo.form,"name",t)},expression:"changeInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号",prop:"phoneNo"}},[n("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.phoneNo,callback:function(t){e.$set(e.changeInfo.form,"phoneNo",t)},expression:"changeInfo.form.phoneNo"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{attrs:{type:"text"},model:{value:e.changeInfo.form.email,callback:function(t){e.$set(e.changeInfo.form,"email",t)},expression:"changeInfo.form.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"所在部门",prop:"departmentId"}},[n("el-select",{attrs:{clearable:""},model:{value:e.changeInfo.form.departmentId,callback:function(t){e.$set(e.changeInfo.form,"departmentId",t)},expression:"changeInfo.form.departmentId"}},[e._l(e.departmentList,function(e,t){return[n("el-option",{key:"departmentList"+t,attrs:{label:e.name,value:e.id}})]})],2)],1),e._v(" "),void 0!==e.changeInfo.form.roleIdList?[n("el-form-item",{attrs:{label:"所属角色",prop:"roleIdList"}},[n("el-select",{attrs:{multiple:""},model:{value:e.changeInfo.form.roleIdList,callback:function(t){e.$set(e.changeInfo.form,"roleIdList",t)},expression:"changeInfo.form.roleIdList"}},[e._l(e.roleList,function(e,t){return[n("el-option",{key:"roleList"+t,attrs:{label:e.name,value:e.id}})]})],2)],1)]:e._e()],2),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendChangeAjax("formByChange")}}},[e._v("修 改")]),e._v(" "),n("el-button",{on:{click:e.resetChangeInfo}},[e._v("取 消")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"正在修改 "+e.passInfo.data.name+" 的密码",width:"600px",center:"",visible:e.passInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.passInfo,"isOpen",t)}}},[n("el-form",{ref:"formByPass",attrs:{model:e.passInfo.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"新密码",prop:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:e.passInfo.form.password,callback:function(t){e.$set(e.passInfo.form,"password",t)},expression:"passInfo.form.password"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"再次确认",prop:"password2"}},[n("el-input",{attrs:{type:"password"},model:{value:e.passInfo.form.password2,callback:function(t){e.$set(e.passInfo.form,"password2",t)},expression:"passInfo.form.password2"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendPassAjax("formByPass")}}},[e._v("确 认")]),e._v(" "),n("el-button",{on:{click:e.resetPassInfo}},[e._v("取 消")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"1"===e.statusInfo.form.status?"启用":"禁用",width:"600px",center:"",visible:e.statusInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.statusInfo,"isOpen",t)}}},[n("p",{staticClass:"text-center"},[e._v("\n        确定"+e._s("1"===e.statusInfo.form.status?"启用":"禁用")+"\n        "),n("span",{staticClass:"text-red"},[e._v("\n          "+e._s(e.statusInfo.form.name)+" （"+e._s(e.statusInfo.form.loginAccount)+"） ")]),e._v("吗？\n      ")]),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.sendStatusAjax}},[e._v("确 认")]),e._v(" "),n("el-button",{on:{click:function(t){e.statusInfo.isOpen=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]},f=n("C7Lr")(l,i,!1,null,null,null);t.default=f.exports},a3Yh:function(e,t,n){"use strict";t.__esModule=!0;var o,a=n("liLe"),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lbsL:function(e,t,n){n("ngi5");var o=n("Rv9F").Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},liLe:function(e,t,n){e.exports={default:n("lbsL"),__esModule:!0}},ngi5:function(e,t,n){var o=n("8leu");o(o.S+o.F*!n("berT"),"Object",{defineProperty:n("Mr+r").f})}});