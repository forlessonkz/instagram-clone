import Footer from '@/components/Footer/Footer';
import Posts from '../../components/posts-list/posts';
import './profile.css';
import Link from 'next/link';

export default function profile() {
    return(
        <div className="profile-page">
            <div className='nav-bar-contaner'>
                <div className="nav-bar">
                    <div className="nav-container">
                        <div className="nav-logo">
                            <img src="/images/logo.png" alt=""/>
                        </div>
                        <div className="nav-list">
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/home.png" alt="" />
                                </div>
                                Home
                            </Link>
                            <Link href = "">
                                <div className="link-icon">
                                <img src="/images/icons/search.png" alt="" />
                                </div>
                                Search query
                            </Link>
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/interesting.png" alt="" />
                                </div>
                                Interesting
                            </Link>
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/reels.png" alt="" />
                                </div>
                                Reels
                            </Link>
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/message.png" alt="" />
                                </div>
                                Messagess
                            </Link>
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/notifications.png" alt="" />
                                </div>
                                Notifications
                            </Link>
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/add.png" alt="" />
                                </div>
                                Create
                            </Link>
                            <Link className = "profile-icon" href = ""> 
                                <div className="link-icon">
                                    <img src="/images/icons/profile-icon.png" alt="" />
                                </div>
                                Profile
                            </Link>
                        </div>
                        <div className="nav-bottom">
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/threads.png" alt="" />
                                </div>
                                Threads
                            </Link>
                            <Link href = "">
                                <div className="link-icon">
                                    <img src="/images/icons/burger-menu.png" alt="" />
                                </div>
                                More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-container">
                <div>
                    <div className="profile-header">
                        <div className="user-img">
                            <div className="user-avatar">
                                <img src="/images/user-image/001.webp" alt="" />
                            </div>
                        </div>
                        <div className="user-info">
                            <div className='user-profile'>
                                <div className="user-nik-name">samurai</div>
                                <div className="subscribe-btn">Subscribe</div>
                                <div className="send-maessage-btn">Send message</div>
                                <div className="recomendations-btn">
                                    <img src="/images/icons/add-user.png" alt="" />
                                </div>
                                <div className="menu-btn"><img src="/images/icons/dots-menu.png" alt="" /></div>
                            </div>
                            <div className="stats">
                                <div className="posts-iitem"><span>3</span> publications</div>
                                <div className="followers"><span>8 880</span> subscribers</div>
                                <div className="following"><span>58</span> subscribtions</div>
                            </div>
                            <ol className="about-user">
                                <li className="name">Johnny Silverhand</li>
                                <li className="profile-tagline">Personal blog</li>
                                <li className="link">wa.me/7058070114</li>
                            </ol>
                            <div className="some-subscribers">
                            Signed b <span>bestia p.palmer a.smesher</span>
                                <ol>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="posts-container">
                        <Posts />
                    </div>
                </div>
                    <Footer />
            </div>
        </div>
    )
}