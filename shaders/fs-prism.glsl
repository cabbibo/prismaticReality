varying vec3 vPos;
varying float vDist;
varying vec3 vNorm;
varying vec3 vCol;


uniform float rainbowAmount;
uniform float colorAmount;


void main(){

  gl_FragColor = vec4( normalize( vNorm ) * .5 + .5 ,  1. );

}