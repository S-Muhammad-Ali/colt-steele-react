function handleFormSubmit(evt) {
  evt.preventDefault();
}

function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}

export { Form };
1411;
