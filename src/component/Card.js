import React from 'react'
import { useNavigate } from 'react-router'

const Card = (item) => {
  const unavigate = useNavigate();
  const showdetail=()=>{
    unavigate(`/detail/${item.item.id}`)
  }

    let imgurl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.item.id}_0.jpg`
  return (
    <div className='Card-box' onClick={showdetail}>
        <img src={item!=null&&imgurl}></img>
        <div className='Card-name'>
            <div>{item?.item.name}</div>
        </div>
    </div>
  )
}

export default Card