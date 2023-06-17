# Dropdown Menu

This is a simple react component for a dropdown menu input.

## Installation

The package can be installed via [npm]:

```
npm i dropdown-react-input-menu-1

```

## Configuration

You can use the Dropdown with:

```js
const Example = () => {
  const [dropdownValue, setDropDownValue] = useState("");

  const data =[
    {id: 1, name: "dataExample1"},
    {id: 2, name: "dataExample2"},
    {id: 3, name: "dataExample3"},
    ...
  ]

  return (
    <Dropdown
      className="exemple-class"
      result={(value) => {
        setDropDownValue(value);
      }}
      options={data}
      aria-label="dropdown"
    />
  );
};
```
