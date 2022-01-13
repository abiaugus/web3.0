import { Footer, Navbar, Services, Transactions, Welcome } from "./components"

const App = () => {

  return(
    <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
          </div>
          <Services />
          <Transactions />
          <Footer />
          <h1>test</h1>
    </div>
  )
}
export default App
