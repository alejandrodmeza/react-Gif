export const GifGridItem = ({Imagenes}) => {
  return (
    <>
        {Imagenes.map( ({id, title, url}) => (
            <div className="card" key={id}>
                <p>{title}</p>
                <img src={url} />
            </div>
        ))}
    </>
  );
}
