import { useState, useEffect } from 'react';

const WelcomeCycle = () => {
  const greetings = [
    { lang: 'English', text: 'Welcome' },
    { lang: 'French', text: 'Bienvenue' },
    { lang: 'Spanish', text: 'Bienvenida' },
    { lang: 'German', text: 'Willkommen' },
    // ... Add more languages
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prev => (prev + 1) % greetings.length);
    }, 3500); // Change greeting every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {greetings.map((greeting, index) => (
        <h1 
          key={index}
          className={`text-5xl font-bold mb-4 transition-opacity duration-1000 absolute ${
            index === currentGreeting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {greeting.text}
        </h1>
      ))}
    </div>
  );
};

export default WelcomeCycle;
