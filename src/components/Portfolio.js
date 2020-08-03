import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Hope you like some of my work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <a href={item.description}>
                <div className="columns portfolio-item">
                  <div className="item-wrap" style={{minHeight: '200px', display: 'flex'}}>
                      <img src={`${item.imgurl}`} className="item-img" style={{margin: 'auto'}}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    
                  </div>
                </div>
                </a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}