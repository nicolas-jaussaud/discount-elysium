import { createWall } from './helpers/wall'
import { 
  PlaneGeometry, 
  TextureLoader,
  MeshToonMaterial,
  Mesh 
} from 'three'

const renderPath = ({
  coordinates,
  app,
  scene,
  config
}) => {

  const material = app.world.materials.get(
    `./assets/ressources/world/path/path-${config.type ?? 'narow'}.jpg`,
    url => {
      const texture  = new TextureLoader().load(url)
      return new MeshToonMaterial({ map: texture })
    }
  )

  const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)
  const plane    = new Mesh(geometry, material)

  plane.receiveShadow = true
  plane.position.set(
    coordinates.x[1] - app.map.squareSize / 2, 
    coordinates.y[1] - app.map.squareSize / 2,
    0
  )
    
  scene.add(plane)

  if( ! config.wall ) return; 

  config.wall.forEach(position => {
    const wall = createWall(app, scene, coordinates, position)
    wall.position.z = - ( app.map.squareSize / 2 ) + 50
  })
}

export { renderPath }
