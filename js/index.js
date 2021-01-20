/* 导航点击切换 开始 */

var tab_list = document.querySelector('.tab_list');  //获取li父级
//console.log(tab_list) 
var lis = tab_list.querySelectorAll('li');//获取li
var item = document.querySelectorAll('.a'); //获取切换div的 class

for(var i = 0; i < lis.length;i++){        //以下两个事件 行为循环
        lis[i].setAttribute('index',i);
        lis[i].onclick = function(){                     //点击li时
            for(var i = 0;i<lis.length;i++){             //读取所有li
                lis[i].className = '';                   //所有li css为空
            }
            this.className = 'current'; //点击后更改li css属性

            var index = this.getAttribute('index');        //获取索引值   
            for(var i = 0;i<item.length;i++){              //读取所有class
                item[i].style.display = 'none';            //所有div 隐藏
            }
            item[index].style.display = 'block';           //当前显示
             

            
        }
}
/* 导航点击切换 结束 */

/* div跟随鼠标移动 开始 */
            for (var i = 0; i < 1; i++) {
                
                setTimeout(document.write('<div class="mouse"></div>'),5000); 
            }
            function getPos(ev) {
                var scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
                var scrollLeft =
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft
                return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop }
            }
            document.onmousemove = function(ev) {
                var aDiv = document.getElementsByClassName('mouse')
                var oEvent = ev || event
                var pos = getPos(oEvent)
                for (var i = aDiv.length - 1; i > 0; i--) {
                    aDiv[i].style.left = aDiv[i - 1].offsetLeft + 'px'
                    aDiv[i].style.top = aDiv[i - 1].offsetTop + 'px'
                }
                aDiv[0].style.left = pos.x + 'px'
                aDiv[0].style.top = pos.y + 'px'
            }
/* div跟随鼠标移动 结束 */  



抄抄抄 





