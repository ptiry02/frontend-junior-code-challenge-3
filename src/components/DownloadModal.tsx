import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { toPng, toJpeg, toSvg } from 'html-to-image'

type DownloadModalProps = {
  isVisible: Dispatch<SetStateAction<boolean>>
  canvas: MutableRefObject<any>
}

const DownloadModal = ({ isVisible, canvas }: DownloadModalProps) => {
  const [fileType, setFileType] = useState<string>('png')

  const downloadImage = async () => {
    if (!canvas) return
    const pngUrl = await toPng(canvas.current)
    const jpgUrl = await toJpeg(canvas.current)
    const svgUrl = await toSvg(canvas.current)

    // download image
    const link = document.createElement('a')
    link.id = 'download'
    link.download = 'pixel-art'
    switch (fileType) {
      case 'jpeg': {
        link.href = jpgUrl
        break
      }
      case 'svg': {
        link.href = svgUrl
        break
      }
      default: {
        link.href = pngUrl
        break
      }
    }

    link.click()
    isVisible(false)
  }

  return (
    <>
      <Backdrop onClick={() => isVisible(false)}></Backdrop>
      <Wrapper>
        <h3>Select file type</h3>
        <select onChange={e => setFileType(e.target.value)}>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPG</option>
          <option value='svg'>SVG</option>
        </select>
        <button onClick={downloadImage}>Download</button>
      </Wrapper>
    </>
  )
}

export default DownloadModal

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007d;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  padding: 30px 40px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`
