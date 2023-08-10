import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling
import page3Animation from './page3-animation.jpg'; // Update the path to the correct image location

const Home = () => (
  <div className="page">
    <h1 className="page-title">Welcome to the Home Page</h1>
    <div className="flex-container">
      <Link to="/page1" className="nav-link">
        Go to Page 1
      </Link>
      <Link to="/page2" className="nav-link">
        Go to Page 2
      </Link>
      <Link to="/page3" className="nav-link">
        Go to Page 3
      </Link>
      <Link to="/page4" className="nav-link">
        Go to Page 4
      </Link>
    </div>
  </div>
);

const Page1 = () => (
  <div>
    <h1>My Profile:</h1>
    <h2>Dinesh</h2>
    <p>I'm pursuing Btech Program in Artificial Intelligence and Data Science.</p>
    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/page2" className="back-link">
        Go to Page 2
      </Link>
      <Link to="/page3" className="back-link">Go to Page 3</Link>
      <Link to="/page4" className="back-link">Go to Page 4</Link>

    </div>
  </div>
);

const Page2 = () => (
  <div>
    <h1>Welcome to Page 2</h1>

    <h2>Interests:</h2>
    <p></p>
    <ul>
    <li>Technology and Gadgets</li>
    <li>Travel and Adventure</li> 
    <li>Health and Fitness</li> 
    <li>Football and Cricket</li> 
    </ul>

    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/page1" className="back-link">
        Go to Page 1
      </Link>
      <Link to="/page3" className="back-link">Go to Page 3</Link>
      <Link to="/page4"className="back-link">Go to Page 4</Link>

    </div>
  </div>
);

const Page3 = () => (
  <div>
    <h1>Welcome to Page 3</h1>
    <h2>My Projects: </h2>
    <p></p>
    <div className="gif-container">
    <img src={page3Animation} alt='Page3' />
    </div>
    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/page1" className="back-link">Go to Page 1</Link>

      <Link to="/page2" className="back-link">
        Go to Page 2
      </Link>
      <Link to="/page4" className="back-link">Go to Page 4</Link>

    </div>
  </div>
);

const Page4 = () => (
  <div>
    <h1>Welcome to Page 4</h1>
    I'm from Coimbatore.
    <div className="flex-container">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <Link to="/page1" className="back-link">Go to Page 1</Link>

      <Link to="/page2" className="back-link">
        Go to Page 2
      </Link>
      <Link to="/page3" className="back-link">Go to Page 3</Link>

    </div>
  </div>
);

function App() {
  return (
    <Router>
  
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} /> {/* New route for Page 4 */}
          </Routes>
        </div>
    </Router>
  );
}


export default App;
