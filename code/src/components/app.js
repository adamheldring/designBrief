import React from "react"
import Article from "./Article"

class App extends React.Component {

  render() {

    const articles = [
      {
        title: "The Boy Who Tamed the Sea",
        content: "At 5:30 am, on any morning I can handle it, " +
          "I'll slip out of the dark mouth of my covers " +
          "and creep through the silver lig...",
        articleImage: {
          url: "medium-image-puff-1.jpeg",
          alt: "playground"
        },
        datePublished: "Oct 27",
        readingTime: 8,
        author: {
          name: "Carl Moore",
          image: "writer-1.png"
        }
      },
      {
        title: "The Role of Human Emotions in the Future of Transport",
        content: "Getting from A to B is about to feel very different",
        articleImage: {
          url: "medium-image-puff-2.png",
          alt: "drawn cars on road"
        },
        datePublished: "Nov 1",
        readingTime: 7,
        author: {
          name: "Ben Bland",
          image: "writer-2.jpeg"
        }
      },
      {
        title: "The March of the Losers",
        content: "Around the world, the victims are becoming " +
          "the abusers, and Donald Trump is their king",
        articleImage: {
          url: "medium-image-puff-4.jpeg",
          alt: "people gathering"
        },
        datePublished: "Nov 10",
        readingTime: 8,
        author: {
          name: "Henry Wismayer",
          image: "writer-3.jpeg"
        },
      },
      {
        title: "The Burning Season",
        content: "You cannot save everything when the fires come " +
          "to Northern California",
        articleImage: {
          url: "medium-image-puff-3.png",
          alt: "man and woman reading"
        },
        datePublished: "Nov 9",
        readingTime: 9,
        author: {
          name: "Lindsey Smith",
          image: "writer-4.jpeg"
        }
      }
    ]

    console.log(articles)

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

            {articles.map((article, index) => {
              return <Article
                key={index}
                title={article.title}
                content={article.content}
                articleImage={article.articleImage.url}
                imageDesc={article.articleImage.alt}
                datePublished={article.datePublished}
                readingTime={article.readingTime}
                authorName={article.author.name}
                authorImage={article.author.image}
              />})
            }

          </div>
        </section>
      </div>
    )
  }

}

export default App
