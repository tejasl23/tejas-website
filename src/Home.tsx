import React, { useState, useEffect } from 'react';

interface Joke {
  setup?: string;
  delivery?: string;
  joke?: string;
}

const Home: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container">
      <h1>Welcome, I'm Tejas Lokeshrao</h1>
      <p>I'm a Software Engineer with a focus on Applied AI and Machine Learning.</p>

      <div className="joke-container">
        <h3>Random Developer Humor</h3>
        {loading ? (
          <p>Fetching a joke...</p>
        ) : joke ? (
          <div>
            {joke.joke ? (
              <p>{joke.joke}</p>
            ) : (
              <>
                <p><strong>{joke.setup}</strong></p>
                <p>{joke.delivery}</p>
              </>
            )}
            <button
              onClick={fetchJoke}
              style={{
                marginTop: '1rem',
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Get Another Joke
            </button>
          </div>
        ) : (
          <p>Failed to load joke. Try again later!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
