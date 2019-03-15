<template>
	<div class="one ">
		<div class="read_list">
			<ul>
				<li v-for="item in list">
					<img class="read_img" :src="item.picture">
					<div class="read_context">
						<p class="read_title" >{{item.note}}</p>
						<p class="read_name">
							<span>每日一句</span>
							<span>{{item.viewCount}}人浏览</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<foot></foot>
	</div>

</template>

<script>
	import jsonp from "@/common/js/jsonp"
	import foot from "common/foot/foot"
	export default{
		name:"one",
		data(){
			return {
				list:[]
			}
		},
		components:{
			foot
		},
		created(){
			jsonp('http://sentence.iciba.com/index.php?c=dailysentence&m=getRecentSentence&_=' + new Date().getTime)
			.then((res)=>{
				this.list = res.list;
			})
		}
	}
</script>

<style lang="less" scoped>
	@import "~style/index.less";
	.read_list{
		.pt(20);
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
			.read_title{
				.h(40);
				overflow: hidden;
			}
			.read_name{
				.mt(6);
				color:#999;
				font-size:@f-s-s;
			}
		}

	}
</style>