import React,{useEffect,useState} from "react";

import Skeleton from "react-loading-skeleton";
import SkeletonThem from "react-loading-skeleton";

import "./card.css";
import { Link } from "react-router-dom";


const Cards=({movie})=>{
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])
    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonThem color='#202020' highlightcolor='#444'>
            <Skeleton height={300} duration={2}/>
            </SkeletonThem>
        </div>
        :
        <Link to={`movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt=""></img>
                <div className="card__title">{movie?movie.original__title:""}</div>
                <div className="cards__runtime">
                    {movie?movie.release_date:""}
                 <span className="card__rating">{movie?movie.vote_avarage:''}<i className="fas fa-star"></i></span>
                 </div>
                 <div className="card__description ">{movie?movie.overview.slice(0,118)+"....":""}</div>
            </div>
        </Link>
    }
    </>
}

export default Cards;

