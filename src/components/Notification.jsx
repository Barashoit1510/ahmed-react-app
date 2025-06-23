function Notification({ hasNewMessages }) {
  return (
    <div>
      <h2>Inbox</h2>
      {hasNewMessages && <p>You have new message!</p>}
      {hasNewMessages && <h2>Fariima ayaa kuu yaala.</h2>}
    </div>
  );
}

export default Notification;
