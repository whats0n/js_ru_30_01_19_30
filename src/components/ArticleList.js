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
        let flag = true;
        console.log(!!dateFrom, dateTo, articleDate);
        if (!!dateFrom) {
            if (dateFrom <= articleDate) {
                flag = true;
            } else {
                flag = false;
            }
        }
        
        if (!!dateTo) {
            if (dateTo >= articleDate) {
                flag = false;
            } else {
                flag = true;
            }
        }

        return flag;

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