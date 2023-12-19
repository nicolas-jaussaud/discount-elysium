import { createWall } from './helpers/wall'
import { 
  PlaneGeometry, 
  Mesh,
  VideoTexture,
  MeshToonMaterial
} from 'three'

const renderWater = ({
  coordinates,
  app,
  scene,
  config = {}
}) => {
  /**
   * If we load the video texture right away it might be blocked by the browser because it uses autoplay
   */
  app.hooks.addAction('loadComplete', () => {

    const material = app.world.materials.get(
      `./assets/ressources/world/water/water-${config.animation ?? 'regular'}.mp4`,
      key => createVideoMaterial(key)
    )
    
    const geometry = new PlaneGeometry(app.map.squareSize, app.map.squareSize)
    const plane    = new Mesh(geometry, material)

    if( config.rotation ) plane.rotation.z = config.rotation

    plane.receiveShadow = true
    plane.position.set(
      coordinates.x[1] - app.map.squareSize / 2, 
      coordinates.y[1] - app.map.squareSize / 2,
      -20
    )

    scene.add(plane)

    if( ! config.wall ) return; 

    config.wall.forEach(position => {
      const wall = createWall(app, scene, coordinates, position)
      wall.position.z = - ( app.map.squareSize / 2 ) - 1
    })
  })  
}

/**
 * @see https://stackoverflow.com/a/71823411/10491705
 */
const createVideoMaterial = url => {

  const video = document.createElement('video')
  const source = document.createElement('source')

  source.src = url
  video.appendChild(source)
  video.setAttribute('loop', true) 
  video.setAttribute('muted', true) 
  video.play()

  const texture = new VideoTexture(video)
  
  return new MeshToonMaterial({ map : texture })
}

export { renderWater }
