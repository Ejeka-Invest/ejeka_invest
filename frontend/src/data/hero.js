import investImage from "../svgs/invest.svg";
import mobile from "../svgs/mobile.svg";
import guaranteeImage from "../svgs/guarantee.svg";
import { Link } from "react-router-dom";

export const invest = {
  header: <h1 className="heroSection__header">Ejeka Invest</h1>,
  body:
    "A platform that empowers you like never before, to make investments and get returns from those investments",
  button: <Link to="/signup/" exact className="heroSection__btn">Create an Account</Link>,
  image: investImage,
};
export const deposit = {
  header: <h1 className="heroSection__header">Easy Deposit</h1>,
  body: "Make one click deposits that are super fast and secure",
  image: mobile,
  flex: "row-reverse",
};
export const guarantee = {
  header: <h1 className="heroSection__header">Guaranteed Returns (ROI)</h1>,
  body: "We provide guaranteed returns on investments. It's in our DNA",
  image: guaranteeImage,
  imageWidth: "400px",
};
