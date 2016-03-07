uniform sampler2D t_normal;
uniform sampler2D t_audio;
uniform vec3 lightPos;

uniform float brightness;

uniform float velocityColorAmount;
uniform float audioColorAmount;
uniform float reflectColorAmount;
uniform float normalColorAmount;
uniform float individualColorAmount;
uniform float individualAudioAmount;
uniform float matchHueAmount;

uniform float normalMapSize;
uniform float normalMapDepth;




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




  vec3 fNorm = uvNormalMap( t_normal , vPos , vUv , vNorm , normalMapSize , normalMapDepth , vOffset );

  vec3 refl = normalize(reflect( eye , fNorm ));

    //vec3 lightRefl = reflect( light )

  float match = max( 0. , dot( -refl , lightDir ));

  vec3 aCol = texture2D( t_audio , vec2( match , 0. ) ).xyz;

  vec3 col = vec3( 0. , 0. , 0. );

  col += hsv( match , .5 , 1.) * matchHueAmount;
  col += ( normalize(refl) * .5 + .5) * reflectColorAmount;
  col += aCol * audioColorAmount;

  col += vAudio * individualAudioAmount;
  col += vColor * individualColorAmount;

  col += (-fNorm * .5 + .5) * normalColorAmount;
  col += (normalize(vVel) * .5 + .5) * velocityColorAmount;

  col += vec3( brightness, brightness,brightness);


  //col = vec3( vUv.x , vUv.y , 1. );

  //col = texture2D( t_normal , vUv * 2.0 ).xyz;

  //col = hsv(vID / 5., 1. , 1.);
  gl_FragColor = vec4( col ,  1. );

}