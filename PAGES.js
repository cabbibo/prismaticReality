var PAGES = [

  {

    title                        : "RAINBOWS",

    pageTurnTime                 : 5000,

    targetTexture                : makeSingleTexture( 10  ), //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),

    targetSimulationUniforms     : {
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimUniforms    : {
                                    speed: 1.,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.1 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 


  {

    title                        : "MORE",

    pageTurnTime                 : 5000,

    targetTexture                : makeMeshTexture( new THREE.IcosahedronGeometry( .01 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),

    targetSimulationUniforms     : {
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimUniforms    : {
                                    speed: 1.,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 1 , 0 , 0 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 




]