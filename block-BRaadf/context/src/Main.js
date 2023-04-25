import { useAuth } from "./UserContext"

function Main(){
    let {user,toggle}=useAuth()
    return (
        <section className="flex container">
          <div className="flex-50">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <button onClick={toggle}>Theme Mode</button>
          </div>
          <figure className="flex-50">
            <img src={user.image} alt={user.name}/>
          </figure>
        </section>
    )
}

export default Main