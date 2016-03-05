
attribute vec3 triPos;

uniform sampler2D t_pos;
uniform sampler2D t_rot;
uniform sampler2D t_col;


varying vec3 vNorm;
varying vec3 vCol;




mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

void main(){

  vec4 pos = texture2D( t_pos , position.xy );
  vec4 quat = texture2D( t_rot , position.xy );

  if( pos.a > 0.01 ){

  mat4 rot = rotationMatrix( quat.xyz , quat.w );

  vNorm = (rot * vec4( normal, 0.)).xyz;

  pos.xyz += (rot * vec4( (triPos * pos.a) , 1. )).xyz;

  vec3 dif = cameraPosition - pos.xyz;

  }else{ pos = vec4( 0., 0., 0., 0.); }

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos.xyz , 1. );


}
