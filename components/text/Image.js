export default ({ src }) => (
  <figure className="image">
    <img src={src} />
    <style jsx>{`
      .image {
        margin: 0 -150px 1em;
        text-align: center;
      }
    `}</style>
  </figure>
);
