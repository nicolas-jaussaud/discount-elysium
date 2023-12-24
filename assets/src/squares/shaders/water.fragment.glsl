varying vec3 vPosition;

/**
 * uBorder 0 => No border 
 * uBorder 1 => One side
 * uBorder 2 => Two side
 * uBorder 3 => Three side
 * uBorder 4 => Corner
 */
uniform int uBorder;
uniform float uTime;

const float OPACITY = 0.4;
const vec3 BLUE = vec3( 0.2, 0.65, 0.95 );
const vec3 WHITE = vec3( 1. );

const float BORDER_POSITION = 80.;
const float BORDER_AMPLITUDE = 2.;

float getLimit(float position) {
  float wave = sin((1./32.) * position + uTime);
  return wave * BORDER_AMPLITUDE + BORDER_POSITION;
}

void main() {

  gl_FragColor = vec4( BLUE, 0.6 );
 
  if( uBorder == 0 ) return;
  
  if( vPosition.y > getLimit(vPosition.x) ) {
    gl_FragColor = vec4( WHITE, OPACITY );
    return;
  }

  bool hasBottom = uBorder == 2 || uBorder == 3;
  if( hasBottom && vPosition.y < -getLimit(vPosition.x) ) {
    gl_FragColor = vec4( WHITE, OPACITY );
    return;
  }

  bool hasRight = uBorder == 3 || uBorder == 4;
  if( hasRight && vPosition.x > getLimit(-vPosition.y) ) {
    gl_FragColor = vec4( WHITE, OPACITY );
    return;
  }
}


