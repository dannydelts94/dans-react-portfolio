import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Coded with ♥</strong> - by{" "}
                    <a href="https://www.instagram.com/dan_rescigno?igshid=YmMyMTA2M2Y" target="_blank" rel="noreferrer">
                        Dan Rescigno
                    </a>
                    .
                    <hr />
                    <a
                        href="https://www.linkedin.com/in/drescigno/"
                        target="_blank" rel="noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    |{" "}{" "}
                    <a href="https://github.com/dannydelts94" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;