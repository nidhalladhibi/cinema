import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import './App.css';
import VideoBackground from "./components/VideoBackground";


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'fast and furious',
      description: ' est une série de films"',
      posterURL: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/10/10/55/5129031.jpg',
      rating: 10
    },
    {
      title: 'squid game 2',
      description: ' est une série de films"',
      posterURL: 'https://media2.firstshowing.net/firstshowing/img16/SquidGame2sn2Postermain5992.jpg?width=599',
      rating: 8
    },
    {
      title: 'la casa de papel',
      description: ' est une série de films"',
      posterURL: 'https://gonzomusic.fr/files/casa-papel-temporada-3-1563559968.jpg',
      rating: 9
    },
    // Ajoutez d'autres films initiaux ici
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= Number(ratingFilter)
    );
  });

  const handleAddMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <div className="app">
      <h1>Ma Collection de Films</h1>
      
      <Filter
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />

      <form onSubmit={handleAddMovie} className="add-movie">
        <input
          type="text"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
          required
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
          required
        />
        <input
          type="url"
          placeholder="URL de l'affiche"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value})}
          required
        />
        <input
          type="number"
          min="0"
          max="10"
          placeholder="Note (0-10)"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({...newMovie, rating: e.target.value})}
          required
        />
        <button type="submit">Ajouter le film</button>
      </form>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;