
//TODO:
// target rotation texture
var MakePages = function(){
  sNoise = new SimplexNoise();

  firstLookup = makeSingleTexture( 1 , 0 );
  secondLookup = makeSingleTexture( 1 , 0.001 );

  cabbiboTexture = makeImageTexture(.3,  G.textures.cabbiboEnd );
  prismFlatLookup = makeImageTexture(.3,  G.textures.prismFlat );
  refractionFlatLookup = makeImageTexture(.3,  G.textures.refractionFlat );
  prismColor = makeColorFromTextureImage( .3 , prismFlatLookup, G.textures.prismFlat );

  randomRotationAxis = makeNormalizedTexture();
  verticalRotationAxis = makeVerticalTexture();
  

  multitudeTexture = makeMeshNoiseTexture( new THREE.IcosahedronGeometry( .4 , 4 ) , .004 , 3. , .04);
  emergenceRotationAxis = makeNoiseRotationTexture(multitudeTexture);

  opalTexture = makeOpalTexture(300 , 3 , 6 );
  opalRotationTexture = makeOpalRotationTexture(300, 3 , 6);
  

  //emergenceTexture = makeNoiseMeshTexture( new THREE.IcosahedronGeometry( .4 , 4 ) , .004 , .0);
  

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
                                    brightness:0,
                                    reflectColorAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

  {

    title                        : "SUN",
    titleColor                   : "#000",

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
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:1
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

  {

    title                        : "BEYOND",

    pageTurnTime                 : 1000,

    movementSize: 1,
    movementSpeed: .1,

    targetTexture                : sunTexture, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.1,
                                    movementSize:1
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
                                    brightness:.7
                                   },

    cameraPosition               : new THREE.Vector3( .1 , 0 , 0.6 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  },


    {

    title                        : "BEAST",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:0,
                                    movementSize:0
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
                                    brightness:1.,

                                   },

    cameraPosition               : new THREE.Vector3( 1 , 0 , 3.3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

 



  {

    title                        : "MORE",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 0,
                                    dampening: .98,
                                    dispersion: .001,
                                    curlNoiseSize : 3.,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:2
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0.,
                                    toTargetAxis:0,
                                    toTargetAngle:1,
                                    toVelocity:1
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalColorAmount:0,
                                    reflectColorAmount:.5,
                                    velocityColorAmount:.5,
                                    normalMapSize:.1,
                                    normalMapDepth:0,
                                    brightness:0,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( .7 , 0 , .3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "CAN'T",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 0,
                                    dampening: .9,
                                    dispersion: .01,
                                    curlNoiseSize : 3.,
                                    audioDisplacement: 0,
                                    movementSpeed:.0,
                                    movementSize:0
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                    toVelocity:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0,
                                    baseSize:0,
                                    simulationSize:0,
                                    audioSize:0,
                                    targetSize:0,
                                   },

    cameraPosition               : new THREE.Vector3( .0 , 0 , 4.3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "YEARN",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .1,
                                    dispersion: .00,
                                    curlNoiseSize : 3.,
                                    audioDisplacement: 0,
                                    movementSpeed:0,
                                    movementSize:0
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
                                    brightness:0,
                                    baseSize:0,
                                    simulationSize:.1,
                                    audioSize:0,
                                    targetSize:0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "STORIES",

    pageTurnTime                 : 1000,

    targetTexture                : secondLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:.1
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                    toTargetAxis:0,
                                    toTargetAngle:0,
                                 
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    simulationSize:1,
                                    semAmount:0,
                                   },

    cameraPosition               : new THREE.Vector3( .1 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( .1 , 0 , 0 ),


  }, 

  {

    title                        : "PRISM",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : prismColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 5,
                                    dampening: .8,
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
                                    rainbowValue: 0,
                                    normalMapDepth:10,
                                    normalMapSize:.4,
                                    reflectColorAmount:0,
                                    normalColorAmount:0,
                                    individualColorAmount:1,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

   {

    title                        : "Index of Refraction",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : prismColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:1,
                                    movementSize:.0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   },
                                      

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    individualColorAmount:0,
                                    reflectColorAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( -.035 , 0.015 , .05 ),
    cameraTarget                 : new THREE.Vector3( -.035 , 0.015 , 0 ),


  }, 

    {

    title                        : "CORNERS",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : verticalRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:1,
                                    movementSize:.0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    reflectColorAmount:0,
                                    normalColorAmount:0,
                                    normalMapDepth:0,
                                    velocityColorAmount:0,
                                    audioColorAmount:1,
                                    semAmount:0,
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
                                    toTargetForce: 10,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.1,
                                    movementSize:.2
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    baseSize: .004,
                                    simulationSize:0,
                                    reflectColorAmount:0,
                                    audioColorAmount:1,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "EMERGENCE",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : emergenceRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 5,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 0.1,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    baseSize: 0,
                                    simulationSize:1,
                                    audioColorAmount:0,
                                    reflectColorAmount:0,
                                    normalColorAmount:1,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .25 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "OPALS",

    pageTurnTime                 : 1000,

    targetTexture                : opalTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : opalRotationTexture,

    targetSimulationUniforms     : {
                                    toTargetForce: 50,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.2,
                                    movementSize:.0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    audioColorAmount:0,
                                    reflectColorAmount:1,
                                    normalMapSize:.01,
                                    normalMapDepth:1,
                                    matchHueAmount:0
                                   },

    cameraPosition               : new THREE.Vector3( 0.06 , 0.03 , .1 ),
    cameraTarget                 : new THREE.Vector3( 0.06, 0.03 , 0 ),


  }, 

  {

    title                        : "DISCOVERY",

    pageTurnTime                 : 1000,

    targetTexture                : opalTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : opalRotationTexture,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.1,
                                    movementSize:6
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalMapDepth:0,
                                    reflectColorAmount:1,
                                    semAmount:.5
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 2.6 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "ROYAL PEACOCK GPU",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: .1,
                                    dampening: .95,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:3
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalColorAmount:0,
                                    audioColorAmount:.5,
                                    reflectColorAmount:0.4,
                                    normalMapSize:.01,
                                    normalMapDepth:2,
                                    individualAudioAmount:1,
                                    matchHueAmount:0
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
                                    movementSpeed:.01,
                                    movementSize:4
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    velocityColorAmount:1,
                                    normalColorAmount:0,
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
                                    movementSpeed:.1,
                                    movementSize:1
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
                                    toTargetForce: 1,
                                    dampening: .8,
                                    dispersion: .01,
                                    audioRadius: .9,
                                    audioPower: .04,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:2
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    audioSize: .01,
                                    simulationSize: 0,
                                    baseSize:.001,
                                    audioDisplacement: .01,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 1.0 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 


  {

    title                        : "",

    pageTurnTime                 : 1000,

    targetTexture                : cabbiboTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 10,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    audioRadius: .5,
                                    audioPower: .01,
                                    movementSpeed:.1,
                                    movementSize:0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:0,
                                      toTargetAngle:1,
                                      toVelocity:1
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    simulationSize: 1,
                                    audioSize:0,
                                    baseSize:0,
                                    audioDisplacement:.01,
                                    rainbowValue: 0,
                                    audioColorAmount:0,
                                    reflectColorAmount:1,
                                    velocityColorAmount:0,
                                    semAmount:.3
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 








]

return PAGES

}