import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimeEpisode from '../components/AnimeEpisode';

// https://api.consumet.org/anime/gogoanime/{servers}/{episodeId}

function AnimeVideo() {

   const [animeEP, setAnimeEP] = useState([]);
   const [info, setInfo]  = useState({});
   
   const {id, infos} = useParams()

    useEffect(()=>{
        fetchData();
        fetchData1();
    }, [id,infos])

    const url = `https://api.consumet.org/anime/gogoanime/servers/${id}`;
    const urll = `https://api.consumet.org/anime/gogoanime/info/${infos}`;


    const fetchData = async () => {
     try {
     const { data } = await axios.get(url);
     const oneEP = data.slice(1, 2);
     setAnimeEP(oneEP)
     console.log(data)
     } catch (err) {
     throw new Error(err.message);
     }
    };
  
    const fetchData1 = async () => {
      try {
          const { dataa } = await axios.get(urll);
          setInfo(dataa)    
         
      } catch (err) {
          throw new Error(err.message);
      }
  };


  console.log(urll)
  console.log(url) 

    return (
      <>
      <Navbar/>
      <div className='mt-5 mb-5 lg:mb-20 xl:mb-20' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
  {animeEP.map((ep) => (
    <div key={ep.id} className='flex flex-col justify-center items-center'>
      <h3 className='text-2xl mb-4 text-center'>{id}</h3>
      <div className= 'w-[300px] sm:w-[350px] h-[260px] flex justify-center items-center lg:w-[700px] lg:h-[400px]'>
        <iframe
          src={ep.url}
          allow="autoplay; fullscreen"
          className='w-full h-full'
        ></iframe>
      </div>
    </div>
  ))}
  <p className='text-center mb-5 mt-5 font-semibold'>PRO TIP: If ads in the video player persist, refresh the browser.</p>
  <p className='text-center mb-5 text-slate-400'>Apologies, but I do not possess the rights to the video content; therefore, it is inevitable that advertisements will be present. A small price to pay.</p>
</div>


        {/* <AnimeEpisode info={info} />  */}
        
        <Footer/>
        </>
      );
    
}

export default AnimeVideo