import * as React from "react";
import Link from "next/link";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    contentHTML() {
        return this.props.article.content.split("\n").map((item) => <p>{item}</p>)
    };

    readMore() {
        return (
            <p className={"mb-0"}>
                <Link href={"/article/" + this.props.article.id}>Read more</Link>
            </p>
        )
    }

    render() {
        return (
            <div>
                <div className={!this.props.isDetail ? 'card mb-3' : ''}>
                    <div className={!this.props.isDetail ? 'card-body' : ''}>
                        <h5 className={"card-title"}>{this.props.article.title}</h5>
                        <p className={"card-text"}>
                            {this.props.isDetail ? this.contentHTML() : this.props.article.content.substr(0, 225) + "... "}
                        </p>
                        {!this.props.isDetail ? this.readMore() : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export {Article};