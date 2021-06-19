import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel,  } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link'

class DemoCarousel extends Component {
    render() {
        return (
          <div style={{width: '500px', height: "400px"}}>
            <Carousel showThumbs={false}
>
                <div>
                    <Image width={400} height={300} src="/logitech.png" />
                    <p className="legend">Legend 1</p>
                    
                </div>
                <div>
                    <Image width={400} height={300} src="/logitech.png" />
                </div>
                <div>
                    <Image width={400} height={300} src="/logitech.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>

        );
    }
  }


export default DemoCarousel;

 