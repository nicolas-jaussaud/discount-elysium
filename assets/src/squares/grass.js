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

  const material = app.world.materials.get(
    `./assets/ressources/world/grass/grass.avif`,
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
  return plane
}

export { renderGrass }
