import { createCliff } from './helpers/cliff'

const renderCliff = ({
  scene,
  coordinates,
  app,
  config
}) => {

  let maxHeight = config.height ?? 1
  if( ! Array.isArray(config) ) config = [{ height : maxHeight }]

  config.forEach(cliff => {
    createCliff(app, scene, coordinates, cliff)
    maxHeight = maxHeight < cliff.height ? cliff.height : maxHeight
  })
}

export { renderCliff }
