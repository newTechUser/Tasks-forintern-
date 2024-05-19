
import React, { useState ,useEffect} from 'react'
import './Movies.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios'

interface Data {
    id: number;
    name: string;
    image: {
        medium: string;
    };
    genres:string;
    rating:object;
    average:number;
    status:string;
}

const Moviees: React.FC = () => {
    const [data,setData] = useState<Data[]>([]);
    const [start, setstart] = useState<number>(0);
    const [end, setend] = useState<number>(5);
    const [startbygenre, setstartbygenre] = useState<number>(0);
    const [endbygenre, setendbygenre] = useState<number>(5);
    const [startbytrend, setstartbytrend] = useState<number>(0);
    const [endbytrend, setendbytrend] = useState<number>(5);
    const [startbyreleased, setstartbyreleased] = useState<number>(0);
    const [endbyreleased, setendbyreleased] = useState<number>(5);
    const [startbywatch, setstartbywatch] = useState<number>(0);
    const [endbywatch, setendbywatch] = useState<number>(5);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Data[]>('https://api.tvmaze.com/shows');
                setData(response.data);
            } catch (err) {
                console.error('Failed to fetch data', err);
            }
        };

        fetchData();
    }, []);

    const handleback = (): void => {
        if(start != 0){
            setstart(start-1)
            setend(end-1)
        }
    };
    const handlefoward = (): void => {
        if(end<data.length){
            setstart(start+1)
            setend(end+1)
        }
    };
    const handlebackgenre = (): void => {
        if(startbygenre != 0){
            setstartbygenre(startbygenre-1)
            setendbygenre(endbygenre-1)
        }
    };
    const handlefowardgenre = (): void => {
        if(endbygenre<10){
            setstartbygenre(startbygenre+1)
            setendbygenre(endbygenre+1)
        }
    };
    const handlebacktrend = (): void => {
        if(startbytrend != 0){
            setstartbytrend(startbytrend-1)
            setendbytrend(endbytrend-1)
        }
    };
    const handlefowardtrend = (): void => {
        if(endbytrend<data.length){
            setstartbytrend(startbytrend+1)
            setendbytrend(endbytrend+1)
        }
    };
    const handlebackreleased = (): void => {
        if(startbyreleased != 0){
            setstartbyreleased(startbyreleased-1)
            setendbyreleased(endbyreleased-1)
        }
    };
    const handlefowardreleased = (): void => {
        if(endbyreleased<data.filter(items => items.status == "Running").length - 5){
            setstartbyreleased(startbyreleased+1)
            setendbyreleased(endbyreleased+1)
        }
    };
    const handlebackwatch = (): void => {
        if(startbywatch != 0){
            setstartbywatch(startbywatch-1)
            setendbywatch(endbywatch-1)
        }
    };
    const handlefowardwatch = (): void => {
        if(endbywatch<data.length){
            setstartbywatch(startbywatch+1)
            setendbywatch(endbywatch+1)
        }
    };
    return(
        <div className="Movies">
            <div className="headtext">Movies</div>
            <div className="OurGenres">
                <div className="mainhead">
                    <span className="mainheadtext">Our Genres</span>
                    <div className="mainheadend">
                        <ArrowBackIcon onClick={handleback} className='backicon'/><ArrowForwardIcon onClick={handlefoward} className='fowardicon'/>
                    </div>
                </div>
                <div className="cards">
                    {
                        data.slice(start,end).map(item => (
                            <div className="card" key={item.id}>
                                <div className="cardimageside">
                                    <img className='cardimage' src={item.image.medium}/>
                                </div>
                                <div className="cardtextside">
                                    <div className="cardtext">
                                        {item.genres[1]}
                                    </div>
                                    <div className="cardicon">
                                        <ArrowForwardIcon style={{cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="OurGenres">
                <div className="mainhead">
                    <span className="mainheadtext">Popular Top 10 Genres</span>
                    <div className="mainheadend">
                        <ArrowBackIcon onClick={handlebackgenre} className='backicon'/><ArrowForwardIcon onClick={handlefowardgenre} className='fowardicon'/>
                    </div>
                </div>
                <div className="cards">
                    {
                        [...data].sort((a, b) => (b.rating as { average: number }).average - (a.rating as { average: number }).average).slice(startbygenre,endbygenre).map(item => (
                            <div className="card" key={item.id}>
                                <div className="cardimageside">
                                    <img className='cardimage' src={item.image.medium}/>
                                </div>
                                <div className="cardtextside">
                                    <div className="cardtext">
                                        {item.genres[1]}
                                    </div>
                                    <div className="cardicon">
                                        <ArrowForwardIcon style={{cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="OurGenres">
                <div className="mainhead">
                    <span className="mainheadtext">Trending Shows Now</span>
                    <div className="mainheadend">
                        <ArrowBackIcon onClick={handlebacktrend} className='backicon'/><ArrowForwardIcon onClick={handlefowardtrend} className='fowardicon'/>
                    </div>
                </div>
                <div className="cards">
                    {
                        [...data].sort((a, b) => (b.rating as { average: number }).average - (a.rating as { average: number }).average).slice(startbytrend,endbytrend).map(item => (
                            <div className="card" key={item.id}>
                                <div className="cardimageside">
                                    <img className='cardimage' src={item.image.medium}/>
                                </div>
                                <div className="cardtextside">
                                    <div className="cardtext">
                                        {item.genres[1]}
                                    </div>
                                    <div className="cardicon">
                                        <ArrowForwardIcon style={{cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="OurGenres">
                <div className="mainhead">
                    <span className="mainheadtext">New Released Shows</span>
                    <div className="mainheadend">
                        <ArrowBackIcon onClick={handlebackreleased} className='backicon'/><ArrowForwardIcon onClick={handlefowardreleased} className='fowardicon'/>
                    </div>
                </div>
                <div className="cards">
                    {
                        data.filter(items => items.status == "Running").slice(startbyreleased,endbyreleased).map(item => (
                            <div className="card" key={item.id}>
                                <div className="cardimageside">
                                    <img className='cardimage' src={item.image.medium}/>
                                </div>
                                <div className="cardtextside">
                                    <div className="cardtext">
                                        {item.genres[1]}
                                    </div>
                                    <div className="cardicon">
                                        <ArrowForwardIcon style={{cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="OurGenres">
                <div className="mainhead">
                    <span className="mainheadtext">Most - Watch Shows</span>
                    <div className="mainheadend">
                        <ArrowBackIcon onClick={handlebackwatch} className='backicon'/><ArrowForwardIcon onClick={handlefowardwatch} className='fowardicon'/>
                    </div>
                </div>
                <div className="cards">
                    {
                        [...data].sort((a, b) => (b.rating as { average: number }).average - (a.rating as { average: number }).average).slice(startbywatch,endbywatch).map(item => (
                            <div className="card" key={item.id}>
                                <div className="cardimageside">
                                    <img className='cardimage' src={item.image.medium}/>
                                </div>
                                <div className="cardtextside">
                                    <div className="cardtext">
                                        {item.genres[1]}
                                    </div>
                                    <div className="cardicon">
                                        <ArrowForwardIcon style={{cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Moviees;