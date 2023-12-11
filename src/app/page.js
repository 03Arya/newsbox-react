"use client"

import Header from "@/components/header"
import { faInbox, faCog } from "@fortawesome/free-solid-svg-icons"
import Category from "@/components/category"
import { useState, useEffect } from "react"

const CATEGORIES = [
    {
        name: "world",
        show: "true"
    }, {
        name: "business",
        show: "true"
    }, {
        name: "health",
        show: "true"
    }, {
        name: "arts",
        show: "true"
    }
]

export default function Home() {
   /* const [categories, setCategories] = useState(CATEGORIES)

    useEffect(function () {
        if (!localStorage.getItem("newsbox-categories")) {
            localStorage.setItem("newsbox-categories", JSON.stringify(categories))
        } else {
            setCategories(JSON.parse(localStorage.getItem("newsbox-categories")))
        }
    }) */

    return (
        <>
            <Header title="Newsbox" icons={[faInbox, faCog]} />
            <main className="border-b-2 border-gray-400">
                {CATEGORIES.map(category =>
                    category.show && <Category key={category.name} title={category.name} />)
                }
            </main>
        </>
    )
}