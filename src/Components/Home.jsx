import ints from "../ints.png";


function Home() {
    return (
        <div>
            <h1>Welcome to the Voting Site</h1>
            <img className="awards-image" src={ints} alt="Awards" />
            <p>Cast your vote for the Best Tutors below:</p>

            <j>For The Best Tutor Overall</j>
            <ul>
                <li>
                    Candidate 1 <button>Vote</button>
                </li>
                <li>
                    Candidate 2 <button>Vote</button>
                </li>
                <li>
                    Candidate 3 <button>Vote</button>
                </li>
            </ul>
            <j>For The New Tutor Of The Year</j>
            <ul>
                <li>
                    Candidate 1 <button>Vote</button>
                </li>
                <li>
                    Candidate 2 <button>Vote</button>
                </li>
                <li>
                    Candidate 3 <button>Vote</button>
                </li>
            </ul>
            <j>For The Best Online Tutor</j>
            <ul>
                <li>
                    Candidate 1 <button>Vote</button>
                </li>
                <li>
                    Candidate 2 <button>Vote</button>
                </li>
                <li>
                    Candidate 3 <button>Vote</button>
                </li>
            </ul>
            <j>For The Best In-Person Tutor</j>
            <ul>
                <li>
                    Candidate 1 <button>Vote</button>
                </li>
                <li>
                    Candidate 2 <button>Vote</button>
                </li>
                <li>
                    Candidate 3 <button>Vote</button>
                </li>
            </ul>
            <j>For The Best In Physical Sciences</j>
            <ul>
                <li>
                    Candidate 1 <button>Vote</button>
                </li>
                <li>
                    Candidate 2 <button>Vote</button>
                </li>
                <li>
                    Candidate 3 <button>Vote</button>
                </li>
            </ul>
            <j>For The Best In Mathematics</j>
            <ul>
                <li>
                    Candidate 1 <button>Vote</button>
                </li>
                <li>
                    Candidate 2 <button>Vote</button>
                </li>
                <li>
                    Candidate 3 <button>Vote</button>
                </li>
            </ul>

        </div>
    );
}

export default Home;