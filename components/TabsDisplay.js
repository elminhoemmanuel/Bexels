import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css'

const TabsDisplay = () => {

    const { loading, photos, error } = useSelector((state) => state.tabs);
    const breakpointColumnsObj = {
        default: 4,
        1100: 4,
        769: 2,
        500: 1
    };

    return (
        <div className="px-3 md:px-6 py-12">
            {
                loading ?
                    <div className="flex items-center justify-center">
                        <div className="spinner-page"></div>
                    </div>

                    :

                    <div >
                        {
                            photos[0] ?

                                // <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                >
                                    {
                                        photos.map(item => (
                                            <div className="" key={item.id}>
                                                <img className="w-full " src={item.src.original} alt="Image from Pexel" />
                                            </div>
                                        ))
                                    }
                                </Masonry>
                        

                        :

                        <div>
                            <p className="text-gray-600 text-center">{error ? error : "No images found"}</p>
                        </div>
                    }
                    </div>
            }
        </div>
    )
}

export default TabsDisplay
