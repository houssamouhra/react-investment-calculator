export const UserInput = () => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label for='initial'>Initial Investment</label>
          <input type='number' id='initial' required />
        </p>
        <p>
          <label for='annual'>Annual Investment</label>
          <input type='number' id='annual' required />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label for='expected'>Expected Return</label>
          <input type='number' id='expected' required />
        </p>
        <p>
          <label for='duration'>Duration</label>
          <input type='number' id='duration' required />
        </p>
      </div>
    </section>
  );
};
