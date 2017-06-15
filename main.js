var gl; // WebGL的全局变量

function initShaders() {
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");
  
  // 创建着色器
  
  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  
  // 如果创建着色器失败
  
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Unable to initialize the shader program.");
  }
  
  gl.useProgram(shaderProgram);
  
  vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  gl.enableVertexAttribArray(vertexPositionAttribute);
}

function initWebGL(canvas) {
  // 创建全局变量
  window.gl = null;
  
  try {
    // 尝试获取标准上下文，如果失败，回退到试验性上下文
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
  
  // 如果没有GL上下文，马上放弃
  if (!gl) {
    alert("WebGL初始化失败，可能是因为您的浏览器不支持。");
    gl = null;
  }
  return gl;
}

function start() {
  var canvas = document.getElementById("glcanvas");

  // 初始化 WebGL 上下文
  gl = initWebGL(canvas);   
  
  // 只有在 WebGL 可用的时候才继续
  
  if (gl) {
    // 设置清除颜色为黑色，不透明
    gl.clearColor(1.0, 0.0, 0.0, 1.0);    
    // 开启“深度测试”, Z-缓存
    gl.enable(gl.DEPTH_TEST); 
    // 设置深度测试，近的物体遮挡远的物体
    gl.depthFunc(gl.LEQUAL); 
    // 清除颜色和深度缓存
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);     
  }
}

start();