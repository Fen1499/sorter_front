import './NumberForm.css'
import React, { useState } from 'react'

const NumberForm = ({ triggerEvent, sorter }) => {

  const [nb, setNb] = useState('');
  const handleNb = (ev) => {
    setNb(ev.target.value.trim())
  }

  const handleRandomNb = (len) => {
    return Array.from(Array.from({length: len}, () => Math.floor(Math.random() * 100)))
  }

  return (
    <div className="Number-form">
      <form onSubmit={(ev) => ev.preventDefault()} className="container-fluid">
        <div className="row">
          <div className="col col-auto">
            <div className="input-group">
              <input type="number" value={nb} onChange={handleNb} className="form-control"></input>
              <button type="button" className="btn btn-primary" onClick={() => triggerEvent([nb])}>
                <i className="bi bi-plus-lg" />
              </button>
            </div>
          </div>
          <div className="col col-auto">
            <div className="input-group">
              <button type="button" className="btn btn-primary" onClick={() => triggerEvent(handleRandomNb(1))}>
                Randomize
              </button>
              <button className="btn btn-outline-light" onClick={() => triggerEvent(handleRandomNb(12))}>
                x12
              </button>
            </div>
          </div>
          <div className="col col-auto">
            <button type="button" className="btn btn-success" onClick={() => sorter()}>
              SORT!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NumberForm;
