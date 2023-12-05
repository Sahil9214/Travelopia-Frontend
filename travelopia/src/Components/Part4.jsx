import React, { useState } from "react";
import "../Styles/Part4.css";
const Part4 = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="part4">
        <div className="sidebar-grid__content">
          <h3 className="wp-block-heading">Armenia Tours</h3>

          <p>
            Armenia is a mountainous nation in West Asia, a former Soviet
            Republic, and was one of the first Christian nations, embracing
            Christianity in the fourth century. This rich cultural and natural
            environment makes it an exciting destination for a wide range of
            adventure, activity, and walking holidays.
          </p>

          {!showMore && (
            <p>
              <p>
                There are many pagan sites to visit as well as UNESCO World
                Heritage-listed churches, which are – almost without exception –
                built in stunning locations. Surrounded by forests, perched on
                the top of dramatic gorges or silhouetted before snow-capped
                mountains, they draw us to magnificent open spaces filled with a
                huge variety of trees and wild flowers. On Armenia tours, we see
                wonderful mountains, lakes, and waterfalls in the countryside –
                and relish cooling breezes – while the cafés and restaurants of
                the country’s capital, Yerevan, are proof of an emerging
                economy. Mount Ararat towers majestically over the city, and
                beautiful scenery is plentiful.
              </p>
              <strong>
                View our current travel guide for Armenia&nbsp;
                <a
                  target="_blank"
                  href="https://exodus-website.s3.amazonaws.com/uploads/2022/05/armenia_-_entry_requirements_guide_v2.pdf"
                >
                  here
                </a>
                .&nbsp;
              </strong>
            </p>
          )}

          <button onClick={toggleShowMore} className='btn-showMore'>
            {showMore ? "Show Less☝️" : "Show More👇"}
            
          </button>
        </div>
        {/* //Part 2 of sidebar */}
        <div className="sidebar-right">
          <div className="mid-sidebar-right">
            <div className="sidebar-call-phone">
              <h3 className="call">Call for general departures</h3>
              <h3 className="phone">02081311213</h3>
            </div>
            <br />
            <br />
            <div className="sidebar-right-bottom">
              <h1 className="h1">Make an enquriy</h1>
              <h3 className="h3">Step 1 of 2</h3>
              <br />
              <label className="label">DESTINATION</label>
              <br />
              <br />

              <input className="input" placeholder="Select Destination" />
              <br />
              <br />

              <label className="label">DEPARTURE DATE</label>

              <br />
              <br />
              <input className="input" type="date" placeholder="dd / mm / yy" />
              <br />
              <br />
              <label className="label">NUMBER OF PASSEENGERS</label>
              <br />
              <br />
              <select className="input_select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8+</option>
              </select>
              <br />
              <br />
              <label className="label">MESSAGE</label>
              <br />
              <br />
              <textarea
                className="textArea"
                placeholder="How can we help you?"
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;
