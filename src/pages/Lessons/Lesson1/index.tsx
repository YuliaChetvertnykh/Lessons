import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'

import img from './img/three.jpg'

export const Lesson1Page: Page = () => {
  return (
    <>
      <NextSeo title="Lesson 1" />

      <>
        <h1 title="name">Юлия Четвертных</h1>
        <h2
          style={{
            color: 'red',
          }}
        >
          РОДОСЛОВНОЕ ДЕРЕВО
        </h2>
        <p>
          Семейный альбом - это огромный, необъятный альбом всех наших историй,
          запечатленных, собранных воедино и потому правдивых и неизменных во
          времени.
        </p>

        <img
          src={img.src}
          alt="ДРЕВО dsfdsfdsf"
          title="dfgdfgdfg title"
          width="300"
          height="250"
        />
        <a href="http://freecatphotoapp.com">drevo photos</a>
        <p>ФАМИЛИИ РОДОСЛОВНОЙ</p>
        <ul>
          <li>Орловы</li>
          <li>Четвертных</li>
          <a href="https://vk.com/id58617215">VK</a>
        </ul>
      </>
    </>
  )
}
