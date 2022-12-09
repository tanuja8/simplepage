import React from 'react'

export default function Imagearea1() {
    return (
        <div>
            <div className='row container mx-auto'>
                <div className="my-5 py-5 col-md-6">
                    <img className='img-fluid' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=624,fit=crop/belton8hv41/people-around-a-table-with-food-mvoq2nk0xouDvolQ.jpg" alt="" />
                </div>
                <div className='bg-white my-5 py-5 col-md-6'>
                    <h3><em>“Food is symbolic of love when words are inadequate.”</em></h3>
                </div>
            </div>
            <div className='row container'>
                <div className='col-lg-6'>
                    <img className='img-fluid' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=752,fit=crop/belton8hv41/img-mjWRq1QRJatKaoK1.jpg" alt="" />

                </div>
                    <div className='col-lg-6 px-5 '>
                        <h3 className='display-3 fw-bolder mt-5 pt-5'>Delicious food creates memories</h3>
                        <p className='container p'>Belton is food studio that not just caters out deliciousness, but lives by the philosophy that nothing brings people together like good food. Whatever the occasion that you need our food for, whatever dietary requirements, we will make it happen.
                        </p>
                        <button type="button" class=" btn btn-dark  m-5 px-5 text-center">OUR STORY</button>
                </div>
            </div>
        </div>
    )
}
