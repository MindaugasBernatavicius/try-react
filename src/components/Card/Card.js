import React from 'react';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                    { profile.name ?
                        (<a href={profile.html_url}>See {profile.name}'s github page!</a>) :
                        (<a href={profile.html_url}>See users github page!</a>)
                    }
                </div>
            </div>
        );
    }
}

export default Card;