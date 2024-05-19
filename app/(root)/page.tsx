import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalaceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {

    const loggedIn = { firstName: 'Adrin'}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type="greeting"
                    title="welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext= "Access and manage your account and transanction efficently"
                    />
                    <TotalBalaceBox 
                    accounts= {[]}
                    totalBanks={1}
                    totalCurrentBalance = {1250.35 } 
                    />
                </header>
            </div>

        </section>
    )
}

export default Home;