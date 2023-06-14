import React, { useState } from "react";
// import './Component/ShoppingCart.css'
import "bootstrap/dist/css/bootstrap.min.css";


const ShoppingCart=()=>{
        //State variable to track the quantity of shirts and
        // skirts
      
        const [shirtQuantity, setShirtQuantity] = useState(1);
        const [skirtQuantity, setSkirtQuantity] = useState(1);
        const [capQuantity, setCapQuantity]= useState(1);
      
        //Function to handle incrementaton logic shirt quantity
        const handleShirtIncrement = () => {
          setShirtQuantity(shirtQuantity + 1);
        };
      
        //Function to handle Decrementation logic shirt quantity
        const handleShirtDecrement = () => {
          setShirtQuantity(shirtQuantity - 1);
        };
        //Function to handle incrementaton logic skirt quantity
        const handleSkirtIncrement = () => {
          setSkirtQuantity(skirtQuantity + 1);
        };
      
        //Function to handle Decrementation logic skirt quantity
      
        const handleSkirtDecrement = () => {
          setSkirtQuantity(skirtQuantity - 1);
        };

        //function to handle Incrementaion logic for cap quantity

        const handleCapIncrement = () =>{
            setCapQuantity(capQuantity+1);
        };

        //function to handel Decrementation logic for cap quantity

        const handleCapDecrement = () =>{
            setCapQuantity(capQuantity-1);
        };

        // const shirtTotal=()=>{
        //     setShirtTotalPrice(shirtQuantity*20);
        // }
      
        //Function to calculate the discount amount for shirts based
        // on quantity
        const calculateShirtDiscount = () => {
          if (shirtQuantity >= 3) {
            return (5 / 100) * shirtQuantity;
            //5 % discount for each shirt
          } else {
            return 0;
          }
        };        
      
        //Function to calculate discount amount for skirt based
        // on quantity
        const calculateSkirtDiscount = () => {
          //Buy 2 skirts for price of 1
          return Math.floor(skirtQuantity / 2);
        };

        //function to calcualte discount amount for cap based on quantity
        const calculateCapDiscount=()=>{
            //Buy 3 cap for price of 2
            return Math.floor(capQuantity/3);
        };

        //function to show the disocunt amount
        const afterDiscountShirt = () => {
            if(shirtQuantity >=3) {
                return (
                <>
                    <div>*3 shirt offer</div>
                </>                    
                )
            }
        };

        const afterSkirtDiscount = () =>{
            if(skirtQuantity >=2){
                return(
                    <>
                    <div>*2 skirt offer</div>
                    </>
                )
            }
        };

        const afterCapDiscount = () =>{
            if(capQuantity >=3){
                return(
                    <div>
                        *3 cap offer
                    </div>
                )
            }
        }

        //function to calculate total price for shirt by the reqirement
        const totalShirtPrice= ()=> {
            const shirtPrice = 20;

            return(
                shirtQuantity * shirtPrice
            );
        };
        
        //function to calculate total price for skirt by the reqirement
        const totalSkirtPrice = () => {
            const skirtPrice = 5;

            return(
                skirtQuantity * skirtPrice
            );
        };

        //function to calculate total price for shirt by the reqirement
        const totalCapPrice = () => {
            const capPrice = 10;

            return(
                capQuantity * capPrice
            );
        };

        //function to calculate the total items price by the requirement
        const totalItemsPrice = () =>{
            const totalPrice = totalShirtPrice()+totalSkirtPrice()+totalCapPrice();
            return(
                <>
                <h6>{totalPrice}$</h6>
                </>
            );
        };
       

        //function to calculate the total items selected by user
        const totalItems = ()=>{
            return(
                shirtQuantity+skirtQuantity+capQuantity
            );
        };


        //function to calculate shirt total discount
        const shirtTotalDiscount = () =>{
            const shirtPrice = 20;
            const discountedShirt = calculateShirtDiscount();
            
            const balanceAmount=
                shirtQuantity * shirtPrice -
                discountedShirt * shirtPrice;

            const remainingAmount = 
                   shirtQuantity * shirtPrice -
                   balanceAmount;

                if(shirtQuantity >=3){
                    return(
                        <>
                        <p>-{remainingAmount}$</p>
                        </>
                         
                    ); 
                }
                        
        };

        //function to calculate skirt total discount
        const skirtTotalDiscount = () => {
            const skirtPrice = 5;
            const discountedSkirt = calculateSkirtDiscount();

            const balanceSkirtAmount =
            skirtQuantity * skirtPrice-
            discountedSkirt * skirtPrice;

            const remainingskirtAmount =
                skirtQuantity * skirtPrice-
                balanceSkirtAmount;

            if(skirtQuantity >=2){
                return(
                    <p>-{remainingskirtAmount}$</p>
                );

            }    
        };
        
        //function to calculate cap total discount
        const capTotalDiscount = () => {
            const capPrice = 10;
            const discountedcap = calculateCapDiscount();

            const balancecapAmount =
            capQuantity * capPrice-
            discountedcap * capPrice;

            const remainingCapAmount=
            capQuantity * capPrice-
            balancecapAmount;

            if(capQuantity >=3){
                return(
                    <>
                    <p>-{remainingCapAmount}$</p>
                    </>
                );

            }
        };
      
        //function to calculate the total price
        const calculateTotal = () => {
          const shirtPrice = 20; //price of shirt
          const skirtPrice = 5; //price of skirt
          const capPrice = 10;
          const shirtDiscount = calculateShirtDiscount();
        //   console.log(shirtDiscount);
          const skirtDiscount = calculateSkirtDiscount();
        //   console.log(skirtDiscount);
          const capDiscount = calculateCapDiscount();
          //calculate totl price by multiplying quanities with prices
          //applying discount
          return (
            shirtQuantity * shirtPrice -
            shirtDiscount * shirtPrice +
            skirtQuantity * skirtPrice -
            skirtDiscount * skirtPrice +
            capQuantity * capPrice -
            capDiscount * capPrice
          );
        };
        calculateTotal();
    
    
    return(
        <>
        <div className="container gap-5 d-flex shopping-cart">
            <div className="left-part">
                <div className="header-part m-3">
                    <h4 className="font-bold">Shopping cart</h4>
                    <hr/>
                </div>    
                    <div className="details-section d-flex justify-content-between">
                        <p className="details">Product Details</p>
                        <p className="quantity">Quantity</p>
                        <p className="price">Price</p>
                        <p className="total">Total</p>
                    </div>
                    <div className="cart-items">
                            <div className="product-section d-flex justify-content-between my-3">
                                <div className="img-section d-flex">
                                    <img src="https://www.lalbug.com/wp-content/uploads/2018/04/89277-kwzqk2.jpg" height={100} width={100} alt="shirt"/>
                                    <div className="product-description m-3">
                                        <h4 style={{color:"orange"}}>Shirt</h4>
                                        <p>Product Code XHYSD23</p>
                                        <p>BUY 3 AND GET ASSURED 5% DISCOUNT.</p>
                                    </div>
                                </div>
                                <div className="button-part my-3">
                                    <button onClick={handleShirtDecrement} className="decrement">-</button>
                                    <span>{shirtQuantity}</span>
                                    <button onClick={handleShirtIncrement} className="inceremnt">+</button>
                                </div>
                                <div className="price-section my-4">
                                    <h6>20$</h6>
                                </div>
                                <div className="total-part my-4">
                                    <h6>{totalShirtPrice()}$</h6>
                                </div>
                        
                            </div>
                            <div className="product-section d-flex justify-content-between my-3">
                                <div className="img-section d-flex">
                                    <img src="https://tse1.mm.bing.net/th?id=OIP.dDJ5mmDX5ziUUpq6yWEU9QHaHa&pid=Api&P=0&h=180" height={100} width={100} alt="skirt"/>
                                    <div className="product-description m-3">
                                        <h4 style={{color:"orange"}}>Skirt</h4>
                                        <p>Product Code XHAFH34</p>
                                        <p>BUY 2 AT A PRICE OF ONE.</p>
                                    </div>
                                </div>
                                <div className="button-part my-3">
                                    <button onClick={handleSkirtDecrement} className="decrement border-0">-</button>
                                    <span>{skirtQuantity}</span>
                                    <button onClick={handleSkirtIncrement} className="inceremnt border-0">+</button>
                                </div>
                                <div className="price-section my-4">
                                    <h6>5$</h6>
                                </div>
                                <div className="total-part my-4">
                                    <h6>{totalSkirtPrice()}$</h6>
                                </div>
                                
                            </div>
                            <div className="product-section d-flex justify-content-between my-3">
                                <div className="img-section d-flex">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.ogMqkW5ssTG85Es22Ukj7wHaJh&pid=Api&P=0&h=180" height={100} width={100} alt="cap"/>
                                    <div className="product-description m-3">
                                        <h4 style={{color:"orange"}}>Cap</h4>
                                        <p>Product Code XSFDDF67</p>
                                        <p>BUY 3 AT A PRICE OF 2.</p>
                                    </div>
                                </div>
                                <div className="button-part my-3">
                                    <button onClick={handleCapDecrement} className="decrement">-</button>
                                    <span>{capQuantity}</span>
                                    <button onClick={handleCapIncrement} className="inceremnt">+</button>
                                </div>
                                <div className="price-section my-4">
                                    <h6>10$</h6>
                                </div>
                                <div className="total-part my-4">
                                    <h6>{totalCapPrice()}$</h6>
                                </div>
                                
                            </div>
                        
                    </div>
            </div>
            <div className="right-part">
                <div className="header-part m-3">
                    <h4 className="font-bold">Order Summary</h4>
                    <hr/>
                </div>
                <div className="total-items d-flex">
                    <div className="left-part mx-4">
                        <p>{totalItems()} Items</p>
                    </div>
                    <div className="right-part">
                        <h3>{totalItemsPrice()}</h3>
                    </div>
                </div>
                <hr/>
                <div className="discount-section m-4">
                    <p>DISCOUNTS</p>
                    <div className="discount-calculation d-flex justify-content-between">
                        <div className="left-part">
                            <p>{afterDiscountShirt()}{afterSkirtDiscount()}{afterCapDiscount()}</p>
                        </div>
                        <div className="right-part">
                            <span>{shirtTotalDiscount()}{skirtTotalDiscount()}{capTotalDiscount()}</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <hr/>
                <div className="total-price-part d-flex justify-content-between mx-3 my-5">
                    <hr/>
                    <div className="left-part">
                        <h6>Total Cost</h6>
                    </div>
                    <div className="right-part">
                        <h3>{calculateTotal()}$</h3>
                    </div>
                </div>
                <button className="checkout-btn p-2 mx-5">Checkout</button>
            </div>
        </div>
        </>
    )

}

export default ShoppingCart;
