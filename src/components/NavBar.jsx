import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img className="logo" src="/logo.svg" alt="Apple Logo" />
            <ul>
                {[
                    { label: 'store' },
                    { label: 'Mac' },
                    { label: 'iPhone' },
                    { label: 'watch' },
                    { label: 'Vision' },
                    { label: 'AirPods' },
                ].map(({ label }) => (
                    <li key={label}>
                        <a href={`/${label}`}>{label}</a>
                    </li>
                ))}
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search " />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart " />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
