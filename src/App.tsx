import Auth from "./components/Auth"

const App = () => {

  return (
    <section className="auth-page-container container justify-center items-center flex h-screen mx-auto font-[.lato-bold]">
      <Auth type="login" />

    </section>
  )
}

export default App