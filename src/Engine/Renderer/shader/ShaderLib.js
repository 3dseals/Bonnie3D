(function ($) {

    class ShaderLib {

    }

    ShaderLib.cube = {

        uniforms: {
            tCube: { value: null },
            tFlip: { value: - 1 },
            opacity: { value: 1.0 }
        },

        vertexShader: Bonnie3D.ShaderChunk.cube_vert,
        fragmentShader: Bonnie3D.ShaderChunk.cube_frag

    },

    Bonnie3D.ShaderLib = ShaderLib;

}(this));