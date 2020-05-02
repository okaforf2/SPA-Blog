import React, { Component } from 'react'
import { Card } from 'antd'
import OktobIcon from './icons/OktobIcon'
import OktobIcon2 from './icons/OktobIcon2'
import OktobIcon3 from './icons/OktobIcon3'

// import { PushpinOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons'

class OktobCard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

     handleClick(){
         this.props.clicked(this.props.id);
        }

    render() {
        let Meta = Card.Meta
        return <Card
        style={{ width: 320}}
        cover={
            <img
            alt={this.props.imgAlt}
            src={this.props.imgURL}
            onClick={this.handleClick}
            />
        }

    actions={[
        <OktobIcon type="like" count={this.props.likes} selected={this.props.liked} />,
        <OktobIcon2 type="message" count={this.props.comments}/>,
        <OktobIcon3 type="pushpin" selected={this.props.pinned} />,

    ]}
    >
        <Meta
            title={this.props.title}
            description={this.props.description}
            />
        </Card>
}
}

export default OktobCard