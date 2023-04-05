import { NextSeo } from 'next-seo'
import Lesson4Page from 'pages/lessons/lesson4'

import { Page } from '../_App/interfaces'

export const MainPage: Page = () => {
  return (
    <>
      <NextSeo title="Main page" description="Main page description" />

      <Lesson4Page />
    </>
  )
}

/**
 * Example.
 * Commit this if not needed.
 *
 * Get data before render page
 */
MainPage.getInitialProps = () => {
  return {
    statusCode: 200,
  }
}

export default MainPage
