import React, { useState } from 'react';

function SearchButton() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
    // Aqui tem que adicionar a ideia
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleAddMovie = () => {
    console.log('Adicionando filme...');
    // adicionar a ideia
  }

  const handleDeleteMovie = () => {
    console.log('Deletando filme');
    // adicionar a ideia
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        <h1 style={{marginRight:'15px'}} className="title">Encontre seu filme:</h1>
       
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange}
        style={{ height: '40px', marginRight: '10px', padding: '0 10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
      />
      <button 
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px',
          transition: 'all 0.3s ease-in-out',
        }}
        onClick={handleSearch}
        className="search-button"
      >
        Buscar
      </button>
      <button 
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          borderRadius: '5px',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          marginRight: '10px',
          transition: 'all 0.3s ease-in-out',
          
        }}
        onClick={handleAddMovie}
        className="add-movie-button"
      >
        Adicionar Filme
      </button>
      <button 
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          borderRadius: '5px',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
        }}
        onClick={handleDeleteMovie}
        className="delete-movie-button"
      >
        Deletar Filme
      </button>
    
    </div>
  );
}

export default SearchButton;
