const RegisterButton = () => {
  return (
    <button>
      Register
      <style jsx>{`
        button {
          display: none;
          font-size: 1.75rem;
          color: white;
          font-weight: 500;
          border: 1px solid #00a5ec;
          padding: 0.3rem 1rem;
          background-color: #00a5ec;
          cursor: pointer;
          border-radius: 4px;
        }
        @media screen and (min-width: 768px) {
          button {
            display: block;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </button>
  );
};

export default RegisterButton;
