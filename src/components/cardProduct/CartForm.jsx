
const CartForm = () => {
    return (
      <div className="input__reg">
        <h3>Malumotlarni toldiring:</h3>
        <form action="">
          <input type="text" placeholder="To'liq ismingiz" />
          <input type="text" placeholder="+998 00-000-00-00" />
          <input type="text" placeholder="Manzilingiz" />
          <input type="text" placeholder="Habar yo'llash" />
          <div className="total">
            <p>Umumiy narx: </p>
            <p>Jami:</p>
          </div>
          <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
        </form>
      </div>
    );
  };
  
  export default CartForm;
  