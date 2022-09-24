import Listado from "../components/Listado";
import Menu from "../components/Menu";
import "../styles/HomeAdmin.css"

function HomeAdmin() {
    return (
      <div className="containerHome">
        <div>
            <Menu title="EcomAdmins"/>
        </div>
       <Listado admin={true}/>
      </div>
    );
  }

export default HomeAdmin
