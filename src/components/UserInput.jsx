export const UserInput = ({ onChangeInput, userInput }) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial'>Initial Investment</label>
          <input
            value={userInput.initiaInvestment}
            onChange={(e) => onChangeInput("initiaInvestment", e.target.value)}
            type='number'
            id='initial'
            required
          />
        </p>
        <p>
          <label htmlFor='annual'>Annual Investment</label>
          <input
            value={userInput.anualInvestment}
            onChange={(e) => onChangeInput("anualInvestment", e.target.value)}
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
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
            type='number'
            id='expected'
            required
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            value={userInput.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
            type='number'
            id='duration'
            required
          />
        </p>
      </div>
    </section>
  );
};
