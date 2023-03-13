import { HTMLAttributes } from 'react'
import img from '../img/three.jpg'

export const Image: React.FC<HTMLAttributes<HTMLImageElement>> = (props) => {
  return (
    <img
      src={img.src}
      alt="ДРЕВО dsfdsfdsf"
      title="dfgdfgdfg title"
      width="300"
      height="auto"
      {...props}
    />
  )
}
