import React from "react";
import "../assets/css/section/_contents.css"
import InfiniteSlider from "./InfiniteSlider";
import Map from "./Map"

const images = [
    "https://www.sejong.go.kr/thumbnail/tursmCn/920_TUCN_201906211021529962.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/57/Sejong_lake_park_190609_17.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAxNzExMDVfMjE2/MDAxNTA5ODc5Mzk4NTY5.kBoNW9r_iaqFC7n5ek8YRAQxcKrtxIZqaQJO4mwPC6Eg.EUZKGsdgBP9LYWtnX4kJG0FGs3NuNJV6hXwgP3gRpaUg.JPEG.binsuk8/_DSC5707.jpg?type=w800",
    "https://cdn.imweb.me/upload/S20161018580580733e6b2/d351bd074bb85.jpg",
]

const Contents = () => {
    return (
    <div className="contents_inner">
        <div className="left">
            <div className="left title2">세종호수공원</div>
            <div className="left text">세종중앙공원은 약 138만㎡에 이르는 대규모공원으로 이번에 개방하는 1단계(약 52만㎡)와 향후 조성될 2단계(약 86만㎡)로 구분됩니다
1단계는 다양한 축제들과 행사를 위한 장남들광장, 12여종의 스포츠를 즐길 수 있는 복합체육시설, 가족단위로 여가를 즐길 수 있는 가족여가숲과 소규모 문화행사를 개최할 수 있는 가족예술숲 등으로 시민들에게 건강한 삶과 휴식을 제공하고, 자연을 즐기며 감상할 수 있는 공원입니다.</div>
            <div className="map">
            주소 : 세종특별자치시 세종동 1204
            <Map/></div>
        </div>
        <div className="right">
            <div className="imgSlider">
                <InfiniteSlider images={images}/>
            </div>
        </div>
    </div>
    )
}

export default Contents