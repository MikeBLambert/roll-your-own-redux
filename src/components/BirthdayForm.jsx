const Birthday = ({ isSubmitDisabled, birthday, updateBirthday, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            name="birthday"
            id="birthday"
            value={birthday?.value}
            onChange={({ target: { value } }) => updateBirthday(value)}
            type="date"
          />
        </div>
        <button type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
      {birthday?.error && <div>{birthday?.error}</div>}
      {birthday?.isLoading && <div>Validating birthday...</div>}
    </>
  );
};

export default Birthday;
