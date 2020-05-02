import React, { Component } from 'react'
import {Col, Row} from 'antd';
import OktobCard from './OktobCard';

class HomeGrid extends Component {
    oneRow(article, rowNumber){
        let row = article.map(element => {
            return <>
            <Col span={6}>
                {element !==null ?(
                    <OktobCard key={ element.id } 
                                id={element.id}
                               title={element.title}
                                description ={element.description} 
                                likes={element.likes} 
                                comments={element.comments} 
                                selected = {element.liked} 
                                imgURL = {element.imgURL} 
                                clicked = {this.clickItem}
                                // liked = { element.liked}
                                pinned = {element.pinned}
                                />) : null }
            </Col>
            </>
        }
            )

            this.clickItem = this.clickItem.bind(this)

        return <div key = {rowNumber}>
            <Row type="flex" justify="center">
                {row}
                </Row>
                <br />
                </div>
    }

    clickItem(id){
        console.log("article with id: " + id + " was clicked")
    }



    render(){
        let allRows = []
        let counter = 0
        let rowNumber = 0
    while (counter < this.props.articles.length){
        let articlesPerRow = []
    for(let i = 0; i < 3; i++) {
        if(counter < this.props.articles.length)
        articlesPerRow.push(this.props.articles[counter])
    else
        articlesPerRow.push(null)

        counter ++
    }
    rowNumber ++
    allRows.push(this.oneRow(articlesPerRow, rowNumber))
    }
    return <>
    {allRows}
    </>
    }
    }
    
    export default HomeGrid