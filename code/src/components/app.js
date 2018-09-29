import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <header>
          <div className="menuContainer">
            <nav className="menu">
              <p className="activeMenuItem">Home</p>
              <p>Technology</p>
              <p>Creativity</p>
              <p>Entrepreneurship</p>
              <p>Self</p>
              <p>Culture</p>
              <p>Digital design</p>
              <p>Popular on Medium</p>
              <p>Politics</p>
              <p>More</p>
            </nav>
          <input type="button" value="Get started" className="button green"/>
          </div>
        </header>
        <section className="content">

          <div className="topArticle">

            <div className="topInfoContainer">
              <h1>Interesting ideas that set your mind in motion</h1>
              <p>Hear directly from the people who know it best. From tech to politics
              to creativity and more – whatever your interestsm, we&apos;ve got you covered</p>
              <input type="button" value="Get started" className="button black"/><input type="button" value="Learn more" className="button white"/>
            </div>

            <div className="topImageContainer">
              <img src="./images/medium-image.png" alt="tree painting"/>
            </div>
          </div>

          <div className="articleSection">
            <div className="article">
              <div className="imageContainer">
                <img src="./images/medium-image-puff-1.jpeg" alt="playground"></img>
              </div>
              <div className="infoContainer">
                <div className="articleInfo">
                  <h3>The Boy Who Tamed the Sea</h3>
                  <p>At 5:30 am, on any morning I can handle it,
                    I'll slip out of the dark mouth of my covers
                    and creep through the silver lig...
                  </p>
                </div>
                  <div className="articleAuthor">
                    <img src="./images/writer-1.png" alt="author"></img>
                    <p><b>Carl Moore</b><br></br>Oct 27  8 min read</p>
                    <img src="./images/bookmark.png" alt="bookmark" className="bookmark"></img>
                  </div>
              </div>

            </div>
            <div className="article">
              Hello2
            </div>
            <div className="article">
              Hello3
            </div>
            <div className="article">
              Hello4
            </div>

          </div>

        </section>
      </div>
    )
  }

}

export default App
