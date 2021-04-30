import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PostProvider from './components/PostProvider';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import PostPage from './components/PostPage';


function App() {

  return (
    <Router >
    <PostProvider>
      <header className='header'>
        <div className="container">
          <div className="nav"><Link className='nav_item' to='/posts/new'>Создать</Link></div>
        </div>
      </header>
      <div className="container">
        <div className="page">
          <Switch>
            <Route path='/' exact component={PostList} />
            <Route path='/posts/new' component={AddPost} />
            <Route path='/posts/:id' component={PostPage} />
          </Switch>
        </div>
      </div>
      
    </PostProvider>
    </Router>
  );
}

export default App;
