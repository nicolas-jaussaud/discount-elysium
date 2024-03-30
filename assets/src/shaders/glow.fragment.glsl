uniform vec3 glowColor;
varying float intensity;

// @see https://stemkoski.github.io/Three.js/Shader-Glow.html
void main() {
	
  vec3 glow = glowColor * intensity;
  
  gl_FragColor = vec4( glow, 1.0 );
}
