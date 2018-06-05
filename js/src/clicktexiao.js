/* 鼠标点击特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
function RndNum(n){
 var rnd="";
 for(var i=0;i<n;i++)
   rnd+=Math.floor(Math.random()*10);
 return rnd;
}
 let a_num=RndNum(6);
var a_color ="#"+a_num;
var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善", "吻我", "爱你");
var $i = $("<span></n>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
var x = e.pageX,
        y = e.pageY;
        $i.css({
"z-index": 999,
"top": y - 30,
"left": x,
"position": "absolute",
"font-weight": "bold",
"color": a_color
        });
        $("body").append($i);
        $i.animate({
"top": y - 190,
"opacity": 0
        },
        1500,
function() {
            $i.remove();
        });
    });
});