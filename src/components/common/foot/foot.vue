<template>
	<div class="footer">
		<div class="read-list-footer"> 打开APP查看全部 </div>
		<img src="http://cdn.iciba.com/www/img/m/0221/flow-banner.png" class="read-list-flow" />
	</div>
</template>
<script>
	export default{
		name:"footer"
	}
</script>
<style lang="less" scoped>
@import "~style/index.less";
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
</style>