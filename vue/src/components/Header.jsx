
import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    render () {
      return <div>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark borderbot">
                    <a class="navbar-brand" href="/">Vue</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">About The App <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="AboutUs">About Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
      </div>

    }
  }
  export default Header;
  