import { useEffect, useState } from "react";

const GalleryComponent = () => {
    const [panX, setPanX] = useState(0)
    const [panY, setPanY] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX
            const mouseY = e.clientY

            const xDecimal = mouseX / window.innerWidth
            const yDecimal = mouseY / window.innerHeight

            const maxX = galleryRef.current.offsetWidth - window.innerWidth
            const maxY = galleryRef.current.offsetHeight - window.innerHeight

            const newPanX = maxX * xDecimal * -1
            const newPanY = maxY * yDecimal * -1

            setPanX(newPanX)
            setPanY(newPanY)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const galleryRef = React.createRef()

    return (
        <
    )
}

const gallery = document.getElementById("gallery");

window.onmousemove = e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const xDecimal = mouseX / window.innerWidth
    const yDecimal = mouseY / window.innerHeight

    const maxX = gallery.offsetWidth - window.innerWidth
    const maxY = gallery.offsetHeight - window.innerHeight

    const panX = maxX * xDecimal * -1
    const panY = maxY * yDecimal * -1
    
    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
}

