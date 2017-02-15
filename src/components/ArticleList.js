import React, {Component, PropTypes} from 'react'
import Article from './Article/index'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isOpenItem, filteredID} = this.props
        const articleElements = articles.map((article) => {

            if (!this.filterByID(article.id)) return null;
            if (!this.filterByDate(article.date)) return null;

            return (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={isOpenItem(article.id)}
                        toggleOpen={toggleOpenItem(article.id)}/>
                </li>
            )
        })
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    filterByID(id) {
        let {filteredID} = this.props;
        //stop filter if select is empty
        if (!filteredID) return true;
        if (!filteredID.length) return true;
        //find active article
        for (let i = 0; i < filteredID.length; i++) {
            if (id == filteredID[i].value) {
                return true;
                break;
            }
        }

        return false;
    }

    filterByDate(date) {
        let {dateFrom, dateTo} = this.props.filteredDate;
        let articleDate = Date.parse(date);
        let parsedFrom = Date.parse(dateFrom);
        let parsedTo = Date.parse(dateTo);

        //if date from is empty - return flag true
        if (isNaN(parsedFrom)) return true;
        //if date to is empty and date from bigger than article date - return flag true
        if (parsedFrom <= articleDate && isNaN(parsedTo)) return true;

        console.log('____DATES', dateFrom, dateTo, new Date(date).toString());

        //if dates is not empty
        if (!isNaN(parsedFrom) || !isNaN(parsedTo)) {
            //and if article date bigger than date from but smaller than date to - return flag true
            if (parsedFrom <= articleDate && parsedTo >= articleDate) {
                return true;
            } else {
                return false;
            }
        }

    }
}
export default accordion(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

ArticleList.defaultProps = {
    articles: []
}