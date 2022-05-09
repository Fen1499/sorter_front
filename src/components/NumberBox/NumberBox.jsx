import "./NumberBox.css";

const NumberBox = (props) => {
  const { chunk } = props;

  console.log(chunk)
  return chunk?.map((nb, nb_idx) => (
    <div key={nb_idx} className="col-auto Number-box">
      {nb}
    </div>
  ));
};

export default NumberBox;
