import { 
  MeshToonMaterial,
  TextureLoader,
  Mesh,
  BoxGeometry
} from 'three'

const createCliff = (app, scene, coordinates, config) => {
  
  const cachedCliff = app.world.cache.get(
    `cliff-mesh`,
    () => {

      const cliffMaterial = new MeshToonMaterial({ 
        map:  new TextureLoader().load('./assets/ressources/world/cliff/cliff.jpg')
      })

      const grassMaterial = new MeshToonMaterial({ 
        map: new TextureLoader().load('./assets/ressources/world/grass/grass.avif')
      })
      
      const geometry = new BoxGeometry(app.map.squareSize, app.map.squareSize, app.map.squareSize)  
      const cliff    = new Mesh(geometry, [
        cliffMaterial,
        cliffMaterial,
        cliffMaterial,
        cliffMaterial,
        grassMaterial,
        cliffMaterial,
      ])

      cliff.receiveShadow = true
      cliff.castShadow = true

      return cliff
    }
  )

  for (let height = 0; height < config.height; height++) {
    
    const cliff = cachedCliff.clone()

    cliff.position.set(
      coordinates.x[1] - app.map.squareSize / 2, 
      coordinates.y[1] - app.map.squareSize / 2,
      (app.map.squareSize / 2) + (app.map.squareSize * height)
    )

    scene.add(cliff)
  }
}

export { createCliff }
