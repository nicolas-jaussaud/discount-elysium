import { 
  PlaneGeometry, 
  MeshToonMaterial,
  TextureLoader,
  Mesh
} from 'three'

const renderGrass = ({
  scene,
  coordinates,
  app
}) => {

  const plane = app.world.cache.get(
    `./assets/ressources/world/grass/grass.avif`,
    url => {

      const texture  = new TextureLoader().load(url)
      const material = new MeshToonMaterial({ map: texture })
      const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)
      const plane    = new Mesh(geometry, material)

      plane.receiveShadow = true

      return plane
    }
  ).clone()

  plane.position.set(
    coordinates.x[1] - app.map.squareSize / 2, 
    coordinates.y[1] - app.map.squareSize / 2,
    0
  )

  scene.add(plane)
  return plane
}

export { renderGrass }
