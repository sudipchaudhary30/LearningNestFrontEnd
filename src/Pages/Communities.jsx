import React, { useState } from 'react';
import './Communities.css';

const communityList = [
  { name: 'Web Development', members: '12K Members' },
  { name: 'AI & Machine Learning', members: '8K Members' },
  { name: 'Graphic Design', members: '5K Members' },
  { name: 'Freelancing Hub', members: '6K Members' },
  { name: 'Blockchain & Crypto', members: '4K Members' },
];

const Communities = () => {
  const [search, setSearch] = useState('');

  // Filter communities based on search input
  const filteredCommunities = communityList.filter(community =>
    community.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="communities-container">
      <h1>Explore Learning Communities</h1>
      <p>Join a community of learners to share knowledge and collaborate!</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search communities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Community List */}
      <div className="community-grid">
        {filteredCommunities.map((community, index) => (
          <div key={index} className="community-card">
            <h3>{community.name}</h3>
            <p>{community.members}</p>
            <button>Join</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
