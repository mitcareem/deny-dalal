import Logo from "../logo/Logo";
import LoginButton from "../login/LoginButton";
import RegisterButton from "../register/RegisterButton";
// icon
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav>
            <Logo />
            <div>
                <LoginButton />
                <RegisterButton />
            </div>

            <div className="menu">
                <AiOutlineMenu />
            </div>

            <style jsx>{`
        nav {
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

        .menu {
          display: block;
          font-size: 2rem;
          cursor: pointer;
        }

        @media screen and (min-width: 768px) {
          .menu {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
