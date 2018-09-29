import React from "react"

class Article extends React.Component {
  render() {

    return (
      <div className="article">
        <div className="imageContainer">
          <img src={`./images/${this.props.articleImage}`} alt={this.props.imageDesc}></img>
        </div>
        <div className="infoContainer">
          <div className="articleInfo">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
          </div>
            <div className="articleAuthor">
              <img src={`./images/${this.props.authorImage}`} alt="author"></img>
              <p><span className="authorName">{this.props.authorName}</span><br></br>{this.props.datePublished}
                <span className="readingTime">{this.props.readingTime}</span> min read</p>
              <img src="./images/bookmark.png" alt="bookmark" className="bookmark"></img>
            </div>
        </div>
      </div>
    )
  }
}

export default Article
