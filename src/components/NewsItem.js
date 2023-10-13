import React, { Component } from "react";

export default class NewsItem extends Component {
  handleMouseOver=()=>{
    document.getElementById(`${this.props.url}`).style.transition = 'all .5s';
document.getElementById(`${this.props.url}`).style.WebkitTransition = 'all .5s';
document.getElementById(`${this.props.url}`).style.opacity = .2;
  }
  handleMouseLeave=()=>{
    document.getElementById(`${this.props.url}`).style.opacity = 1;
  }
  render() {
    let { title, desc,urlimg,url ,name,date} = this.props;
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-md-4">
            <div className="card " id={url}  onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} style={{ width: "20rem" }}>
              <img src={urlimg} className="card-img-top" alt="..." />
              <div className="card-body" >
                <h5 className="card-title ">{title}...</h5>
                <p className="card-text">{desc}...</p>
                <a href={url}  target="_blank"  className="btn btn-primary btn-dark bg-dark">
                  Read More📖
                </a>
              </div>  
              
                <div className="card-footer bg-danger text-light">
              {name}
              </div> 
              <div className="card-footer bg-secondary text-light">
                {new Date(date).toGMTString()}
              </div> 
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
