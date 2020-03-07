const info = JSON.parse(localStorage.getItem('goodsInfo'));
if (!info) {
    alert('您要查看的数据不存在')
    window.location.href = './list.html'
  }
  bindHtml()
  function bindHtml() {
    $('.img1').attr('src', info.pic)
    $('.img2').attr('src', info.pic)
    $('.p1').text(info.itemName)
    $('.span1').text('￥: ' + info.price)
    $(".span2").text('销量:'+info.saleCnt)
  }
//   放大镜效果
var small =document.getElementById("box");
var mask=document.getElementById("mask");
var big=document.getElementById("big");
var bigImg=document.getElementsByClassName("img2")[0];
var box = small.parentNode
    small.onmouseenter = function(){
		mask.style.display = "block";
		big.style.display = "block";
	}

	//鼠标移出small,mask隐藏,big隐藏
	small.onmouseleave = function(){
		//mask隐藏,big隐藏
		mask.style.display = "none";
		big.style.display = "none";
	}

	//mask可以移动
    small.onmousemove=function(e){
        var event=e||window.event;
        var x=event.pageX-box.offsetLeft-(mask.offsetWidth/2)-30;
        var y=event.pageY-box.offsetTop-(mask.offsetHeight/2)-150;
        //边界检测
        if(x<0){
            x=0;
        }
        if(x>box.offsetWidth-mask.offsetWidth){
            x=box.offsetWidth-mask.offsetWidth
        }
        if(y<0){
            y=0
        }
        if(y>box.offsetHeight-mask.offsetHeight){
            y=box.offsetHeight-mask.offsetHeight
        }
        mask.style.left=x+"px";
        mask.style.top=y+"px"
        //大图移动
        bigImg.style.left=-(bigImg.offsetWidth*x/small.offsetWidth)+"px"
        bigImg.style.top=-(bigImg.offsetHeight*y/small.offsetHeight)+"px"
        //背景图层移动
        mask.style.backgroundPosition=(-x)+"px "+(-y)+"px"
    }
// 加入购物车
$('.gouwuche').click(() => {
const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
let exits = cartList.some(item => {
    return item.itemName === info.itemName
  })
  if (exits) {
    let data = null
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].itemName == info.itemName) {
        data = cartList[i]
        break
      }
    }
    data.number++;
    data.xiaoji = data.number * data.price 
  } else {
    info.number = 1
    info.xiaoji = info.price 
    info.isSelect = false 
    cartList.push(info)
  }

  localStorage.setItem('cartList', JSON.stringify(cartList))
})
//跳转到购物车页面
$('.gwc').click(() => {
    console.log(1)
    window.location="./cart.html"
})