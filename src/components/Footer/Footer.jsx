import './style.css'

const Footer = () => {
    const currentYear = new Date().getFullYear().toString()

    return (
        <footer>
            <p>
                Daniel Saavedra <span>&#169;</span>
                <span>{currentYear}</span>
            </p>
            <a
                href="https://github.com/kiudev/button-customizer"
                target="_blank"
                rel="noreferrer"
            >
                <svg
                    className="github-logo"
                    width="60"
                    height="60"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#E8E8E8"
                    name="Github"
                >
                    <path
                        d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </a>
        </footer>
    )
}

export default Footer
