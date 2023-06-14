/** DropDown function
 *
 * retrieve data and display it in a dropdown menu
 *
 * @param {object} props
 * @returns {object} dropdown menu
*/
function Dropdown(props) {
  return (
    <select
      className="dropdown-input"
      onChange={(e) => {
        props.result(e.target.value);
      }}
    >
      {props.options.map((item) => {
        return (
          <option className="dropdown-item" key={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
