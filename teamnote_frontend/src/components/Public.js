import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">teammote</span></h1>
            </header>
            <main className="public__main">
                <p>A concise note management tool for your team.</p>
                <address className="public__addr">
                    Streamlined Workflow<br />
                    Transparent teamspaces<br />
                    Brainstorm <br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public