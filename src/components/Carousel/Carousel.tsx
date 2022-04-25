import React, {useState} from 'react';
import {Typography} from "@material-ui/core";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
//@ts-ignore
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

import one from "../../img/carousel/one.gif"
import two from "../../img/carousel/two.gif"
import three from "../../img/carousel/three.gif"
import four from "../../img/carousel/four.gif"

interface NftElement {
    index: number,
    title: string
}

export const NftCarousel = () => {
    const images1 = [
        {
            original: one,
        },
        {
            original: two,
        },
        {
            original: three,
        },
    ];
    const images2 = [
        {
            original: two,
        },
        {
            original: three,
        },
        {
            original: four
        },
    ];
    const images3 = [
        {
            original: three,
        },
        {
            original: four,
        },
        {
            original: one,
        }
    ]

    return (
        <div style={{
            zIndex: 999,
            width:  window.innerWidth > 530 ? '60%' : '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        }}>

            {
                window.innerWidth > 530 ? <>
                    <div style={{padding: '1.5rem'}}>
                        <ImageGallery items={images1}
                                      showThumbnails={false}
                                      showNav={false}
                                      autoPlay={true}
                                      showFullscreenButton={false}
                                      showPlayButton={false}
                        />
                    </div>
                    <div style={{padding: '1.5rem'}}>
                        <ImageGallery items={images2}
                                      showThumbnails={false}
                                      showNav={false}
                                      autoPlay={true}
                                      showFullscreenButton={false}
                                      showPlayButton={false}
                        />
                    </div>
                </> : null
            }



            <div style={{padding: '1.5rem'}}>
                <ImageGallery items={images3}
                              showThumbnails={false}
                              showNav={false}
                              autoPlay={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                />
            </div>

        </div>
    );
};

