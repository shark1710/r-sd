import React, { useEffect } from "react";
import "../assets/css/section/_scrollcard.css"

const CardText = ({name, tag, address}) => {
    return (
        <div className="contents">
            <h2>{name}</h2>
            <h3>{tag}</h3>
            <p>{address}</p>
        </div>
    )
}

const AddressOnly = ({address}) => {
    return (
        <div className="contents">
            <div className="address">{address}</div>
        </div>
    )
}

const Cards = () => {
    const cardTextData = [
        {name:"라운지목화", tag:"#요리주점 #홍콩누와르 #맛집 #데이트코스", address:"세종특별자치시 조치원읍 침산리 265-12"},
        {name:"빠쇼앱샙", tag:"#태국음식 #숨은맛집 #가성비", address:"세종특별자치시 조치원읍 서창리 105-24"},
        {name:"국립세종수목원", tag:"#수목원 #산책하기 #한국관광100선", address:"세종시 중앙수목원로 212-24"},
        {name:"베어트리파크", tag:"#수목원 #가족여행 #나들이", address:"세종특별자치시 전동면 신송로 217"},
        {name:"고복자연공원", tag:"#나들이 #데이트코스 #산책", address:"세종, 연, 서면 고복리 580-2"},
        {name:"운주산성", tag:"#역사 #역사여행 #문화재", address:"세종특별자치시 전동면 청송리 산90"},
        {name:"조천연꽃공원", tag:"#가족과함께 #자연풍경 #휴식공간", address:"세종특별자치시 조치원읍 번암리 226"},
        {name:"콩대박", tag:"#두부요리전문점 #맛집", address:"세종특별자치시 금남면 대박길 9"},
        {name:"목향재", tag:"#세종숙소 #한옥 #취사가능 #조식가능", address:"세종시 만남로6길 33"},
        {name:"비암사", tag:"#불교 #사찰 #역사 #자연환경", address:"세종특별자치시 전의면 비암사길 137"},
        {name:"영평사", tag:"#불교 #사찰 #역사 #자연풍경", address:"세종특별자치시 장군면 영평사길 124"},
        {name:"세종호수공원", tag:"#21_22한국관광100선 #나들이", address:"세종 세종특별자치시 특별자치시 다솜로 216"},
        {name:"금강자연휴양림캠핑장", tag:"#가을단풍명소 #레포츠 #봄꽃나들이", address:"충청남도 공주시 반포면 도남리 299"},
        {name:"도깨비도로", tag:"#공포체험 #도깨비 #여름가볼만한 #이색체험", address:"세종특별자치시 전의면 다방리 212"},
        {name:"아람달 체험마을", tag:"#가족체험여행 #비누만들기 #문화체험 #숙박시설", address:"세종특별자치시 전동면 운주산로 606"},
        {name:"대평시장", tag:"#세종5일장 #쇼핑", address:"세종특별자치시 금남면 대평시장1길 17-2"},
        {name:"포도나무정원", tag:"#농촌체험 #먹거리 #아이와함께 #자연관광지", address:"세종특별자치시 연서면 쌍류리 125-4"},
        {name:"국립조세박물관", tag:"#교과서속여행 #박물관 #실내여행지 #체험학습 #아이와함께", address:"국세청로 8-14 KR 세종특별자치시"},
        {name:"도도리파크", tag:"#농촌테마공원 #아이와함께 #체험공방 #파머스마켓", address:"세종특별자치시 조치원읍 문예회관길 27"},
        {name:"세종중앙공원", tag:"#문화행사 #자연풍경 #산책 #복합체육시설 # 휴식", address:"세종특별자치시 세종동 1204"}
    ]
    
    const scrollGrid = ()=> {
        const bodyHeight = document.body.offsetHeight
        const mainHeight = document.querySelector('main').offsetHeight
        const cards = document.querySelector('.cards')
        const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100

        cards.style.setProperty('--scroll', `${transY}`)
    }

    // 작동을 안하는것 같다
    // useEffect(() => {
    //     window.addEventListener('resize', scrollGrid())
    //     window.addEventListener('scroll', scrollGrid())

    //     return () => {
    //         window.removeEventListener('resize', scrollGrid())
    //         window.removeEventListener('scroll', scrollGrid())
    //     }
    // }, [])

    const generateCard = (c) => (

        <a className="stack">
            <div className="card top">
                <CardText {...cardTextData[c]}/>
            </div>
            <div className="card mid-top">
                <AddressOnly address={cardTextData[c].address}/>
            </div>
            <div className="card mid-bottom">
                <AddressOnly address={cardTextData[c].address}/>
            </div>
            <div className="card bottom">
                <AddressOnly address={cardTextData[c].address}/>
            </div>
            <div className="card shadow"></div>
        </a>
    )

    const cards = Array.from({length: cardTextData.length}, (_, index) => {
        const c = index % cardTextData.length
        return generateCard(c)
    })

    
    
    return(
        <main>
            <div className="cards">{cards}</div>
        </main>
    )
}

export default Cards