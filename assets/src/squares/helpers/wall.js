import { 
  MeshToonMaterial,
  TextureLoader,
  BoxGeometry
} from 'three'

const createWall = (app, scene, coordinates, direction, height, type = false) => {
  
  const isUnderwater = type === 'cliff-underwater.png'
  
  const cache = app.world.cache.get(
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

        return {
          geometry, 
          material: [
            colorMaterial, 
            colorMaterial,
            colorMaterial,
            imageMaterial,
            colorMaterial,
            colorMaterial,
          ]
        }
      }
    )
  
  const rotation = { x: 0, y:0, z: 0 }
  const position = {
    x: coordinates.x[1] - app.map.squareSize / 2,
    y: coordinates.y[1] - app.map.squareSize / 2, 
    z: height ?? 0
  }

  switch(direction) {
    case 'top':
      position.y = (position.y + app.map.squareSize / 2) + (isUnderwater ? 0 : 20)
      break;
    case 'right':
      rotation.z = Math.PI / 2
      position.x = (position.x + app.map.squareSize / 2) + (isUnderwater ? 0 : 20)
      break;
    case 'left':
      rotation.z = Math.PI / 2
      position.x = (position.x - app.map.squareSize / 2) - (isUnderwater ? 0 : 20)
      break;
  }

  app.world.instance.add(`cliff-mesh-${type}`, cache.geometry, cache.material, { 
    position,
    rotation,
    before: mesh => {
      mesh.receiveShadow = true
      mesh.castShadow = true
    }
  })
}

export { createWall }
