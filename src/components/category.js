"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronight, faNewspaper, faSpinner } from "@fortawesome/free-solid-svg-icons"
import Article from "./article"
import { useState } from "react"

export default function Category(props) {
    const [articles, setArticles] = useState([])
    const [loaded, setLoaded] = useState(false) // husk om artiklerne er blevet fetched eller ej
    const [loading, setLoading] = useState(true)

    function getArticles() {
        if (loaded) return
        setLoading(true)
        fetch(`https://api.nytimes.com/svc/topstories/v2/${props.title}.json?api-key=R6JswxR2AtoZ4AIEMyGPr0Z4oGATvNsL`)
            .then(res => res.json())
            .then(function (date) {
                setLoaded(true)

                const FILTERED_ARTICLES = data.results.filter(function (article) {
                    if (article.item_type === "Article" || article.item_type === "Interactive") return article
                })

                setArticles(FILTERED_ARTICLES)
                setLoading(false)
            })
    }



    return (
        <details className="px-3">
            <summary className="flex list-none items-center justify-between" onClick={getArticles}>
                <FontAwesomeIcon icon={faNewspaper} />
                {props.title}
                <FontAwesomeIcon icon={faChevronight} />
            </summary>
            {loading
                ? <p className="text-center"><FontAwesomeIcon icon={faSpinner} spinPulse size="2x" /></p>
                : articles.map(article => <Article
                    key={article.title}
                    title={article.title}
                    imgURL={article.multimedia && article.multimedia[2].url}
                    abstract={article.abstract} />)
            }
        </details>
    )
}