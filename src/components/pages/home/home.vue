<template>
	<div class="home">
		<router-view class="con_view"></router-view>
	</div>
</template>
<script>
	export default{
		name:"home",
		
	}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.home{
	.w(375);
	position: fixed;
	.top(0);
	.bottom(0);
	overflow:auto;
	.con_view{
		.mt(50);
	}
	
}
</style>