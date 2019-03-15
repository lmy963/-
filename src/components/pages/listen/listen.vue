<template>
	<div class="listen">
		<ul class="title">
			<li v-for="item in title" @click="change(item.type)">{{item.title}}</li>
		</ul>	
		<div class="read_list">
			<ul>
				<li v-for="item in list">
					<img class="read_img" :src="item.smallpic">
					<div class="read_context">
						<p class="read_title" >{{item.title}}</p>
						<p class="read_name">
							<span>{{item.cidTitle}}</span>
							<span>{{item.views}}人浏览</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<foot></foot>
	</div>
</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import jsonp from "@/common/js/jsonp"
	import foot from "common/foot/foot"
	export default{
		name:"listen",
		data(){
			return {
				list:[],
				title:[],
				type:''
			}
		},
		components:{
			foot
		},
		methods:{
			change(data){
				this.type = data;
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				setTimeout(()=>{
					Indicator.close();
				},900)
			},
			getList(){
				jsonp('http://listen.iciba.com/listening/wap/list?type=' + this.type+'&page=0&size=6&_=" + new Date().getTime()')
				.then((res)=>{
					this.list = res;
				})
			}
		},
		watch:{
			type(){
				this.getList();
			}
		},
		
		created(){
			this.type = this.$route.query.type;
			jsonp('http://listen.iciba.com/listening/wap/listeningType?_=' + new Date().getTime())
			.then((res)=>{
				this.title  =res;
			})
			this.getList();

		}

	}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.listen{
	.title{
		font-size:@f-s-m;
		.padding(20,6,20,6);
		overflow: hidden;
		li{ 
			.fl();
			.tac();
			.padding(6,6,6,6);
			.margin(0,10,0,10);
			font-style: @f-s-m;
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
	
}
</style>