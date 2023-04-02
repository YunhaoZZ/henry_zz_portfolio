// import { Router } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import Sidebar from '../../components/SideBar';
import './index.scss';


const Blog = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="blog-home">
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </div>

    )
}

export default Blog