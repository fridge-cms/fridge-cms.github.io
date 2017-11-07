export const Param = ({ name, children, extra = null, required = false }) =>
  <tr>
    <td className='label'>
      {name}
      {required && <span className='required'>REQUIRED</span>}
      {extra && <span>{extra}</span>}
    </td>
    <td>{children}</td>
    <style jsx>{`
      tr {
        border-bottom: 1px solid #dfdfdf;
      }

      td {
        padding: 0.5rem;
        vertical-align: top;
      }

      .label {
        font-weight: 700;
        width: 180px;
        text-align: right;
        padding-right: 1rem;

        span {
          display: block;
          font-size: .9em;
          font-weight: 400;
        }

        .required {
          color: orange;
        }
      }
    `}</style>
  </tr>

export const Params = ({ children }) =>
  <table>
    <tbody>
      {children}
    </tbody>
    <style jsx>{`
      table {
        border-collapse: collapse;
        border-top: 1px solid #d3d3d3;
        font-size: 0.85rem;
        margin-bottom: 1rem;
        width: 49%;
      }
    `}</style>
  </table>
