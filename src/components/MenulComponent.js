import React, { Component } from 'react'

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);

  }



  render() {

    return (
      <div>
        <div className="row-1">

          <div className='cell'>
            <div className='cell-text'>
              <p>ARCADE <br></br>MODE</p>
            </div>
          </div>

          <div className='cell'>
            <div className='cell-text'>
              <p>SURVIVAL <br></br>MODE</p>
            </div>
          </div>

          <div className='cell'>
            <div className='cell-text'>
              <p>VS <br></br>MODE</p>
            </div>
          </div>

        </div>

        <div className="row-2">
          <div className='cell'>
            <div className='cell-text'>
              <p>TRAINING <br></br>MODE</p>
            </div>
          </div>

          <div className='cell'>
            Mark of the Millenium
          </div>

          <div className='cell'>
            <div className='cell-text'>
              <p>COLOR<br></br>MODE</p>
            </div>
          </div>
        </div>

        <div className="row-3">
          <div className='cell'>
            <div className='cell-text'>
              <p>REPLAY <br></br>MODE</p>
            </div>
          </div>

          <div className='cell'>
            <div className='cell-text'>
              <p>OPTION <br></br>MODE</p>
            </div>
          </div>

          <div className='cell'>
            Capcom vs SNK2
          </div>
        </div>
      </div>



    );
  }
}
