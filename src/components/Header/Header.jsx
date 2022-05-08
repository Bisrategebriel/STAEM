import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-row w-full justify-between'>
      <a href="./" className='text-white mt-10 ml-12 text-3xl font-bold'>STAEM</a>
      <button className='w-28 h-9 rounded-3xl text-white mt-10 mr-12 flex flex-row flex-nowrap justify-center items-center' style={installButton}>
        <span className='mr-2'>
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5l-5-5h3V9h4v4h3z">
              </path>
          </svg>
        </span>
        Install
      </button>
    </header>
  )
}

const installButton = {
  background: '#214b6b',
}

export default Header