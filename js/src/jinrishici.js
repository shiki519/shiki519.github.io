/**
 * 今日诗词V2 JS-SDK 1.0
 * 今日诗词API 是一个可以免费调用的诗词接口：https://www.jinrishici.com
 */
(function (window) {
        jinrishici = {}
        jinrishici.load = function (callback) {
            var apiUrl = 'https://v2.jinrishici.com/one.json?client=browser-sdk/1.0'
            var xhr = new XMLHttpRequest();
            xhr.open('get', apiUrl);
            xhr.withCredentials = true;
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    var data = JSON.parse(xhr.responseText);
                    if (data.status === "success") {
                        callback(data)
                    } else {
                        console.error("今日诗词API加载失败，错误原因：" + data.errMessage)
                    }
                }
            }
            xhr.send();
        };

        setTimeout(function () {
            var ele = document.getElementById("jinrishici-sentence");
            if (ele) {
                jinrishici.load(function (result) {
                    ele.innerText = result.data.content
                })
            }
        }, 0)
        window.jinrishici = jinrishici
    }
)(window);