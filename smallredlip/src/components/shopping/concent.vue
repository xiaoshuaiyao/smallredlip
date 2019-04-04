<template>
	<div class="concent">
		
			<div class="concent_a">
			<router-link class="search-left" tag="div" to="/search">
				<i class="iconfont" v-html="icon"></i>
				<span>{{val}}</span>
			</router-link>
			<div class="search-right">
				<i class="iconfont" v-html="icon1"></i>
			</div>
		</div>
		
		

		<div class="nav">
			<ul>
				<Router-link v-for="item in concents" tag="li" :to="item.to">{{item.p}}</Router-link>
			</ul>

		</div>



		<div class="Pic">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img :src="Img" alt="">
				</div>
				<div class="swiper-slide">
					<img :src="Img2" alt="">
				</div>

			</div>
		</div>

		<div class="Pic1">
			<img :src="Img3" alt="">
		</div>
		
		
			<div class="Pic2">
				<img :src="Img4" alt="">
				<img :src="Img5" alt="">
			</div>
			
			<div class="Pic3">
				<img :src="Img6" alt="">
				<img :src="Img7" alt="">
			</div>
			
			<div class="Pic4">
				<img :src="Img9" alt="">
			</div>
		

		<div class="com-title-con" v-for="item in comtitlecon">
			<p>{{item.p}}</p>
			<span>{{item.span}}</span>
			<i>{{item.i}}</i>
		</div>
		
		<div class="list">
			<ul>
				<li v-for="item in veryNew">
					<img :src="item.img" alt="">
					<p>
						{{item.p}}
						<i>{{item.i}}</i>
					</p>
					<span>{{item.span}}</span>
				</li>
			</ul>
		</div>
		
		<div class="com-title-con" v-for="item in comtitlecon1">
			<p>{{item.p}}</p>
			<span>{{item.span}}</span>
			<i>{{item.i}}</i>
		</div>
		
			<div class="list">
			<ul>
				<li v-for="item in week">
					<img :src="item.img" alt="">
					<p>
						{{item.p}}
						<i>{{item.i}}</i>
					</p>
					<span>{{item.span}}</span>
				</li>
			</ul>
		</div>
		
		<div class="banner">
			<img :src="Img8" alt="">
		</div>
		
		<div class="list">
			<ul>
				<li v-for="item in week1">
					<img :src="item.img" alt="">
					<p>
						{{item.p}}
					</p>
					<span>{{item.span}}</span>
				</li>
			</ul>
		</div>
		
		<div class="nav2" :class="flag?'nav1':''">
			<ul>
				<router-link tag="li" to="/shopping/synth">综合</router-link>
				<router-link tag="li" to="/shopping/new">最新</router-link>
				<router-link tag="li" to="/shopping/sales">销量</router-link>
				<router-link tag="li" to="/shopping/price">价格</router-link>
				<li>仓库</li>
				
				

			</ul>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		

	</div>

</template>

<script>
	import Swiper from 'swiper';
	import '../../../node_modules/swiper/dist/css/swiper.min.css'
	export default {
		name: "shopping",
		
		data() {
			
			return {
					flag:false,
					
					
					
				icon: "&#xe647;",
				val: "口红",
				icon1: "&#xe6b8;",
				concents: [
					{
						p:"精选",
						to:"achoiceness"
					},
					{
						p:"排行榜",
						to:"aranking"
					},
					{
						p:"护肤彩妆",
						to:"askin"
					},
					{
						p:"家居生活",
						to:"aliving"
					},
					{
						p:"个人护理",
						to:"apersonal"
					},
					{
						p:"时尚穿搭",
						to:"afashion"
					},
					{
						p:"没事保健",
						to:"acare"
					}
					
					// "精选", "排行榜", "护肤彩妆", "家居生活", "个人护理", "时尚穿搭", "没事保健"
				],
				Img: "https://wicdn.xiaohongchun.com/goodsmark/1553570321577_J7Td2KmP54.jpg",
				Img2: "https://wicdn.xiaohongchun.com/goodsmark/1554084603181_np2Hz4aNW5.jpg",
				Img3:"https://wicdn.xiaohongchun.com/goodsmark/1551363542888_Dba8GyzjHh.png",
				Img4:"https://wicdn.xiaohongchun.com/goodsmark/1553756792103_ibCYrsc8Fn.png",
				Img5:"https://wicdn.xiaohongchun.com/goodsmark/1553827782201_p5AZxm6t5R.png",
				Img6:"https://wicdn.xiaohongchun.com/goodsmark/1554084003156_5KeNdtkymH.png",
				Img7:"https://wicdn.xiaohongchun.com/goodsmark/1554088441437_raT3E7cje2.png",
				Img8:"https://wicdn.xiaohongchun.com/goodsmark/1553761324395_CarYYcCnW8.png",
				Img9:"https://wicdn.xiaohongchun.com/goodsmark/1554113414456_8nhardP5fe.gif",
				
				
				veryNew:[
					{
						img:"https://wicdn.xiaohongchun.com/goodsmark/goodsmark_18192_1554174082620.jpg",
						p:"￥332",
						i:"335",
						span:"打造奢华雾面唇妆"
					},
					{
						img:"https://wicdn.xiaohongchun.com/goodsmark/goodsmark_8297_1554173836212.jpg",
						p:"￥128",
						i:"248",
						span:"一包有8种营养"
					},
					{
						img:"https://wicdn.xiaohongchun.com/goodsmark/goodsmark_18191_1554172656308.jpg",
						p:"￥1349",
						i:"4500",
						span:"燕子包百搭轻奢"
					}
				],
				week:[
					{
						img:"https://wicdn.xiaohongchun.com/goodsmark/1554043161037_fbzYJtPcHH.jpg",
						p:"￥198",
						i:"328",
						span:"赶走毛孔垃圾"
					},
					{
						img:"https://wicdn.xiaohongchun.com/goodsmark/goodsmark_16472_1553505347085.jpg",
						p:"￥135",
						i:"185",
						span:"吴昕同款"
					},
					{
						img:"https://wicdn.xiaohongchun.com/goodsmark/goodsmark_18143_1554046050295.jpg",
						p:"￥245",
						i:"399",
						span:"修复受损肌"
					}
				],
				week1:[
					{
						img:"https://wicdn.xiaohongchun.com/xhc-plat/1536134255542_7FBFB4QhkM.jpg",
						p:"￥44.8",
						span:"好气色必备"
					},
					{
						img:"https://wicdn.xiaohongchun.com/goodsmark/1548241487541_sBP64FkKZp.jpg",
						p:"￥45",
						span:"持久滋润高级香"
					},
					{
						img:"https://wicdn.xiaohongchun.com/xhc-plat/1544831721245_czShGiNchr.jpg",
						p:"￥42",
						span:"祛痘效果飞一般"
					}
					
				],
				comtitlecon:[
					{
						p:"最新上架",
						span:"全球尖货 限量尝鲜",
						i:"More >"
					}
				],
				comtitlecon1:[
					{
						p:"每周精选",
						span:"每周精选 超值好物",
						i:"More >"
					}
				],
				nav1:[
					{
					a:"综合",
					to:"/shopping/synth"
				},
				{
					a:"最新",
					to:"/shopping/new"
				},
				{
					a:"销量",
					to:"/shopping/sales"
				},
				{
					a:"价格",
					to:"/shopping/price"
				},
				{
					a:"仓库",
					
				},
				
				]

			}
			
		},
		mounted() {
			var mySwiper = new Swiper('.Pic', {
				autoplay: true,
				loop: true,
				autoplay:{
					disableOnInteraction: false,
				}
			})
			window.addEventListener('scroll', this.handleScroll)


		},
		methods:{
					handleScroll () {
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			  // console.log(scrollTop)
				if(scrollTop>2805){
					this.flag=true;
				}else{
					this.flag=false;
				}
			},
		}

	}
</script>

<style lang="scss" scoped>
	.concent {
		margin-top: 1.8rem;
		
		width : 100%;
		
	
			.concent_a {
			display: flex;
			align-items: center;
			justify-content: space-around;
			position: fixed;
			background : white;
			z-index:5;
			height : 0.9rem;
			top : 0.9rem;
			.search-left {
				width: 5.5rem;
				border: 1px solid #ccc;
				margin: 0rem 0.8rem 0 0.6rem;
				border-radius: 0.4rem;
				
				.iconfont {
					font-size: 0.4rem;
					font-weight: 900;
					margin-left: 0.2rem;
					height: 100%;
				}

				span {
					line-height: 0.5rem;
					margin-left: 0.2rem;
					color: #808080;
					font-size: 0.26rem;
				}
			}

			.search-right {
				display: flex;
				align-items: center;
				margin-right: 0.5rem;
				border: 1px solid #ccc;
				padding: 0.05rem;
				border-radius: 50%;

				i {
					color: #ff3167;
				}
			}
		}
		
		

		.nav {
			width: 100%;
			// background : red;
			
			background-color: white;
			height: 0.66rem;
			padding-left:0.1rem;
			//background: yellow;
			// overflow: hidden;
			position: fixed;
			overflow:auto;
			
			z-index:5;
			ul {
				//background: pink;
				height: 100%;
				width : 154%;

				li {
					margin: 0 0.5rem 0 0.1rem;
					float: left;
					line-height: 0.6rem;
					font-size: 0.28rem;
					color:#222;
					
				}
			}
		}
		.nav>ul>.router-link-active{
			border-bottom: 0.04rem solid #ff3167;
			    font-size: 0.32rem;
		}

		.Pic {
			width : 7.5rem;
			overflow: hidden;
			img{
				width: 100%;
			 height: 3.7rem;	
			}
		   

		}
		.Pic1{
			img{
				width : 7.5rem;
				
			}
		}
		.Pic2{
			
			height : 1.7rem;
			img{
				width : 3.75rem;
				float:left;
			}
		}
		.Pic3{
			height : 1.4rem;
			img{
				width : 3.75rem;
				float:left;
			}
		}
		.Pic4{
			width : 100%;
			img{
				width : 100%;
				height : 1.7rem;
			}
		}
		.com-title-con{	
			height : 1.4rem;
			margin-left:0.4rem;
			margin-top:0.8rem;
			p{
				font-weight: 500;
				color: #191919;
				font-size: 0.34rem;
				
			}
			span{
				font-weight: 100;
				color: gray;
				font-size: 0.285rem;
				line-height:0.6rem;
			}
			i{
				
				color: #9D9D9D;
				font-size: 0.3rem;
				margin-left : 3.5rem;
			}
		}
		.list{
			margin-left:0.1rem;
			ul{
				display: flex;
				justify-content: space-between;
				li{
					p{
						color: #ff3167;
						font-size:0.28rem;
						i{
							color: #808080;
							font-size: 0.24rem;
							text-decoration: line-through;
						}
					}
					span{
						    font-size: 0.26rem;
					}
					
				}
			}
			
			img{
				width:2.4rem;
				height : 2.4rem;
			}
		}
		.banner{
			width : 100%;
			height : 4.1rem;
			margin-top:0.5rem;
			margin-bottom:0.3rem;
			img{
				width : 100%;
				height : 100%;
			}
		}
		.nav2{
			width : 100%;
			height : 0.88rem;

			border-top: 3px solid #f5f5f5;
			margin-top:0.3rem;
			//position: sticky;

			background : white;
			ul{
				li{
					width : 20%;
					float: left;
					line-height:0.88rem;
					color: #808080;
					font-size:0.28rem;
					text-align: center;
				}
			}
		}
		.nav1{
				position: fixed;
				top:200px;
		}
		.nav2>ul>.router-link-active{
			    color: #ff3167;
		}
		
	}
</style>
