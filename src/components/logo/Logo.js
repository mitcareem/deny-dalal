const Logo = () => {
  return (
    <div>
      <span>deny</span> dalal
      <style jsx>{`
        div {
          font-size: 2rem;
          font-weight: 700;
          opacity: 0.7;
          text-transform: uppercase;
          cursor: pointer;
        }
        span {
          color: #00a5ec;
        }

        @media screen and (min-width: 768px) {
          div {
            font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Logo;
