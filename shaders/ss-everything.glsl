uniform sampler2D t_oPos;
uniform sampler2D t_pos;
uniform sampler2D t_audio;


const int size  = @SIZE;

uniform vec3 repelers[ size ];




// TODO:
// dispersion
// puppyness
// spring values
// during transition dampening!


// use alpha as size
uniform sampler2D t_target;
uniform sampler2D t_target2;

uniform float audioRepeller;
uniform float speed;
uniform float time;
uniform float dampening;
uniform float toTargetForce;
uniform float audioRadius;
uniform float audioPower;

//if very gooey, return spring low, dampening low
// if very not gooey, return spring high, dampening high
uniform float gooeyness;
    

uniform vec2  resolution;

uniform float dT;
uniform vec3 centerPos;

float smin( float a, float b)
{
    float k = 0.77521;
    float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
    return mix( b, a, h ) - k*h*(1.0-h);
}

void main(){

  vec2 uv = gl_FragCoord.xy / resolution;

  vec4 oPos = texture2D( t_oPos , uv );
  vec4 pos  = texture2D( t_pos , uv );

  vec4 target = texture2D( t_target , uv );

  vec3 vel = pos.xyz - oPos.xyz;

  vec3 force = vec3( 0. );

  vec3 dif = pos.xyz - target.xyz;


  // moving to original pos;
  force -= length( dif ) * length( dif ) * normalize( dif ) * toTargetForce;


  for( int i = 0; i < size; i++ ){

    vec3 p = repelers[i];

    vec4 audioPow = texture2D( t_audio , vec2( float(i)/float(size) , 0.));

    vec3 dif = p - pos.xyz;

    if( length( dif ) < length( audioPow )  * audioRadius ){
      force += normalize(dif) * length( audioPow ) * audioPower;
    }
  }

  vel *= dampening;
  vel += force * dT;

  vec3 p = pos.xyz + vel;


  //float d = abs(length( p - vec3( .4 , sin( time ) , 0 )) - .3);
//
  //d = smin( d , abs(length( p - vec3( -1.2 , .6 , 0 )) - .5) );
//
//
  //float r = min( .1 / (d * d * d * d * 200.) , .1);


  gl_FragColor = vec4( p , (target.w - pos.w) * .2 + pos.w );


}
