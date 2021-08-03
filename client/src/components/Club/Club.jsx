import React from 'react'
import "./Club.css"

export const Club = (props) => {
  return (
    <div id='club' className='text-center'>
      <div className='container' style={{width:"100%"}}>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Nos clubs</h2>
          <p style={{textAlign:"center"}}> 
          La vie à l’école ne s’arrête pas après les cours !<br/>
          Les élèves bénefissent entre autres d'une multitude de clubs.
         <br/>
          Ceci se veut éveilleur de goût, découvreur de talents, créateur de lieux d’épanouissement. 
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-lg-3 col-md-6 col-sm-6 Club'>
                <div class="card" style={{backgroundImage: `url(${d.img})`}}>
                  <div class="card-body">
                    <br/>
                    <br/>
                    <h2 class="card-title">{d.name}</h2>
                    <p>{d.description}</p>
                    <a href="#" class="button">Learn more</a>
                  </div>
                </div>
                  
                </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
