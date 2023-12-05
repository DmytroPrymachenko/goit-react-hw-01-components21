export const FriendList = ({ friends }) => {
    return (
      
        <section className="FriendList">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </section>
    )}