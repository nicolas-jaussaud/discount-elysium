import { createCliff } from './helpers/cliff'
import { renderGrass } from './grass'

const renderCliff = ({
  scene,
  coordinates,
  app,
  config
}) => {

  let maxHeight = config.height ?? 1
  
  Array.isArray(config) && config.forEach(cliff => {
    createCliff(app, scene, coordinates, cliff)
    maxHeight = maxHeight < cliff.height ? cliff.height : maxHeight
  })

  const grass = renderGrass({ scene, coordinates, app })

  grass.position.z = app.map.squareSize * maxHeight
}

export { renderCliff }
