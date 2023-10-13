import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div className='container  d-flex justify-content-center '>
 <div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" classrole="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        </div>
       
    )
  }
}
