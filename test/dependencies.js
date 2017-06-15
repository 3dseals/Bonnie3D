setTimeout(function () { 
    let g_resources = ["../src/main.js"];
    let require = function (path, requirePath) {
        var files = typeof path == "string" ? [path] : path;
        for (var i = 0; i < files.length; i++) {
            var name = files[i].replace(new RegExp("[\\\\]", "g"), "/");
            var tag = "script";
            var attr = "text/javascript";
            var link = (requirePath?requirePath:"") + name;
            var element=document.createElement(tag);
            element.setAttribute("type",attr);
            element.setAttribute("src", link);
            document.getElementsByTagName("body")[0].appendChild(element);
        }
    };
    require(g_resources);
}, 0);