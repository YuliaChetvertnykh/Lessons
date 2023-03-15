import { NextSeo } from 'next-seo'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { Page } from 'src/pages/_App/interfaces'

export const Lesson3Page: Page = () => {
  const [mounted, mountedSetter] = useState(false)

  const [x, xSetter] = useState(5)
  const [y, ySetter] = useState(20)

  const [count, countSetter] = useState(0)

  const onClick = useCallback(
    () => {
      countSetter((c) => c + 1)
    },
    /**
     * DependencyList - определяет список зависимостей.
     * Если хоть одна зависимость изменилась, будет возвращено новое значение (первый аргумент)
     */
    []
  )

  console.log('render')

  /**
   * Здесь у нас не определен список зависимостей,
   * а значит этот хук будет срабатывать при каждом ререндеринге.
   */
  useEffect(() => {
    console.log('useEffect 1')
  })

  const countFoo = useMemo(() => (count % 2 === 0 ? count : count + 1), [count])

  useEffect(() => {
    console.log('useEffect mounted', countFoo)
    mountedSetter(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countFoo])

  console.log('mounted', mounted)

  // componentWillMount
  if (!mounted && global.window) {
    /**
     * Здесь можно раскомментировать, чтобы увидеть,
     * что контент конечный рендерится не сразу
     */
    // window.alert('Render')
  }

  // const onChangeNative = useCallback(())

  const [input3, input3Ref] = useState<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!input3) {
      return
    }

    console.log('input3', input3)

    const onChange = (event: HTMLElementEventMap['change']) => {
      console.log('input3 onChange', event)
    }

    const onInput = (event: HTMLElementEventMap['input']) => {
      console.log('input3 onInput', event)
    }

    input3.addEventListener('input', onInput)
    input3.addEventListener('change', onChange)

    /**
     * Вызываем перед повторным выполнением хука,
     * чтобы удалить ранее навешенные
     */
    return () => {
      input3.removeEventListener('input', onInput)
      input3.removeEventListener('change', onChange)
    }
  }, [input3])

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    console.log(
      'input onChange',
      event,
      event.currentTarget.name,
      event.currentTarget.value
    )

    const value = parseFloat(event.currentTarget.value)

    switch (event.currentTarget.name) {
      case 'x':
        xSetter(value)
        break
      case 'y':
        ySetter(value)
        break
    }
  }, [])

  /**
   * Если компонент еще не смонтирован в DOM,
   * то возвращаем пустой контент
   */
  if (!mounted) {
    return null
  }

  return (
    <>
      <NextSeo title="Lesson 3. Events" />

      <>
        <div>
          X: <input type="number" name="x" value={x} onChange={onChange} />
        </div>

        <div>
          Y: <input type="number" name="y" value={y} onChange={onChange} />
        </div>

        <div>
          Z: <input type="number" name="z" ref={input3Ref} />
        </div>

        <div>
          <button onClick={onClick}>Update count</button>
          <br />
          count: {count}
        </div>
      </>
    </>
  )
}
