import React from 'react'

function Doctors() {
    return (

        <div className="container LoginCard">
            <h1>Our Doctors</h1>
            <div className="row">
                <div className="container col-lg-3 thumbnail rounded FooterCard border">
                    <h1>Cardiologist</h1>
                    <br />
                    <img src="https://www.pngitem.com/pimgs/m/455-4554771_doctor-png-female-doctor-transparent-background-png-download.png" height="200px" width="240px" />
                    <p className="p">Dr.Julia Robert</p>
                </div>
                <div className="container col-lg-3 thumbnail rounded FooterCard border">
                    <h1>Neurologists</h1>
                    <br />
                    <img src="https://www.pngitem.com/pimgs/m/193-1939059_indian-doctor-png-download-indian-doctor-images-png.png" height="200px" width="240px" />
                    <p className="p">Dr.Bal Chand Kumar</p>

                </div>
                <div className="container col-lg-3 thumbnail rounded FooterCard border">
                    <h1>Physician</h1>
                    <br />
                    <img src="https://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/02/04/Screen_Shot_2016-02-04_at_6.52.32_PM_t580.png?8f1b5874916776826eb17d7e67de7278c987ca33" height="200px" width="240px"></img>
                    <p className="p">Dr.Chris Albert</p>
                </div>
                <div className="container col-lg-3 thumbnail rounded FooterCard border">
                    <h1>Orthodontist</h1>
                    <br />
                    <img src="https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg" height="200px" width="240px"></img>
                    <p className="p">Dr.Peter Parker</p>
                </div>

            </div>

        </div>
    )
}
export default Doctors