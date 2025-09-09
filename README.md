# CitizenOne - Unified Government Services Demo
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/alilakkadghat/ACE_demo)

CitizenOne is a demo web application that showcases a unified portal for various government services. It provides a single, user-friendly interface for citizens to lodge complaints, book appointments, pay utility bills, and request official documents. The project features a modern, responsive "glassmorphism" design with a Node.js backend for handling phone verification.

## Features

-   **Unified Services Dashboard:** Access and manage complaints, appointments, documents, and bill payments from a single page.
-   **Interactive Service Forms:** Lodge complaints with file uploads, book appointments, and request various government documents.
-   **Phone Number Verification:** Secure user verification via SMS OTP, powered by a Node.js backend using the Twilio Verify API.
-   **User Profile Management:** A login and profile update system demonstrating user data handling.
-   **Supabase Integration:** The application is configured to connect to a Supabase backend for storing user information.
-   **Modern UI/UX:** A responsive design featuring a "glassmorphism" aesthetic, smooth animations, and a dark mode toggle.

## Technology Stack

-   **Frontend:** HTML5, CSS3, Vanilla JavaScript
-   **Backend:** Node.js, Express.js
-   **Database (BaaS):** Supabase
-   **Third-Party API:** Twilio (for SMS-based phone verification)

## Getting Started

To run this project locally, you will need a Node.js environment and API keys for Twilio and Supabase.

### Prerequisites

-   [Node.js](https://nodejs.org/)
-   A [Twilio account](https://www.twilio.com/try-twilio) with a configured Verify Service.
-   A [Supabase account](https://supabase.com/) with a project set up.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/alilakkadghat/ace_demo.git
    cd ace_demo
    ```

2.  **Install backend dependencies:**
    ```sh
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of the project by copying the example file:
    ```sh
    cp .env.example .env
    ```
    Open the `.env` file and add your credentials from Twilio.

    ```dotenv
    TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_VERIFY_SERVICE_SID=VAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    PORT=3000
    ```

4.  **Configure Supabase Client:**
    The phone verification feature (`profile.html`) attempts to save user data to Supabase. To make this work, you must edit the `supabase.js` file and replace the placeholder environment variable with your actual Supabase public key.

    In `supabase.js`, change this line:
    ```javascript
    const supabaseKey = process.env.SUPABASE_KEY
    ```
    to:
    ```javascript
    const supabaseKey = "your_supabase_public_anon_key"
    ```
    Ensure the `supabaseUrl` is also correct for your project.

5.  **Start the server:**
    This command starts the Express server which handles API calls for phone verification and serves the static frontend files.
    ```sh
    npm start
    ```

6.  **Access the application:**
    Open your web browser and navigate to `http://localhost:3000`.

### Important Notes

-   **Phone Verification:** The phone verification system on the `profile.html` page is handled by the backend server. It requires a running Node.js server and valid Twilio credentials in the `.env` file. Without this setup, the "Send OTP" and "Verify" features will not function correctly.
-   **API Keys:** The original `README.md` noted that Twilio API keys were not included. You must obtain your own keys for the verification functionality to work.
