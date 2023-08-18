function Home() {
  return (
    <>
    <section className="intro">
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to <br /> 
            Cartmon Services!</h2>
        
        <img className="homeImage" src="/intro.jpg" alt="Cart" />
        
        <p className="imageText">Your one stop hub for easy and convenient e-commerce!</p>
        
    </section>
    <section className="intermediary">
        <section className="services">
            <h2>Services</h2>
            <ol>
                <li>FakeStore API</li>
                <li>Immediate Checkout</li>
                <li>Responsive</li>
            </ol>
        </section>
        <section className="services">
            <h2>Previous</h2>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </section>
    </section>
    <section className="writeToUs">
        <form>
            <textarea className="userInput" rows="4" cols="4" placeholder="Write to us..."></textarea>
            <hr />
            <div className="btnContainer formButtons">
                <button className="formButton" onClick={(e) => e.preventDefault()} type="submit">Submit</button>
                <button className="formButton" onClick={(e) => e.preventDefault()} type="submit">Edit</button>
                <button className="formButton" onClick={(e) => e.preventDefault()} type="submit">Reset</button>
            </div>
            </form>
    </section>
    </>
  )
}

export default Home