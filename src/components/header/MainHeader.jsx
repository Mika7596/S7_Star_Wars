import React from 'react'

function MainHeader() {
  return (
    <header>
        <div style={{backgroundImage:"url(src/assets/movie.svg)", backgroundSize:"contain", backgroundPosition: "center center", backgroundRepeat:"no-repeat", height: "200px", padding: "3%"}}>
        <div style={{textAlign:"end"}}>
            <button className='btn btn-warning' style={{marginRight:"10px"}}>sign up</button>
            <button className='btn btn-warning'>login</button>
        </div>
        </div>
    </header>
  )
}

export default MainHeader