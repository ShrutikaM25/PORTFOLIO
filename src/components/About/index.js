import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Sidebar from '../Siddebar';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timeout);
      }, []);
    return(
        <>
        <div className='container about-page'>
            <Sidebar/>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b','o','u','t',' ','M','e']}
                    idx={15}/>
                </h1>
                <p>I'm very abitious front-end developer looking for a role in 
                    established IT company with the opportunity to work with the latest 
                    technologies on challenging and diverse projects. 
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on 
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a 
                    responsible daughter, a caring sister and everyone's beloved 
                    friend, a music fanatic, photography ethusiast, and tech-obsessed!!!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#61dafb'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color='#306998'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color='#161312'/>
                    </div>

                </div>

            </div>
        </div>
        <Loader type = 'pacman'/>
    </>
    )

}

export default About ;