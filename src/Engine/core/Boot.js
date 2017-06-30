window["Bonnie3D"] = window["Bonnie3D"] || {};

Bonnie3D.CullFaceNone = 0;
Bonnie3D.CullFaceBack = 1;
Bonnie3D.CullFaceFront = 2;
Bonnie3D.CullFaceFrontBack = 3;
Bonnie3D.FrontFaceDirectionCW = 0;
Bonnie3D.FrontFaceDirectionCCW = 1;
Bonnie3D.BasicShadowMap = 0;
Bonnie3D.PCFShadowMap = 1;
Bonnie3D.PCFSoftShadowMap = 2;
Bonnie3D.FrontSide = 0;
Bonnie3D.BackSide = 1;
Bonnie3D.DoubleSide = 2;
Bonnie3D.FlatShading = 1;
Bonnie3D.SmoothShading = 2;
Bonnie3D.NoColors = 0;
Bonnie3D.FaceColors = 1;
Bonnie3D.VertexColors = 2;
Bonnie3D.NoBlending = 0;
Bonnie3D.NormalBlending = 1;
Bonnie3D.AdditiveBlending = 2;
Bonnie3D.SubtractiveBlending = 3;
Bonnie3D.MultiplyBlending = 4;
Bonnie3D.CustomBlending = 5;
Bonnie3D.AddEquation = 100;
Bonnie3D.SubtractEquation = 101;
Bonnie3D.ReverseSubtractEquation = 102;
Bonnie3D.MinEquation = 103;
Bonnie3D.MaxEquation = 104;
Bonnie3D.ZeroFactor = 200;
Bonnie3D.OneFactor = 201;
Bonnie3D.SrcColorFactor = 202;
Bonnie3D.OneMinusSrcColorFactor = 203;
Bonnie3D.SrcAlphaFactor = 204;
Bonnie3D.OneMinusSrcAlphaFactor = 205;
Bonnie3D.DstAlphaFactor = 206;
Bonnie3D.OneMinusDstAlphaFactor = 207;
Bonnie3D.DstColorFactor = 208;
Bonnie3D.OneMinusDstColorFactor = 209;
Bonnie3D.SrcAlphaSaturateFactor = 210;
Bonnie3D.NeverDepth = 0;
Bonnie3D.AlwaysDepth = 1;
Bonnie3D.LessDepth = 2;
Bonnie3D.LessEqualDepth = 3;
Bonnie3D.EqualDepth = 4;
Bonnie3D.GreaterEqualDepth = 5;
Bonnie3D.GreaterDepth = 6;
Bonnie3D.NotEqualDepth = 7;
Bonnie3D.MultiplyOperation = 0;
Bonnie3D.MixOperation = 1;
Bonnie3D.AddOperation = 2;
Bonnie3D.NoToneMapping = 0;
Bonnie3D.LinearToneMapping = 1;
Bonnie3D.ReinhardToneMapping = 2;
Bonnie3D.Uncharted2ToneMapping = 3;
Bonnie3D.CineonToneMapping = 4;
Bonnie3D.UVMapping = 300;
Bonnie3D.CubeReflectionMapping = 301;
Bonnie3D.CubeRefractionMapping = 302;
Bonnie3D.EquirectangularReflectionMapping = 303;
Bonnie3D.EquirectangularRefractionMapping = 304;
Bonnie3D.SphericalReflectionMapping = 305;
Bonnie3D.CubeUVReflectionMapping = 306;
Bonnie3D.CubeUVRefractionMapping = 307;
Bonnie3D.RepeatWrapping = 1000;
Bonnie3D.ClampToEdgeWrapping = 1001;
Bonnie3D.MirroredRepeatWrapping = 1002;
Bonnie3D.NearestFilter = 1003;
Bonnie3D.NearestMipMapNearestFilter = 1004;
Bonnie3D.NearestMipMapLinearFilter = 1005;
Bonnie3D.LinearFilter = 1006;
Bonnie3D.LinearMipMapNearestFilter = 1007;
Bonnie3D.LinearMipMapLinearFilter = 1008;
Bonnie3D.UnsignedByteType = 1009;
Bonnie3D.ByteType = 1010;
Bonnie3D.ShortType = 1011;
Bonnie3D.UnsignedShortType = 1012;
Bonnie3D.IntType = 1013;
Bonnie3D.UnsignedIntType = 1014;
Bonnie3D.FloatType = 1015;
Bonnie3D.HalfFloatType = 1016;
Bonnie3D.UnsignedShort4444Type = 1017;
Bonnie3D.UnsignedShort5551Type = 1018;
Bonnie3D.UnsignedShort565Type = 1019;
Bonnie3D.UnsignedInt248Type = 1020;
Bonnie3D.AlphaFormat = 1021;
Bonnie3D.RGBFormat = 1022;
Bonnie3D.RGBAFormat = 1023;
Bonnie3D.LuminanceFormat = 1024;
Bonnie3D.LuminanceAlphaFormat = 1025;
Bonnie3D.RGBEFormat = Bonnie3D.RGBAFormat;
Bonnie3D.DepthFormat = 1026;
Bonnie3D.DepthStencilFormat = 1027;
Bonnie3D.RGB_S3TC_DXT1_Format = 2001;
Bonnie3D.RGBA_S3TC_DXT1_Format = 2002;
Bonnie3D.RGBA_S3TC_DXT3_Format = 2003;
Bonnie3D.RGBA_S3TC_DXT5_Format = 2004;
Bonnie3D.RGB_PVRTC_4BPPV1_Format = 2100;
Bonnie3D.RGB_PVRTC_2BPPV1_Format = 2101;
Bonnie3D.RGBA_PVRTC_4BPPV1_Format = 2102;
Bonnie3D.RGBA_PVRTC_2BPPV1_Format = 2103;
Bonnie3D.RGB_ETC1_Format = 2151;
Bonnie3D.LoopOnce = 2200;
Bonnie3D.LoopRepeat = 2201;
Bonnie3D.LoopPingPong = 2202;
Bonnie3D.InterpolateDiscrete = 2300;
Bonnie3D.InterpolateLinear = 2301;
Bonnie3D.InterpolateSmooth = 2302;
Bonnie3D.ZeroCurvatureEnding = 2400;
Bonnie3D.ZeroSlopeEnding = 2401;
Bonnie3D.WrapAroundEnding = 2402;
Bonnie3D.TrianglesDrawMode = 0;
Bonnie3D.TriangleStripDrawMode = 1;
Bonnie3D.TriangleFanDrawMode = 2;
Bonnie3D.LinearEncoding = 3000;
Bonnie3D.sRGBEncoding = 3001;
Bonnie3D.GammaEncoding = 3007;
Bonnie3D.RGBEEncoding = 3002;
Bonnie3D.LogLuvEncoding = 3003;
Bonnie3D.RGBM7Encoding = 3004;
Bonnie3D.RGBM16Encoding = 3005;
Bonnie3D.RGBDEncoding = 3006;
Bonnie3D.BasicDepthPacking = 3200;
Bonnie3D.RGBADepthPacking = 3201;

Bonnie3D.arrayMin = function( array ) {

    if ( array.length === 0 ) return Infinity;

    var min = array[ 0 ];

    for ( var i = 1, l = array.length; i < l; ++ i ) {

        if ( array[ i ] < min ) min = array[ i ];

    }

    return min;

}

Bonnie3D.arrayMax = function( array ) {

    if ( array.length === 0 ) return - Infinity;

    var max = array[ 0 ];

    for ( var i = 1, l = array.length; i < l; ++ i ) {

        if ( array[ i ] > max ) max = array[ i ];

    }

    return max;

}