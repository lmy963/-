<template>
	<div class="error">
		<div class="box">
			<p>/////////\\\\\\\\\\</p>
			<p>！！！！ 404 ！！！！</p>
			<p>\\\\\\\\\//////////</p>

		</div>

	</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	export default{
		name:"error",
		mounted(){
			setTimeout(()=>{
				Indicator.open({
					text: 'loading...',
					spinnerType: 'fading-circle'
				});
				setTimeout(()=>{
					Indicator.close();
					this.$router.push("/home/index")
				},1200)
			},600)
		}
	}
</script>
<style lang="less" scoped>
@import "~style/index.less";	
.box{
	.f(22);
	.tac();
	.w(300);
	.h(300);
	position: relative;
	margin:0 auto;
	margin-top:50%;
	color:#EB3C3C;
	.fadeIn(enter,-30px)
}
</style>