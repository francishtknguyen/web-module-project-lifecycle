import React from 'react'


const UserCard = props => {
    return(
        <div className="userCard">
            <div className="userImage">
                <img src={`${props.user.avatar_url}`}/>
            </div>
            <div className="userInfo">
                <h3>{props.user.name}</h3>
                <p>{props.user.login}</p>
                <p>Location:{props.user.location}</p>
                <p><a href={props.user.html_url}> Profile</a></p>
                <p>Followers:{props.user.followers}</p>
                <p>Following:{props.user.following}</p>
                <p>Bio:{props.user.bio}</p>
            </div>
        </div>
    )

} 

export default UserCard;