import React from 'react'


const FollowerCard = props => {
    return(
        <div className="followerCard">
            <div className="followerImage">
                <img width ="200" src={`${props.followers.avatar_url}`}/>
            </div>
            <div className="followerInfo">
                <h3>{props.followers.login}</h3>
                <p><a href={props.followers.html_url}>Profile</a></p>
                <p>Followers: {props.followers.followers_url.length}</p>
                <p>Following: {props.followers.following_url.length}</p>
            </div>
        </div>
    )

} 

export default FollowerCard;