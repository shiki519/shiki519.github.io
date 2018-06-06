// ==UserScript==
// @name         鼠标点击冒泡
// @namespace    https://djzhao.js.org
// @version      0.1
// @description  一个用JS写的鼠标左击特效
// @description  一些Emoji 😀😃😄😁😆😅😂🤣☺😊😚😙😗😘😍😌😉🙃🙂😇😋😜😝😛🤑🤗🤓😎🤡🤠😖😣☹🙁😕😟😔😞😒😏😫😩😤😠😡😶😐😑😯😦😥😢😨😱😳😵😲😮😧🤤😭😪😴🙄🤔😬🤥🤐💩👺👹👿😈🤕🤒😷🤧🤢👻💀☠👽👾🤖🎃😺😸😹🙏👏🙌👐😾😿🙀😽😼😻
// @author       一碗单炒饭
// @include      /[a-zA-z]+://[^\s]*/
// @run-at       document_start
// ==/UserScript==
onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 5:
                $elem.innerText = "小泽玛利亚";
                break;
            case 10:
                $elem.innerText = "苍井空";
                break;
            case 15:
                $elem.innerText = "橘梨纱";
                break;
            case 20:
                $elem.innerText = "大桥未久";
                break;
            case 25:
                $elem.innerText = "雨宫琴音";
                break;
            case 30:
                $elem.innerText = "柚木提娜";
                break;
            case 35:
                $elem.innerText = "京香";
                break;
            case 40:
                $elem.innerText = "吉泽明步";
                break;
            case 45:
                $elem.innerText = "天海翼";
                break;
            case 50: 
				$elem.innerText = "桃谷绘里香";
                break;
            case 55: 
				$elem.innerText = "林由奈";
                break;
            case 60: 
				$elem.innerText = "水谷心音";
                break;
            case 70: 
				$elem.innerText = "泷泽萝拉";
                break;
            case 75: 
				$elem.innerText = "吉泽明步";
                break;
            case 80: 
				$elem.innerText = "波多野结衣";
                break;
            default:
		// 手动更换下面这行双引号里面的内容 如"😀"
                $elem.innerText = "🙄";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
        	anim = setInterval(function() {
	            if (++increase == 150) {
	                clearInterval(anim);
			$body.removeChild($elem);
	            }
	            $elem.style.top = y - 20 - increase + "px";
	            $elem.style.opacity = (150 - increase) / 120;
	        }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};
