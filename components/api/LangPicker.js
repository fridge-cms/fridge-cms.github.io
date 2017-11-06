export default ({ langs, value, onChange }) =>
  <div>
    {langs.map(lang =>
      <a
        key={lang.value}
        onClick={() => onChange(lang.value)}
        className={lang.value === value ? 'active' : ''}
      >{lang.name}</a>
    )}
    <style jsx>{`
      div {
        background: #393939;
        position: fixed;
        top: 0;
        right: 0;
        left: 50%;
        margin-left: 160px;
      }

      a {
        color: white;
        cursor: pointer;
        display: inline-block;
        padding: 4px 10px;
        text-transform: uppercase;
        font-size: 0.8em;

        &.active {
          background: #292929;
        }
      }
    `}</style>
  </div>
