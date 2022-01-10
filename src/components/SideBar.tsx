import { Button } from './Button';
import { useEffect } from 'react';
import { api } from '../services/api';

interface GenreResponseProps {
  genres: any[];
  selectedGenreId: number;
  setGenres: Function;
  setSelectedGenreId: Function;
}

export function SideBar({setSelectedGenreId, genres, setGenres, selectedGenreId}: GenreResponseProps) {

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return(
  <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}