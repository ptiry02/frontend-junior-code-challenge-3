const useNeighbours = () => {
  const findNeihbours = (current: any) => {
    const id = current.id.split('')
    const row = Number(id ? id[1] : undefined)
    const pix = Number(id ? id[3] : undefined)

    const neighbourIds = [
      `r${row - 1}p${pix - 1}`,
      `r${row - 1}p${pix}`,
      `r${row - 1}p${pix + 1}`,
      `r${row}p${pix - 1}`,
      `r${row}p${pix + 1}`,
      `r${row + 1}p${pix - 1}`,
      `r${row + 1}p${pix}`,
      `r${row + 1}p${pix + 1}`,
    ]

    const rows: HTMLCollection = current.parentElement.parentElement.children

    const pixelsList: Element[] = []

    for (let i = 0; i < rows.length; i++) {
      const row: HTMLCollection = rows[i].children
      for (let j = 0; j < row.length; j++) {
        neighbourIds.forEach(id => {
          if (row[j].id === id) {
            pixelsList.push(row[j])
          }
        })
      }
    }

    return pixelsList
  }

  return { findNeihbours }
}

export default useNeighbours
