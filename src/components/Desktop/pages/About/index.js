import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a Computer Science major graduate student at the University of Texas at Dallas looking for a
                        role as a Software Engineer. I will graduate in December 2023.
                    </p>
                    <p>
                        I am excited to pursue a career in software engineering and am currently seeking employment opportunities in the field.
                        I've been dedicated to improving myself in many aspects. During my time in the university, I gained experience in a wide range of programming languages.
                    </p>
                    <p>
                        Some fields that I specialized in are Web Programming, both front-end and server-side, Database management, and Mobile app development.
                    </p>
                    <p>
                        I am also a hip-hop dancer, guitar player, and photography enthusiast! &#127752;
                    </p>
                    {/* I'm a Computer Science major graduate student at the University of Texas at Dallas looking for a role as a Software Engineer. I will graduate in December 2023.
I am excited to pursue a career in software engineering and am currently seeking employment opportunities in the field.
I've been dedicated to improving myself in many aspects. During my time in the university, I gained experience in a wide range of programming languages.
Some fields that I specialized in are Web Programming, both front-end and server-side, Database management, and Mobile app development.
I am also a hip-hop dancer, guitar player, and photography enthusiast! */}
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse" />
        </>
    )
}

export default About