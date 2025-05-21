import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent.jsx"

function SerieFormPage(){
    const series = [
        {cod:1, nom:"Friends", cat:"Comedy", img:"friends.png"},
        {cod:2, nom:"Law & Order", cat:"Drama", img:"law-&-order.png"},
        {cod:3, nom:"The Big Bang Theory", cat:"Comedy", img:"the-big-bang-theory.png"},
        {cod:4, nom:"Stranger Things", cat:"Horror", img:"stranger-things.png"},
        {cod:5, nom:"Dr. House", cat:"Drama", img:"dr-house.png"},
        {cod:6, nom:"The X-Files", cat:"Drama", img:"the-x-files.png"},
    ];

    const { idserie } = useParams();

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("https://dummyimage.com/400x250/000/fff");

    useEffect(() => {
        const item = series.find(s => s.cod == idserie);
        if(item){
            setNombre(item.nom);
            setCategoria(item.cat);
            setImagen("https://dummyimage.com/400x250/000/fff&text=" + encodeURIComponent(item.img));
        }
    }, [idserie]);

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>{idserie ? "Editar" : "Nuevo"} - Serie</h3>
                </div>
                <form className="row">
                    <div className="col-md-4">
                        <img 
                            className="card-img-top" 
                            src={imagen} 
                            alt="img" />
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                required
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCategory" className="form-label">Categoria</label>
                            <select
                                className="form-select"
                                id="inputCategory"
                                required
                                value={categoria}
                                onChange={e => setCategoria(e.target.value)}
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputImage" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="inputImage" required />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SerieFormPage;
