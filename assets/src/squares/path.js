import { createWall } from './helpers/wall'
import { 
  PlaneGeometry, 
  TextureLoader,
  MeshToonMaterial
} from 'three'

const renderPath = ({
  coordinates,
  app,
  scene,
  config
}) => {

  const key = `path-${config.type ?? 'narow'}`
  const cache = app.world.cache.get(
    `./assets/ressources/world/path/${key}.jpg`,
    url => {

      const texture  = new TextureLoader().load(url)
      const material = new MeshToonMaterial({ map: texture })
      const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)
      
      return { geometry, material }
    }
  )

  app.world.instance.add(key, cache.geometry, cache.material, { 
    before: mesh => mesh.receiveShadow = true,
    position: { 
      x: coordinates.x[1] - app.map.squareSize / 2,
      y: coordinates.y[1] - app.map.squareSize / 2,
      z: 0 
    }
  })

  if( ! config.wall ) return; 

  config.wall.forEach(position => {
    createWall(
      app, 
      scene, 
      coordinates, 
      position, 
      -( app.map.squareSize / 2 ) + 50
    )
  })
}

export { renderPath }
