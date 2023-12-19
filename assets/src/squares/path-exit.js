import { 
  PlaneGeometry, 
  TextureLoader,
  MeshToonMaterial,
  Mesh 
} from 'three'

import maps from '../maps/'

const renderExitPath = ({
  coordinates,
  app,
  config,
  key,
  scene
}) => {

  const material = app.world.materials.get(
    `./assets/ressources/world/path/path-narow.jpg`,
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

  const arrow = config.arrow ?? 'bottom'
  // if( arrow === 'top' ) plane.rotation.z = Math.PI

  const maybeLoadMap = ({
    character
  }) => {

    const square = app.map.getSquareByCoordinates(character.object.position)
    
    if( square.key !== key ) return;

    const mapName = config.map ?? 'map1'
    const initialSquare = config.square ?? '0|0'
    
    app.map.load(
      mapName, 
      maps[ mapName ], 
      initialSquare
    )

    app.hooks.removeAction('characterMoved', maybeLoadMap)
  }

  /**
   * Leave the map when character arrive on the square
   */
  app.hooks.addAction('characterMoved', maybeLoadMap)

  scene.add(plane)
}

export { renderExitPath }
