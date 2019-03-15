<template>
	<div class="banner">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in list " :key="index">
				<img v-lazy="item.content">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	import  jsonp from "@/common/js/jsonp"
	export default{
		name:"banner",
		data(){
			return {
				list:[]
			}
		},
		created(){
			let url =`/ic/grow/web/popup?type=1&_=1552436228935`
			this.$axios.get(url)
				.then((res)=>{
					this.list =  res.message.data.content;
					
				})
			
		}
	}
</script>
<style lang='less' scoped>
@import "~style/index.less";
 .banner{
 	.w(375);
 	.h(575);
 	img{
 		width:100%;
 		height: 100%;
 	}
 	.mint-swipe-indicators{
 		.top(10);
 	}
 }
</style>
