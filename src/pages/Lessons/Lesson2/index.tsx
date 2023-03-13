import { Page } from 'src/pages/_App/interfaces'

export const Lesson2Page: Page = () => {
  return (
    <div
      className="box"
      style={{
        height: '100%',
        overflow: 'auto',
        background: 'green',
      }}
    >
      {' '}
      <h1
        style={{
          color: '#FF8C00',
          textAlign: 'center',
        }}
      >
        ГЕНЕАЛОГИЧЕСКОЕ ДРЕВО
      </h1>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        {' '}
        СЕМЬЯ ЧЕТВЕРТНЫХ
      </h2>
    </div>
  )
}
