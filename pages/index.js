import React from 'react'
import axios from 'axios'
import {Article} from "../src/Components/Article";

export default class extends React.Component {
    static async getInitialProps() {
        const res = await axios.get('https://eiscase.herokuapp.com/blogs');
        return {data: res.data.reverse()}
    }

    render() {
        return this.props.data.map((article) => <Article article={article}/>)
    }
}