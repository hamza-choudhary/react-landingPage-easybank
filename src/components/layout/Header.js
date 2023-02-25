import Navigation from './Navigation'
import styles from './Header.module.css'
import mobileImg from '../../assets/images/image-mockups.png'

const Header = () => {
	return (
		<header>
			<Navigation />
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Next generation digital banking</h1>
					<p>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<button>Request Invite</button>
				</div>
				<div className={styles['header-img']}>
          <img src={mobileImg} alt="mobile-img" />
        </div>
			</div>
		</header>
	)
}

export default Header
