const LoginButton = () => {
  return (
    <button>
      Login
      <style jsx>{`
          button {
            font-size: 0.8rem;
            font-weight: 600;
            color: #00a5ec;
            border: 1px solid #00a5ec;
            padding: 0.3rem 1rem;
            background-color: inherit;
            cursor: pointer;
            border-radius: 4px;
          }
        `}</style>
    </button>
  );
};

export default LoginButton;
