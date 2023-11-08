import React from 'react'

export default function Detalles() {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://www.mink.com.ar/qloud/ryr/fotos/21598-1.jpg"
                    alt="Mouse Logitech G203"
                />

                <div className="card-body">
                    <h5 className="card-title">Nombre: Logitech G Series Lightsync G203 - Negro </h5>
                    <p className="card-text">Precio: $30.499 </p>
                    <p className="card-text">SKU: 910-005793 </p>
                    <p className="card-text">Stock: 25 Unidades </p>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Sensor óptico de 8000 dpi para mayor precisión y rapidez</li>
                        <li className="list-group-item">Diseño ergonómico con 6 botones configurables</li>
                        <li className="list-group-item">Compatible con Windows 7, macOS 10.13 y Chrome OS</li>
                        <li className="list-group-item">Conexión USB y cable para estabilidad en la conexión</li>
                        <li className="list-group-item">Rueda de desplazamiento para fácil navegación</li>
                        <li className="list-group-item">Ideal para gamers que buscan mejorar su rendimiento</li>
                    </ul>
                </div>
                <button type="button" className="btn btn-primary">
                Comprar
            </button>
            </div>
            

        </>
    )
}