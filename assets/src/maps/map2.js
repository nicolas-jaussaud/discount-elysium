const map2 = {

  '0|2': { type: 'path-exit', config: { map: 'map1', square: '0|-5', arrow: 'top' } },

  '-2|1': { type: 'tree', config: { type: 4 } },
  '-1|1': { type: 'grass' },
  '0|1': { type: 'path' },
  '1|1': { type: 'tree', config: { type: 1 } },
  '2|1': { type: 'grass' },

  '2|0': { type: 'tree', config: { type: 2 } },
  '1|0': { type: 'grass' },
  '0|0': { type: 'path' },
  '-1|0': { type: 'grass' },
  '-2|0': { type: 'grass' },

  '-2|-1': { type: 'water', config: { animation: 'corner', wall: [ 'top' ] } },
  '-1|-1': { type: 'tree', config: { type: 2 } },
  '0|-1': { type: 'path' },
  '1|-1': { type: 'grass' },
  '2|-1': { type: 'grass' },

  '2|-2': { type: 'grass' },
  '1|-2': { type: 'water', config: { animation: 'three-side', rotation: Math.PI / 2, wall: [ 'top', 'left' ] } },
  '0|-2': { type: 'path', config: { type: 'full' } },
  '-1|-2': { type: 'water', config: { animation: 'corner', wall: [ 'top' ] } },
  '-2|-2': { type: 'water' },

  '0|-3': { type: 'path', config: { type: 'full' } },
  '2|-3': { type: 'water', config: { animation: 'one-side', wall: [ 'top' ] } },
  '1|-3': { type: 'water', config: { animation: 'corner', rotation: Math.PI, wall: [ 'left' ] } },
  '-1|-3': { type: 'water', config: { animation: 'corner', rotation: -Math.PI / 2 } },
  '-2|-3': { type: 'water' },

  '0|-4': { type: 'path', config: { type: 'full' } },
  '2|-4': { type: 'water', config: { animation: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '1|-4': { type: 'path', config: { type: 'full' } },
  '-1|-4': { type: 'path', config: { type: 'full' } },
  '-2|-4': { type: 'water', config: { animation: 'one-side', rotation: -Math.PI / 2 } },

  '0|-5': { type: 'tree', config: { type: 4 } },
  '2|-5': { type: 'water', config: { animation: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '1|-5': { type: 'path', config: { type: 'full' } },
  '-1|-5': { type: 'path', config: { type: 'full' } },
  '-2|-5': { type: 'water', config: { animation: 'one-side', rotation: -Math.PI / 2 } },

  '0|-6': { type: 'path', config: { type: 'full' } },
  '2|-6': { type: 'water', config: { animation: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  '1|-6': { type: 'path', config: { type: 'full' } },
  '-1|-6': { type: 'path', config: { type: 'full' } },
  '-2|-6': { type: 'water', config: { animation: 'one-side', rotation: -Math.PI / 2 } },

  '0|-7': { type: 'water', config: { animation: 'one-side', wall: [ 'top' ] } },
  '2|-7': { type: 'water' },
  '1|-7': { type: 'water', config: { animation: 'one-side', wall: [ 'top' ] } },
  '-1|-7': { type: 'water', config: { animation: 'one-side', wall: [ 'top' ] } },
  '-2|-7': { type: 'water' },
}

export { map2 }
