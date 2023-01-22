import React from "react"
import imagen1 from '../images/bg-pattern-card.svg'
import perfil from '../images/image-victor.jpg'
import bgtop from '../images/bg-pattern-top.svg'
import bgbottom from '../images/bg-pattern-bottom.svg'

const Card=()=>{
    return(
        <div>
            <div className="contenedor">
                <div className="top">
                    <img src={bgtop} alt="" />
                </div>

             
                <div className="card-top">  
                        <img src={imagen1} alt="" />
                    <div className="perfil">
                        <img src={perfil} alt=""/>
                    </div>
                </div>
                <div className="texto">
                    <div class="info">
                        <h3 class = "name">Victor Crest </h3>
                        <h3 class= "age">26</h3>
                    </div>
                    <p>London</p>
                </div>

                <div class="stats">
                    <div>
                        <h3>80K</h3>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h3>803K</h3>
                        <p>Likes</p>
                    </div>
                    <div>
                        <h3>1.4k</h3>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                    <img src={bgbottom} alt="" />
            </div>
        </div>
    )
}

export default Card