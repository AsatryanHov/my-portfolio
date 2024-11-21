function PortfolioCardItem({ link, img, alt, title, descr }) {
  return (
    <div className="card">
      <a href={link} className="card-link" target="_blank" rel="noreferrer">
        <img className="card-img" src={img} alt={alt} />
        <h3 className="card-title">{title}</h3>
        <p>{descr}</p>
      </a>
    </div>
  );
}

export default PortfolioCardItem;
