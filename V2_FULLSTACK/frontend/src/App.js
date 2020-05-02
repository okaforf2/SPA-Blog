import React from 'react';
import './App.css';
import { Col, Row } from 'antd'
import HomeGrid from './components/HomeGrid'
// import Header from './components/header/Header'; 
import Hello from './components/Hello'
 const App = () => {
  
  let articles = [
     {
     "id": 1,
     "title":"article 1",
     "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     "likes": 14,
     "comments":4,
     "pinned": false,
     "liked": true
     },
     {
     "id": 2,
     "title":"article 2",
     "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1498993337246-d6dc6b424efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
     "likes": 5,
     "comments":3,
     "pinned": true,
     "liked": false
     },
     {
     "id": 3,
     "title":"article 3",
    
     "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
     "likes": 7,
     "comments":2,
     "pinned": false,
    "liked": false
     },
     {
     "id": 4,
     "title":"article 4",
     "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     "likes": 14,
     "comments":4,
     "pinned": true,
     "liked": true
     },
     {
     "id": 5,
     "title":"article 5",
     "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1498993337246-d6dc6b424efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
     "likes": 5,
     "comments":3,
     "pinned": false,
     "liked": false
     },
     {
     "id": 6,
     "title":"article 6",
     "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "likes": 7,
   "comments":2,
     "pinned": false,
     "liked": false
     },
     {
     "id": 7,
     "title":"article 7",
     "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     "likes": 14,
     "comments":4,
     "pinned": false,
     "liked": false
     },
     {
     "id": 8,
    "title":"article 8",
    "description": "some desription about the article",
     "imgURL" : "https://images.unsplash.com/photo-1498993337246-d6dc6b424efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "likes": 6,
    "comments":2,
    
    "pinned": true,
    "liked": false
     },
    {
    "id": 9,
    "title":"article 9",
    "description": "some desription about the article",
    "imgURL" : "https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "likes": 7,
    "comments":2,
     "pinned": false,
    "liked": false
    },
    {
    "id": 10,
    "title":"article 10",
    "description": "some desription about the article",
    "imgURL" : "https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "likes": 7,
    "comments":2,
    "pinned": false,
    "liked": false
    },
    {
    "id": 11,
    "title":"article 11",
    "description": "some desription about the article",
    "imgURL" : "https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
     "likes": 5,
    "comments":2,
    "pinned": false,
    "liked": true
    }
  ]

  return(
    <div style={{background: '#ECECEC', padding: '30px'}}>
      <Row type="flex" justify="center">
        <Col span={4}>
          <Hello name="Francis" />
        </Col>
        </Row>

        <HomeGrid key={articles.id} articles={articles} />

    </div>
  )
}

export default App;
