import { NextSeo } from 'next-seo'
import { MouseEvent, useCallback } from 'react'
import { Page } from 'src/pages/_App/interfaces'
import { Image } from './Image'

export const Lesson1Page: Page = () => {
  const onClick = useCallback((event: MouseEvent<HTMLElement>) => {
    console.log('onClick event', event)
    // event.currentTarget.style.color =
    event.currentTarget.style.display = 'none'
  }, [])

  // useEffect(() => {
  //   //
  //   console.log(window.document.body)

  //   window.document.body.style.background = 'pistachio'
  // }, [])

  return (
    <>
      <NextSeo title="Lesson 1" />
      <>
        <h1
          style={{
            color: 'rd',
          }}
          title="name"
        >
          Юлия Четвертных
        </h1>
        <h2
          style={{
            color: 'Orange',
          }}
          onClick={onClick}
        >
          РОДОСЛОВНОЕ ДЕРЕВО
        </h2>
        <p onClick={onClick}>
          Семейный альбом - это огромный, необъятный альбом всех наших историй,
          запечатленных, собранных воедино и потому правдивых и неизменных во
          времени.
        </p>

        <div>
          <Image
            style={{
              opacity: 0.4,
            }}
            onClick={onClick}
          />
        </div>

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
