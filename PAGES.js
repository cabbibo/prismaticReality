
//TODO:
// target rotation texture
var MakePages = function(){

  firstLookup = makeSingleTexture( 1 , 0 );
  secondLookup = makeSingleTexture( 1 , 0.001 );

  testLookup = makeImageTexture(.3,  G.textures.mystery );
  prismFlatLookup = makeImageTexture(.3,  G.textures.prismFlat );

  randomRotationAxis = makeNormalizedTexture();
  verticalRotationAxis = makeVerticalTexture();

  multitudeTexture = makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 4 ) , .004 , .0);
  sunTexture = makeMeshTexture( new THREE.IcosahedronGeometry( .1 , 4 ) , .007 , .0);

  var PAGES = [

  {

    title                        : "RAINBOWS",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0,
                                    toTargetAxis:1,
                                    toTargetAngle:1,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

  {

    title                        : "SUN",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 3,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:1
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 1 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

  {

    title                        : "BEYOND",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: .1,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:.9
                                   },

    cameraPosition               : new THREE.Vector3( .1 , 0 , 0.06 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 



  {

    title                        : "MORE",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "STORIES",

    pageTurnTime                 : 1000,

    targetTexture                : secondLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                    toTargetAxis:0,
                                    toTargetAngle:0,
                                 
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
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   },
                                      

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "CORNERS",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : verticalRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( -.035 , 0.015 , .005 ),
    cameraTarget                 : new THREE.Vector3( -.035 , 0.015 , 0 ),


  }, 

  {

    title                        : "MULTITUDE",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "EMERGENCE",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 1. ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "OPALS",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 1. ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "DISCOVERY",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 1.6 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 


  {

    title                        : "IM | MATERIA",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .99,
                                    dispersion: 0,
                                    audioRadius: .5,
                                    audioPower: .02,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 


  /// Add in power of mouse here

    {

    title                        : "PERPETUAL RAINBOW",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: .1,
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 2.5 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

    {

    title                        : "PRISMATIC REALITY",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 5.3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 








]

return PAGES

}