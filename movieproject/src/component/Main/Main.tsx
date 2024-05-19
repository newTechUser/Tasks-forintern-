// Main.tsx
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Main.scss';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import myImage from '../../image/backimage.png';
import Navbar from '../Nav/Navbar';
import axios from 'axios';
import myVideo from '../../videos/Marvel.mp4'

interface MainProps {
  searchValue: string; // Define searchValue prop
}
interface DATA {
  id: number;
  name: string;
  title:string;
  description:string;
  imageurl:string;
}

const carouselItems = [
  {
    title: "Avengers : Endgame",
    description: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    imageUrl: `${myImage}`
  },
  {
    title: "Avengers : Endgame",
    description: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    imageUrl: `${myImage}`
  }
];

const Main: React.FC<MainProps> = ({ searchValue }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [inputValue, setInputValue] = useState<string>('');
  const apikey = '0d9278a75bf86d6c447bea67f8bea918'
  const [DATA,setDATA] = useState<DATA[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDisplay, setisDisplay] = useState<string>('block');
  const [isDisplayvideo,setisDisplayvideo] = useState<string>('none')
  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
    setisDisplay('none')
  };
  
  const videoRef = useRef<HTMLVideoElement>(null);

  
  useEffect(() => {
    const fetchDATA = async () => {
        try {
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
            setDATA(response.data);
            // console.log(response.data);
        } catch (err) {
            console.error('Failed to fetch data', err);
        }
    };

    fetchDATA();
}, [DATA]);

  const handleSearchInputChange = (value: string) => {
    setInputValue(value);
    console.log(value);
  };
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };
  return (
    <div className="main" >
      <div style={{display:isDisplay}} >
        <Carousel  className='Carusel' navButtonsAlwaysVisible={true} navButtonsProps={{style: {backgroundColor: 'black',color: 'white',}}}
        >
          {carouselItems.map((item, index) => (
            <Paper key={index} className="imagecdn" style={{ backgroundImage: `url(${item.imageUrl})`}}>
              <div className="maintext">
                <strong className="mainheadtext">
                  {item.title}
                </strong>
                <p className="mainabouttext">
                  {item.description}
                </p>
                <div className="buttons">
                  <button className="btn1" onClick={() => {setisDisplayvideo('block');setisDisplay('none')}} >
                    <PlayArrowIcon />Play Now
                  </button>
                  <button className="btn2">
                    <AddIcon />
                  </button>
                  <button className="btn3">
                    <ThumbUpIcon />
                  </button>
                  <button className="btn4">
                    <VolumeUpIcon />
                  </button>
                </div>
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>
    <div className="video-container" style={{display:isDisplayvideo}} onMouseEnter={() => handleHover(true)} onMouseLeave={() => {handleHover(false);setisDisplay('block');setisDisplayvideo('none')}}>
        <video ref={videoRef} className={`video ${isHovered ? 'playing' : ''}`} autoPlay loop muted>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
          <div className="controls">
            <button className="play-pause-btn" onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
          </div>
        </video>
      </div>
    </div>
  );
}

export default Main;
