import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Layout} from './components/header_footer';
import './App.css';
import Register_links from './components/header_footer/Register_links';
import {Register, Login} from './components/auth';
import {NotFound} from './components/pages';
import { DashboardIndex } from './components/dashboard';
import { Addpost, Editpost, Postdetails } from './components/posts';
import postsData from './data/data';



function App() {

  const [posts, setPosts] = useState(postsData)
  return (
    <>
      
        
        <BrowserRouter>
        <Layout>
        <Switch>
          <Route path='/' exact render={() => <DashboardIndex posts={posts}/>}/>
          <Route path='/add' component={Addpost}/>
          <Route path='/edit/:id' component={Editpost}/>
          <Route path='/post/:id' component={Postdetails}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route component={NotFound}/>
          </Switch>
          </Layout>
        </BrowserRouter>
      
    </>
  )
}

export default App;
