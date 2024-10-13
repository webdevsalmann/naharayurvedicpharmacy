import Overview from './Overview'
import History from './History'
import Contact from '@/components/layouts/contact/contact'

export default function page() {
  return (
    <main>
      <Overview />
      <History />
      <Contact />
      {/* <Team /> */}
    </main>
  )
}
