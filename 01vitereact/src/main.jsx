import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp() {
  return (
    <div>
      <h1>Custom App ! | Chai</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Click me to visit google</a>

)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
  'a' ,// type
  { href: 'https://google.com', target: '_blank' },// key
  'Click me to visit google', // ref
  anotherUser //props
)


ReactDOM.createRoot(document.getElementById('root')).render(

  /* <App /> */
  // < MyApp />
  /* MyApp() ---> this time no strict mode is used*/

  // ReactElement

  // anotherElement

  // reactElement

  // <App/>
  reactElement
)
