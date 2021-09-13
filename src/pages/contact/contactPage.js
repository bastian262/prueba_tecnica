import React from 'react';
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import PhoneIcon from '@material-ui/icons/Phone';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import NearMeIcon from '@material-ui/icons/NearMe';
import WatchLaterIcon from '@material-ui/icons/WatchLater';const ContactPage = () => {
    return (
        <>
            <div className="fondo">
                <Navbar />

                <div class="container">
                    <div class="title">
                        <div>
                            <strong>RNABHAR</strong>
                            <div></div>
                            <span>KOHTAKTbl</span>
                        </div>
                        <h2>KOHTAKTbl</h2>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <div class="option">
                                <NearMeIcon className="icon" />
                                <span>Anpec</span>
                            </div>
                            <span>Poccnr, <strong>Gombwar Cepmyxobckar, 44,</strong> </span>
                            <span>Mocba, 115093</span>
                            <div class="option">
                                <PhoneIcon className="icon" />
                                <span>Teneooh</span>
                            </div>
                            <span><strong>+7 (495) 137-77-45</strong></span>
                            <div class="option">
                                <WatchLaterIcon className="icon" />
                                <span>Bpemr paootbl</span>
                            </div>
                            <span><strong>10:00 - 20:00</strong></span>
                            <div class="option">
                                <MarkunreadIcon className="icon" />
                                <span>3nektpohhar moyta</span>
                            </div>
                            <span className="sub">info@ventasdistribution.ru</span> 
                            <span className="sub">order@ventadistribution.ru</span> 
                        </div>
                        <div class="col-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426000.96512901265!2d-70.91002430419223!3d-33.47189989735012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1631462474622!5m2!1ses-419!2scl" allowfullscreen="" loading="lazy" title="unique"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default ContactPage;