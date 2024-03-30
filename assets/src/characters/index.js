import {
  ShaderMaterial,
  Color,
  FrontSide,
  AdditiveBlending,
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
	SphereGeometry
} from 'three'

import GlowFragment from '../shaders/glow.fragment.glsl'
import GlowVertex from '../shaders/glow.vertex.glsl'

import maps from '../maps/'
import stories from './stories/'
import createCharacter from './create'

const init = app => {

  /**
   * Main character
   */
  createCharacter(app, 'main', 'yellow', character => {
    app.characters.setMain(character.name)
    app.map.load('map1', maps['map1'], '0|0')
  })

  /**
   * NPC on map1
   */
  app.hooks.addAction('mapLoaded', args => {

    if( args.name !== 'map1' ) return;

    createCharacter(app, 'peasant1', 'brown', character => {

      app.map.current.scene.add(character.object)
      app.map.moveCharacterOnSquare('2|-4', character)

      // Loop on defined actions
      const doAction = index => {
        if( app.map.current.name !== 'map1' ) return;
        stories[0][ index ](character).then(() => doAction(
          stories[0].length - 1 !== index ? index + 1 : 0 
        ))
      }
      doAction(0)
    })
  })

  /**
   * NPC on map2
   */
  app.hooks.addAction('mapLoaded', args => {

    if( args.name !== 'map2' ) return;

    createCharacter(app, 'peasant2', 'green', character => {
      
      app.map.current.scene.add(character.object)
      app.map.moveCharacterOnSquare('0|-1', character)

      // Loop on defined actions
      const doAction = index => {
        if( app.map.current.name !== 'map2' ) return;
        stories[1][ index ](character).then(() => doAction(
          stories[1].length - 1 !== index ? index + 1 : 0 
        ))
      }
      doAction(0)
    })

    createCharacter(app, 'peasant3', 'blue', character => {

      app.map.current.scene.add(character.object)

      const coordinates = app.map.getCoordinateBySquare('2|-2')
      character.startAnimation('sit')
      character.object.position.set(
        coordinates.x - 75,
        coordinates.y - 100,
        -10
      )
    })
  })

  /**
   * Highlight character on mouseover
   */
  app.hooks.addAction('mapLoaded', args => {

    /**
     * @see https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/Shader-Glow.html
     */
    const mesh = app.world.cache.get('glow-material', () => {

      const sphere = new SphereGeometry(app.map.squareSize / 4, 15, 15)
      const material = new ShaderMaterial({
        vertexShader   : GlowVertex,
        fragmentShader : GlowFragment,
        side           : FrontSide,
        blending       : AdditiveBlending,
        transparent    : true,
        uniforms       : { 
          c          : { type: 'f',  value: 1.0 },
          p          : { type: 'f',  value: 4.2 },
          glowColor  : { type: 'c',  value: new Color(0xFFFF00) },
          viewVector : { type: 'v3', value: app.camera.position }
        }
      })
      
      const mesh = new Mesh(sphere, material) 
      mesh.renderOrder = 2 
      
      return mesh
    })

    app.hooks.addAction('mouseEnterCharacter', ({ character }) => {
      if( character.name === 'main' ) app.map.current.scene.remove(mesh)
    })

    app.hooks.addAction('mouseOnCharacter', ({ character }) => {
      if( character.name === 'main' ) return app.map.current.scene.remove(mesh)
      mesh.position.set(
        character.object.position.x,
        character.object.position.y,
        character.object.position.z + app.map.squareSize / 4
      )
      app.map.current.scene.add(mesh)
    })

    app.hooks.addAction('mouseLeaveCharacter', () => {
      app.map.current.scene.remove(mesh)
    })
  })
}

export { init }
