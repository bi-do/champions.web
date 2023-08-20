import React from 'react'
import { useNavigate } from 'react-router'

const Card = (item) => {
  const unavigate = useNavigate();
  const showdetail=()=>{
    unavigate(`/detail/${item.item.id}`)
  }

    let imgurl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.item.id}_0.jpg`
  return (
    <div className='Card-box' onClick={showdetail}>
        <img src={item!=null&&imgurl} alt={item.item.id}></img>
        <div className='Card-name'>
            <div>{item?.item.name}</div>
        </div>
    </div>
  )
}

export default Card