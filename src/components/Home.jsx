function Home() {
  return (
    <>
    <section className="intro">
        <h2>Welcome to Cartmon Online!</h2>
        <img className="homeImage" src="/intro.jpg" alt="Cart" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel, cum officiis id dignissimos asperiores!</p>
        
    </section>
    <section className="intermediary">
        <section className="services">
            <h2>Services</h2>
            <ol>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ol>
            <img className="homeImage" src="/checkout.jpg" alt="another image" />
        </section>
        <section className="services">
            <h2>Previous</h2>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
            <img className="homeImage" src="/checkout.jpg" alt="another image" />
        </section>
    </section>
    <section className="writeToUs">
        <form>
            <textarea className="userInput" rows="4" cols="4" placeholder="Write to us..."></textarea>
            <hr />
            <div className="btnContainer">
                <button onClick={(e) => e.preventDefault()} type="submit">Submit</button>
                <button onClick={(e) => e.preventDefault()} type="submit">Edit</button>
                <button onClick={(e) => e.preventDefault()} type="submit">Reset</button>
            </div>
            </form>
    </section>
    </>
  )
}

export default Home