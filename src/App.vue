<template>
  <div id="app">
  	<m-header class="mheader"></m-header>
    <router-view/>
  </div>
</template>

<script>
import MHeader from "./components/common/m-header/m-header"
export default {
  name: 'App',
  components:{MHeader},
}
</script>

<style lang="less" >
  @import '~style/index.less';
  .mheader{
		.w(375);
		position:relative;
		.top(0);
		z-index:33;
	}
</style>
