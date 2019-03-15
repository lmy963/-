<template>
	<div class="read">
		<ul class="title">
			<li v-for="item in title" @click="change(item.commentUserId)">{{item.title}}</li>
		</ul>	
		<div class="read_list">
			<ul>
				<li v-for="item in list" >
					<img class="read_img" :src="item.comment.imageUrl">
					<div class="read_context">
						<p class="read_title">{{item.comment.title}}</p>
						<p class="read_name">
							<span>{{item.comment.userName}}</span>
							<span>{{item.comment.zid}}人浏览</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<foot></foot>
	</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	import foot from "common/foot/foot"
	export default{
		name:"read",
		data(){
			return {
				title:[],
				list:[],
				Id:'',
				cate:''
			}
		},
		components:{
			foot
		},
		created(){
			this.Id = this.$route.query.id;
			this.cate = this.$route.query.cate;
			// http://listen.iciba.com/listening/wap/listeningType
			this.getList();
		},
		watch:{
			Id(newlist,oldlist){
				this.getList();
			}
		},
		mounted(){
			
		},
		methods:{
			// running(){
			// 	let pic  =  document.querySelectorAll(".read_img");
			// 	let context  = document.querySelectorAll(".read_context");
			// 	for(var i = 0; i < pic.length; i++ ){
			// 	context[i].style.animation = "right"
			// 	}

			// },
			change(data){
				this.Id =  data;
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				setTimeout(()=>{
					Indicator.close();
				},900)
			},
			getList(){
				this.$axios.get("/ser/community/inner/wap/"+ this.cate+"?" + new Date().getTime())
				.then((res)=>{
					this.title = res;
				})
				this.$axios.get('/ser/community/inner/column/getList?size=6&restime=0&columnId='+ this.Id +'&' + new Date().getTime())
				.then((res)=>{
					console.log(res)
					this.list = res;
				})

			}
		}
	}

</script>
<style lang="less" scoped>
@import "~style/index.less";
.read{
	.mt(50);
	.title{
		font-size:@f-s-m;
		.padding(20,6,20,6);
		overflow: hidden;
		li{ 
			.h(30);
			.w(88);
			.fl();
			.tac();
			.l-h(30);
			.margin(0,10,0,10);
			border-radius:8px;
			background:skyblue;
		}
	}
	.read_list{
		display: flex;
		justify-content: space-around;
		li{
			.w(375);
			.padding(0,10,20,10);
			overflow: hidden;
		}
		.read_img{
			.w(96);
			.h(62);
			.fl();
			border-radius: 8px;
			.fadeIn(left,-30px);
		}
		.read_context{
			.f(14);
			.w(234);
			.h(62);
			.fl();
			.ml(15);
			.fadeIn(right,30px);
			.read_name{
				.mt(6);
				color:#999;
				font-size:@f-s-s;
			}
		}

	}
	.read-list-footer{
		.tac();
		.w(179);
		.h(36);
		.l-h(36);
		background-color: rgba(61,169,255,.1);
		border-radius: 8px;
		color: #3DA9FF;
		font-size:@f-s-ms;
		margin:0 auto;
		.mt(20);
		.mb(20);
	}
	.read-list-flow{
		.w(375);
	}
	


}

</style>