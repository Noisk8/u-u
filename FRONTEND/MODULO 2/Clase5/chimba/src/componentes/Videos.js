// ./componentes/Videos.js
import React from 'react';
import './Videos.css';

function Videos({ lVideos = [] }) { // Valor predeterminado como array vacío
    return (
        <div className="video-container">
            {lVideos.map((video, index) => (
                <div key={index} className="video-card">
                    <img src={video.poster} alt={video.titulo} />
                    <h3>{video.titulo}</h3>
                    <p>{video.descripcion}</p>
                    <a href={video.url}>Ver Video</a>
                </div>
            ))}
        </div>
    );
}

export default Videos;