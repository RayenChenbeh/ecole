import React from 'react'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import './Services.css'

export function Services() {
    return (
        <div id='features' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2>Nos services</h2>
                </div>
                <div className='row'>
                    <div className='col-xs-6 col-md-3'>

                        <AirportShuttleIcon color="primary" style={{ fontSize: 60 }} />
                        <h3>Transport</h3>
                        <p>Notre école dispose de deux minibus et d'une minivan pour assurer le transport scolaire des élèves.</p>
                    </div>
                    <div  id='west' className='col-xs-6 col-md-3'>
                        <LocalDiningIcon color="primary" style={{ fontSize: 60 }} />
                        <h3>Cantine</h3>
                        <p>Puisque l'esprit sain dans un corps sain notre école propose des repats équilibrés et une alimentation saine pour que nos enfants aient une bonne croissance.</p>
                    </div>
                    <div id='ekher' className='col-xs-6 col-md-3'>
                        <LocalLibraryIcon color="primary" style={{ fontSize: 60 }} />
                        <h3>Garderie</h3>
                        <p>Afin de garantir l'excellence à nos élèves notre école propose des activités sportives, intelectuelles et culturelles ainsi que des cours de rattrapage.</p>
                    </div>
                   
                    
                </div>
            </div>

        </div>
    )
}



