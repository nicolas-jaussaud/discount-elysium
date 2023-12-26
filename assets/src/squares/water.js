import WaterFragment from './shaders/water.fragment.glsl'
import WaterVertex from './shaders/water.vertex.glsl'
import { createWall } from './helpers/wall'

import { 
  PlaneGeometry, 
  Mesh,
  ShaderMaterial,
  MeshToonMaterial,
  ShadowMaterial
} from 'three'

const renderWater = ({
  coordinates,
  app,
  scene,
  config = {}
}) => {
  
  const meshes = app.world.cache.get(
    config.border ?? 'regular',
    type => {

      /**
       * It's tricky to add support for shadows in a cusotm ShaderMaterial, so instead we 
       * display a ShadowMaterial at the same position than the shaders to simulate i 
       */
      const shadow = new ShadowMaterial({
        opacity : 0.25, 
        color   : 0x06436d
      })

      const uniforms = {
        uBorder : { value: getBorderType(type) },
        uTime   : { value: 0 }
      }

      const material = new ShaderMaterial({
        vertexShader   : WaterVertex,
        fragmentShader : WaterFragment,
        transparent    : true,
        uniforms       : uniforms
      })
      
      setInterval(() => {
        if( material.uniforms ) material.uniforms.uTime.value += 0.1
      }, 25)

      const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)
      
      return {
        surface : new Mesh(geometry, material),
        shadow  : new Mesh(geometry, shadow),
      }
    }
  )

  const surface = meshes.surface.clone()
  const shadow  = meshes.shadow.clone()

  shadow.receiveShadow = true
  shadow.position.set(
    coordinates.x[1] - app.map.squareSize / 2, 
    coordinates.y[1] - app.map.squareSize / 2,
    -20
  )
  
  if( config.rotation ) surface.rotation.z = config.rotation

  surface.position.set(
    coordinates.x[1] - app.map.squareSize / 2, 
    coordinates.y[1] - app.map.squareSize / 2,
    -20
  )

  /**
   * We add a second surface with the same material just a little below to simulate 
   * a reflexion
   */
  const belowSurface = surface.clone()
  belowSurface.position.z = -30

  scene.add(belowSurface)
  scene.add(surface)
  scene.add(shadow)
  
  if( ! config.wall ) return; 

  config.wall.forEach(position => {
    const wall = createWall(app, scene, coordinates, position, 'cliff-underwater.png')
    wall.position.z = - ( app.map.squareSize / 2 ) - 1
  })
}

/**
 * There are not string type in glsl
 */
const getBorderType = name => ({
  'regular'    : 0,
  'one-side'   : 1,
  'both-side'  : 2,
  'three-side' : 3,
  'corner'     : 4

}[name])

export { renderWater }
