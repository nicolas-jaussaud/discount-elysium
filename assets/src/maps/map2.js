import { 
  area, 
  platform,
  waterPath 
} from './helpers'

const map2 = {

  ...area([-11, 11], [-11, 11], { type : 'water' }),
  ...waterPath(0, [3, 11]),

  '-2|2': { type: 'grass' },

  ...area([-4, -2], [3, 3], { type : 'water', config: { border: 'one-side', rotation: Math.PI } }),

  '1|3': { type: 'water', config: { border: 'corner', rotation: Math.PI, wall: [ 'left' ]} },

  '-5|2': { type: 'water', config: { border: 'one-side', rotation: - Math.PI / 2 } },
  ...area([-4, -2], [2, 2], { type : 'grass' }),
  '-1|2': { type: 'water', config: { border: 'three-side', rotation: -Math.PI / 2, wall: [ 'left' ] } },
  '0|2': { type: 'path-exit', config: { map: 'map1', square: '0|-5', arrow: 'top' } },
  '1|2': { type: 'grass' },
  '2|2': { type: 'water', config: { border: 'corner', rotation: Math.PI, wall: [ 'left' ]} },

  '-4|1': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '-3|1': { type: 'tree', config: { type: 4 } },
  '-2|1': { type:  'grass' },
  '-1|1': { type: 'grass' },
  '0|1': { type: 'path' },
  '1|1': { type: 'tree', config: { type: 1 } },
  '2|1': { type: 'grass' },
  '3|1': { type: 'water', config: { border: 'corner', rotation: Math.PI, wall: [ 'left' ]} },

  '-3|0': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '-2|0': { type: 'grass' },
  '-1|0': { type: 'grass' },
  '0|0': { type: 'path' },
  '1|0': { type: 'grass' },
  '2|0': { type: 'tree', config: { type: 2 } },
  '3|0': { type: 'grass' },
  ...area([4, 4], [-1, 0], { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ]} }),


  '-2|-1': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '-1|-1': { type: 'tree', config: { type: 2 } },
  '0|-1': { type: 'path' },
  '1|-1': { type: 'grass' },
  '2|-1': { type: 'grass' },
  '3|-1': { type: 'grass' },

  '-2|-2': { type: 'water' },
  '-1|-2': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '0|-2': { type: 'path', config: { type: 'full' } },
  '1|-2': { type: 'water', config: { border: 'three-side', rotation: Math.PI / 2, wall: [ 'top', 'left' ] } },
  '2|-2': { type: 'grass' },
  '3|-2': { type: 'water', config: { border: 'corner', wall: [ 'top', 'left' ], rotation: Math.PI / 2 } },

  '0|-3': { type: 'path', config: { type: 'full' } },
  '2|-3': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '1|-3': { type: 'water', config: { border: 'corner', rotation: Math.PI, wall: [ 'left' ] } },
  '-1|-3': { type: 'water', config: { border: 'corner', rotation: -Math.PI / 2 } },
  '-2|-3': { type: 'water' },

  ...platform(-2, -6),

  '0|-7': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '2|-7': { type: 'water' },
  '1|-7': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '-1|-7': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '-2|-7': { type: 'water' },
}

export { map2 }
