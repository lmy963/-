<template>
	<div class="index">
		<div class="box">
			<div class="content">
				<div class="search">
					<div class="form-group words">
						<input type="text" class="form-control " placeholder="单词和句子都交给小词" id="inputDefault">
						<button type="button" class="bton" @click="getResult"></button>
					</div>
				</div>
				<banner></banner>
				<div class="index-bg-bottom"> 
					<p>下载金山词霸APP，体验更多的精彩</p> 
					<div > 立即下载 </div>
				</div>
			</div>
		</div>
		<results class="result" v-show="boxVisible" :list="list" @change="change"></results>
	</div>
</template>

<script>
	import banner from "../../common/banner/banner"
	import BScroll from "better-scroll"
	import jsonp from  "@/common/js/jsonp"
	import results from "common/results/results"
	import { Indicator , MessageBox} from 'mint-ui';
	


	export default{
		name:"index",
		data(){
			return {
				boxVisible:false,
				list:[]
			}
		},
		components:{banner,results},
		mounted(){
			let box  = document.querySelector(".box")
			new BScroll(box)
		},
		methods:{
			change(){
				this.boxVisible = !this.boxVisible
			},
			getResult(){
				 let txt  = document.querySelector("input[type=text]").value;
				 jsonp( 'http://m.iciba.com/index.php?c=search&m=getsuggest&nums=5&client=6&uid=0&is_need_mean=1&word=' + txt + '&_=7' +  new Date().getTime())
				 .then( res=>{

				 	Indicator.open({
				 		text: '查找中...',
				 		spinnerType: 'fading-circle'
				 	});
				 	setTimeout(()=>{
				 		Indicator.close();
				 		console.log(res)
				 		if(res.message[0].length == 0  || res =='undefind'  ){
				 			MessageBox({
				 				title: '提示',
				 				message: '查找错误',
				 				showCancelButton:false

				 			});

				 		}else{
							this.change();
							
					 	}
					 	document.querySelector("input[type=text]").value = '';
					 	this.list =res.message[0].means;
					 },600)

				 })
				 .catch(err=>{
				 	MessageBox('提示', '输入内容有误');

				 })
			}
		}
	}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.box{
	position: absolute;
	height: 100%;
	.bottom(0);
	.top(49);
	.index-bg-bottom{
		.tac();
		.padding(10,10,10,10);
		p{
			font-size:@f-s-m;
		}
		div{
			.w(188);
			.h(46);
			.l-h(46);
			background:#333;
			margin: 0 auto;
			.mt(10);
			.f(24);
			border-radius: 8px;
			color:#eee;
		}
	}
}
.search{
	.w(375);
	.h(355);
	overflow:hidden;
	background:url(//cdn.iciba.com/www/img/m/0221/bannerx.png);
	background-size:100% 100%;
	.words{
		width:75%;
		.h(54);
		position: relative;
		top:60%;
		margin:0 auto;
		.form-control{
			.pl(15);
			font-size:@f-s-m;
		}
		.bton{
			display: block;
			.w(68);
			.h(52);
			.right(0);
			.top(0);
			background-color: #2FA4E7;
			border: 2px solid #2FA4E7;
			position:absolute;
			background-image: url(//cdn.iciba.com/www/img/m/0221/search.png);
			background-position: center center;
			background-repeat: no-repeat;
			border-radius:8px;
			outline: none;
		}
	}
}
	
</style>