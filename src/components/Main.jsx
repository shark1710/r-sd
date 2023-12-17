import React, {useState, useEffect} from "react";



const wrap = document.getElementByClassName('wrap')[0];
const container = document.getElementByClassName('container')
let page = 0
const lastPage = container.length - 1

window.addEventListener('wheel', (e) => {
    e.preventDefault()
    if(e.deltaY > 0){
        page++
    }else if (e.deltaY < 0){
        page--
    }
    if(page < 0){
        page = 0
    }else if (page > lastPage) {
        page = lastPage
    }
})

const Main = ({ children }) => {

    const [page, setPage] = useState(0)
    const container = document.getElementByClassName("container")
    const lastPage = container.length - 1

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            setPage((prevPage) => {
                if(e.deltaY > 0) {
                    return prevPage < lastPage ? prevPage + 1 : prevPage
                } else if (e.deltaY < 0) {
                    return prevPage > 0 ? prevPage - 1 : prevPage
                } else {
                    return prevPage
                }
            })
        }
    })

    window.addEventListener("wheel", handleWheel)

    return () => {
        window.removeEventListener("wheel", handleWheel)
    }
}, [lastPage]);
    
    return (
        <main id="main" role="main">
            {children}
        </main>
    )}

export default Main