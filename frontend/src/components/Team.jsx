import React from 'react';

const Team = () => {
  const teamMembers = [
     {
      id: 1,
      name: 'Chef Marcus',
      role: 'Head Chef',
      specialty: 'Modern European Cuisine',
      image: '/team_member_1.png',   // Add image here
    },
    {
      id: 2,
      name: 'Chef Elena',
      role: 'Pastry Chef',
      specialty: 'French Desserts',
      image: '/team_member_2.png',
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Sous Chef',
      specialty: 'Asian Fusion',
      image: 'team_member_3.png',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Restaurant Manager',
      specialty: 'Guest Experience',
      image: 'team_member_4.png',
    },
  ];

  return (
    <section className="team" id="team">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img
              src={member.image}
              alt={member.name}
              className="team-avatar"
            />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="specialty">{member.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
