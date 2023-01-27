import {
  SaveAddButton,
  EditCloseIcon,
  DeleteButton,
  UpDownButtons,
} from "icse-react-assets";

function ButtonsExample() {
  return (
    <div className="App">
      <div style={{ marginLeft: "100px" }}>
        <SaveAddButton
          hoverText="SaveAddButton Hover Text"
          type="add"
          className="icseButtonClass"
          onClick={(event) => {
            console.log(event);
          }}
          disabled={false}
        />
        <EditCloseIcon
          hoverText="SaveAddButton Hover Text"
          type="edit"
          disabled={false}
          open={false}
        />
        <DeleteButton
          name="icseButtonClass"
          onClick={(event) => {
            console.log(event);
          }}
          disabled={false}
        />
        <UpDownButtons
          name="icseButtonClass"
          handleCardUp={(event) => {
            console.log(event);
          }}
          handleCardDown={(event) => {
            console.log(event);
          }}
          disableUp={false}
          disableDown={false}
        />
      </div>
    </div>
  );
}

export default ButtonsExample;
