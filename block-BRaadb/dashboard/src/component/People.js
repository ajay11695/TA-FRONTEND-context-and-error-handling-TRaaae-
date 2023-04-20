
import people from "../data/got.json";
import withSearch from "../HOC/WithSearch";

function People({searchTerm,handleChange}){
        let allPeople = people.reduce((acc, cv) => {
            acc = acc.concat(cv.people);
            return acc;
        }, []);

        let filteredPeople = allPeople.filter((person) =>
            person.name.toLowerCase().includes(searchTerm)
        );
        return (
            <div className="main-page">
                <div className="textalign">
                    <input
                        placeholder="Search people"
                        className=""
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
                <ul className="flex wrap evenly">
                    {filteredPeople.map((sp) => (
                        <SinglePerson {...sp} key={sp.name}/>
                    ))}
                </ul>
            </div>
        );
}

function SinglePerson(props) {
    return (
        <li className="card flex column justify-center align">
            <div className="info">
                <img src={props.image} alt={props.name} />
            </div>
            <h2 className="font-1 font-w textalign margin-t-1">{props.name}</h2>
            <p className="textalign margin-t-1">{props.description}</p>
            <a href={props.wikiLink} className="btn">Learn More!</a>
        </li>
    );
}

export default withSearch(People);