import { useState } from 'react'

import styles from './Navigation.module.css'
import logoImg from '../../assets/images/logo.svg'
import hamburgerImg from '../../assets/images/icon-hamburger.svg'
import closeImg from '../../assets/images/icon-close.svg'

const Navigation = () => {
	const [showNav, setShowNav] = useState(false)

	const displayHandler = () => {
		setShowNav((state) => !state)
	}

	return (
		<nav>
			<div className={styles['sub-container']}>
				<img src={logoImg} alt="logo" />
				<div className={styles['cross-btn']} onClick={displayHandler}>
					{showNav ? (
						<img src={closeImg} alt="close" />
					) : (
						<img src={hamburgerImg} alt="hamburger" />
					)}
				</div>
			</div>

			<ul className={`${styles.links} ${showNav && styles['show-ul']}`}>
				<li>
					<a href="_#">Home</a>
				</li>
				<li>
					<a href="_#">About</a>
				</li>
				<li>
					<a href="_#">Contact</a>
				</li>
				<li>
					<a href="_#">Blog</a>
				</li>
				<li>
					<a href="_#">Careers</a>
				</li>
			</ul>
			<div className={styles['main-btn']}>
				<button>Request Invite</button>
			</div>
		</nav>
	)
}

export default Navigation
