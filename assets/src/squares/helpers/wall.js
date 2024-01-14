import { 
  MeshToonMaterial,
  TextureLoader,
  Mesh,
  BoxGeometry
} from 'three'

const createWall = (app, scene, coordinates, position, type = false) => {
  
  const isUnderwater = type === 'cliff-underwater.png'
  
  const wall = app.world.registerObject(
    app.world.cache.get(
      `./assets/ressources/world/cliff/${type ? type : 'cliff.jpg'}`,
      url => {

        const texture  = new TextureLoader().load(url)
        const geometry = new BoxGeometry(
          app.map.squareSize, 
          isUnderwater ? 0 : 40, 
          app.map.squareSize
        )  

        const imageMaterial = new MeshToonMaterial({ 
          map         : texture, 
          transparent : isUnderwater 
        })

        const colorMaterial = new MeshToonMaterial({ 
          color       : 0x464237, 
          transparent : isUnderwater
        })

        return new Mesh(geometry, [ 
          colorMaterial, 
          colorMaterial,
          colorMaterial,
          imageMaterial,
          colorMaterial,
          colorMaterial,
        ])
      }
    ).clone()
  )

  wall.receiveShadow = true
  wall.castShadow = true
  wall.position.set(
    coordinates.x[1] - app.map.squareSize / 2, 
    coordinates.y[1] - app.map.squareSize / 2,
    0
  )

  switch(position) {
    case 'top':
      wall.position.y = (wall.position.y + app.map.squareSize / 2) + (isUnderwater ? 0 : 20)
      break;
    case 'right':
      wall.rotation.z = Math.PI / 2
      wall.position.x = (wall.position.x + app.map.squareSize / 2) + (isUnderwater ? 0 : 20)
      break;
    case 'left':
      wall.rotation.z = Math.PI / 2
      wall.position.x = (wall.position.x - app.map.squareSize / 2) - (isUnderwater ? 0 : 20)
      break;
  }

  scene.add(wall)
  return wall 
}

export { createWall }
