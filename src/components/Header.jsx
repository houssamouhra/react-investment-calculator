import investmentImg from "@/assets/investment-calculator-logo.png";

export const Header = () => {
  return (
    <header id='header'>
      <img src={investmentImg} alt='money bag image' />
      <h1>Investment Calculator</h1>
    </header>
  );
};
