import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='https://i.pinimg.com/originals/21/89/81/218981cf77f1a0fd22d7ae0d274ea623.jpg' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://s3.nikecdn.com/events-platform/pre-prod/NET_Admin/header/2018-10-06_2205_BannerNRCEnero_01.jpg' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
