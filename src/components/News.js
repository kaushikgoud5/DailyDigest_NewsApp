import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



export default class News extends Component {
  static defaultProps = {
    pagesize:4,
    country:'in',
    category:'general'
  }
  static propTypes={
      pagesize:PropTypes.string,
      title:PropTypes.string,
      country:PropTypes.string,
      category:PropTypes.string,
  }
  captilize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
   
    document.title=`${this.captilize(this.props.category)}-DailyDigest📰`;
  }
  Previousbtn=async ()=>{
    console.log("prev");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({
       loading:true
    })
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const jsonData = await response.json();
      console.log(jsonData);
      this.setState({ articles: jsonData.articles, loading:false, page:this.state.page-1}); 

    } catch (error) {
      console.error('Error:', error);
    }

  }
  Nextbtn=async()=>{
    console.log("next");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonData = await response.json();
      this.setState({ articles: jsonData.articles ,page:this.state.page+1,loading:false}); 
    } catch (error) {
      console.error('Error:', error);
    }

  }
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonData = await response.json();
      console.log(jsonData);
      this.setState({ articles: jsonData.articles ,loading:false}); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
 
 
 
  render() {
    return (
      <div className="container my-3">
       <h1 className="text-center text-danger">{this.props.title}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row ">

          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4"  key={element.url}>
              
            <NewsItem
                title={element.title ? element.title:""}
                desc={element.description ? element.description.slice(0,88):""}
                urlimg={element.urlToImage ? element.urlToImage:"https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}
                url={element.url}
                name={element.author?element.author:'Unknown'}
                date={element.publishedAt}
                
            />
            </div>

          })}
  
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button"  disabled={this.state.page<=1} className="btn btn-dark" onClick={this.Previousbtn}>Previous</button>
        <button type="button" className ="btn btn-dark" onClick={this.Nextbtn}>Next</button>
        </div>
      </div>
    );
  }
}
