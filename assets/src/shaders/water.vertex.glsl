varying vec3 vPosition;

void main() {

  vPosition = position;
  
  vec4 modelViewPosition = modelViewMatrix * vec4( position, 1.0 );
  vec4 projectedPosition = projectionMatrix * modelViewPosition;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
}
