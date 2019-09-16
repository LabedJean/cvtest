import React, { Component } from 'react'
import './accordeon.css';


export default class Accordeon extends Component {
    render() {
        return (
            <div class="accordeon-container">
  <p className='project-title-main'>Mes Projets</p>

  <div class="gallery-wrap">
    <div class="item item-1">
    <p className='project-title'>GreenWeb</p>
    <p className='project-description'>Realisation d'un site statique repertoriant les differents acteurs du greenweb ainsi que la documentation associée pour les interessés</p>
    </div>
    <div class="item item-2">
    <p className='project-title'>ISA Project</p>
    <p className='project-description'>Developpement d'un application web permetant de voir sur une carte en temp reel la position de l'ISS</p>
    </div>
    <div class="item item-3">
    <p className='project-title'>Handipaca</p>
    <p className='project-description'>Hackaton durant lequel nous avons réalisé en équipe ( 6 personnes ), un application mobile destinée a l'amélioration de l'urbanisme pour les personnes a mobilité réduites</p>
    </div>
    <div class="item item-4">
    <p className='project-title'>Wavager</p>
    <p className='project-description'>Nous avons développé en équipe ( 8 personnes ) une application mobile permetant aux voyageur du monde entier de partager des informations, facilitant la vie en campingcar </p>
    </div>
    <div class="item item-5">
    <p className='project-title'>DelKo</p>
    <p className='project-description'>Developpement en cours</p>
    </div>
  </div>
 </div>
        )
    }
}
