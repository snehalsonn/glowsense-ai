import { Link } from "react-router-dom";

export default function ScannerPreview(){

    return(

        <section className="scanner-preview">

            <h2>AI Face Scanner</h2>

            <p>

                Upload a selfie and let AI detect

                acne,

                pigmentation,

                dark spots,

                wrinkles,

                oily skin,

                dry skin,

                blackheads,

                and more.

            </p>

            <Link to="/scanner">

                <button className="primary-btn">

                    Try AI Scanner

                </button>

            </Link>

        </section>

    );

}