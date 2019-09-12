import React, { Component } from 'react';
import './Home.scss';


export default class Sliders extends Component {
  

render() {
  return (

    // -----------Header---------

    <div classname="slider-container">    
      {/* -----------Body--------- */}

    <div className='body_labed_container'>
      <div className='profil_labed'>
        <div className='text_container_labed'>
          <p className='text_labed' >Après avoir travaillé pendant 8 ans dans la restauration j’ai décidé de changer de vie. Le code a été parfait pour moi car il regroupais a la fois mon attirance pour la technologie, l’informatique, et la création. Passionné depuis tout petit je passes de longues heures jours après jours devant mon ordinateur. J'adore relever des défis toujours plus grands. La satisfaction de mes clients, de mes collaborateurs est essentielle pour moi.</p>
        </div>
        <div className='title_labed title_back'>
          <h2 className='titleh2_labed'>
          PROFILE</h2>
        </div>
      </div>
      <div className='wildside_labed'>
        <div className='title_labed title_back_wild'>
          <h2 className='titleh2_labed'>
          SKILLS
          </h2>
        </div>
        <div className='text_container_labed'>
            <div className='text_skill_labed'>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> React</p>
                </div>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> Git</p>
                </div>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> NodeJs</p>
                </div>
                
            </div>  

            <div className='text_skill_labed'>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> HTML</p>
                </div>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> CSS</p>
                </div>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> React</p>
                </div>
                
            </div>  

            <div className='text_skill_labed'>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> React</p>
                </div>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> React</p>
                </div>
                <div className='skillContainer'>
                    <img className='react-logo' alt='react' src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
                    />
                    <p className='text_labed'> React</p>
                </div>
                
            </div>  
            
          
            
        </div>
        
      </div>  
    </div>
  </div>
  
    )
  }
}
