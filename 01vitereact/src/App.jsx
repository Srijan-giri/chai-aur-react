import Chai from "./chai"


function App() {
  const username = "chai aur code"

  return (
    //* <></> ---> fragment
    //* {}--> evaluated expression
    <>
      <Chai />
      <h2>Chai aur React | {username}</h2>
      <p>test para</p>
    </>
  )
}

export default App
