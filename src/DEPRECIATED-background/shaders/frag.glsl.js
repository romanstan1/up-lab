export default `
uniform sampler2D texture;
void main(){
  vec4 textureColor = texture2D( texture, gl_PointCoord );
  if ( textureColor.a < 0.3 ) discard;
  vec4 dotColor = vec4(0.0, 0.517, 0.545, 0.6);
  vec4 color = dotColor * textureColor;
  gl_FragColor = color;
}
`

// vec4(1.0, 1.0, 1.0, 0.6);
