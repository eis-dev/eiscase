import React from 'react'
import {withRouter} from 'next/router'
import axios from 'axios'
import {Article} from "../../src/Components/Article";


class article extends React.Component {
    static async getInitialProps(router) {
        const res = await axios.get('https://eiscase.herokuapp.com/blogs/' + router.query.slug);
        return {data: res.data}
    }

    render() {
        return <Article article={this.props.data} isDetail={'true'}/>
    }
}

export default withRouter(article)