const area = (x, y, data) => {
  const response = {}
  for (let i = x[0]; i <= x[1]; i++) {
    for (let j = y[0]; j <= y[1]; j++) {
      response[ `${i}|${j}` ] = data 
    }
  }
  return response
}

export { area }
