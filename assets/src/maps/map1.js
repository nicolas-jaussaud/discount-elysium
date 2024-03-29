import { 
  area, 
  platform 
} from './helpers'

const map1 = {

  ...area([3, 8], [3, 15], { type: 'water' }),
  ...area([-8, 3], [9, 15], { type: 'water' }),
  ...area([-8, -3], [5, 9], { type: 'water' }),

  '-2|8': { type: 'water' },
  ...area([-1, 1], [8, 8], { type: 'water', config: { border: 'one-side', rotation: Math.PI } }),
  '2|8': { type: 'water' },

  ...platform(-2, 5),
  
  ...area([-8, -3], [4, 4], { type: 'water', config: { border: 'one-side', rotation: Math.PI } }),
  '-2|4': { type: 'water' },
  '-1|4': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '0|4': { type: 'path', config: { type: 'full' } },
  '1|4': { type: 'water', config: { border: 'corner', wall: [ 'left', 'top' ], rotation: Math.PI / 2 } },
  '2|4': { type: 'water' },

  ...area([-8, -4], [3, 3], { type: 'grass' }),
  '-3|3': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '-2|3': { type: 'water', config: { border: 'corner', wall: [ 'left' ], rotation: Math.PI } },
  '-1|3': { type: 'water', config: { border: 'one-side', rotation: - Math.PI / 2 } },
  '0|3': { type: 'path', config: { type: 'full' } },
  '1|3': { type: 'water', config: { border: 'one-side', wall: [ 'left' ], rotation: Math.PI / 2 } },
  '2|3': { type: 'water' },

  ...area([-6, -8], [2, 2], { type: 'grass' }),
  '-5|2': { type: 'cliff', config: [{ position: 'bottom', height: 1 }] },
  '-4|2': { type: 'cliff', config: [{ position: 'bottom', height: 2 }] },
  '-3|2': { type: 'cliff', config: [{ position: 'right', height: 2 }, { position: 'bottom', height: 2 }] },
  '-2|2': { type: 'cliff', config: [{ position: 'right', height: 1 }, { position: 'bottom', height: 1 }] },
  '-1|2': { type: 'water', config: { border: 'three-side', wall: [ 'left' ], rotation: - Math.PI / 2 } },
  '0|2': { type: 'path', config: { type: 'full' } },
  '1|2': { type: 'water', config: { border: 'corner', wall: [ 'left' ], rotation: Math.PI } },
  '2|2': { type: 'water', config: { border: 'one-side', rotation: Math.PI } },
  ...area([3, 6], [2, 2], { type: 'water' }),
  '7|2': { type: 'water', config: { border: 'one-side', rotation: Math.PI } },
  '8|2': { type: 'water', config: { border: 'corner', rotation: - Math.PI / 2 } },

  '-8|1': { type: 'grass' },
  '-7|1': { type: 'grass' },
  '-6|1': { type: 'grass' },
  '-5|1': { type: 'cliff', config: [{ position: 'bottom', height: 1 }] },
  '-4|1': { type: 'cliff', config: [{ position: 'bottom', height: 2 }] },
  '-3|1': { type: 'cliff', config: [{ position: 'right', height: 2 }, { position: 'bottom', height: 2 }] },
  '-2|1': { type: 'cliff', config: [{ position: 'right', height: 1 }, { position: 'bottom', height: 1 }] },
  '-1|1': { type: 'tree', config: { type: 2 } },
  '0|1': { type: 'path' },
  '1|1': { type: 'grass' },
  '2|1': { type: 'tree', config: { type: 1 } },
  '3|1': { type: 'water', config: { border: 'one-side', wall: [ 'left' ], rotation: Math.PI / 2 } },
  '4|1': { type: 'water' },
  '5|1': { type: 'water' },
  '6|1': { type: 'water', config: { border: 'corner', rotation: - Math.PI / 2 } },
  '7|1': { type: 'grass' },
  '8|1': { type: 'grass' },

  '-8|0': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '-7|0': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '-6|0': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '-5|0': { type: 'tree', config: { type: 8 } },
  '-4|0': { type: 'cliff', config: [{ position: 'bottom', height: 1 }] },
  '-3|0': { type: 'cliff', config: [{ position: 'right', height: 1 }, { position: 'bottom', height: 1 }] },
  '-2|0': { type: 'grass' },
  '-1|0': { type: 'grass' },
  '0|0': { type: 'path' },
  '1|0': { type: 'grass' },
  '2|0': { type: 'water', config: { border: 'three-side', wall: [ 'left', 'top' ], rotation: Math.PI } },
  '3|0': { type: 'water' },
  '4|0': { type: 'water' },
  '5|0': { type: 'water', config: { border: 'corner', rotation: - Math.PI / 2 } },
  '6|0': { type: 'grass' },
  '7|0': { type: 'grass' },
  '8|0': { type: 'grass' },

  '-8|-1': { type: 'water', config: { border: 'one-side', rotation: Math.PI } },
  '-7|-1': { type: 'water', config: { border: 'one-side', rotation: Math.PI } },
  '-6|-1': { type: 'water' },
  '-5|-1': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '-4|-1': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '-3|-1': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '-2|-1': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '-1|-1': { type: 'tree', config: { type: 4 } },
  '0|-1': { type: 'path' },
  '1|-1': { type: 'grass' },
  '2|-1': { type: 'tree', config: { type: 3 } },
  '3|-1': { type: 'water', config: { border: 'one-side', wall: [ 'left' ], rotation: Math.PI / 2 } },
  '4|-1': { type: 'water', config: { border: 'one-side', rotation: - Math.PI / 2 } },
  '5|-1': { type: 'grass' },
  '6|-1': { type: 'grass' },
  '7|-1': { type: 'grass' },
  '8|-1': { type: 'grass' },

  '-8|-2': { type: 'grass' },
  '-7|-2': { type: 'grass' },
  '-6|-2': { type: 'water', config: { border: 'corner', wall: [ 'left' ], rotation: Math.PI } },
  '-5|-2': { type: 'water' },
  '-4|-2': { type: 'water' },
  '-3|-2': { type: 'water' },
  '-2|-2': { type: 'water', config: { border: 'one-side', rotation: Math.PI } },
  '-1|-2': { type: 'water', config: { border: 'both-side', wall: [ 'top' ] } },
  '0|-2': { type: 'path', config: { type: 'full', wall: [ 'right', 'left' ] } },
  '1|-2': { type: 'water', config: { border: 'both-side', wall: [ 'top' ] } },
  '2|-2': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '3|-2': { type: 'water' },
  '4|-2': { type: 'water', config: { border: 'corner', rotation: - Math.PI / 2  } },
  '5|-2': { type: 'grass' },
  '6|-2': { type: 'water', config: { border: 'corner', rotation: Math.PI / 2, wall: [ 'left', 'top' ]  } },
  '7|-2': { type: 'water', config: { border: 'both-side', wall: [ 'top' ] }  },
  '8|-2': { type: 'grass' },

  '-8|-3': { type: 'grass' },
  '-7|-3': { type: 'grass' },
  '-6|-3': { type: 'tree' },
  '-5|-3': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '-4|-3': { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '-3|-3': { type: 'water', config: { border: 'one-side', rotation: - Math.PI / 2 } },
  '-2|-3': { type: 'grass' },
  '-1|-3': { type: 'grass' },
  '0|-3': { type: 'path' },
  '1|-3': { type: 'tree', config: { type: 1 } },
  '2|-3': { type: 'water', config: { border: 'corner', rotation: Math.PI, wall: [ 'left' ] } },
  '3|-3': { type: 'water', config: { border: 'one-side', rotation: - Math.PI / 2 } },
  '4|-3': { type: 'tree', config: { type: 4 } },
  '5|-3': { type: 'grass' },
  '6|-3': { type: 'water', config: { border: 'both-side', wall: [ 'left' ], rotation: - Math.PI / 2 } },
  '7|-3': { type: 'grass' },
  '8|-3': { type: 'grass' },

  '-8|-4': { type: 'grass' },
  '-7|-4': { type: 'grass' },
  '-6|-4': { type: 'grass' },
  '-5|-4': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '-4|-4': { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '-3|-4': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '-2|-4': { type: 'grass' },
  '-1|-4': { type: 'tree', config: { type: 2 } },
  '0|-4': { type: 'path' },
  '1|-4': { type: 'grass' },
  '2|-4': { type: 'grass' },
  '3|-4': { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '4|-4': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '5|-4': { type: 'water', config: { border: 'one-side', wall: [ 'top' ] } },
  '6|-4': { type: 'water', config: { border: 'one-side', rotation: -Math.PI / 2 } },
  '7|-4': { type: 'grass' },
  '8|-4': { type: 'grass' },

  '-8|-5': { type: 'cliff', config: { height: 2 } },
  '-7|-5': { type: 'cliff', config: { height: 2 } },
  '-6|-5': { type: 'cliff', config: { height: 2 } },
  '-5|-5': { type: 'cliff', config: [{ position: 'right', height: 2 }] },
  '-4|-5': { type: 'water', config: { border: 'both-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '-3|-5': { type: 'cliff', config: [{ position: 'right', height: 2 }, { position: 'bottom', height: 2 }] },
  '-2|-5': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '-1|-5': { type: 'grass' },
  '0|-5': { type: 'path' },
  '1|-5': { type: 'grass' },
  '2|-5': { type: 'tree', config: { type: 4 } },
  '3|-5': { type: 'water', config: { border: 'corner', rotation: Math.PI, wall: [ 'left' ] } },
  '4|-5': { type: 'water', config: { border: 'one-side', rotation: Math.PI } },
  '5|-5': { type: 'water' },
  '6|-5': { type: 'water' },
  '7|-5': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '8|-5': { type: 'grass' },

  '-8|-6': { type: 'cliff', config: { height: 2 } },
  '-7|-6': { type: 'cliff', config: { height: 2 } },
  '-6|-6': { type: 'cliff', config: { height: 2 } },
  '-5|-6': { type: 'cliff', config: [{ position: 'right', height: 2 }, { position: 'bottom', height: 2 }] },
  '-4|-6': { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '-3|-6': { type: 'water', config: { border: 'corner', wall: [ 'top' ] } },
  '-2|-6': { type: 'cliff', config: [{ position: 'bottom', height: 1 }] },
  '-1|-6': { type: 'cliff', config: [{ position: 'right', height: 1 }, { position: 'bottom', height: 1 }] },
  '0|-6': { type: 'path-exit', config: { map: 'map2', square: '0|1', arrow: 'bottom' } },
  '1|-6': { type: 'grass' },
  '2|-6': { type: 'cliff' },
  '3|-6': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '4|-6': { type: 'grass'},
  '5|-6': { type: 'water', config: { border: 'corner', rotation: Math.PI, wall: [ 'left' ] } },
  '6|-6': { type: 'water', config: { border: 'one-side', rotation: Math.PI } },
  '7|-6': { type: 'water', config: { border: 'corner', rotation: - Math.PI / 2 } },
  '8|-6': { type: 'grass' },

  '-8|-7': { type: 'cliff', config: { height: 2 } },
  '-7|-7': { type: 'cliff', config: { height: 2 } },
  '-6|-7': { type: 'cliff', config: [{ position: 'right', height: 2 }] },
  '-5|-7': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '-4|-7': { type: 'water' },
  '-3|-7': { type: 'water' },
  '-2|-7': { type: 'water', config: { border: 'both-side', wall: [ 'top' ] } },
  '-1|-7': { type: 'water', config: { border: 'three-side', wall: [ 'top' ] } },
  '0|-7': { type: 'path' },
  '1|-7': { type: 'cliff' },
  '2|-7': { type: 'cliff' },
  '3|-7': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '4|-7': { type: 'tree' },
  '5|-7': { type: 'grass'},
  '6|-7': { type: 'grass'},
  '7|-7': { type: 'grass'},
  '8|-7': { type: 'grass'},

  '-8|-8': { type: 'cliff', config: { height: 2 } },
  '-7|-8': { type: 'cliff', config: { height: 2 } },
  '-6|-8': { type: 'cliff', config: { height: 2 } },
  '-5|-8': { type: 'cliff', config: { height: 2 } },
  '-4|-8': { type: 'cliff', config: { height: 2 } },
  '-3|-8': { type: 'cliff', config: [{ position: 'right', height: 2 }] },
  '-2|-8': { type: 'tree', config: { type: 6 } },
  '-1|-8': { type: 'grass' },
  '0|-8': { type: 'path' },
  '1|-8': { type: 'cliff' },
  '2|-8': { type: 'cliff' },
  '3|-8': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '4|-8': { type: 'grass' },
  '5|-8': { type: 'grass'},
  '6|-8': { type: 'grass'},
  '7|-8': { type: 'grass'},
  '8|-8': { type: 'grass'},
  
  '-8|-9': { type: 'cliff', config: { height: 2 } },
  '-7|-9': { type: 'cliff', config: { height: 2 } },
  '-6|-9': { type: 'cliff', config: { height: 2 } },
  '-5|-9': { type: 'cliff', config: { height: 2 } },
  '-4|-9': { type: 'cliff', config: { height: 2 } },
  '-3|-9': { type: 'cliff', config: [{ position: 'right', height: 2 }] },
  '-2|-9': { type: 'cliff', config: {  height: 1 } },
  '-1|-9': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  '0|-9': { type: 'path' },
  '1|-9': { type: 'cliff' },
  '2|-9': { type: 'cliff' },
  '3|-9': { type: 'cliff', config: [{ position: 'right', height: 1 }] },
  ...area([4, 8], [-9, -9], { type: 'grass' }),

  ...area([-8, -3], [-10, -10], { type: 'cliff', config: { height: 2 } }),
  ...area([-2, -1], [-10, -10], { type: 'cliff', config: [{ position: 'right', height: 2 }, { position: 'bottom', height: 2 }] }),
  '0|-10': { type: 'path' },
  ...area([1, 10], [-10, -10], { type: 'cliff', config: [{ position: 'bottom', height: 1 }] }),

  ...area([-8, -1], [-11, -11], { type: 'grass' }),
  '0|-11': { type: 'path' },
  ...area([1, 8], [-11, -11], { type: 'grass' }),
}

export { map1 }
