webpackJsonp([17],{m9fB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"ProductMaterial",data:function(){return{materialTree:[{children:[{children:[{children:[{children:[{dataStage:1,englishName:"b_guarantor1_credit_credit2",hideLevel:1,id:48,isDataShow:0,isFinish:1,isMust:1,isShow:0,name:"简易征信报告",parentId:"35",productCode:"WND",seq:3,templateId:"31",uri:"http://cgtzimage.b0.upaiyun.com/4310765c-85c7-4b8d-a954-000977619e12.jpg",version:"1.0"}],dataStage:1,englishName:"b_guarantor1_credit",hideLevel:1,id:35,isDataShow:0,isFinish:0,isMust:1,isShow:1,name:"征信信息",parentId:"32",productCode:"WND",seq:2,version:"1.0"}],dataStage:1,englishName:"b_guarantor1",hideLevel:1,id:32,isDataShow:0,isFinish:0,isMust:1,isShow:1,name:"担保人",productCode:"WND",seq:2,version:"1.0"}],dataStage:1,name:"业务员"}],name:"微农贷1.0",productCode:"WND"}],list:{title:"",data:[],isFinish:!1},addInfo:{isOpen:!1,form:{name:"",seq:0,isShow:1,isFinish:0,uri:"",templateId:"",isMust:1,hideLevel:1}},changeInfo:{isOpen:!1,form:{}},deleteInfo:{isOpen:!1,form:{}},rules:{name:[{required:!0,message:"资料名称不能为空",trigger:"change"}],uri:[{required:!0,message:"图标URL不能为空",trigger:"change"}],templateId:[{required:!0,message:"模板ID不能为空",trigger:"change"}]}}},methods:{handleNodeClick:function(e){this.list.title=e.name,this.list.data=e.children||[],void 0!==e.children&&e.children.length>0&&void 0!==e.children[0].isFinish&&1===e.children[0].isFinish?this.list.isFinish=!0:this.list.isFinish=!1},formatValue:function(e,t,n){return"isMust"===t.property?0===n?"是":"否":0===n?"否":"是"},sendAddAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送addInfo.form数据"),console.log(t.addInfo.form)})},resetAddInfo:function(){this.resetForm("formByAdd"),this.addInfo.isOpen=!1},openChange:function(e){var t=this;this.changeInfo.isOpen=!0,setTimeout(function(){t.$refs.formByChange.resetFields(),t.changeInfo.form={id:e.id,name:e.name,seq:e.seq,isShow:e.isShow,isFinish:e.isFinish,uri:e.uri||"",templateId:e.templateId||"",isMust:e.isMust||1,hideLevel:e.hideLevel||1}},100)},sendChangeAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送changeInfo.form数据"),console.log(t.changeInfo.form)})},resetChangeInfo:function(){this.$refs.formByChange.resetFields(),this.changeInfo.isOpen=!1},openDelete:function(e){this.deleteInfo={isOpen:!0,form:e}},sendDeleteAjax:function(){console.log("确认删除ID为"+this.deleteInfo.form.id+"的资料")}},mounted:function(){this.list.title=this.materialTree[0].name,this.list.data=this.materialTree[0].children,this.list.isFinish=!1}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("Breadcrumb"),e._v(" "),n("ContentWarp",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:4}},[n("el-tree",{attrs:{data:e.materialTree,props:{children:"children",label:"name"},accordion:""},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),n("el-col",{attrs:{span:20}},[n("div",{staticClass:"content-right-title"},[e._v("\n          "+e._s(e.list.title)+"\n          "),"微农贷1.0"!==e.list.title?[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.addInfo.isOpen=!0}}},[e._v("新 增")])]:e._e()],2),e._v(" "),n("el-table",{attrs:{border:"",stripe:"",data:e.list.data,size:"small"}},[n("el-table-column",{attrs:{align:"center",label:"资料名称",prop:"name","min-width":"160px",fixed:""}},["微农贷1.0"!==e.list.title?[n("el-table-column",{attrs:{align:"center",label:"最终节点",prop:"isFinish",formatter:e.formatValue}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"排序",prop:"seq"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"显示",prop:"isShow",formatter:e.formatValue}})]:e._e(),e._v(" "),e.list.isFinish?[n("el-table-column",{attrs:{align:"center",label:"是否必填",prop:"isMust",formatter:e.formatValue}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"资料等级",prop:"hideLevel"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"模板ID",prop:"templateId"}})]:e._e()],2),e._v(" "),"微农贷1.0"!==e.list.title?[n("el-table-column",{attrs:{align:"center",label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(n){return e.openChange(t.row)}}},[e._v("修改\n                ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(n){return e.openDelete(t.row)}}},[e._v("删除")])]}}],null,!1,906535706)})]:e._e()],2)],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"新增资料",width:"600px",center:"",visible:e.addInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.addInfo,"isOpen",t)}}},[n("el-form",{ref:"formByAdd",attrs:{model:e.addInfo.form,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"资料名称",prop:"name"}},[n("el-input",{model:{value:e.addInfo.form.name,callback:function(t){e.$set(e.addInfo.form,"name",t)},expression:"addInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"排序",prop:"seq"}},[n("el-input-number",{attrs:{min:0,max:100},model:{value:e.addInfo.form.seq,callback:function(t){e.$set(e.addInfo.form,"seq",t)},expression:"addInfo.form.seq"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"有数据时才显示",prop:"isShow"}},[n("el-radio-group",{model:{value:e.addInfo.form.isShow,callback:function(t){e.$set(e.addInfo.form,"isShow",t)},expression:"addInfo.form.isShow"}},[n("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"是否最终节点",prop:"isFinish"}},[n("el-radio-group",{model:{value:e.addInfo.form.isFinish,callback:function(t){e.$set(e.addInfo.form,"isFinish",t)},expression:"addInfo.form.isFinish"}},[n("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),1===e.addInfo.form.isFinish?[n("el-form-item",{attrs:{label:"图标URL",prop:"uri"}},[n("el-input",{model:{value:e.addInfo.form.uri,callback:function(t){e.$set(e.addInfo.form,"uri",t)},expression:"addInfo.form.uri"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"模板ID",prop:"templateId"}},[n("el-input",{model:{value:e.addInfo.form.templateId,callback:function(t){e.$set(e.addInfo.form,"templateId",t)},expression:"addInfo.form.templateId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否必填",prop:"isMust"}},[n("el-radio-group",{model:{value:e.addInfo.form.isMust,callback:function(t){e.$set(e.addInfo.form,"isMust",t)},expression:"addInfo.form.isMust"}},[n("el-radio",{attrs:{label:0}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:1}},[e._v("否")])],1)],1),e._v(" "),0===e.addInfo.form.isMust?[n("el-form-item",{attrs:{label:"资料等级",prop:"hideLevel"}},[n("el-input-number",{attrs:{min:1,max:10},model:{value:e.addInfo.form.hideLevel,callback:function(t){e.$set(e.addInfo.form,"hideLevel",t)},expression:"addInfo.form.hideLevel"}})],1)]:e._e()]:e._e()],2),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendAddAjax("formByAdd")}}},[e._v("新 增")]),e._v(" "),n("el-button",{on:{click:e.resetAddInfo}},[e._v("取 消")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"修改资料",width:"600px",center:"",visible:e.changeInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.changeInfo,"isOpen",t)}}},[n("el-form",{ref:"formByChange",attrs:{model:e.changeInfo.form,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"资料名称",prop:"name"}},[n("el-input",{model:{value:e.changeInfo.form.name,callback:function(t){e.$set(e.changeInfo.form,"name",t)},expression:"changeInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"排序",prop:"seq"}},[n("el-input-number",{attrs:{min:0,max:100},model:{value:e.changeInfo.form.seq,callback:function(t){e.$set(e.changeInfo.form,"seq",t)},expression:"changeInfo.form.seq"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"有数据时才显示",prop:"isShow"}},[n("el-radio-group",{model:{value:e.changeInfo.form.isShow,callback:function(t){e.$set(e.changeInfo.form,"isShow",t)},expression:"changeInfo.form.isShow"}},[n("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"是否最终节点",prop:"isFinish"}},[n("el-radio-group",{model:{value:e.changeInfo.form.isFinish,callback:function(t){e.$set(e.changeInfo.form,"isFinish",t)},expression:"changeInfo.form.isFinish"}},[n("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),1===e.changeInfo.form.isFinish?[n("el-form-item",{attrs:{label:"图标URL",prop:"uri"}},[n("el-input",{model:{value:e.changeInfo.form.uri,callback:function(t){e.$set(e.changeInfo.form,"uri",t)},expression:"changeInfo.form.uri"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"模板ID",prop:"templateId"}},[n("el-input",{model:{value:e.changeInfo.form.templateId,callback:function(t){e.$set(e.changeInfo.form,"templateId",t)},expression:"changeInfo.form.templateId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否必填",prop:"isMust"}},[n("el-radio-group",{model:{value:e.changeInfo.form.isMust,callback:function(t){e.$set(e.changeInfo.form,"isMust",t)},expression:"changeInfo.form.isMust"}},[n("el-radio",{attrs:{label:0}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:1}},[e._v("否")])],1)],1),e._v(" "),0===e.changeInfo.form.isMust?[n("el-form-item",{attrs:{label:"资料等级",prop:"hideLevel"}},[n("el-input-number",{attrs:{min:1,max:10},model:{value:e.changeInfo.form.hideLevel,callback:function(t){e.$set(e.changeInfo.form,"hideLevel",t)},expression:"changeInfo.form.hideLevel"}})],1)]:e._e()]:e._e()],2),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendChangeAjax("formByChange")}}},[e._v("修 改")]),e._v(" "),n("el-button",{on:{click:e.resetChangeInfo}},[e._v("取 消")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"删除",width:"600px",center:"",visible:e.deleteInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){return e.$set(e.deleteInfo,"isOpen",t)}}},[n("p",{staticClass:"text-center"},[e._v("\n      确定删除"),n("span",{staticClass:"text-red"},[e._v(" "+e._s(e.deleteInfo.form.name)+" ")]),e._v("吗？\n    ")]),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.sendDeleteAjax}},[e._v("确 认")]),e._v(" "),n("el-button",{on:{click:function(t){e.deleteInfo.isOpen=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]},i=n("C7Lr")(o,a,!1,null,null,null);t.default=i.exports}});