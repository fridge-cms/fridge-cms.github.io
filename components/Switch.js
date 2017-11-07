export default ({ onChange, checked }) =>
  <div className='switch'>
    <input type='checkbox' id='cycle' name='cycle' onChange={onChange} checked={checked} />
    <label htmlFor='cycle'>Annually <span className='discount'>save 25%</span></label>
    <label htmlFor='cycle'>Monthly</label>
    <style jsx>{`
      .switch {
        border-radius: 4px;
        border: 1px solid #bcbcbc;
        display: inline-block;
        vertical-align: middle;
        margin: 0 5px;

        input {
          position: absolute;
          visibility: hidden;
        }

        label {
          cursor: pointer;
          display: inline-block;
          padding: 0.5em 1em;
          position: relative;
          min-width: 180px;
        }

        input + label {
          border-right: 1px solid #bcbcbc;
          color: #bcbcbc;
          font-weight: 400
        }

        input:checked + label {
          color: #1b1b1b;
          font-weight: 700
        }

        input + label + label {
          color: #1b1b1b;
          font-weight: 700;
        }

        input:checked + label + label {
          color: #bcbcbc;
          font-weight: 400
        }
      }

      @media (max-width: 640px) {
        .switch label {
          min-width: 90px;
        }
      }
    `}</style>
  </div>
