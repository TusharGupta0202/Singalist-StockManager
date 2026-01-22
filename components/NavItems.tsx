'use client'
import { NAV_ITEMS } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SearchCommand from "./SearchCommand"

const NavItems = ({ initialStock }: { initialStock: StockWithWatchlistStatus[] }) => {
    const pathName = usePathname();
    const isActive = (path: string) => {
        if(path === '/') return pathName=== '/';
        return pathName.startsWith(path);
    }

    return (
        <ul className="flex flex-col gap-3 p-2 font-medium sm:flex-row sm:gap-10" >
            {NAV_ITEMS.map(({href, label}) => {
              if(label === 'Search') return (
                <li className="search-trigger">
                    <SearchCommand label="Search" renderAs="text" initialStocks={initialStock}/>
                </li>
              )

                return (
                <li key={href}>
                    <Link href={href} className={`hover:text-yellow-500 transition-colors ${isActive(href) ? 'text-gray-100' : '' } ` } >
                      {label}
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default NavItems
