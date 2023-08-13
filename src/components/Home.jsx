function Home() {
  return (
    <>
    <section className="intro">
        <h2>Welcome to Cartmon Online!</h2>
        <img src="#" alt="some image" />
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
            <img src="#" alt="another image" />
        </section>
        <section className="services">
            <h2>Previous</h2>
            <ol>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ol>
            <img src="#" alt="another image" />
        </section>
    </section>
    <section className="writeToUs">
        <h2>Write to Us</h2>
        <form>
            <input type="text" />
            <hr />
            <div className="btnContainer">
                <button type="submit">Submit</button>
                <button type="submit">Edit</button>
                <button type="submit">Reset</button>
            </div>
            </form>
    </section>
    </>
  )
}

export default Home