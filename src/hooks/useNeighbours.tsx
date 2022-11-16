const useNeighbours = () => {
  const findNeighbours = (current: any) => {
    // Getting pixel coordinates
    const id = current.id.split('.')
    const row = Number(id ? `${id[0]}` : undefined)
    const pix = Number(id ? `${id[1]}` : undefined)

    console.log('ID: ', id)
    console.log('Row: ', row)
    console.log('Pix: ', pix)

    // Making a list of surrounding pixel Id's
    const neighbourIds = [
      `${row - 1}.${pix - 1}`,
      `${row - 1}.${pix}`,
      `${row - 1}.${pix + 1}`,
      `${row}.${pix - 1}`,
      `${row}.${pix + 1}`,
      `${row + 1}.${pix - 1}`,
      `${row + 1}.${pix}`,
      `${row + 1}.${pix + 1}`,
    ]

    // Getting a list of the neighbouring pixels
    const pixelsList: HTMLElement[] = []

    for (const id of neighbourIds) {
      const element = document.getElementById(id)
      if (!element) continue
      pixelsList.push(element)
    }

    return pixelsList
  }

  return { findNeighbours }
}

export default useNeighbours
