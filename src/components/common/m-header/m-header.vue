<template>
	<div class="MHeader">
		<router-link tag='div' v-for="item in list " :to="item.path"  :key="index" 
		active-class="active" class="topnav" >
			{{item.context}}
		</router-link>		
	</div>	
</template>
<script>
	export default{
		name:'MHeader',
		data(){
			return {
				list:[
				{path:'/home/index',context:"词典"},
				{path:'/home/read/?id=27081345&cate=internationalWeekly',context:"悦读"},
				{path:'/home/listen?type=bvoa',context:"听力"},
				{path:'/home/one',context:"每日一句"},
				{path:'/home/error',context:"精品课程"},
				]
			}
		}
	}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.MHeader{
	.h(50);
	.w(375);
	width:auto;
	overflow: hidden;
	display: flex;
	justify-content: space-around;
	overflow-x: scroll;
	background: #333;
	.topnav{
		.fl();
		.l-h(50);
		.tac();
		.pb(10);
		color:#999;
		font-size:@f-s-ms;
	}
		.active{
			color:#eee;
		}

}
</style>