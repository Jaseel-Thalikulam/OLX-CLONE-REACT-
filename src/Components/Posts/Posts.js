import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router-dom';

function Posts() {

  const { FireBase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails} = useContext(PostContext)
  const history = useHistory()

  useEffect(() => {
    FireBase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      console.log(allPost)
      setProducts(allPost)
    })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map(product => {
              return <div
                className="card"
                onClick={() => { 
                  setPostDetails(product)
                  history.push('/view')
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                <p className="rate">&#x20B9;{formatPriceWithCommas(product.price)}</p>


                  <span className="name">{product.name}</span>
                  <p className="category">{product.catagory}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{formatPriceWithCommas(110000)}</p>
              <p className="name"> YAMAHA R15V3</p>
              <span className="category">BIKE</span>
            <div className="date">
              <span>10/5/2021</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatPriceWithCommas(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Posts;
