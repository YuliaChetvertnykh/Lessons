import { Page } from 'src/pages/_App/interfaces'
import Image from 'next/image'
import img from '/home/julia/www/next-js/nextjs-nexus/src/pages/Lessons/Lesson4/kot_v_meshke2_2.jpg'

export const Lesson4Page: Page = () => {
  return (
    <>
      <h1>ПРИВЕТ</h1>
      <h2> - я пишу что-то</h2>
      <h2> - а что это?</h2>
      <h2> - а хрен его знает</h2>
      <main>
        <p>Аааа а аааа аааааа а а а ааааааа</p>
      </main>

      <Image src={img} alt="кот" />
    </>
  )
}
