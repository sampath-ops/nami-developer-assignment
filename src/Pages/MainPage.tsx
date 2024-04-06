import MobileFooter from "../components/MobileFooter";
import MobileNav from "../components/MobileNav";
import MainContainer from "../components/TasksoftheDay/MainContainer";
import DesktopNavBar from "../components/TopNav"
const MainPage = () => {
    return (
        <>
            <DesktopNavBar />
            <MobileNav />
            <MainContainer />
            <MobileFooter />
        </>
    );
}

export default MainPage;