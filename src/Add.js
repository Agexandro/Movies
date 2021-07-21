import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

function Add() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [movies, setMovies] = useContext(MovieContext);

    function updateName(e) {
        setName(e.target.value);
    }
    function updatePrice(e) {
        setPrice(e.target.value);
    }

    function addMovie(e) {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies,{name:name, price: "$"+price, id:name+price}]);
        setName("");
        setPrice("");
    }

    return (

        <form onSubmit={addMovie}>
            <input placeholder="Name" name="name" value={name} onChange={updateName} required />
            <input type="number" placeholder="Price" name="price" value={price} onChange={updatePrice} required />
            <button>Send</button>
        </form>
    );
}

export default Add;