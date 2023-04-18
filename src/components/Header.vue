<template>
  	<header>
	  	<div class="pc">
		    <div class="cont">
				<a v-if="num != 2" class="logo" @click="jump" ><img src="../assets/pclogo.svg" alt=""></a>
				<a v-else class="logo" @click="jump" ><img src="../assets/pcqinlogo@2x.svg" alt=""></a>
			  	<nav>
			  		<ul>
			            <li v-if="num != 2" class="menus" @click="isShow">
			            	<img src="../assets/pczhankai.svg" alt="">
			            </li>
			            <li v-else class="menus" @click="isShow">
			            	<img src="../assets/pczhankai2.svg" alt="">
			            </li>
			  		</ul>
			  	</nav>
			  	<div class="nav" v-if="selShow">
					<div class="nav_bg" v-show="selShow"></div>
					<div class="nav-btn_">
						<div class="nav-btn-con_">
							<img @click="isShow" src="../assets/pczhankai.svg" alt="">
						</div>
					</div>
				  	<nav class="navs">
				  		<ul>
							<li v-for="(navs, index) in navData" v-bind:class="{'btn_sel': index == num}" @click="selMenus(index)">
				              <router-link :to="navs.links">{{navs.tit}}</router-link>
				            </li>
				  		</ul>
				  	</nav>
				</div>
		  	</div>
	  	</div>
	  	<div class="mob">
	  		<div class="cont">
				<a v-if="num != 2" class="logo" @click="jump" ><img src="../assets/pclogo.svg" alt=""></a>
				<a v-else class="logo" @click="jump" ><img src="../assets/pcqinlogo@2x.svg" alt=""></a>
				<ul class="nav-btn-con">
					<li v-if="num != 2" class="menus" @click="isShow">
		            	<img src="../assets/pczhankai.svg" alt="">
		            </li>
		            <li v-else class="menus" @click="isShow">
		            	<img src="../assets/pczhankai2.svg" alt="">
		            </li>
				</ul>	
				<transition name='fade'>
					<div class="nav" v-show="selShow" @click="isShow">
						<transition name='slide'>
						  	<nav v-if="selShow">
						  		<ul>
									<li v-for="(navs, index) in navData" v-bind:class="{'btn_sel': index == num}" @click="selMenus(index)">
						              <router-link :to="navs.links">{{navs.tit}}</router-link>
						            </li>
						  		</ul>
						  		<div class="code">
						  			<img src="../assets/shoujierwima@2x.png" alt="">
						  			<p>长按图片识别公众号</p>
						  		</div>
						  	</nav>
					  	</transition>
					</div>
				</transition>
		  	</div>
	  	</div>
    </header>
</template>

<script>
let storage = window.sessionStorage;
export default {
  name: 'Header',
  data () {
    return {
    	navData: [
    		{tit: '首页', links:'/'},
    		{tit: '免费开通个人旅游社', links:'/Open'},
    		{tit: '招商加盟', links:'/Join'}
        ],
      	num: '',
      	selShow: false
    }
  },
  created: function() {
    if(storage['selNumxinhongtu']) {
      this.num = storage['selNumxinhongtu'];
    } else {
      this.num = 0;
    };
  },
  methods: {
    selMenus(index) {
      storage['selNumxinhongtu'] = index;
      this.selShow = false;
    },
    isShow() {
      //点击：左侧菜单栏 收起-展开
      this.selShow = ! this.selShow;
    },
    jump() {
      storage['selNumxinhongtu'] = 0;
      this.selShow = false;
      this.$router.push({path: '/'});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {
		display: flex;
		justify-content: center;
		height: 12.36vw;
	}
	.pc {
		display: flex;
		width: 88%;
	}
	.cont {
		display: inline-flex;
		align-items: center;
		width: 100%;
	}
	.logo {
		width: 21.3vw;
		cursor: pointer;
	}
	.logo img {
		display: block;
		width: 100%;
	}
	nav {
		flex: 1;
	}
	nav ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	nav li a {
		color: #FFFFFF;
		text-align: center;
		font-family: 'PingFangSC-Light';
		font-size: 1.3vw;
	}
	nav a {
		display: block;
		line-height: 2.4vw;
		cursor: pointer;
	}
	nav .backstage {
		width: 8.91vw;
		height: 2.4vw;
		border: 1px solid #FFFFFF;
		border-radius: 100px;
	}
	nav .menus {
		cursor: pointer;
	}
	nav .menus image {
		display: block;
		width: 3.13vw;
		height: 2.76vw;
	}
	.nav {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		z-index: 9999;
	}
	.nav-btn_ {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 12.36vw;
		cursor: pointer;
	}
	.nav-btn_ .nav-btn-sel {
		float: right;
		width: 5.94vw;
		height: 2.34vw;
		margin-top: -2vw;
	}
	.nav-btn-con_ {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 88%;
	}
	@media screen and (max-width: 750px) {
		.pc {
			display: none;
		}
		.mob {
			display: flex;
			width: 85%;
		}
		header {
			height: 18.36vw;
		}
		.cont {
			display: inline-flex;
			align-items: center;
			width: 100%;
		}
		.logo {
			width: 38.95vw;
			cursor: pointer;
		}
		.nav-btn-con {
			display: flex;
			justify-content: flex-end;
			width: 70%;
		}
		.nav-btn-con .nav-btn {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			float: right;
			width: 22.67vw;
			height: 9.07vw;
		}
		.nav-btn-con .nav-btn img {
			display: block;
			width: 8.27vw;
			height: 6.13vw;
		}
		.nav {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100vh;
			background: rgba(0, 0, 0, 0.65);
			z-index: 9999;
			opacity: 1;
		}
		.fade-enter-active, .fade-leave-active {
		    transition: all .3s
		}

		.fade-enter, .fade-leave-to {
		    opacity: 0;
		}
		nav {
			width: 66.93vw;
			height: 100vh;
			background: #fff;
			transform: translate3d(0, 0, 0);
		}
		.slide-enter-active, .slide-leave-active {
		    transition: all .3s
		}

		.slide-enter, .slide-leave-to {
		    transform: translate3d(-100%, 0, 0);
		}
		nav ul {
			display: block;
			padding-top: 14.33vh;
			margin-bottom: 14.39vh;
		}
		nav li {
			margin-bottom: 9.6vh;
		}
		nav p {
	      margin-bottom: 1.05vh;
	      color: #797979;
	      font-size: 3.2vw;
	    }
	    nav h2 {
	      color: #000000;
	      line-height: 6.67vw;
	      font-size: 6.67vw;
	      font-family: 'PingFangSC-Semibold';
	    }
	    nav .hot {
	      position: absolute;
	      left: 9.2vw;
	      bottom: 7.95vh;
	    }
	    nav li a {
			color: #000000;
			text-align: center;
	    	line-height: 7.33vw;
			font-size: 5.33vw;
			font-family: 'PingFangSC-Light';
		}
		nav .btn_sel a {
			color: #5BB8DE;
			font-size: 6.67vw;
			font-family: 'PingFangSC-Semibold';
		}

		nav .code img {
			display: block;
			width: 29.07vw;
			margin: 0 auto 1.67vh;
		}
		nav .code p {
			text-align: center;
			font-family: PingFangSC-Thin;
			font-size: 3.2vw;
			color: #222222;
			text-align: center;	
		}

		

	}

	@media screen and (min-width: 751px) {
		.nav_bg {
			position: absolute;
			right: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			background: rgba(0, 0, 0, 0.85);
			z-index: -1;
			-webkit-animation: scaleIn 2s ease-in-out;
	    	animation: scaleIn 2s ease-in-out;
		}
		.navs {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60%;
			-webkit-animation: opac 2s ease-in-out;
	    	animation: opac 2s ease-in-out;
		}
		.navs ul {
			display: block;
			width: 100%;
		}
		.navs li {
			display: block;
			margin-bottom: 12.59vh;
			padding-left: 13.8vw;
		}

		.navs li a {
			color: #fff;
			text-align: left;
			font-size: 2.34vw;
			font-family: 'PingFangSC-Light';
			-webkit-transition: font-size 0.2s;
	      	transition: font-size 0.2s;
		}
		.navs a {
			display: block;
			line-height: 2.76vw;
			cursor: pointer;
		}
		.navs .btn_sel a {
			color: #fff;
			font-size: 2.86vw;
			font-family: 'PingFangSC-Semibold';
		}

		.navs li a:hover {
			color: #fff;
			font-size: 2.86vw;
			font-family: 'PingFangSC-Semibold';
			-webkit-transition: font-size 0.2s;
      		transition: font-size 0.2s;
		}


		@-webkit-keyframes scaleIn {
		    0% {
		    	width: 0vw;
		    	height: 0vw;
		    	border-radius: 50%;
		        -webkit-transform: scale(1);
		        -moz-transform: scale(1);
		        -ms-transform: scale(1);
		        -o-transform: scale(1);
			    transform: scale(1);
		    }
		    10% {
		    	width: 10vw;
		    	height: 10vw;
		    	border-radius: 50%;
		    	-webkit-transform: scale(10);
		        -moz-transform: scale(10);
		        -ms-transform: scale(10);
		        -o-transform: scale(10);
			    transform: scale(10);
		    }
		    20% {
		    	width: 20vw;
		    	height: 20vw;
		    	border-radius: 50%;
		    	-webkit-transform: scale(20);
		        -moz-transform: scale(20);
		        -ms-transform: scale(20);
		        -o-transform: scale(20);
			    transform: scale(20);
		    }
		    30% {
		    	width: 30vw;
		    	height: 30vw;
		    	border-radius: 50%;
		    	-webkit-transform: scale320);
		        -moz-transform: scale(30);
		        -ms-transform: scale(30);
		        -o-transform: scale(30);
			    transform: scale(30);
		    }
		    50% {
		    	border-radius: 50%;
		        -webkit-transform: scale(50);
		        -moz-transform: scale(50);
		        -ms-transform: scale(50);
		        -o-transform: scale(50);
			    transform: scale(50);
		    }
		    60% {
		    	border-radius: 50%;
		        -webkit-transform: scale(60);
		        -moz-transform: scale(60);
		        -ms-transform: scale(60);
		        -o-transform: scale(60);
			    transform: scale(60);
		    }
		    100% {
		    	width: 100vw;
		    	height: 100vh;
		    	border-radius: 0;
		        -webkit-transform: scale(100);
		        -moz-transform: scale(100);
		        -ms-transform: scale(100);
		        -o-transform: scale(100);
			    transform: scale(100);
		    }
		}
		@keyframes scaleIn {
		    0% {
		    	width: 0vw;
		    	height: 0vw;
		    	border-radius: 50%;
		        -webkit-transform: scale(1);
		        -moz-transform: scale(1);
		        -ms-transform: scale(1);
		        -o-transform: scale(1);
			    transform: scale(1);
		    }
		    10% {
		    	width: 10vw;
		    	height: 10vw;
		    	border-radius: 50%;
		    	-webkit-transform: scale(10);
		        -moz-transform: scale(10);
		        -ms-transform: scale(10);
		        -o-transform: scale(10);
			    transform: scale(10);
		    }
		    20% {
		    	width: 20vw;
		    	height: 20vw;
		    	border-radius: 50%;
		    	-webkit-transform: scale(20);
		        -moz-transform: scale(20);
		        -ms-transform: scale(20);
		        -o-transform: scale(20);
			    transform: scale(20);
		    }
		    30% {
		    	width: 30vw;
		    	height: 30vw;
		    	border-radius: 50%;
		    	-webkit-transform: scale320);
		        -moz-transform: scale(30);
		        -ms-transform: scale(30);
		        -o-transform: scale(30);
			    transform: scale(30);
		    }
		    50% {
		    	border-radius: 50%;
		        -webkit-transform: scale(50);
		        -moz-transform: scale(50);
		        -ms-transform: scale(50);
		        -o-transform: scale(50);
			    transform: scale(50);
		    }
		    60% {
		    	border-radius: 50%;
		        -webkit-transform: scale(60);
		        -moz-transform: scale(60);
		        -ms-transform: scale(60);
		        -o-transform: scale(60);
			    transform: scale(60);
		    }
		    100% {
		    	width: 100vw;
		    	height: 100vh;
		    	border-radius: 0;
		        -webkit-transform: scale(100);
		        -moz-transform: scale(100);
		        -ms-transform: scale(100);
		        -o-transform: scale(100);
			    transform: scale(100);
		    }
		}

		
		@-webkit-keyframes opac {
		    0% {
				opacity: 0;
		    }
		    100% {
				opacity: 1;
		    }
		}
		@keyframes opac {
		    0% {
				opacity: 0;
		    }
		    100% {
				opacity: 1;
		    }
		}
	}
</style>
