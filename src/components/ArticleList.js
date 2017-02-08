import React, {Component, PropTypes} from 'react'
import Article from './Article'
import Accordion from '../decorators/accordion'

class ArticleList extends Component {

    static defaultProps = {
        articles: []
    }

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })).isRequired
    }

    render() {
        const {articles, toggleOpen, openItemID} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openItemID}
                toggleOpen={toggleOpen(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default Accordion(ArticleList)