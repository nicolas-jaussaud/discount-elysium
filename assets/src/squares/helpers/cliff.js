import { 
  MeshToonMaterial,
  TextureLoader,
  BoxGeometry
} from 'three'

const createCliff = (app, scene, coordinates, config) => {
  
  const cache = app.world.cache.get(
    `cliff-mesh`,
    () => {

      const cliffMaterial = new MeshToonMaterial({ 
        map:  new TextureLoader().load('./assets/ressources/world/cliff/cliff.jpg')
      })

      const grassMaterial = new MeshToonMaterial({ 
        map: new TextureLoader().load('./assets/ressources/world/grass/grass.avif')
      })
      
      const geometry = new BoxGeometry(
        app.map.squareSize,
        app.map.squareSize,
        app.map.squareSize
      )
      
      return {
        geometry,
        material: [
          cliffMaterial,
          cliffMaterial,
          cliffMaterial,
          cliffMaterial,
          grassMaterial,
          cliffMaterial,
        ]
      }
    }
  )

  for (let height = 0; height < config.height; height++) {
    app.world.instance.add('cliff-mesh', cache.geometry, cache.material, { 
      position: { 
        x: coordinates.x[1] - app.map.squareSize / 2,
        y: coordinates.y[1] - app.map.squareSize / 2, 
        z: (app.map.squareSize / 2) + (app.map.squareSize * height)
      },
      before: mesh => {
        mesh.receiveShadow = true
        mesh.castShadow = true
        mesh.walkable = false
      }
    })
  }
}

export { createCliff }
