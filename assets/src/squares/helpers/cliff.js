import { 
  MeshToonMaterial,
  TextureLoader,
  Mesh,
  PlaneGeometry
} from 'three'

const createCliff = (app, scene, coordinates, config) => {
  
  const material = app.world.materials.get(
    `./assets/ressources/world/cliff/cliff.jpg`,
    url => {
      const texture  = new TextureLoader().load(url)
      return new MeshToonMaterial({ map: texture })
    }
  )

  for (let height = 0; height < config.height; height++) {
    
    const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)  
    const cliff    = new Mesh(geometry, material)

    cliff.receiveShadow = true
    cliff.castShadow = true
    cliff.rotation.x = Math.PI / 2
    cliff.position.set(
      coordinates.x[1] - app.map.squareSize / 2, 
      coordinates.y[1] - app.map.squareSize / 2,
      (app.map.squareSize / 2) + (app.map.squareSize * height)
    )

    switch(config.position) {
      case 'bottom':
        cliff.position.y = (cliff.position.y - app.map.squareSize / 2)
        break;
      case 'right':
        cliff.rotation.y = Math.PI / 2
        cliff.position.x = (cliff.position.x + app.map.squareSize / 2)
        break;
      case 'left':
        cliff.rotation.y = Math.PI / 2
        cliff.position.x = (cliff.position.x - app.map.squareSize / 2)
        break;
    }

    scene.add(cliff)
  }
}

export { createCliff }
