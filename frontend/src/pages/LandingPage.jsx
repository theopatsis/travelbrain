import { Link } from "react-router-dom";
import { useState } from 'react';

function LandingPage() {

    return (
        <div>
            <h1 className="text-4xl">TravelBrain.</h1>
            <h2>Your lastminute travel companion.</h2>
            <Link to='/register'>Register here!</Link>
        </div>
    )
}

export default LandingPage