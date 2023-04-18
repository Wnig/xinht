<template>
  <footer>
  	<div class="pc">
	  	<div class="footer">
	  		<div class="left">
		  		<h1>厦门欣宏途网络科技有限公司</h1>
		  		<h4>TEL：400-861-8089 / 0592-5917068<br/>ADD：厦门市思明区观音山商务营运中心18号4层| E-mail：smartmap@smartmapdt.com</h4>	
	  		</div>
	  		<div class="code">
	  			<div class="code-con">
		  			<img src="../assets/pcxiaocgegnxu@2x.png" alt="">
		  			<p>扫码立即体验</p>
	  			</div>
	  		</div>
	  	</div>
  	</div>
  	<div class="mob">
  		<h1>厦门欣宏途网络科技有限公司</h1>
  		<h4>TEL：400-861-8089 / 0592-5917068<br/>ADD：厦门市思明区观音山商务营运中心18号4层<br/>E-mail：smartmap@smartmapdt.com</h4>
  	</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 27.96vh;
		background: #323232;
	}
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		margin: 0 auto;
	}
	h1 {
		margin-bottom: 1.94vh;
		text-align: left;
		font-family: PingFangSC-Light;
		font-size: 1.56vw;
		color: #FFFFFF;
	}
	h4 {
		margin-bottom: 3.52vh;
		color: #A7A7A7;
		text-align: left;
		line-height: 2.14vw;
		font-size: 0.83vw;
		font-family: 'PingFangSC-Light';
	}
	.left {
		flex: 1;
	}
	.code {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.code img {
		width: 7.86vw;
		height: 7.86vw;
		margin-bottom: 0.83vh;
	}
	.code p {
		font-family: PingFangSC-Regular;
		font-size: 1.15vw;
		color: #FFFFFF;
	}
	.mob {
		display: none;
	}

	@media screen and (max-width: 750px) {
		.mob {
	      	display: block;
	    }

		footer {
			height: 22.49vh;
		}

		h1 {
			text-align: center;
			font-family: PingFangSC-Light;
			font-size: 3.73vw;
			color: #FFFFFF;
		}

		h4 {
			margin-bottom: 0;
			font-family: PingFangSC-Regular;
			font-size: 3.2vw;
			color: #A7A7A7;
			text-align: center;
			line-height: 5.87vw;
		}
	}

</style>
