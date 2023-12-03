
import "./App.css"
import NavigationBar from "./components/Navigationbar"
import Intro from "./components/Intro"
import Drama from "./components/Drama"

import "./style/landingpage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>

      <div className="Drama">
        <Drama/>
      </div>
    </div>
  )
}

export default App