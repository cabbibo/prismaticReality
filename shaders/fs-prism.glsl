uniform sampler2D t_normal;
uniform sampler2D t_audio;
uniform vec3 lightPos;

uniform float brightness;

varying vec3 vPos;
varying float vDist;

varying vec3 vNorm;
varying vec4 vEye;
varying vec2 vUv;
varying vec3 vCol;
varying float vID;


varying vec3 vColor;
varying vec3 vAudio;

varying vec3 vVel;

varying vec2 vOffset;


uniform float rainbowAmount;
uniform float colorAmount;


$triNoise3D
$simplex
$hsv
$uvNormalMap
$rand


void main(){



  vec3 eye = normalize(vPos - cameraPosition);

  vec3 lightDir = normalize( vPos - lightPos );




  vec3 fNorm = uvNormalMap( t_normal , vPos , vUv , vNorm , .1 , 10. , vOffset );

  vec3 refl = reflect( eye , fNorm );

    //vec3 lightRefl = reflect( light )

  float match = max( 0., dot( -refl , lightDir ));

  vec3 aCol = texture2D( t_audio , vec2( match , 0.) ).xyz;

  vec3 col =  hsv( match , .5 , 1.);
  col = ( normalize(refl) * .5 + .5) * match * match;// + (fNorm * .5 + .5);

  col += aCol ;

  col += vec3( brightness, brightness,brightness);

  col = -vNorm * .5 + .5;
  //col = vec3( vUv.x , vUv.y , 1. );

  //col = texture2D( t_normal , vUv * 2.0 ).xyz;

  //col = hsv(vID / 5., 1. , 1.);
  gl_FragColor = vec4( col ,  1. );

}