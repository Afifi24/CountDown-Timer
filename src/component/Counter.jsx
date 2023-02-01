import React from 'react'
import styled from 'styled-components'
import Img from '../images/bg-stars.svg'
import Bg from '../images/pattern-hills.svg'
import Face from '../images/icon-facebook.svg'
import Inst from '../images/icon-instagram.svg'
import Pent from '../images/icon-pinterest.svg'


const Counter = ({timerSeconds,timerDays,timerHours,timerMinutes}) => {
  return (
    <Counterstyle>
      <div className="container">
        <h3>WE'RE LAUNCHING SOON </h3>
        <div className="counter">
          <div className="days">
            <div className="box">{timerDays}</div>
            <h5>DAYS</h5>
          </div>
          <div className="hours">
          <div className="box">{timerHours}</div>
            <h5>HOURS</h5>
          </div>
          <div className="minutes">
          <div className="box">{timerMinutes}</div>
            <h5>MINUTES</h5>
          </div>
          <div className="secondes">
          <div className="box">{timerSeconds}</div>
            <h5>SECONDES</h5>
          </div>
        </div>
      </div>
      <div className="bg-montains">
      <img src={Bg} alt="" />
      
      </div>
      <div className="social">
        <div className="icon"><img src={Face} alt="" /></div>
        <div className="icon"><img src={Pent} alt="" /></div>
        <div className="icon"><img src={Inst} alt="" /></div>
      </div>
    </Counterstyle>
  )
}

export default Counter

const Counterstyle = styled.div`
height: 100vh;
background-image:url(${Img});
background-color: var(--Very-dark-blue);
display: flex;
align-items: center;
flex-direction: column;
.container{
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3{
    letter-spacing: 5px;
    text-align:center;
    /* padding: 0rem 0.3rem; */
}
.counter{
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  .box{
    width: 6rem;
    height: 6rem;
    background-color: var(--Dark-desaturated-blue);
    font-size: 3rem;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    color: var(--Soft-red);
    box-shadow: 0px 7px var(--Very-dark-mostly-black-blue) ;
  }
  h5{
    text-align: center;
    margin-top: 1rem;
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: var(--Grayish-blue);
  }
}

}
.bg-montains{
  position: absolute;
  bottom: 0;
  right: 0;
  /* width: 100%; */
  /* overflow: hidden; */
 img{
  /* width: 100%; */
 }
}

.social{
  position: absolute;
  bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1rem;
  .icon{
    cursor: pointer;
  img{
   width: 1.3rem;
    
  }
 }
 }
 /* MEDIA QUERIES */

 @media screen and (max-width:550px) {
  .container{
  .counter{

    .box{
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
    }
    h5{
      font-size: 0.4rem;
    }
  }
 }
}
 @media screen and (max-width:400px) {
  .container{
    h3{
      padding: 0rem 2rem;
    }
  .counter{

    .box{
      width: 3rem;
      height: 3rem;
      font-size: 1.5rem;
    }
    h5{
      font-size: 0.3rem;
    }
  }
 }
}
`