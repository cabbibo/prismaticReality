uniform sampler2D t_oPos;
uniform sampler2D t_pos;


// use alpha as size
uniform sampler2D t_target;
uniform sampler2D t_target2;

uniform float audioRepeller;
uniform float speed;
//uniform float randVal;

const float randVal = 1.;

uniform vec2  resolution;

uniform float dT;
uniform vec3 centerPos;

$rand

void main(){

  vec2 uv = gl_FragCoord.xy / resolution;
  vec4 oPos = texture2D( t_oPos , uv );
  vec4 pos  = texture2D( t_pos , uv );

  vec3 p = pos.xyz;

  float rX = rand( uv );
  float rY = rand( uv * 2. );
  float rZ = rand( uv * 10. );



  float rR = 1. + rand( uv * 20. );

  vec3 axis = vec3( pos.xyz );
  axis = normalize( axis );

  float angle = pos.w + rR * dT * speed;

  gl_FragColor = vec4( pos.xyz , angle );


}
