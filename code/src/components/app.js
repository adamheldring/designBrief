import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="menu">
            <p className="activeChoice">Home</p>
            <p>Home</p>
            <p>Technology</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>

          </div>
          <input type="button" value="Get started" className="button green"/>
        </div>
        <div className="content">

          <div className="topArticle">

            <div className="infoContainer">
              <h1>Interesting ideas that set your mind in motion</h1>
              <p>Hear directly from the people who know it best. From tech to politics
              to creativity and more – whatever your interestsm, we&apos;ve got you covered</p>
              <input type="button" value="Get started" className="button black"/><input type="button" value="Learn more" className="button white"/>
            </div>

            <div className="imageContainer">
              <img src="./images/medium-image.png"/>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default App
