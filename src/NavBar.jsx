import './Project.css'
// import './assets/polygon logo.svg'

const NavBar = ()=>{
    return (
        <section>

    <nav className="NAVNAV">
        <div className="NAV">
            <div>
                <div className="NAVA">
                    <div><img src= "./assets/polygon logo.svg" alt="polygon logo"/></div>
                    <div>polygon</div>
                </div>




            </div>


            <div>
                <div className="NAVB">
                    <a href="#">Solutions</a>
                    <a href="#">Developers</a>
                    <a href="#">Community</a>
                    <a href="#">Resources</a>
                    <a href="#">Company</a>
                    <a href="#">Use Polygon</a>
                </div>

            </div>


            <div>
                <div className="NAVC">
                    <div><img  id="imgg" src="./Assets/122.png" alt="twitter logo"/></div>
                    <div class="image2"><img src="./Assets/discord.svg" alt=""/></div>
                    <div>
                        <button class="">Built on polygon</button>
                    </div>


                </div>


            </div>




        </div>




    </nav>

</section>
    )
}
export default NavBar