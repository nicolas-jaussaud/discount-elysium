import { 
  MeshToonMaterial,
  TextureLoader,
  Mesh,
  BoxGeometry
} from 'three'

const createWall = (app, scene, coordinates, position) => {
  
  const imageMaterial = app.world.materials.get(
    `./assets/ressources/world/cliff/cliff.jpg`,
    url => {
      const texture  = new TextureLoader().load(url)
      return new MeshToonMaterial({ map: texture })
    }
  )

  const colorMaterial = app.world.materials.get(
    `0x464237`, () => new MeshToonMaterial({ color: 0x464237 })
  )

  const geometry = new BoxGeometry(app.map.squareSize, 40, app.map.squareSize)  
  const wall     = new Mesh(geometry, [ 
    colorMaterial, 
    colorMaterial,
    colorMaterial,
    imageMaterial,
    colorMaterial,
    colorMaterial,
  ])

  wall.receiveShadow = true
  wall.castShadow = true
  wall.position.set(
    coordinates.x[1] - app.map.squareSize / 2, 
    coordinates.y[1] - app.map.squareSize / 2,
    0
  )

  switch(position) {
    case 'top':
      wall.position.y = (wall.position.y + app.map.squareSize / 2) + 20
      break;
    case 'right':
      wall.rotation.z = Math.PI / 2
      wall.position.x = (wall.position.x + app.map.squareSize / 2) + 20
      break;
    case 'left':
      wall.rotation.z = Math.PI / 2
      wall.position.x = (wall.position.x - app.map.squareSize / 2) - 20
      break;
  }

  scene.add(wall)
  return wall 
}

export { createWall }
