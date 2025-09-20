import { useState } from "react";

export const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initiaInvestment: 10000,
    anualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial'>Initial Investment</label>
          <input
            value={userInput.initiaInvestment}
            onChange={(e) => handleChange("initiaInvestment", e.target.value)}
            type='number'
            id='initial'
            required
          />
        </p>
        <p>
          <label htmlFor='annual'>Annual Investment</label>
          <input
            value={userInput.anualInvestment}
            onChange={(e) => handleChange("anualInvestment", e.target.value)}
            type='number'
            id='annual'
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected'>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
            type='number'
            id='expected'
            required
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
            type='number'
            id='duration'
            required
          />
        </p>
      </div>
    </section>
  );
};
