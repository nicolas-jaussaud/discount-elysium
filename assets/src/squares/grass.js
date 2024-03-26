import { 
  PlaneGeometry, 
  MeshToonMaterial,
  TextureLoader
} from 'three'

const renderGrass = ({
  scene,
  coordinates,
  app
}) => {

  const cache = app.world.cache.get(
    `./assets/ressources/world/grass/grass.avif`,
    url => {

      const texture  = new TextureLoader().load(url)
      const material = new MeshToonMaterial({ map: texture })
      const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)
     
      return { material, geometry }
    }
  )

  app.world.instance.add('grass', cache.geometry, cache.material, { 
    before: mesh => mesh.receiveShadow = true,
    position: { 
      x: coordinates.x[1] - app.map.squareSize / 2,
      y: coordinates.y[1] - app.map.squareSize / 2,
      z: 0 
    }
  })
}

export { renderGrass }
