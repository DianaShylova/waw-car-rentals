import AuthNav from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { useAuth } from "hooks";
import UserMenu from "components/UserMenu/UserMenu";

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}