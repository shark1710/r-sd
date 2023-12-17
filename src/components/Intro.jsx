import React, {useEffect} from "react";
import "../assets/css/section/_intro.css"

const Intro = () => {

    useEffect(()=> {
        const handleMouseMove = (e) => {
            const gallery = document.getElementById("gallery");

            if (gallery) {
                const mouseX = e.clientX
                const mouseY = e.clientY

                const xDecimal = mouseX / window.innerWidth
                const yDecimal = mouseY / window.innerHeight

                const maxX = gallery.offsetWidth - window.innerWidth
                const maxY = gallery.offsetHeight - window.innerHeight

                const panX = maxX * xDecimal * -1
                const panY = maxY * yDecimal * -1

                gallery.animate(
                    {
                        transform: `translate(${panX}px, ${panY}px)`
                    }, 
                    {
                        duration: 4000,
                        fill: "forwards",
                        easing: "ease"
                    }
                )
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="title">
                    <p>세종 어디까지 가봤니?</p>
                    <div className="arr_down"></div>
                </div>
                <div id="gallery">
                    <div className="tile">
                        <a>조천연꽃공원</a>
                        <img src="https://cdn.jbnews.com/news/photo/202007/1297368_1092630_5433.jpg" alt="조천연꽃공원"></img>
                    </div>
                    <div className="tile">
                        <a>비암사</a>
                        <img src='https://www.sejong.go.kr/thumbnail/blog/CIT_201703300228141370.JPG' alt="비암사"></img>
                    </div>
                    <div className="tile">
                        <a>나성 독락정</a>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%EB%82%98%EC%84%B1_%EB%8F%85%EB%9D%BD%EC%A0%95.jpg/1024px-%EB%82%98%EC%84%B1_%EB%8F%85%EB%9D%BD%EC%A0%95.jpg' alt="나성 독락정"></img>
                    </div>
                    <div className="tile">
                        <a>베어트리파크</a>
                        <img src='https://cdn.jbnews.com/news/photo/202004/1289052_1084268_819.jpg' alt="베어트리파크"></img>
                    </div>
                    <div className="tile">
                        <a>뒤웅박고을</a>
                        <img src='https://www.sejong.go.kr/thumbnail/blog/CIT_201703300228141370.JPG' alt="뒤웅박고을"></img>
                    </div>
                    <div className="tile">
                        <a>고복자연공원</a>
                        <img src='https://cdn.ygnews.net/news/photo/202309/50666_20960_3813.jpg' alt="고복자연공원"></img>
                    </div>
                    <div className="tile">
                        <a>밀마루전망대</a>
                        <img src='https://www.sejong.go.kr/thumbnail/tursmCn/920_TUCN_201906211122454421.jpg' alt="밀마루전망대"></img>
                    </div>
                    <div className="tile">
                        <a>교과서박물관</a>
                        <img src='https://www.textbookmuseum.co.kr/resources/EXHIBIT/bblSTLUv0.jpg' alt="교과서박물관"></img>
                    </div>
                    <div className="tile">
                        <a>영평사</a>
                        <img src='https://cdn.ygnews.net/news/photo/old/old/2010100112926.jpg' alt="영평사"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro