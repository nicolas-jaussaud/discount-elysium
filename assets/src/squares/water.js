import { 
  PlaneGeometry, 
  Mesh,
  ShaderMaterial,
  ShadowMaterial
} from 'three'

import WaterFragment from '../shaders/water.fragment.glsl'
import WaterVertex from '../shaders/water.vertex.glsl'
import { createWall } from './helpers/wall'

const renderWater = ({
  coordinates,
  app,
  scene,
  config = {}
}) => {

  /**
   * We will use a different key for both the cache and the instanciated key according
   * to the type of square
   */
  const squareKey = `water-${ config.border ?? 'regular' }`

  const cache = app.world.cache.get(
    squareKey,
    type => {

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
      
      return { geometry, material }
    }
  )

  /**
   * It's tricky to add support for shadows in a cusotm ShaderMaterial, so instead we 
   * display a ShadowMaterial at the same position than the shaders to simulate it
   */
  const shadow = app.world.cache.get(
    'water-shadow',
    () => {

      const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)
      const material = new ShadowMaterial({
        opacity : 0.25, 
        color   : 0x06436d
      })

      return new Mesh(geometry, material)
    }
  ).clone()

  const position = {
    x: coordinates.x[1] - app.map.squareSize / 2, 
    y: coordinates.y[1] - app.map.squareSize / 2,
    z: -20
  }

  const rotation = { 
    x: 0,
    y: 0,
    z: config.rotation ?? 0 
  }

  const instanceConfig = {
    position,
    rotation
  }

  app.world.instance.add(squareKey, cache.geometry, cache.material, {
    ...instanceConfig,
    before: mesh => {
      mesh.renderOrder = 2
      shadow.renderOrder = 3
      shadow.receiveShadow = true
      shadow.position.set(
        position.x, 
        position.y, 
        position.z + 0.001
      )
      scene.add(shadow)
    }
  })

  /**
   * We add a second surface with the same material just a little below to simulate 
   * a reflexion
   */  
  app.world.instance.add(squareKey + '-below', cache.geometry, cache.material, { 
    ...instanceConfig,
    position: { ...position, z: -30 },
    before: mesh => {
      mesh.renderOrder = 1
    }
  })

  if( ! config.wall ) return;

  config.wall.forEach(position => {
    createWall(
      app,
      scene,
      coordinates,
      position,
      -( app.map.squareSize / 2 ) - 1, 
      'cliff-underwater.png'
    )
  })
}

/**
 * There are not string type in glsl
 */
const getBorderType = name => ({
  'water-regular'    : 0,
  'water-one-side'   : 1,
  'water-both-side'  : 2,
  'water-three-side' : 3,
  'water-corner'     : 4
}[name])

export { renderWater }
