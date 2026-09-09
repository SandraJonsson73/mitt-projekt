function ProfileCard({ name, role, initials }) {
  return (
    <div className="card">
      <div className="avatar">{initials}</div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// Användning:
<ProfileCard
  name="Anna Svensson"
  role="Frontend-utvecklare"
  initials="AS"
/>

export default ProfileCard;