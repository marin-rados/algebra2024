type Props = {
    onChange: (value: string) => void;
    value?:string;
}

const Input = ({onChange}: Props) => {
  return (
    <>
      <input value={} onChange={(e) => {onChange(e.target.value)}} type="text" className="input" placeholder="To do..." />
    </>
  );
};

export default Input;
