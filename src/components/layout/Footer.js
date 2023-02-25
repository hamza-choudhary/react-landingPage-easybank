import styles from './Footer.module.css'
import logoImg from '../../assets/images/logo.svg'
import fbIcon from '../../assets/images/icon-facebook.svg'
import ytIcon from '../../assets/images/icon-youtube.svg'
import twitterIcon from '../../assets/images/icon-twitter.svg'
import pinterestIcon from '../../assets/images/icon-pinterest.svg'
import instaIcon from '../../assets/images/icon-instagram.svg'

const Footer = () => {
	return (
		<footer>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.introductory}>
						<div className={styles.logo}>
							<img src={logoImg} alt="logo" />
						</div>
						<ul className={styles["social-links"]}>
							<li>
								<a href="#_">
									<img src={fbIcon} alt="fb" />
								</a>
							</li>
							<li>
								<a href="#_">
									<img src={ytIcon} alt="fb" />
								</a>
							</li>
							<li>
								<a href="#_">
									<img src={twitterIcon} alt="fb" />
								</a>
							</li>
							<li>
								<a href="#_">
									<img src={pinterestIcon} alt="fb" />
								</a>
							</li>
							<li>
								<a href="#_">
									<img src={instaIcon} alt="fb" />
								</a>
							</li>
						</ul>
					</div>
					<ul className={styles['page-links']}>
						<li>
							<a href="#_">About us</a>
						</li>
						<li>
							<a href="#_">Contact</a>
						</li>
						<li>
							<a href="#_">Blog</a>
						</li>
					</ul>
					<ul className={styles['page-links']}>
						<li>
							<a href="#_">Careers</a>
						</li>
						<li>
							<a href="#_">Support</a>
						</li>
						<li>
							<a href="#_">Privacy Policy</a>
						</li>
					</ul>
				</div>
				<div className={styles["request-btn"]}>
					<button >Request Invite</button>
					<p>© Easybank. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
