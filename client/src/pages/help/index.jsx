import React from 'react';
import { Link } from 'react-router-dom';
import styles from './helpPage.module.css'; 

const HelpPage = () => {
    return (
        <div className={styles.helpContainer}>
            <h1>Assgn App Help & FAQ</h1>
            <p>Welcome to the Help & FAQ page for the Assgn App. Here, you'll find answers to common questions and get assistance for using our app effectively.</p>
            
            <section className={styles.helpSection}>
                <h2>Getting Started</h2>
                <p>If you're new to Assgn, sign up in the login page which you can access by clicking the button on the top right of the home page</p>
            </section>

            <section className={styles.helpSection}>
                <h2>Placing an Errand</h2>
                <p>If you need help placing an errand, follow these steps:</p>
                <ol>
                    <li>Log in to your Assgn account.</li>
                    <li>Search for the errand you would like to get done.</li>
                    <li>Choose an assignee to run your errand</li>
                    <li>Add your phone number and any additional information</li>
                    <li>Select the assignee</li>
                </ol>
            </section>

            <section className={styles.helpSection}>
                <h2>Manually finding assignees</h2>
                <ol>
                    <li>Go to the "Assignees".</li>
                    <li>Find the errand you want to delegate.</li>
                    <li>Follow the steps above.</li>
                </ol>
            </section>

            <section className={styles.helpSection}>
                <h2>Contact Support</h2>
                <p>If you have any issues, you can contact the assign team on assignapp@gmail.com</p>
            </section>

            <p className={styles.backHome}><Link to="/">Back to Home</Link></p>
        </div>
    );
};

export default HelpPage;




