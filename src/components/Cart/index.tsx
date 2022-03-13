import React from 'react'
import PizzaCard from '../ProductComponent2'
import LoadingSkeleton from '../ProductComponent2/skeletonbody'
import '../ProductComponent2/styles.css'
import ModalPopUp from '../Modalpopup'
import Quantity from '../Quantity'
function Cart() {
  return (
    <>
        <div style={{minHeight:'80%',justifyContent:'center',textAlign:'center'}}>
            <h1 style={{textDecorationLine:'underline'}}>Cart</h1>
            <div className='pizza__wrapper'>
              {/* <ModalPopUp ></ModalPopUp> */}
               {/*  <LoadingSkeleton></LoadingSkeleton>
                <PizzaCard></PizzaCard> */}
                <Quantity price={1}></Quantity>
            </div>
        </div>
    </>
  )
}

export default Cart