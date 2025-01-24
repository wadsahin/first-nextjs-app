import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Header = async() => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  console.log("From header auth", isUserAuthenticated);
  return (
    <div className="navbar bg-indigo-500 text-white px-20">
      <div className="flex-1 gap-3">
        <Link href="/">Home</Link>
        <Link href="/user/profile">Profile</Link>
      </div>
      <div className="flex-none gap-2">
        <LoginLink className="btn btn-sm btn-neutral text-white">Login</LoginLink>
        {/* <LogoutLink>Logout</LogoutLink> */}
      </div>
    </div>
  );
};

export default Header;