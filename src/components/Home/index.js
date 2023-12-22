import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Sidebar from '../Siddebar';
import Loader from 'react-loaders';

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'r', 'u', 't', 'i', 'k', 'a']
    const jobArray = ['W', 'e', 'b',' ','D','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => clearTimeout(timeout);
      }, []);
      

    return (
        <>
        <div className="container home-page">
            <Sidebar/>
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br/>
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 


                <img src = {LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                idx ={15}/>
                <br/>
                 <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                 idx = {22}/>
                </h1>
                <h2>Front-end Developer/ Javascript Expert </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home;