function Dashboard({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Waad login garaysantahay</p> : <p>Fadlan login garee</p>}
      {isLoggedIn ? <p>yes true</p> : <p>no false</p>}
    </div>
  );
}

export default Dashboard;
