import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"
import { searchStocks } from "@/lib/actions/finnhub.actions"

const Header = async ({user} : {user: User }) => {

  const initialStock = await searchStocks();

  return (
    <header className='sticky top-0 header'>
        <div className="container header-wrapper">
          <Link href="/">
            <Image src="/assets/icons/logo.svg" alt="Signalist Logo" width={140} height={32} className="w-auto h-8 cursor-pointer" />
          </Link>
          <nav className="hidden sm:block">
            <NavItems initialStock={initialStock} />    
          </nav>
          <UserDropdown user={user} initialStock={initialStock} />
        </div>
    </header>
  )
}

export default Header
