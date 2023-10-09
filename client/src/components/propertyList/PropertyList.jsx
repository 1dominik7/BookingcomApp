import React, { useEffect, useState } from 'react'
import './PropertyList.scss'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'


const PropertyList = () => {

  const { data, loading, error, reFetch } = useFetch("/hotels/countByType")

  const images = [
    "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/05/12/22/21/villas-2308285_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/14/30/aurora-borealis-1839582_960_720.jpg"
  ]
  
  return (
    <div className='pList'>
          {loading ? (
              "loading"
          ) : (
             <>
            {data && images.map((img,i) => (
              <Link className="pListItem" key={i} to={`/hotels/type/${data[i]?.type}`}>
                <img src={img} alt="" className="pListImg" />
              <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
              </div>
              </Link>))
                      }
         </>)}
    </div>
  )
}

export default PropertyList
