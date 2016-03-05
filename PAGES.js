

var MakePages = function(){

  firstLookup = makeSingleTexture( 1 , 0 );
  secondLookup = makeSingleTexture( 1 , 0.001 );

  testLookup = makeImageTexture(.3,  G.textures.mystery );
  prismFlatLookup = makeImageTexture(.3,  G.textures.prismFlat );



  var PAGES = [

  {

    title                        : "RAINBOWS",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),

    targetSimulationUniforms     : {
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 


  {

    title                        : "MORE",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup,
    targetColorTexture           : makeRandomTexture( 1  ),

    targetSimulationUniforms     : {
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .4 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "STORIES",

    pageTurnTime                 : 1000,

    targetTexture                : secondLookup,
    targetColorTexture           : makeRandomTexture( 1  ),

    targetSimulationUniforms     : {
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( .1 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( .1 , 0 , 0 ),


  }, 

  {

    title                        : "PRISM",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : makeRandomTexture( 1  ),

    targetSimulationUniforms     : {
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.,
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 





]

return PAGES

}