import { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

import gsap from 'gsap';
import { BsBank2, BsCheck } from 'react-icons/bs';
import { RiSearch2Line } from 'react-icons/ri';
import { BiLoaderCircle } from 'react-icons/bi';
import { FiChevronDown, FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

function App() {
  
  // create animation timeline with gsap
  const tl = gsap.timeline({
    paused: true,
    reversed: true
  });

  useEffect(() => {

    tl.play()

    tl.to(".card-content", {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: "power3.inOut"
    })

    tl.to(".cursor", {
      opacity: 1,
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".cursor", {
      top: "85%",
      left: "5rem",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".card-footer", {
      scale: "0.9",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".card-footer", {
      scale: "1",
      duration: .05,
      ease: "power3.inOut"
    })

    tl.to(".auth", {
      background: '#2D2D2D',
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".card-footer", {
      background: '#E5E5E5',
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".cursor", {
      top: "-3rem",
      left: "12rem",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".authorization-first", {
      top: '0',
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".cursor", {
      top: "11.5rem",
      left: "18rem",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".clicked", {
      scale: "0.9",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".clicked", {
      scale: "1",
      duration: .2,
      ease: "power3.inOut"
    })

    tl.to(".cursor", {
      top: "-3rem",
      left: "28rem",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".selector-content", {
      top: "0",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".cursor", {
      top: "6rem",
      left: "30rem",
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".first-card", {
      scale: "0.9",
      duration: .5,
      ease: "power3.inOut"
    })
    .to(".first-card", {
      scale: "1",
      duration: .2,
      ease: "power3.inOut"
    })
    .to(".first-card", {
      border: '1px solid #D94F00',
      duration: .5,
      ease: "power3.inOut"
    })
    .to(".firstLine", {
      background: '#D94F00',
      duration: 0,
      delay: 0,
      ease: "power3.inOut"
    })
    .to(".cursor", {
      opacity: 0,
      ease: "power3.inOut"
    })

    tl.to(".authorization-first", {
      opacity: 0,
    })
    .to(".authorization-container", {
      opacity: 1,
    })

    tl.to(".rotate", {
      rotation: '+=360deg',
      duration: 1,
      ease: "power3.inOut"
    })
    .to(".rotate", {
      display: 'none',
      ease: "power3.inOut"
    })
    .to(".late", {
      display: 'none',
      ease: "power3.inOut"
    })
    .to(".suspend", {
      display: 'block',
      ease: "power3.inOut"
    })

    tl.to(".card-content", {
      opacity: 0,
      duration: .5,
      ease: "power3.inOut"
    })

    tl.to(".transaction", {
      top: '0',
      duration: .5,
      ease: "power3.inOut"
    })
  }, [])

  return (
    <div className='wrapper'>
      <StyledGrid>
        <button onClick={() => tl.restart()} className='replayBtn'>Replay</button>
        <div className='cursor' />
        <div className='card glass animation-intro'>
          <div className='card-content'>
            <div className="icon-container">
              <BsBank2 className='icon' />
            </div>
            <div className="line-content">
              <div className="line" />
              <div className="line" />
            </div>

            <div className="card-footer">
              <div className="footer-item" />
            </div>
          </div>

          <div className="transaction">
            <div className="transaction-header">
              <div className="dropdown">
                <div className="innerdrop" />
                <FiChevronDown className="icon" />
              </div>

              <h3>N12,740.80</h3>

              <div className="down" />
            </div>

            <div className="transaction-body">
              <div className="transaction-item">
                <FiArrowUpRight className="icon red" />

                <div className="transaction-item-content">
                  <div className='transaction-item-header' />
                  <div className='transaction-item-body' />
                </div>

                <div className="transaction-item-price">N30,250</div>
              </div>
              <div className="transaction-item">
                <FiArrowDownLeft className="icon green" />

                <div className="transaction-item-content">
                  <div className='transaction-item-header' />
                  <div className='transaction-item-body' />
                </div>

                <div className="transaction-item-price">N150,000</div>
              </div>
              <div className="transaction-item">
                <FiArrowUpRight className="icon red" />

                <div className="transaction-item-content">
                  <div className='transaction-item-header' />
                  <div className='transaction-item-body' />
                </div>

                <div className="transaction-item-price">N870,250</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='card glass auth'>
          <div className="authorization-first">
            <p className='auth-title'>Select Bank</p>
            <div className="search-box">
              <RiSearch2Line className='icon' />
            </div>
            <div className="lists">
              <div className="list">
                <div className="list-icon" />
                <div className="list-text" style={{ width: '63px' }} />
              </div>
              <div className="list clicked">
                <div className="list-icon" style={{ background: '#005199' }} />
                <div className="list-text" />
              </div>
              <div className="list">
                <div className="list-icon" style={{ background: '#D94F00'}} />
                <div className="list-text" style={{ width: '62px' }} />
              </div>
              <div className="list">
                <div className="list-icon" style={{ background: '#5C2682'}} />
                <div className="list-text" style={{ width: '30px' }} />
              </div>
            </div>
          </div>
          <div className="authorization-container">
            <BiLoaderCircle className="icon rotate" />
            <p className='autorized-content late'>Authorizing...</p>
            <BsCheck className="icon suspend" />
            <p className='autorized-content suspend'>Authorized</p>
          </div>
        </div>

        <div className='card glass selector'>
          <div className="selector-content">
            <div className="selector-title">Select Account</div>
            <div className="selector-container">
              <div className="selector-card first-card">
                <div className="selector-card-line firstLine" />
                <div className="selector-card-line" />
              </div>
              <div className="selector-card">
                <div className="selector-card-line" />
                <div className="selector-card-line" />
              </div>
              <div className="selector-card">
                <div className="selector-card-line" />
                <div className="selector-card-line" />
              </div>
            </div>
          </div>
        </div>
      </StyledGrid>
    </div>
  );
}

export default App;

const StyledGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 626px;
  height: 364px;

  .replayBtn {
    position: absolute;
    bottom: -3rem;
    left: 0;
    padding: .5rem 1rem;
    font-size: .75rem;
    background: #E5E5E5;
    color: #2D2D2D;
    border: none;
    outline: none;
    transition: .3s ease-in-out;
    cursor: pointer;
    border-radius: 1rem;

    &:hover {
      transform: scale(.95);
    }
  }

  .cursor {
    position: absolute;
    top: -3rem;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #FAB613;
    z-index: 4;
    opacity: 0;
  }

  .card {
    position: relative;
    width: 100%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform-style: preserve-3d;
    transform: rotateX(25deg) rotateY(40deg);

    &.glass {
      background: rgba(255, 255, 255, .01);
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(40px);
    }

    &.animation-intro {
      z-index: 2;
    }

    &.selector {
      transform: rotateX(25deg) rotateY(40deg) translate(-78px, 26px);
    }

    &.auth {
      position: relative;
      padding: 1.5rem 1rem;
      transform: rotateX(25deg) rotateY(40deg) translate(-47px,25px);
      
      .authorization-first {
        width: 100%;
        height: 348px;
        position: absolute;
        top: 110%;
        padding: 1.5rem 1rem;

        .auth-title {
          font-size: 1rem;
          text-align: center;
          color: #8B8B8B;
          margin-bottom: 1rem;
        }

        .search-box {
          border-radius: 1.5rem;
          padding: .5rem .75rem;
          background: #606060;

          .icon {
            font-size: 1rem;
            color: #CFCFCF;
          }
        }

        .lists {
          margin-top: .75rem;

            .list {
              display: flex;
              align-items: center;
              padding: .6rem .75rem;
    
              .list-icon {
                width: 2rem;
                height: 2rem;
                border-radius: 4px;
                background: #FAB613;
              }
    
              .list-text {
                width: 100%;
                height: 6px;
                background: #fff;
                border-radius: 4px;
                margin-left: .5rem;
              }
            }
          }
        }
    }

    &.autorization {
      background: #2D2D2D;
    }

    .authorization-container {
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .suspend {
        display: none;
      }

      .icon {
        font-size: 2rem;
        color: #fff;
      }

      .autorized-content {
        font-size: 1rem;
        color: #fff;
      }
    }

    .card-content {
      opacity: 0;
    }

    &.selector {
      
      .selector-content {
        width: 100%;
        padding: 1.5rem .875rem;
        height: 364px;
        position: absolute;
        top: 110%;
    
          .selector-title {
            font-size: 1rem;
            text-align: center;
            color: #8B8B8B;
          }
          
          .selector-container {
            margin-top: 1.5rem;
          }

          .selector-card {
            background: #fff;
            border-radius: 8px;
            padding: .875rem 1rem;
            margin-bottom: .75rem;

            .selector-card-line {
              height: 6px;
              border-radius: 4px;
              background: #D1D6DE;
              margin-bottom: .75rem;

              &:last-child {
                margin-bottom: 0;
                max-width: 92px;
              }
            }
          }
      }
    }

    .icon-container {
      width: 4.375rem;
      height: 4.375rem;
      background: #68AAF9;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 1.8rem;
        color: #fff;
      }
    }

    .line-content {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .line {
        width: 100%;
        max-width: 140px;
        height: 6px;
        background: #D1D6DE;
        border-radius: 8px;
        margin-bottom: .75rem;

        &:last-child {
          margin-bottom: 0;
          max-width: 92px;
        }
      }
    }
  }

  .card-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    background: #60A944;
    display: flex;
    align-items: center;
    justify-content: center;

    .footer-item {
      width: 100%;
      max-width: 124px;
      height: 8px;
      background: #fff;
      border-radius: 8px;
    }
  }

  .transaction {
    position: absolute;
    top: 105%;
    left: 0;
    width: 100%;
    height: 100%;

    .transaction-header {
      background: #60A944;
      padding: 1rem 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .dropdown {
        width: 100%;
        max-width: 124px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #56983D;
        padding: .3rem .75rem; 
        border-radius: 1rem;

        .innerdrop {
          width: 100%;
          max-width: 76px;
          height: 6px;
          background: #B0D4A2;
          border-radius: 1rem;
          margin-right: .4rem;
        }

        .icon {
          color: #B0D4A2;
        }
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        margin-top: .75rem;
        margin-bottom: .75rem;
      }

      .down {
        width: 100%;
        height: 6px;
        background: #B0D4A2;
        border-radius: 1rem;
      }
    }

    .transaction-body {
      padding: 1rem .5rem;
    }

    .transaction-item {
      width: 100%;
      padding: .9rem .5rem;
      background: #fff;
      border-radius: .5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .5rem;

      .icon {
        font-size: 1rem;
        color: #D94F00;

        &.green {
          color: #60A944;
        }
      }

      .transaction-item-content {
        .transaction-item-header {
          width: 76px;
          height: 6px;
          background: #D1D6DE;
          margin-bottom: .75rem;
        }

        .transaction-item-body {
          width: 44px;
          height: 4px;
          background: #eee;
        }

        .transaction-item-price {
          font-size: .4rem;
        }
      }
    }
  }
`