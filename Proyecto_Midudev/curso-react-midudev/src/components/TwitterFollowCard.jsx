import React, { useState } from 'react'

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
    //estado
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[TwitterFollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleOnClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                alt='El avatar de midudev'
                src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                {/* esto lo hace mas dinamico, cambia el classname segun el estado para cambiar el estilo */}
                <button className={buttonClassName} onClick={handleOnClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}