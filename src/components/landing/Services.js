import styles from './Services.module.css'
import onlineBankImg from '../../assets/images/icon-online.svg'
import budgetImg from '../../assets/images/icon-budgeting.svg'
import onbaordImg from '../../assets/images/icon-onboarding.svg'
import apiImg from '../../assets/images/icon-api.svg'

const Services = () => {
	return (
		<section className={styles.services}>
			<div className={styles.heading}>
				<h2>Why choose Easybank?</h2>
				<p>
					We leverage Open Banking yo turn your bank account into your financial
					hub. <span>Control your finances like never before.</span>
				</p>
			</div>
			<div className={styles.container}>
				<div className={styles.service}>
					<img src={onlineBankImg} alt="online-banking" />
					<h3>Online Banking</h3>
					<p>
						Our modern web and mobile applications allow you to keep track of
						your finances wherever you are in the world.
					</p>
				</div>
				<div className={styles.service}>
					<img src={budgetImg} alt="simple-budget" />
					<h3>Simple Budgeting</h3>
					<p>
						See exactly where your money goes each month. Receive notifications
						when you’re close to hitting your limits.
					</p>
				</div>
				<div className={styles.service}>
					<img src={onbaordImg} alt="fast-onboarding" />
					<h3>Fast Onboarding</h3>
					<p>
						We don’t do branches. Open your account in minutes online and start
						taking control of your finances right away.
					</p>
				</div>
				<div className={styles.service}>
					<img src={apiImg} alt="open-api" />
					<h3>Open API</h3>
					<p>
						Manage your savings, investments, pension, and much more from one
						account. Tracking your money has never been easier.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Services
