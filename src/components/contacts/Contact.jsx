import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="specialHeader">contact</h2>
      <div className="container">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <form onClick={(e) => e.preventDefault}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
