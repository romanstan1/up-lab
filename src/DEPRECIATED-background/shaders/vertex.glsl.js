export default `
#define PI 3.1415926535897932384626433832795
attribute float size;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_PointSize = 3.0;
  gl_Position = projectionMatrix * mvPosition;
}
`
