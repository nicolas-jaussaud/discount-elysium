const area = (x, y, data) => {
  const response = {}
  for (let i = x[0]; i <= x[1]; i++) {
    for (let j = y[0]; j <= y[1]; j++) {
      response[ `${i}|${j}` ] = data 
    }
  }
  return response
}

const platform = (x, y) => ({
  [`${x + 4}|${y + 2}`] : { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  [`${x + 3}|${y + 2}`] : { type: 'path', config: { type: 'full' } },
  [`${x + 2}|${y + 2}`] : { type: 'path', config: { type: 'full' } },
  [`${x + 1}|${y + 2}`] : { type: 'path', config: { type: 'full' } },
  [`${x    }|${y + 2}`] : { type: 'water', config: { border: 'one-side', rotation: -Math.PI / 2 } },

  [`${x + 4}|${y + 1}`] : { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  [`${x + 3}|${y + 1}`] : { type: 'path', config: { type: 'full' } },
  [`${x + 2}|${y + 1}`] : { type: 'tree', config: { type: 4 } },
  [`${x + 1}|${y + 1}`] : { type: 'path', config: { type: 'full' } },
  [`${x    }|${y + 1}`] : { type: 'water', config: { border: 'one-side', rotation: -Math.PI / 2 } },

  [`${x + 4}|${y    }`] : { type: 'water', config: { border: 'one-side', rotation: Math.PI / 2, wall: [ 'left' ] } },
  [`${x + 3}|${y    }`] : { type: 'path', config: { type: 'full' } },
  [`${x + 2}|${y    }`] : { type: 'path', config: { type: 'full' } },
  [`${x + 1}|${y    }`] : { type: 'path', config: { type: 'full' } },
  [`${x    }|${y    }`]     : { type: 'water', config: { border: 'one-side', rotation: -Math.PI / 2 } },
})

const waterPath = (x, y) => {
  
  const items = [...Array(y[1] - y[0])]
    .map((empty, index) => (index + y[0]))
    .map((value) => ({
        [`${x - 1}|${value}`] : { type: 'water', config: { border: 'one-side', rotation: -Math.PI / 2 } }, 
        [`${x    }|${value}`] : { type: 'path', config: { type: 'full' } }, 
        [`${x + 1}|${value}`] : { type: 'water', config: { border: 'one-side', wall: [ 'left' ], rotation: Math.PI / 2 } },
      }))

  return items.reduce((object, item) => ({
    ...object, 
    ...item
  }), {})
}

export { 
  area,
  platform,
  waterPath
}
