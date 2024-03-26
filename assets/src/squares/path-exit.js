import maps from '../maps/'
import { renderPath } from './path'

const renderExitPath = ({
  coordinates,
  app,
  config,
  key,
  scene
}) => {

  renderPath({ 
    app, 
    coordinates, 
    scene, 
    config: { 
      ...config,
      type: 'narow'
    } 
  })

  const maybeLoadMap = ({
    character
  }) => {

    if( character.name !== 'main' ) return;

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
}

export { renderExitPath }
