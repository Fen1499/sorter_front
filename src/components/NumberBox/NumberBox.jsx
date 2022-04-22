import "./NumberBox.css";

const NumberBox = (props) => {
  const { chunk } = props;

  return chunk.map((nb, nb_idx) => (
    <div key={nb_idx} className="col-auto Number-box">
      {nb}
    </div>
  ));
};

export default NumberBox;
