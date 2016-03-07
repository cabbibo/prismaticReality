function Page(id , params ){

  this.id = id;
  this.title = params.title;
  this.titleColor = params.titleColor;
  
  this.pageTurnTime                 = params.pageTurnTime;

  this.targetTexture                = params.targetTexture;
  this.target2Texture               = params.target2Texture;
  this.targetColorTexture           = params.targetColorTexture;
  this.targetSimulationUniforms     = params.targetSimulationUniforms;
  this.targetRotationSimulationUniforms    = params.targetRotationSimulationUniforms;
  this.targetRenderUniforms         = params.targetRenderUniforms;

  this.cameraPosition               = params.cameraPosition.clone();
  this.cameraTarget                 = params.cameraTarget.clone();


  this.simVals    = this.cloneUniforms( params.targetSimulationUniforms );
  this.rotVals    = this.cloneUniforms( params.targetRotationSimulationUniforms );
  this.renderVals = this.cloneUniforms( params.targetRenderUniforms );


}


// all the uniforms we give a fuck about need to be
// only floats!
Page.prototype.cloneUniforms = function(uniforms){

  var u = {};
  for( var propt in uniforms ){
    u[propt] = uniforms[propt];
  }

  return u;

}

Page.prototype.start = function(){
  title.innerHTML = "";

  console.log( this.title );
  console.log( this.rotVals);
  console.log( this.targetRotationSimulationUniforms );
  console.log( rotationSimUniforms );

  T_TARGET.value = this.targetTexture;
  T_TARGET2.value = this.target2Texture;

  T_TARGETCOL.value = this.targetColorTexture;

  this.getUniforms( renderUniforms , this.renderVals );
  this.getUniforms( simulationUniforms , this.simVals );
  this.getUniforms( rotationSimUniforms , this.rotVals );

  this.currentCameraPos = camera.position.clone();
  this.currentCameraTarget = target.clone();
  console.log( "CC");
  console.log( this.currentCameraPos );
  console.log( this.cameraPosition );

  var tween = new TWEEN.Tween( this.currentCameraPos ).to( this.cameraPosition , this.pageTurnTime );

  tween.onUpdate( function( t ){
    camera.position.copy( this.currentCameraPos );
  }.bind( this ));

  tween.onComplete( function(){
    //camera.position.copy( this.cameraPosition );
  }.bind( this ) );

  tween.start();


  var tween = new TWEEN.Tween( this.currentCameraTarget ).to( this.cameraTarget , this.pageTurnTime );

  tween.onUpdate( function( t ){
    target.copy( this.currentCameraTarget );
  }.bind( this ));

  tween.onComplete( function(){
   // target.copy( this.cameraTarget );
  }.bind( this ) );

  tween.start();




  var tween = new TWEEN.Tween( this.simVals ).to( this.targetSimulationUniforms , this.pageTurnTime );

  tween.onUpdate( function( t ){
    this.setUniforms( simulationUniforms , this.simVals );
  }.bind( this ));

  tween.onComplete( function(){
    this.setUniforms( simulationUniforms , this.targetSimulationUniforms );
  }.bind( this ) );

  tween.start();

  var tween = new TWEEN.Tween( this.rotVals ).to( this.targetRotationSimulationUniforms , this.pageTurnTime );

  tween.onUpdate( function( t ){
    this.setUniforms( rotationSimUniforms , this.rotVals );
  }.bind( this ));

  tween.onComplete( function(){
    this.setUniforms( rotationSimUniforms , this.targetRotationSimulationUniforms );
  }.bind( this ) );

  tween.start();

  var tween = new TWEEN.Tween( this.renderVals ).to( this.targetRenderUniforms , this.pageTurnTime );

  tween.onUpdate( function( t ){
    this.setUniforms( renderUniforms , this.renderVals );
  }.bind( this ));

  tween.onComplete( function(){
    this.setUniforms( renderUniforms , this.targetRenderUniforms );

    this.onComplete();
  }.bind( this ) );

  tween.start();




}

Page.prototype.onComplete = function(){

  if( this.title ){


  var color = "#fff"
  if( this.titleColor ) color = this.titleColor;

  var string = (this.id + 1) + ". " + this.title;

  title.innerHTML = string;
  title.style.color = color;

  }


}


Page.prototype.setUniforms = function( uniforms, values){

  for( var propt in values ){

    if( uniforms[propt] ){ 

      if( propt == "toTargetAngle" ){
        console.log( values[propt] );
      }

      uniforms[propt].value = values[propt];
    }else{
      console.log( "WTF");
      console.log( propt );
    }

  }

}

Page.prototype.getUniforms = function( uniforms, values){

  for( var propt in values ){

    if( uniforms[propt] ){ 
      values[propt]= uniforms[propt].value;
    }else{
      console.log( "WTF");
      console.log( propt );
    }

  }

}