function ListItem({ id, user }) {
  return (
    <div className="card">
      <div className="card-body">
        <img
          src={`https://robohash.org/${id}?set=set2`}
          alt="Monster"
          className="card-image"
        />
        <div className="card-info">
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
// https://robohash.org/1?set=set2
