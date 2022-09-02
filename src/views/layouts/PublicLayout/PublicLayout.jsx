import { useComponents } from '../../components'

const PublicLayout = ({ children }) => {
  const { Header, Footer } = useComponents()
  return (
    <>
      {/* TODO: Header */}
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout
