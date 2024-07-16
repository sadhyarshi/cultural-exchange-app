// Stories.js

import React, { useState, useEffect } from 'react';
import './stories.css';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a backend API
    const mockStories = [
      { id: 1, title: 'Story 1', content: 'This is the content of Story 1.' },
      { id: 2, title: 'Story 2', content: 'This is the content of Story 2.' },
      { id: 3, title: 'Story 3', content: 'This is the content of Story 3.' },
      { id: 4, title: 'Story 4', content: 'This is the content of Story 4.' },
    ];
    setStories(mockStories);
  }, []);

  return (
    <div className="stories">
      <h2>Stories</h2>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stories;
