<template>
  <div class="open">
  	<div class="pc">
  		<div class="top"><img src="../assets/pczhiding.svg" alt=""></div>
	  	<div class="selection selection-1">
			<div class="con">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="tit">
				  			<h2>平台打造全民旅游营销<strong>新生态</strong></h2>
				  			<h2>自买省钱&nbsp;&nbsp;&nbsp;&nbsp;分享赚钱</h2>
				  		</div>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-2">
			<div class="con">
				<div class="cont">
					<div class="title title_blue">
						<h3>整合全渠道优质旅游产品</h3>
					</div>
					<div class="list_con">
						<div class="list_div">
							<div class="list_div_">
								<img src="../assets/pcjiagedi.svg" alt="">
								<p>价格低</p>
							</div>
						</div>
						<div class="list_div">
							<div class="list_div_">
								<img src="../assets/pcfuwuhao.svg" alt="">
								<p>服务好</p>
							</div>
						</div>
						<div class="list_div">
							<div class="list_div_">
								<img src="../assets/pcchangping.svg" alt="">
								<p>产品优</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-3">
			<div class="con">
				<h3>如何开通旅行社？<img src="../assets/swave_black.svg" alt=""></h3>
				<p>免费开通个人旅行社，共享平台1000款好物！</p>
			</div>
		</div>
		<div class="selection selection-4">
			<div class="con">
				<div class="title title_blue">
					<h3>用户如何获得收益？</h3>
				</div>
				<div class="content">
					<img src="../assets/Rectangle 3@2x.jpg" alt="">
					<div class="text">
						<h3>可获得20%-60%的利润奖励</h3>
						<p><span></span>分享商品——好友——购买成功</p>
						<p><span></span>粉丝、好友——个人旅行社平台——购买成功</p>
					</div>
				</div>
			</div>
			<app-footer></app-footer>
		</div>
  	</div>
  	<div class="mob">
  		<div class="top"><img src="../assets/pczhiding.svg" alt=""></div>
	  	<div class="selection selection-1">
			<div class="con">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<div class="tit">
				  			<h2>平台打造全民旅游营销<strong>新生态</strong></h2>
				  			<h2>自买省钱&nbsp;&nbsp;&nbsp;&nbsp;分享赚钱</h2>
				  		</div>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-2">
			<div class="con">
				<div class="cont">
					<div class="title title_blue">
						<h3>整合全渠道优质旅游产品</h3>
					</div>
					<div id="swiper02" class="swiper-container clearfix">
						<div class="swiper-wrapper">
			            	<div class="swiper-slide">
								<div class="list_div">
									<div class="list_div_">
										<img src="../assets/pcjiagedi.svg" alt="">
										<p>价格低</p>
									</div>
								</div>
			            	</div>
			            	<div class="swiper-slide">
								<div class="list_div">
									<div class="list_div_">
										<img src="../assets/pcfuwuhao.svg" alt="">
										<p>服务好</p>
									</div>
								</div>
			            	</div>
			            	<div class="swiper-slide">
								<div class="list_div">
									<div class="list_div_">
										<img src="../assets/pcchangping.svg" alt="">
										<p>产品优</p>
									</div>
								</div>
			            	</div>
			            </div>
			            <div class="swiper-pagination"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-3">
			<div class="con">
				<h3>如何开通旅行社？<img src="../assets/swave_black.svg" alt=""></h3>
				<p>免费开通个人旅行社，共享平台1000款好物！</p>
			</div>
		</div>
		<div class="selection selection-4">
			<div class="con">
				<img src="../assets/Rectangle 3@2x.jpg" alt="">
				<div class="title title_blue">
					<h3>用户如何获得收益？</h3>
				</div>
				<div class="content">
					<div class="text">
						<h3>可获得20%-60%的利润奖励</h3>
						<p><span></span>分享商品——好友——购买成功</p>
						<p><span></span>粉丝、好友——个人旅行社平台——购买成功</p>
					</div>
				</div>
			</div>
			<app-footer></app-footer>
		</div>
  	</div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Open',
  data () {
    return {

    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  mounted() {
	  	// 返回顶部
	    $('.top').on('click', function() {
	    	$('html, body').animate({scrollTop: '0px'}, 800);
	    });

		$(window).scroll(function() {
		　　 var scrollTop = $(this).scrollTop();
		　　 var scrollHeight = $(document).height();
		　　 var windowHeight = $(this).height();

			if(scrollTop < scrollHeight / 9) {
				$('.top').css({
					'display': 'none'
				});
			} else {
				$('.top').css({
					'display': 'block'
				});
			}
		});

		let swiper = new Swiper('#swiper02', {
		  loop: 1,
		  autoplay: 3000,
		  autoplayDisableOnInteraction : false,
	      slidesPerView: 1,
	      spaceBetween: 0,
	      speed: 1000,
	      releaseOnEdges: true,
	      paginationClickable: true,
	      pagination: '.swiper-pagination',
	    });
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mob {
		display: none;
	}

	.selection-1 {
		background: url('../assets/PCDABEIJ.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-1 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vh;
	}
	.selection-1 .tit {

	}
	.selection-1 .tit h2 {
		margin-bottom: 2.22vh;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 2.6vw;
		color: #FFFFFF;
	}
	.selection-1 .tit h2 strong {
		margin-left: 1vw;
		font-family: PingFangSC-Medium;
		font-size: 3.65vw;
		color: #fff;
		line-height: 3.65vw;
	}

	/*selection-2*/
	.selection-2 {

	}
	.selection-2 .con {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.selection-2 .list_con {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 13.7vh;
	}
	.selection-2 .list_div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 19.74vw;
		height: 28.33vw;
		margin: 0 2.21vw;
		background: #6DC7E2;
		cursor: pointer;
		-webkit-transition: all .8s;
    	transition: all .8s;
	}
	.selection-2 .list_div img {
		width: 7.08vw;
		height: 7.08vw;
		margin-bottom: 12.5vh;
	}

	.selection-2 .list_div p {
		font-family: PingFangSC-Regular;
		font-size: 2.08vw;
		color: #FFFFFF;
	}

	.selection-2 .list_div:hover img {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		-webkit-transition: all .8s;
    	transition: all .8s;
	}
	.selection-2 .list_div:hover p {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		-webkit-transition: all .8s;
    	transition: all .8s;
	}

	/*selection-3*/
	.selection-3 {
		background: url('../assets/PCbeijing0.jpg') center center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .con {
		position: absolute;
		left: 18.8vw;
		bottom: 10.37vh;
	}
	.selection-3 h3 {
		margin-bottom: 5.19vh;
		font-family: PingFangSC-Medium;
		font-size: 2.6vw;
		color: #000000;
	}
	.selection-3 h3 img {
		display: inline-block;
		width: 7.03vw;
	}
	.selection-3 p {
		font-family: PingFangSC-Light;
		font-size: 1.77vw;
		color: #000000;	
	}
	
	/*selection-4*/
	.selection-4 {
		height: auto;
	}
	.selection-4 .content {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 12.78vh;
	}
	.selection-4 .content img {
		width: 53.39vw;
		margin-right: 4.48vw;
	}
	
	.selection-4 .content h3 {
		margin-bottom: 4.07vh;
		font-family: PingFangSC-Medium;
		font-size: 2.34vw;
		color: #000000;	
	}
	.selection-4 .content p {
		display: flex;
		align-items: center;
		margin-bottom: 2.22vh;
		font-family: PingFangSC-Regular;
		font-size: 1.56vw;
		color: #000000;
	}
	.selection-4 .text {
		flex: 1;
	}
	.selection-4 p span {
		width: 0.52vw;
		height: 0.52vw;
		border-radius: 50%;
		background: #000;
		margin: 0 0.83vw;
	}
	
	


	@media screen and (max-width: 750px) {
		.mob {
	      	display: block;
	    }

	    .selection-1 {
			background: url('../assets/shoujibeijingwudi.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-1 .cont {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80vh;
		}
		.selection-1 .tit {

		}
		.selection-1 .tit h2 {
			margin-bottom: 2.22vh;
			text-align: center;
			font-family: PingFangSC-Medium;
			font-size: 5.87vw;
			color: #FFFFFF;
		}
		.selection-1 .tit h2 strong {
			margin-left: 1vw;
			font-family: PingFangSC-Medium;
			font-size: 7.47vw;
			color: #fff;
			line-height: 3.65vw;
		}

		/*selection-2*/
		.selection-2 {

		}
		.selection-2 .con {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		.selection-2 .list_con {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 13.7vh;
		}
		.selection-2 .list_div {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 65.87vw;
			height: 93.87vw;
			margin: 0 auto;
			background: #6DC7E2;
			cursor: pointer;
			-webkit-transition: all .8s;
	    	transition: all .8s;
		}
		.selection-2 .list_div img {
			width: 20.27vw;
			height: 22.93vw;
			margin-bottom: 15.74vh;
		}

		.selection-2 .list_div p {
			text-align: center;
			font-family: PingFangSC-Regular;
			font-size: 4vw;
			color: #FFFFFF;
		}


		#swiper02 {
			width: 100vw;
			height: 65vh;
			margin-top: 15.74vh;
		}

		/*selection-3*/
		.selection-3 {
			background: url('../assets/shoujilvxingse.jpg') center center no-repeat;
			background-size: 100% 100%;
		}
		.selection-3 .con {
			position: absolute;
			left: 7.47vw;
			bottom: 9.3vh;
		}
		.selection-3 h3 {
			margin-bottom: 1.5vh;
			font-family: PingFangSC-Medium;
			font-size: 5.33vw;
			color: #000000;
		}
		.selection-3 h3 img {
			display: inline-block;
			width: 17.03vw;
		}
		.selection-3 p {
			font-family: PingFangSC-Light;
			font-size: 3.47vw;
			color: #000000;	
		}
	
		/*selection-4*/
		.selection-4 {
			height: auto;
		}
		.selection-4 .con {
			height: 77.51vh;
		}
		
		.selection-4 .content {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 8.1vh;
			padding-left: 10.13vw;
		}
		.selection-4 img {
			width: 100vw;
			margin-bottom: 4.8vh;
		}
		
		.selection-4 .content h3 {
			margin-bottom: 4.07vh;
			font-family: PingFangSC-Medium;
			font-size: 4.8vw;
			color: #000000;	
		}
		.selection-4 .content p {
			display: flex;
			align-items: center;
			margin-bottom: 2.22vh;
			font-family: PingFangSC-Regular;
			font-size: 3.73vw;
			color: #000000;
		}
		.selection-4 .text {
			flex: 1;
		}
		.selection-4 p span {
			width: 1.6vw;
			height: 1.6vw;
			border-radius: 50%;
			background: #000;
			margin: 0 0.83vw;
		}
	

	}

</style>
