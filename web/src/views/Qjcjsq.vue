<template>
	<div>
		<div class="wrapper wrapper-content animated fadeInRight ibox-content" id="printMe">
      <!--startprint-->
      <form class="form-horizontal m" id="form">
        <h2 id="title">成都市龙泉驿区自来水总公司职工休假申请表</h2>
        <label id="bm" >部门:<span></span></label>
        <table border="1" cellpadding="5" cellspacing="0" >
          <tr>
            <td class="zuo">
              姓名:
            </td>
            <td class="you">
              <label class="nr"/>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              休假时间:
            </td>
            <td class="you">
              <label class="nr">
                <span id="startYear"></span> 年
                <span id="startMonth"></span> 月
                <span id="startDay"></span> 日至
                <span id="endYear"></span> 年
                <span id="endMonth"></span> 月
                <span id="endDay"></span> 日共
                <span id="qjsj"></span> 天
              </label>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              休假类别:
            </td>
            <td class="you">
              <label class="nr"/>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              休假地点:
            </td>
            <td class="you">
              <label class="nr"/>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              责任范围:
            </td>
            <td class="you">
              <label class="nr"/>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              劳资员审核:
            </td>
            <td class="you">
              <div class="youxia">
                <label class="nr"></label>
                <div class="qz">
                  <label id="lzyqz">劳资员签字:<span></span></label>
                  <label class="sj">
                    <span id="zxYear"></span> 年
                    <span id="zxMonth"></span> 月
                    <span id="zxDay"></span> 日
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              科室负责人意见:
            </td>
            <td class="you">
              <label class="nr"/>
              <div class="qz">
                <label id="ksfzr" >负责人签字:<span></span></label>
                <label class="sj">
                  <span id="ksYear"></span> 年
                  <span id="ksMonth"></span> 月
                  <span id="ksDay"></span> 日
                </label>
              </div>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              分管领导意见:
            </td>
            <td class="you">
              <label class="nr"/>
              <div class="qz">
                <label id="fgld" >分管领导签字:<span></span></label>
                <label class="sj">
                  <span id="ldYear"></span> 年
                  <span id="ldMonth"></span> 月
                  <span id="ldDay"></span> 日
                </label>
              </div>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              公司领导意见:
            </td>
            <td class="you">
              <label id="zjl"></label>
              <div class="qz">
                <label id="gsld" >领导签字:</label>
                <label id="rq"><span ></span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</label>
              </div>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              备注:
            </td>
            <td class="you">
              <label>
                <span>休假理由一栏要注明事由，若补假要注明何时加班</span><br>
                <span>休假地点一栏必须填写</span><br>
                <span>外出休假者要注明安全责任自负</span>
              </label>
            </td>
          </tr>
        </table>
      </form>
      <div style="page-break-after:always"></div>
      <form class="form-horizontal m" id="form1">
        <h2 id="title2">个人申请</h2>
        <div>
          <label class="zw">
            龙泉驿区自来水总公司:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本人(<span></span>)
            因<span></span>，故申请于
            <span id="startYear1"></span> 年
            <span id="startMonth1"></span> 月
            <span id="startDay1"></span> 日至
            <span id="endYear1"></span> 年
            <span id="endMonth1"></span> 月
            <span id="endDay1"></span> 日(利用公休假x天，周末x天，共<span></span>天)
            期间赴 ____________________ ，随行人员 ____________________ ，配偶及子女(未)取得外国国籍、外国永久居住权和长期居留许可，
            所需费用 ____________________ 元由本人自行解决。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            我持有因私出国(境)证件情况为：无 / ____________________ 证件已交总公司综合部统一保管。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本人承诺：外出期间，我将严格遵守外事纪律规定，并按照规定路线、时间返回，回国(境)后，
            在规定时间内将因私出国(境)证件交回总公司综合部统一保管。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            特此申请。<br>
            <div class="qmAndRq">
              <label id="qm">申请人：</label><br>
              <label id="sqrq">
                <span id="rq1" >年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</span>
              </label>
            </div>
          </label>
        </div>
      </form>
      <div style="page-break-after:always"></div>
      <form class="form-horizontal m" id="form2">
        <h2 id="title1">成都市龙泉驿区自来水总公司<br>
          职工因私出国(境)保密和纪律承诺书</h2>
        <div>
          <label class="zw">
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              一、严格遵守国家法律法规和外事纪律
            </h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            严格要求自己，在国境外，绝不做违反国家法律法规的行为。在境外期间，遵守所在国法律。
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              二、严格遵守政治纪律
            </h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            在境外期间，不参加反党反国家活动和组织，不发表有损国家、民族利益的不当言论，不任意评论所在国的政策，不帮陌生人携带物品。
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              三、严格执行保密规定
            </h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            在境外期间不在公共场合讨论涉及国家机密事项，不与陌生人及无关人员谈论内部问题，不得将秘密文件、内部资料、图表、
            样品和记有保密内容的笔记本及手提电脑等带出境外。
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              四、严格遵守因私出入(境)管理制度
            </h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本人保证在回国(境)后10天内，将所持因私出国(境)证件按照管理权限交公司保管。同时及时销假，并报告总公司综合部备案。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本人于 ______________________________ 因私到 ______________________________ ，
            在此前已学习并知晓相关保密规定及纪律要求，按照因私出国(境)管理和外事纪律要求，本人保证严格遵守有关规定，
            若违反国家保密相关规定，自觉接受组织的任何处理。<br>

            <div class="qmAndRq">
              <label id="qm1">承诺人：</label><br>
              <label id="lxdh">联系电话：</label><br>
              <label id="sqrq1">
                <span id="rq2" >年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</span>
              </label>
            </div>
          </label>
        </div>
      </form>
      <div style="page-break-after:always"></div>
      <form class="form-horizontal m" id="formUpdate">
        <h2 id="title4">龙泉驿区自来水总公司职工因私事出国(境)审批表</h2>
        <label id="bm1" >部门:<span></span></label>
        <label id="tbsj">填表时间:
          <span id="tbYear"></span> 年
          <span id="tbMonth"></span> 月
          <span id="tbDay"></span> 日
        </label>

        <div hidden>
          <input  type="text" id="id" name="id">
        </div>

        <table border="1" cellpadding="5" cellspacing="0" style="width: 688px">

          <tr >
            <td class="td1">
              姓名
            </td>
            <td colspan="1" class="td1">
              <label class="nr"/>
            </td>
            <td class="td1">
              性别
            </td>
            <td colspan="1" class="td1">
              <label class="nr"/>
            </td>
            <td class="td1">
              出生年月
            </td>
            <td colspan="1" class="td1">
              <label id="property2"/>
            </td>
            <td class="td1">
              健康情况
            </td>
            <td colspan="1" class="td1">
              <label id="property3"/>
            </td>
          </tr>
          <tr>
            <td class="td1">
              现工作单位及职务
            </td>
            <td colspan="3" class="td2">
              <label id="property4"/>
            </td>
            <td class="td1">
              联系电话
            </td>
            <td colspan="3" class="td2">
              <span>国外通讯:</span><label id="property5"/><br>
              <span>国内通讯:</span><label id="property6"/>
            </td>
          </tr>
          <tr>
            <td class="td1">
              上一次因私出国(境)情况
            </td>
            <td colspan="3" class="td2">
              <label id="property7"/>
            </td>
            <td class="td1" colspan="2">
              因私出国(境)证件上缴情况
            </td>
            <td colspan="2" class="td1">
              <label id="property8"/>
            </td>
          </tr>
          <tr>
            <td class="td1">
              出国(境)具体时间、事由、目的地及经由路线
            </td>
            <td colspan="7">
              <label id="property9"/>
            </td>
          </tr>
          <tr>
            <td class="td3">
              参加旅行团名称及联系电话
            </td>
            <td colspan="2">
              <label id="property10"/>
            </td>
            <td class="td3">
              随行人员
            </td>
            <td colspan="1">
              <label id="property11"/>
            </td>
            <td class="td3">
              所需经费及解决渠道
            </td>
            <td colspan="2">
              <label id="property12"/>
            </td>
          </tr>
          <tr>
            <td class="td3">
              国内直系亲属及主要社会关系情况
            </td>
            <td colspan="7">
              <label id="property13"/>
            </td>
          </tr>
          <tr>
            <td class="td3">
              国外直系亲属及主要社会关系情况
            </td>
            <td colspan="7">
              <label id="property14"/>
            </td>
          </tr>
        </table>
      </form>
      <div style="page-break-after:always"></div>
      <form class="form-horizontal m" id="formSh">
        <table border="1" cellpadding="5" cellspacing="0" >
          <tr >
            <td class="zuo">
              科室负责人意见:
            </td>
            <td class="you">
              <label class="nr"/>
              <div class="qz">
                <label id="ksfzr1" >负责人签字:<span></span></label>
                <label class="sj">
                  <span id="ksYear1"></span> 年
                  <span id="ksMonth1"></span> 月
                  <span id="ksDay1"></span> 日
                </label>
              </div>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              分管领导意见:
            </td>
            <td class="you">
              <label class="nr"/>
              <div class="qz">
                <label id="fgld1" >分管领导签字:<span></span></label>
                <label class="sj">
                  <span id="ldYear1"></span> 年
                  <span id="ldMonth1"></span> 月
                  <span id="ldDay1"></span> 日
                </label>
              </div>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              公司领导意见:
            </td>
            <td class="you">
              <label id="zjl1"></label>
              <div class="qz">
                <label id="gsld1" >领导签字:</label>
                <label id="ldrq"><span ></span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</label>
              </div>
            </td>
          </tr>
          <tr >
            <td class="zuo">
              备注:
            </td>
            <td class="you">
              <label id="bz">

              </label>
            </td>
          </tr>
        </table>
        <label id="sm">说明:
          <span>1.个人需提前10天将此表一式两份(正反双面打印)报送总公司综合部。</span><br>
          <span id="cl">2.中层及以上干部人员由总经理签批，一般工作人员由分管领导签批。</span>
        </label>
      </form>
      <!-- <div align="center" id="tj"><button id="dy" onclick="printbtn()" class="btn btn-success" >打印</button></div> -->
    </div>
		<div align="center">
			<button v-print="'#printMe'" class="btn btn-success" >打印</button>
		</div>
	</div>
</template>	
<script>
export default {
	data () {
		return {
			bet: {
				startYear:'',
				startMonth:'',
				startDay:'',
				endYear:'',
				endMonth:'',
				endDay:'',
				zxYear:'',
				zxMonth:'',
				zxDay:'',
				ksYear:'',
				ksMonth:'',
				ksDay:'',
				ldYear:'',
				ldMonth:'',
				ldDay:'',
			},
		
		}
	},
	created () {
		// 休假开始时间
		// console.log('开始时间',this.qjdata.startTime)
		// // console.log('开始时间',this.qjdata.startTime)
		// if (this.qjdata.startTime != null) {
		// 	console.log('开始时间',this.qjdata.startTime)
		// 	this.bet.startYear = new Date(this.qjdata.startTime).getFullYear()
		// 	this.bet.startMonth = new Date(this.qjdata.startTime).getMonth() + 1 < 10? "0" + new Date(this.qjdata.startTime).getMonth() + 1: new Date(this.qjdata.startTime).getMonth() + 1
		// 	this.bet.startDay = new Date(this.qjdata.startTime).getDate() < 10? "0" + new Date(this.qjdata.startTime).getDate(): new Date(this.qjdata.startTime).getDate()
		// }
		// // 休假结束时间
		// // console.log('结束时间',this.qjdata.endTime)
		// if (this.qjdata.endTime != null) {
		// 	this.bet.endYear = new Date(this.qjdata.endTime).getFullYear()
		// 	this.bet.endMonth = new Date(this.qjdata.endTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.endTime).getMonth() + 1): new Date(this.qjdata.endTime).getMonth() + 1
		// 	this.bet.endDay = new Date(this.qjdata.endTime).getDate() < 10? "0" + new Date(this.qjdata.endTime).getDate(): new Date(this.qjdata.endTime).getDate()
		// }
		// // 劳资审核时间
		// if (this.qjdata.zxTime != null) {
		// 	this.bet.zxYear = new Date(this.qjdata.zxTime).getFullYear()
		// 	this.bet.zxMonth = new Date(this.qjdata.zxTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.zxTime).getMonth() + 1): new Date(this.qjdata.zxTime).getMonth() + 1
		// 	this.bet.zxDay = new Date(this.qjdata.zxTime).getDate() < 10? "0" + new Date(this.qjdata.zxTime).getDate(): new Date(this.qjdata.zxTime).getDate()
		// }
		// // 科室审核时间
		// if (this.qjdata.ksTime != null) {
		// 	this.bet.ksYear = new Date(this.qjdata.ksTime).getFullYear()
		// 	this.bet.ksMonth = new Date(this.qjdata.ksTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.ksTime).getMonth() + 1): new Date(this.qjdata.ksTime).getMonth() + 1
		// 	this.bet.ksDay = new Date(this.qjdata.ksTime).getDate() < 10? "0" + new Date(this.qjdata.ksTime).getDate(): new Date(this.qjdata.ksTime).getDate()
		// }
		// // 分管领导审核时间
		// if (this.qjdata.ldTime != null) {
		// 	this.bet.ldYear = new Date(this.qjdata.ldTime).getFullYear()
		// 	this.bet.ldMonth = new Date(this.qjdata.ldTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.ldTime).getMonth() + 1): new Date(this.qjdata.ldTime).getMonth() + 1
		// 	this.bet.ldDay = new Date(this.qjdata.ldTime).getDate() < 10? "0" + new Date(this.qjdata.ldTime).getDate(): new Date(this.qjdata.ldTime).getDate()
		// }
	},
	props: ['qjcjdata'],
	watch: {
		// 	qjdata: {
		// 		handler(newValue, oldValue) {
		// 		// console.log('变化了',newValue)
		// 		// 变化了手动清空
		// 		this.bet = {}
		// 		if (this.qjdata.startTime != null) {
		// 			console.log('开始时间',this.qjdata.startTime)
		// 			this.bet.startYear = new Date(this.qjdata.startTime).getFullYear()
		// 			this.bet.startMonth = new Date(this.qjdata.startTime).getMonth() + 1 < 10? "0" + new Date(this.qjdata.startTime).getMonth() + 1: new Date(this.qjdata.startTime).getMonth() + 1
		// 			this.bet.startDay = new Date(this.qjdata.startTime).getDate() < 10? "0" + new Date(this.qjdata.startTime).getDate(): new Date(this.qjdata.startTime).getDate()
		// 		}
		// 		// 休假结束时间
		// 		// console.log('结束时间',this.qjdata.endTime)
		// 		if (this.qjdata.endTime != null) {
		// 			this.bet.endYear = new Date(this.qjdata.endTime).getFullYear()
		// 			this.bet.endMonth = new Date(this.qjdata.endTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.endTime).getMonth() + 1): new Date(this.qjdata.endTime).getMonth() + 1
		// 			this.bet.endDay = new Date(this.qjdata.endTime).getDate() < 10? "0" + new Date(this.qjdata.endTime).getDate(): new Date(this.qjdata.endTime).getDate()
		// 		}
		// 		// 劳资审核时间
		// 		if (this.qjdata.zxTime != null) {
		// 			this.bet.zxYear = new Date(this.qjdata.zxTime).getFullYear()
		// 			this.bet.zxMonth = new Date(this.qjdata.zxTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.zxTime).getMonth() + 1): new Date(this.qjdata.zxTime).getMonth() + 1
		// 			this.bet.zxDay = new Date(this.qjdata.zxTime).getDate() < 10? "0" + new Date(this.qjdata.zxTime).getDate(): new Date(this.qjdata.zxTime).getDate()
		// 		}
		// 		// 科室审核时间
		// 		if (this.qjdata.ksTime != null) {
		// 			this.bet.ksYear = new Date(this.qjdata.ksTime).getFullYear()
		// 			this.bet.ksMonth = new Date(this.qjdata.ksTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.ksTime).getMonth() + 1): new Date(this.qjdata.ksTime).getMonth() + 1
		// 			this.bet.ksDay = new Date(this.qjdata.ksTime).getDate() < 10? "0" + new Date(this.qjdata.ksTime).getDate(): new Date(this.qjdata.ksTime).getDate()
		// 		}
		// 		// 分管领导审核时间
		// 		if (this.qjdata.ldTime != null) {
		// 			this.bet.ldYear = new Date(this.qjdata.ldTime).getFullYear()
		// 			this.bet.ldMonth = new Date(this.qjdata.ldTime).getMonth() + 1 < 10? "0" + (new Date(this.qjdata.ldTime).getMonth() + 1): new Date(this.qjdata.ldTime).getMonth() + 1
		// 			this.bet.ldDay = new Date(this.qjdata.ldTime).getDate() < 10? "0" + new Date(this.qjdata.ldTime).getDate(): new Date(this.qjdata.ldTime).getDate()
		// 		}
		// 	},
		// 	deep: true
		// }
	},
	methods: {
	
	}
    
}

</script>
<style scoped>
	@page {
			size: auto;  /* auto is the initial value */
			margin: 0mm; /* this affects the margin in the printer settings */
		}
		.td1{
			width: 6rem;
		}
		.td2{
			width: 18rem;
		}
		.td3{
			width: 6rem;
			height: 6rem;
		}
		#property2,#property3,#property5,#property6{
			height: 3rem;
		}
		#property4,#property7,#property8{
			height: 8rem;
		}
		#property9,#property10,#property11,#property12{
			height: 12rem;
		}
		#property13,#property14{
			height: 15rem;
		}
		.zuo{
			text-align: center;
			width: 15%;
      height: 6rem;
		}
		.you{
			width: 85%;
		}
    .youxia {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 6rem;
    }
		.qz{
      /* margin-bottom: 1rem; */
			height: 2rem;
			/* line-height: 2rem; */
		}
		h2{
			text-align: center;
			font-weight: bold;
		}
		#bm,#bm1{
			margin-left: 8%;
		}
		table{
			margin: auto;
		}
		span,label{
			margin-left: 0.5rem;
			font-size: 16px;
		}
		.nr{
      flex-direction: column;
      flex: 1;
			/* height: 5rem;
			line-height: 5rem; */
		}
		.sj,#rq,#rq1,#ldrq{
			font-size: 16px;
			float: right;
			margin-right: 1rem;
			height: 2rem;
			line-height: 2rem;
		}
		#title,#title4{
			margin-top: 6%;
		}
		#zjl,#zjl1{
			/* height: 5rem; */
		}
		#title,#title1,#title2{
			margin-top: 6%;
		}
		.zw{
			margin-top: 6%;
			margin-left: 10%;
			margin-right: 10%;
			line-height: 2.5rem;
		}
		.qmAndRq{
			float: right;
			margin-right: 10%;
			margin-top: 10%;
		}
		#tj{
			margin-top: 1rem;
		}
		textarea{
			border:none;
			resize: none;
		}
		#tbsj{
			float: right;
			margin-right: 8%;
		}
		#formSh{
			margin-top: 6%;
		}
		#bz{
			/* height: 5rem; */
		}
		#sm{
			margin-left: 6%;
		}
		#cl{
			margin-left: 8%;
		}
</style>



