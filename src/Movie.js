
function Movie({props}) {
    return (
      <tr>
          <td>{props.name}</td>
          <td>{props.price}</td>
      </tr>  
    );
}

export default Movie;