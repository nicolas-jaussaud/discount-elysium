import {
  DirectionalLight,
  HemisphereLight,
  CameraHelper
} from 'three'

import { registerSquares } from './squares'
import { init as initCharacters } from './characters'
import { init as initConversations } from './conversations/'

const init = () => {

  /**
   * @see ./discore/src
   */
  const app = discore.init({
    element     : document.getElementById('app'),
    environment : window.environment ?? process.env.NODE_ENV
  })

  /**
   * @see ./discursed/src
   */
  const discussions = discursed.init({
    element: document.getElementById('discussions')
  })

  registerSquares(app)

  initCharacters(app)
  initConversations(app, discussions)

  const hemiLight = new HemisphereLight(0xFFFFFF, 0xFFFFFF, 0.7)
  const sideLight = new DirectionalLight('rgb(255, 255, 255)', 0.1)

  /**
   * The directional light shadows works like an orthographic camera, and we need to 
   * set up left/right/top/bottom/near/far in order to see the shadows correctly
   * 
   * @see https://threejs.org/docs/#api/en/lights/shadows/DirectionalLightShadow
   * @see https://stackoverflow.com/a/73590527/10491705
   * @see https://stackoverflow.com/a/44547936/10491705
   */
  sideLight.position.set(500, 500, 1000)
  sideLight.castShadow = true
  sideLight.shadow.camera.left = 2000
  sideLight.shadow.camera.right = -2000
  sideLight.shadow.camera.top = 2000
  sideLight.shadow.camera.bottom = -2000
  sideLight.shadow.camera.near = 0.1
  sideLight.shadow.camera.far = 10000
  
  if( app.environment === 'development' ) {
    app.hooks.addAction('loadComplete', () => {    
      app.map.current.scene.add( 
        new CameraHelper( sideLight.shadow.camera ) 
      )
    })
  }

  app.lights.push(hemiLight)
  app.lights.push(sideLight)

  /**
   * For better performances, we only render the shadows once one the initial load
   * instead of on every frame
   * 
   * The drawback is that we won't have shadows for characters
   */
  app.hooks.addAction('mapLoaded', () => app.renderer.shadowMap.autoUpdate = true)
  app.hooks.addAction('loadComplete', () => app.renderer.shadowMap.autoUpdate = false)

  window.addEventListener('resize', () => app.updateSize(window.innerWidth, window.innerHeight))
  window.app = app
} 

window.addEventListener('load', init)
