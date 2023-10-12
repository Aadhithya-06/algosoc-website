import React from 'react'
import './style.css'

function Profile(props) {

    return (
        <div className={'profile-container'}>
            {props.src && <img className={'profile-pic'} src={props.src} alt={'profile'} />}
            <h5 className={'position'}>
                {props.position}
            </h5>
            <p className={'profile-name'}>
                {props.name}
            </p>
        </div>
    )

}

export default Profile
