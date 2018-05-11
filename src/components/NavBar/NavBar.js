import React from "react";
import "./NavBar.css";

// const styles = {
//     nav: {
//         height: "15vh",
//         display: "flex",
//         justifyContent: "space-between"
//     }
// };

export default () => (
    // <nav style={styles.nav}>
    <nav>
    <svg className="logo2" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none"><g fill="#FFF"><path d="M23.507 39.564h7.986V31.24c0-2.098-1.79-3.804-3.993-3.804-2.202 0-3.993 1.706-3.993 3.803v8.324zM33 41H22v-9.76c0-2.89 2.468-5.24 5.5-5.24 3.033 0 5.5 2.35 5.5 5.24V41z"></path><path d="M32.507 39.564h7.986V31.24c0-2.098-1.79-3.804-3.993-3.804-2.202 0-3.993 1.706-3.993 3.803v8.324zM42 41H31v-9.76c0-2.89 2.467-5.24 5.5-5.24s5.5 2.35 5.5 5.24V41z"></path><path d="M32 22.47c-4.703 0-8.53 3.827-8.53 8.53 0 4.703 3.827 8.53 8.53 8.53 4.703 0 8.53-3.827 8.53-8.53 0-4.703-3.827-8.53-8.53-8.53M32 41c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10"></path><path d="M29 31.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5M38 31.5c0 .828-.67 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5c.83 0 1.5.672 1.5 1.5"></path></g></g></svg>
    <p className="Design">DesignBetter.Co</p>
        <ul className="links">
            <li className="link">BOOKS</li>
            <li className="link">PODCAST</li>
            <li className="link">WORKSHOPS</li>
            <li className="link">CONVERSATIONS</li>
        </ul>
    </nav>
);