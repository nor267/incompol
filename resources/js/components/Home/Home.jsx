import banner from "../../../images/fake/home/banner.webp";
import Navbar from "../Layout/Navbar";

export default function Home() {
    return (
        <div className="relative">
            <img src={banner} className="object-cover w-full"></img>
            <Navbar />
        </div>
    );
}
