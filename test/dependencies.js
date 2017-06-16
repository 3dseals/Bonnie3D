setTimeout(function () { 
    let g_resources = ["../src/Engine/base/Application.js","../src/Engine/base/Component .js","../src/Engine/base/Node.js","../src/Engine/base/Object.js","../src/Engine/core/Format.js","../src/Engine/core/Log.js","../src/Engine/geometry/Geometry.js","../src/Engine/material/Material.js","../src/Engine/object/Mesh.js","../src/Engine/renderer/WebGL2Renderer.js","../src/Engine/scene/Scene.js","../src/Engine/scene/SceneManager.js"];
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