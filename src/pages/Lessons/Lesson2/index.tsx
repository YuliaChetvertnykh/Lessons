import { Page } from 'src/pages/_App/interfaces'

export const Lesson2Page: Page = () => {
  const Name = 'Yulia'
  const age = 35
  const lastName = 'Chetvertnyk'
  return (
    <>
      <h1>JS</h1>
      <p>
        {Name}
        <br />
        {age}
        <br /> {lastName}
      </p>
    </>
  )
}
