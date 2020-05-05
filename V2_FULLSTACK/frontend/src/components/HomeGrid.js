import React, { Component } from 'react'
import {Col, Row} from 'antd';
import OktobCard from './OktobCard';

class HomeGrid extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: []
        }
        this.clickItem = this.clickItem.bind(this)

    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1.0/articles")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isloaded: true,
                    items: result
                })
            },
            (error) => {
                this.setState({
                    isloaded: true,
                    error
                })
            }
        )
    }

    oneRow(articles, rowNumber){
        let row = articles.map(element => {
            return <>
            <Col span={6}>
                {element !==null ?(
                    <OktobCard          
                    title={element.title}
                    all_text={element.all_text}
                    image_url={element.image_url}

                             />) : null }
            </Col>
            </>
        }
            )

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
    while (counter < this.state.items.length){
        let articlesPerRow = [];
    for(let i = 0; i < 3; i++) {
        if(counter < this.state.items.length)
        articlesPerRow.push(this.state.items[counter])
    else
        articlesPerRow.push(null);


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