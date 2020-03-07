const cartList = JSON.parse(localStorage.getItem('cartList'));
if (!cartList) {
    alert('您的购物车为空, 快去选购把')
} else {
    bindHtml()
    bindEvent()
}
function bindHtml() {
    let selectAll = cartList.every(item => {
        return item.isSelect === true
    })
    var n = null;
    let str = `
<div class="top">
<input class="selectAll" type="checkbox" ${ selectAll ? 'checked' : ''}>   全选
</div>
    `
    cartList.forEach(item => {
        str += `
        <div class="shangpin">
        <input class="select" type="checkbox">
        <img src="${item.pic}" alt="" class="img1">
        <p class="p1">${item.itemName}</p>
        <div class="number">
            <button class="sub">-</button>
            <input type="text" value="${item.number}">
            <button class="add">+</button>
        </div>
        <p class="span1">￥:${item.price}</p>
    </div>
        `
        n += item.number * item.price
    })

    str += `
    <div class="jiesuanb">
    <p class="zongjia">总价： <span>${n}</span></p>
    <p class="js">结算</p>
</div>
</div>
    `
    $('.neirongb').html(str)
}
function bindEvent() {
    $('.neirongb').on('change', '.selectAll', function () {
        cartList.forEach(item => {
            item.isSelect = this.checked
        })
        bindHtml()
        localStorage.setItem('cartList', JSON.stringify(cartList))
    })
    $('.cart').on('change', '.selectOne', function () {
        const id = $(this).data('id')

        cartList.forEach(item => {
            if (item.id === id) {
                item.isSelect = !item.isSelect
            }
        })

        bindHtml()

        localStorage.setItem('cartList', JSON.stringify(cartList))
    })

    $('.neirongb').on('click', '.add', function () {
        const id = $(this).data('id')

        cartList.forEach(item => {
            if (item.number >= 0) {
                if (item.id === id) {
                    item.number++
                    item.xiaoji = item.number * item.price
                }
            }
        })
        bindHtml()
        localStorage.setItem('cartList', JSON.stringify(cartList))
    })
    $('.neirongb').on('click', '.sub', function () {
        const id = $(this).data('id')
        cartList.forEach(item => {
            if (item.number >= 1) {
                if (item.id === id) {
                    item.number--
                    item.xiaoji = item.number * item.price
                }
            }
        })
        bindHtml()
        localStorage.setItem('cartList', JSON.stringify(cartList))
    })
    $(".selectAll").click(function () {
        console.log($(this).prop("checked"))
        if ($(this).prop("checked")) {
            $(".select").prop("checked", true)
        } else {
            $(".select").prop("checked", false)
        }
    })
}

