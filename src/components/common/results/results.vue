<template>
	<div class="results" @click="goBack">
		<ul>
			<li v-for="(item,index) in list">
				<span class="part">{{item.part}}</span>
				<span class="text">{{item.means}}</span>
			</li>
		</ul>
		<p>点击任意位置继续查找单词</p>
	</div>
</template>
<script>
	export default{
		name:"results",
		props:['list'],
		methods:{
			goBack(){
			 this.$emit('change')
			}
		}
	}
</script>
<style lang="less" scoped>
@import "~style/index.less";
.results{
	position:absolute;
	width:90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	overflow: hidden;
	.padding(20,20,20,20);
	background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552579488394&di=bdd77e3f9cbf6e0ca6df926a57464771&imgtype=0&src=http%3A%2F%2Fpicapi.zhituad.com%2Fphoto%2F85%2F75%2F41EAE.jpg');
	border: 3px solid #99c794;
	border-radius:8px;
	font-size:@f-s-m;
	p{
		.tac();
		color: #2FA4E7;
	}
	.part{
		color:red;
		display: line-block;
		.w(20);
		.padding(8,6,8,6);
	}
	.text{
		color:orange;

		.padding(8,6,8,6);

	}
}
</style>