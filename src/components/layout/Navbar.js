import Logo from "../logo/Logo";
import LoginButton from "../login/LoginButton";
import RegisterButton from "../register/RegisterButton";

const Navbar = () => {
    return (
        <navbar>
            <Logo />
            <div>
                <LoginButton />
                <RegisterButton />
            </div>

            <style jsx>{`
            navbar {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              padding: 1rem 2rem;
              box-shadow: 0 4px 6px -6px gray;
            }
            div {
                display: flex;
                gap: 1rem;
            }
          `}</style>
        </navbar>
    );
};

export default Navbar;
