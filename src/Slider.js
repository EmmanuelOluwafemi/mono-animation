import React, { useState, useEffect } from 'react'

import styled from 'styled-components'


import phoneScreen from './image/phone-screen.png'
import connectApiScreen from './image/connect-api-screen.png'
import connectApiScreen1b from './image/connect-api-screen-1b.png'
import connectApiScreen2b from './image/connect-api-screen-2b.png'
import connectApiScreen3 from './image/connect-api-screen-3.png'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        num: 1,
        title: "Integrate the Connect Widget",
        content: `
            const connect = new Connect({
            key: 'mono_public_key',
            onSuccess: ({code}) => console.log("code", code),
            onEvent: (eventName, data) => {
                console.log({
                eventName,
                data
                })
            }
            });

            connect.setup();
            connect.open();
        `,
        imgUrl: connectApiScreen
    },
    {
        num: 2,
        title: "User initiates account linking",
        content: `
            // Incoming event
            {
            eventName: "OPENED",
            data: {
                reference: "ref-code-xyz",
                timestamp: 1234567890
            }
            }
        `,
        imgUrl: connectApiScreen1b
    },
    {
        num: 3,
        title: "User selects bank and securely logs in",
        content: `
            // Incoming event
            {
            eventName: "INSTITUTION_SELECTED",
            data: {
                reference: "ref-code-xyz",
                authMethod: "internet_banking",
                institution: {
                id: "66059eO033be88012",
                name: "GTBank"
                },
                timestamp: 1234567890,
            }
            }
            
            // Incoming event
            {
            eventName: "SUBMIT_CREDENTIALS",
            data: {
                reference: "ref-code-xyz",
                timestamp: 1234567890
            }
            }
        `,
        imgUrl: connectApiScreen2b
    },
    {
        num: 4,
        title: "User's account is successfully connected",
        content: `
        // Next event
        {
          eventName: "ACCOUNT_LINKED",
          data: {
            reference: "ref-code-xyz",
            timestamp: 1234567890
          }
        }
        `,
        imgUrl: connectApiScreen3
    },
]

const Slider = () => {

    const [pos, setPos] = useState(0)

    const sliderRef = React.useRef(null)

    gsap.set(".images", { zIndex: (i, target, targets) =>  i });

    let images = gsap.utils.toArray('.images');

    useEffect(() => {
        images.forEach((image, i) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container",
                    start: () => "top -" + (window.innerHeight*(i+0.5)),
                    end: () => "+=" + window.innerHeight,
                    pin: true,
                    scrub: true,
                    toggleActions: "play none reverse none",
                    invalidateOnRefresh: true,     
                }
            })

            tl.to(image, {top: () => { return "0" } })
        })

        ScrollTrigger.create({
            trigger: ".container",
            scrub: true,
            markers: true,
            pin: true,
            start: () => "top top",
            end: () => "+=" + ((images.length + 1) * window.innerHeight),
            invalidateOnRefresh: true,
        });
    }, [images])

    return (
        <div className="scroller">
            <StyledContainer className="container">
            <StyledSlider ref={sliderRef} className='slider-container'>
                <div className="heading">
                    <div className="title">
                        <div className="num">
                            {data[pos].num}
                        </div>
                        <div className="title-text">
                            {data[pos].title}
                        </div>
                    </div>

                    <div className="buttons">
                        <button disabled={pos <= 0} onClick={() => {
                            if(pos > 0) {
                                setPos(pos - 1)
                            }
                        }}>Prev</button>
                        <button disabled={pos === 3} onClick={() => {
                            if(pos < 3) {
                                setPos(pos + 1)
                            }
                        }}>Next</button>
                    </div>
                </div>

                <div className="codebox">
                    <div className="text-content">
                    <SyntaxHighlighter language="javascript" style={dark}>
                        {data[pos].content}
                    </SyntaxHighlighter>
                    </div>

                    <img className='placeholder' src={phoneScreen} alt="phone-screen" />
                    <div className="placeholder-content">
                        <img className='images active' src={connectApiScreen} alt="connect api screen" />
                        <img className='images' src={connectApiScreen1b} alt="connect api screen" />
                        <img className='images' src={connectApiScreen2b} alt="connect api screen" />
                        <img className='images last' src={connectApiScreen3} alt="connect api screen" />
                    </div>
                </div>

                <div className='dots'>
                    <div className={pos === 0 ? 'dot active' : 'dot'} />
                    <div className={pos === 1 ? 'dot active' : 'dot'} />
                    <div className={pos === 2 ? 'dot active' : 'dot'} />
                    <div className={pos === 3 ? 'dot active' : 'dot'} />
                </div>
            </StyledSlider>
            </StyledContainer>
        </div>
    )
}

export default Slider

const StyledContainer = styled.div`
    width: 100%;
    height: 300vh;
`

const StyledSlider = styled.section`
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background: #fff;
    padding: 2rem 6%;
    box-sizing: border-box;

    .dots {
        display: flex;
        align-items: center;
        margin-top: 1rem;

        .dot {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #e5e5e5;
            margin-right: 1rem;

            &.active {
                background: #000;
            }
        }
    }

    .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            display: flex;
            align-items: center;

            .num {
                background: #0055BA;
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 2rem;
                font-weight: bold;
            }

            .title-text {
                font-size: 2rem;
                font-weight: bold;
                color: #0055BA;
                margin-left: 1rem;
            }
        }

        .buttons {
            display: flex;
            align-items: center;

            button {
                background: #0055BA;
                color: #fff;
                font-size: 1rem;
                font-weight: bold;
                padding: 1rem 1.5rem;
                outline: none;
                border: none;
                margin-right: 1rem;
                border-radius: 3rem;
                cursor: pointer;

                &:last-child {
                    margin-right: 0;
                }

                &:disabled {
                    background: grey;
                }
            }
        }
    }

    .codebox {
        position: relative;
        width: 100%;
        height: 75vh;
        background: #000;
        border-radius: 1.5rem;
        margin-top: 2rem;
        padding: 2rem 3rem;

        color: #fff;
        box-sizing: border-box;

        .text-content {
            max-width: 600px;

            pre {
                background: none !important;
                text-shadow: none !important;
                padding: 0 !important;
                border: none !important;
                border-radius: 0 !important;
                box-shadow: none !important;
            }
        }

        .placeholder {
            position: absolute;
            top: -1rem;
            right: 2rem;
            height: 105%;
            width: auto;
        }

        .placeholder-content {
            position: absolute;
            top: .2rem;
            right: 3.3rem;
            height: 98%;
            width: 243px;
            background: rgba(255, 0, 0, .3);
            border-radius: 1.2rem;
            overflow: hidden;

            img {
                position: absolute;
                left: 0%;
                top: 105%;
                width: 100%;
                height: auto;
                z-index: 1;

                &.active {
                    top: 0;
                    transition: top ease-in-out .3s;
                }
            }
        }
    }
`