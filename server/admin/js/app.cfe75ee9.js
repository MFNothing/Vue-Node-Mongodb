(function(e){function t(t){for(var r,i,l=t[0],o=t[1],c=t[2],m=0,p=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"22de":function(e,t,n){"use strict";var r=n("8319"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),l={},o=Object(i["a"])(l,a,s,!1,null,null,null),c=o.exports,u=n("5c96"),m=n.n(u);n("0fae");r["default"].use(m.a);var p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"100vh"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",{attrs:{router:"","default-openeds":["1","2","3"],"unique-opened":"","default-active":e.$route.path}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("内容管理")]),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("物品")]),n("el-menu-item",{attrs:{index:"/items/create"}},[e._v("物品分类")]),n("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("英雄")]),n("el-menu-item",{attrs:{index:"/heros/create"}},[e._v("英雄分类")]),n("el-menu-item",{attrs:{index:"/heros/list"}},[e._v("英雄列表")])],2),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("文章")]),n("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("文章分类")]),n("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("运营管理")]),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("广告位")]),n("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("广告位分类")]),n("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("系统管理")]),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("分类")]),n("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),n("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("管理员")]),n("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("管理员分类")]),n("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("el-dropdown",[n("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("查看")]),n("el-dropdown-item",[e._v("新增")]),n("el-dropdown-item",[e._v("删除")])],1)],1),n("span",[e._v("王小虎")])],1),n("el-main",[n("router-view",{key:e.$route.path})],1)],1)],1)},h=[],f=(n("cb29"),{data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}}),v=f,g=(n("22de"),Object(i["a"])(v,d,h,!1,null,null,null)),b=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),n("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-form-item",{attrs:{label:"父级分类"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},x=[],y=(n("d3b7"),n("96cf"),{props:{id:{}},data:function(){return{model:{},parents:[]}},methods:{save:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.id){t.next=6;break}return t.next=3,regeneratorRuntime.awrap(this.$http.post("rest/categories",this.model));case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,regeneratorRuntime.awrap(this.$http.put("rest/categories/".concat(this.id),this.model));case 8:e=t.sent;case 9:console.log(e),this.$router.push("/categories/list"),this.$message({type:"succress",message:"保存成功"});case 12:case"end":return t.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},fetchParents:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories"));case 2:e=t.sent,this.parents=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.fetchParents(),this.id&&this.fetch()}}),_=y,$=Object(i["a"])(_,w,x,!1,null,null,null),k=$.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("分类列表")]),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),n("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),n("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},O=[],S=(n("b0c0"),{data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm("是否删除分类 ".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/categories/".concat(e._id)));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),null,this)}}}),C=S,j=Object(i["a"])(C,R,O,!1,null,null,null),T=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品")]),n("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),n("el-form-item",{attrs:{label:"图片"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?n("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},z=[],B={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.id){t.next=6;break}return t.next=3,regeneratorRuntime.awrap(this.$http.post("rest/items",this.model));case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,regeneratorRuntime.awrap(this.$http.put("rest/items/".concat(this.id),this.model));case 8:e=t.sent;case 9:console.log(e),this.$router.push("/items/list"),this.$message({type:"succress",message:"保存成功"});case 12:case"end":return t.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/items/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},afterUpload:function(e){this.$set(this.model,"icon",e.url)}},created:function(){this.id&&this.fetch()}},D=B,P=Object(i["a"])(D,E,z,!1,null,null,null),A=P.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("分类列表")]),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),n("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),n("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon}})]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},I=[],H={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/items"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm("是否删除物品 ".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/items/".concat(e._id)));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),null,this)}}},L=H,M=Object(i["a"])(L,U,I,!1,null,null,null),V=M.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),n("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-tabs",{attrs:{value:"",type:"border-card"}},[n("el-tab-pane",{attrs:{label:"基础信息"}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),n("el-form-item",{attrs:{label:"称号"}},[n("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),n("el-form-item",{attrs:{label:"头像"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"avatar",t.url)}}},[e.model.avatar?n("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),n("el-form-item",{attrs:{label:"Banner"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?n("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),n("el-form-item",{attrs:{label:"类型"}},[n("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{label:"难度"}},[n("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{"show-score":"",max:9},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),n("el-form-item",{attrs:{label:"技能"}},[n("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{"show-score":"",max:9},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),n("el-form-item",{attrs:{label:"攻击"}},[n("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{"show-score":"",max:9},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),n("el-form-item",{attrs:{label:"生存"}},[n("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{"show-score":"",max:9},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),n("el-form-item",{attrs:{label:"顺风出装"}},[n("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{label:"逆风出装"}},[n("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{label:"使用技巧"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),n("el-form-item",{attrs:{label:"对抗技巧"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),n("el-form-item",{attrs:{label:"团战思路"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),n("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[n("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.skills.push({})}}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 添加技能")]),n("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,r){return n("el-col",{key:r,attrs:{md:12}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"item.name"}})],1),n("el-form-item",{attrs:{label:"图标"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(n){return e.$set(t,"icon",n.url)}}},[t.icon?n("img",{staticClass:"avatar",attrs:{src:t.icon}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),n("el-form-item",{attrs:{label:"冷却值"}},[n("el-input",{model:{value:t.delay,callback:function(n){e.$set(t,"delay",n)},expression:"item.delay"}})],1),n("el-form-item",{attrs:{label:"消耗"}},[n("el-input",{model:{value:t.cost,callback:function(n){e.$set(t,"cost",n)},expression:"item.cost"}})],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(n){e.$set(t,"description",n)},expression:"item.description"}})],1),n("el-form-item",{attrs:{label:"小提示"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(n){e.$set(t,"tips",n)},expression:"item.tips"}})],1),n("el-form-item",[n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(r,1)}}},[e._v("删除")])],1)],1)})),1)],1),n("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[n("el-button",{attrs:{type:"small"},on:{click:function(t){return e.model.partners.push({})}}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 添加英雄 ")]),n("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,r){return n("el-col",{key:r,attrs:{md:12}},[n("el-form-item",{attrs:{label:"英雄"}},[n("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(n){e.$set(t,"hero",n)},expression:"item.hero"}},e._l(e.heroes,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(n){e.$set(t,"description",n)},expression:"item.description"}})],1),n("el-form-item",[n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.partners.splice(r,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),n("el-form-item",[n("el-button",{staticStyle:{"margin-top":"1rem"},attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},J=[],N=(n("4de4"),{props:{id:{}},data:function(){return{categories:[],items:[],heroes:[],model:{name:"",avatar:"",banner:"",scores:{difficult:0,skills:0,attack:0,survive:0},items1:[],items2:[],usageTips:"",battleTips:"",teamTips:"",partners:[]}}},methods:{save:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.id){t.next=6;break}return t.next=3,regeneratorRuntime.awrap(this.$http.post("rest/heros",this.model));case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,regeneratorRuntime.awrap(this.$http.put("rest/heros/".concat(this.id),this.model));case 8:e=t.sent;case 9:console.log(e),this.$router.push("/heros/list"),this.$message({type:"succress",message:"保存成功"});case 12:case"end":return t.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/heros/".concat(this.id)));case 2:e=t.sent,this.model=Object.assign({},this.model,e.data);case 4:case"end":return t.stop()}}),null,this)},fetchCategories:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories"));case 2:e=t.sent,this.categories=(e.data||[]).filter((function(e){return e.parent&&"英雄分类"===e.parent.name}));case 4:case"end":return t.stop()}}),null,this)},fetchItems:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/items"));case 2:e=t.sent,this.items=(e.data||[]).filter((function(e){return!0}));case 4:case"end":return t.stop()}}),null,this)},fetchHeroes:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/heroes"));case 2:e=t.sent,this.heroes=(e.data||[]).filter((function(e){return!0}));case 4:case"end":return t.stop()}}),null,this)},afterUpload:function(e){this.model.avatar=e.url}},created:function(){this.id&&this.fetch(),this.fetchCategories(),this.fetchItems(),this.fetchHeroes()}}),F=N,G=Object(i["a"])(F,q,J,!1,null,null,null),K=G.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("英雄列表")]),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),n("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),n("el-table-column",{attrs:{prop:"icon",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar}})]}}])}),n("el-table-column",{attrs:{prop:"categories[0].name",label:"种类"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.$router.push("/heros/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},W=[],X={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/heros"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm("是否删除英雄 ".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/heros/".concat(e._id)));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),null,this)}}},Y=X,Z=Object(i["a"])(Y,Q,W,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章")]),n("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-form-item",{attrs:{label:"所属分类"}},[n("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),n("el-form-item",{attrs:{label:"详情"}},[n("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},ne=[],re=n("5873"),ae={props:{id:{}},data:function(){return{model:{},categories:[]}},components:{VueEditor:re["a"]},methods:{save:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.id){t.next=6;break}return t.next=3,regeneratorRuntime.awrap(this.$http.post("rest/articles",this.model));case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,regeneratorRuntime.awrap(this.$http.put("rest/articles/".concat(this.id),this.model));case 8:e=t.sent;case 9:console.log(e),this.$router.push("/articles/list"),this.$message({type:"succress",message:"保存成功"});case 12:case"end":return t.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/articles/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},fetchCategories:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/categories"));case 2:e=t.sent,this.categories=e.data;case 4:case"end":return t.stop()}}),null,this)},handleImageAdded:function(e,t,n,r){var a,s;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return a=new FormData,a.append("file",e),i.next=4,regeneratorRuntime.awrap(this.$http.post("upload",a));case 4:s=i.sent,t.insertEmbed(n,"image",s.data.url),r();case 7:case"end":return i.stop()}}),null,this)}},created:function(){this.fetchCategories(),this.id&&this.fetch()}},se=ae,ie=Object(i["a"])(se,te,ne,!1,null,null,null),le=ie.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("文章列表")]),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),n("el-table-column",{attrs:{prop:"title",label:"文章标题"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ce=[],ue={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/articles"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm("是否删除文章 ".concat(e.title),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/articles/".concat(e._id)));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),null,this)}}},me=ue,pe=Object(i["a"])(me,oe,ce,!1,null,null,null),de=pe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位")]),n("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),n("el-form-item",{attrs:{label:"广告"}},[n("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.items.push({})}}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 添加广告")]),n("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,r){return n("el-col",{key:r,attrs:{md:24}},[n("el-form-item",{attrs:{label:"图片"}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(n){return e.$set(t,"image",n.url)}}},[t.image?n("img",{staticClass:"avatar",attrs:{src:t.image}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),n("el-form-item",{attrs:{label:"跳转链接"}},[n("el-input",{model:{value:t.url,callback:function(n){e.$set(t,"url",n)},expression:"item.url"}})],1),n("el-form-item",[n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.items.splice(r,1)}}},[e._v("删除")])],1)],1)})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},fe=[],ve={props:{id:{}},data:function(){return{model:{items:[]},parents:[]}},methods:{save:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.id){t.next=6;break}return t.next=3,regeneratorRuntime.awrap(this.$http.post("rest/ads",this.model));case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,regeneratorRuntime.awrap(this.$http.put("rest/ads/".concat(this.id),this.model));case 8:e=t.sent;case 9:console.log(e),this.$router.push("/ads/list"),this.$message({type:"succress",message:"保存成功"});case 12:case"end":return t.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/ads/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetch()}},ge=ve,be=Object(i["a"])(ge,he,fe,!1,null,null,null),we=be.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("广告位列表")]),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),n("el-table-column",{attrs:{prop:"name",label:"广告位名称"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ye=[],_e={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/ads"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm("是否删除广告 ".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/ads/".concat(e._id)));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),null,this)}}},$e=_e,ke=Object(i["a"])($e,xe,ye,!1,null,null,null),Re=ke.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),n("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},Se=[],Ce={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.id){t.next=6;break}return t.next=3,regeneratorRuntime.awrap(this.$http.post("rest/admin_users",this.model));case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,regeneratorRuntime.awrap(this.$http.put("rest/admin_users/".concat(this.id),this.model));case 8:e=t.sent;case 9:console.log(e),this.$router.push("/admin_users/list"),this.$message({type:"succress",message:"保存成功"});case 12:case"end":return t.stop()}}),null,this)},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/admin_users/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetch()}},je=Ce,Te=Object(i["a"])(je,Oe,Se,!1,null,null,null),Ee=Te.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("分类列表")]),n("el-table",{attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),n("el-table-column",{attrs:{prop:"username",label:"用户名"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Be=[],De={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("rest/admin_users"));case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:this.$confirm("是否删除用户名 ".concat(e.username),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(t.$http.delete("rest/admin_users/".concat(e._id)));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),null,this)}}},Pe=De,Ae=Object(i["a"])(Pe,ze,Be,!1,null,null,null),Ue=Ae.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[n("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},He=[],Le={data:function(){return{model:{username:"",password:""}}},methods:{login:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.post("login",this.model));case 2:e=t.sent,localStorage.token=e.data.token,this.$router.push("/"),this.$message({message:"登录成功",type:"success"});case 6:case"end":return t.stop()}}),null,this)}}},Me=Le,Ve=(n("d6db"),Object(i["a"])(Me,Ie,He,!1,null,null,null)),qe=Ve.exports;r["default"].use(p["a"]);var Je=[{path:"/",name:"main",component:b,children:[{path:"/categories/create",component:k},{path:"/categories/edit/:id",component:k,props:!0},{path:"/categories/list",component:T},{path:"/items/create",component:A},{path:"/items/edit/:id",component:A,props:!0},{path:"/items/list",component:V},{path:"/heros/create",component:K},{path:"/heros/edit/:id",component:K,props:!0},{path:"/heros/list",component:ee},{path:"/articles/create",component:le},{path:"/articles/edit/:id",component:le,props:!0},{path:"/articles/list",component:de},{path:"/ads/create",component:we},{path:"/ads/edit/:id",component:we,props:!0},{path:"/ads/list",component:Re},{path:"/admin_users/create",component:Ee},{path:"/admin_users/edit/:id",component:Ee,props:!0},{path:"/admin_users/list",component:Ue}]},{path:"/login",name:"login",component:qe,meta:{isPublic:!0}}],Ne=new p["a"]({routes:Je});Ne.beforeEach((function(e,t,n){if(!e.meta.isPublic&&!localStorage.token)return n("/login");n()}));var Fe=Ne,Ge=(n("a766"),n("bc3a")),Ke=n.n(Ge),Qe=Ke.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Qe.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),Qe.interceptors.response.use((function(e){return e}),(function(e){return e.response&&e.response.data&&e.response.data.message&&r["default"].prototype.$message({message:e.response.data.message,type:"error"}),401===e.response.status&&Fe.push("/login"),Promise.reject(e)}));var We=Qe;r["default"].config.productionTip=!1,r["default"].prototype.$http=We,r["default"].mixin({computed:{uploadUrl:function(){return this.$http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(localStorage.token||"")}}}}),new r["default"]({router:Fe,render:function(e){return e(c)}}).$mount("#app")},8319:function(e,t,n){},"85ec":function(e,t,n){},a766:function(e,t,n){},d6db:function(e,t,n){"use strict";var r=n("e67a"),a=n.n(r);a.a},e67a:function(e,t,n){}});
//# sourceMappingURL=app.cfe75ee9.js.map