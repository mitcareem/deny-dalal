const LoginButton = () => {
  return (
    <button>
      Login
      <style jsx>{`
          button {
            display: none;
            font-size: 1.75rem;
            font-weight: 500;
            color: #00a5ec;
            border: 1px solid #00a5ec;
            padding: 0.3rem 1rem;
            background-color: inherit;
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

export default LoginButton;
