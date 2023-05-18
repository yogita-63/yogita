import React from 'react'
//import { Link } from "react-router-dom";

import "./Orders.scss"

const orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
            <img
                className="image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/290220082/original/0d95ca239d0fc2794a6fb602f2ee73eeae53e06d.png"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>79.<sup>99</sup></td>
            <td>Francisco Chang</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
            <img
                className="image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/298455330/original/71894dfd3e509a10b445aeca0b3db60d38f2e7e6.jpg"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>110.<sup>99</sup></td>
            <td>Roland Mendel</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
            <img
                className="image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/79096701/original/98edee5036d0d41782a809235cef785822cce177.jpg"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>39.<sup>99</sup></td>
            <td>Helen Bennett</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
            <img
                className="image"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/297376092/original/3cd2f85af12677a81130432e2329ada874ed5cc1.png"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>119.<sup>99</sup></td>
            <td>Yoshi Tannamuri</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
            <img
                className="image"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/2c84ceda4abc75e1cfb21aac999ab50b-1677674562836/Content%20Writing%20_%20Editing.jpg"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>49.<sup>99</sup></td>
            <td>Giovanni Rovelli</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );

}

export default orders
