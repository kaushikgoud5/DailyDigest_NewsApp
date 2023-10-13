import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

class App extends Component {

apiKey=process.env.REACT_APP_API_KEY;

  render() {
    return (
      <div>
        <React.StrictMode>
          <BrowserRouter>
          
            <Navbar  />                 
            <Routes>
              <Route
                path="/"
                element={
                  <News
                  apiKey={this.apiKey}
                  key="general"
                    pagesize="6"
                    title="Top Stories"
                    country="in"
                    category="general"
                    
                  />
                }
              ></Route>
              <Route
                path="/sports"
                element={
                  <News
                  apiKey={this.apiKey}
                  key="sports"
                    pagesize="6"
                    title="Top Headlines"
                    country="in"
                    category="sports"
                  />
                }
              ></Route>
              <Route
                path="/politics"
                element={
                  <News
                  apiKey={this.apiKey} key="politics"
                    pagesize="6"
                    title="Top Headlines"
                    country="in"
                    category="politics"
                  />
                }
              ></Route>
              <Route
                path="/business"
                element={
                  <News
                  apiKey={this.apiKey }
                  key="business"
                    pagesize="6"
                    title="Top Headlines"
                    country="in"
                    category="business"
                  />
                }
              ></Route>
              <Route
                path="/entertainment"
                element={
                  <News
                  apiKey={this.apiKey }key="entertainment"
                    pagesize="6"
                    title="Top Headlines"
                    country="in"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                path="/technology"
                element={
                  <News
                  apiKey={this.apiKey }key="technology"
                    pagesize="6"
                    title="Top Headlines"
                    country="in"
                    category="technology"
                  />
                }
              ></Route>
              <Route
                path="/science"
                element={
                  <News
                  apiKey={this.apiKey }key="science"
                    pagesize="6"
                    title="Top Headlines"
                    country="in"
                    category="science"
                  />
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
