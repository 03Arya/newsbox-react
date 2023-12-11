"use client"

export default function Article(props) {
    return (
        <article className="grid grid-cols-[80px_auto] gap-x-3 mb-3 border-y-2 border-gray-400">
            <img src={props.imgURL} alt="" className="rounded-full" />
            <div>
                <h2>{props.title}</h2>
                <p>{props.abstract}</p>
            </div>
        </article>
    )
}