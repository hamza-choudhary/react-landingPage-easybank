import styles from './Articles.module.css'
import currencyImg from '../../assets/images/image-currency.jpg'
import restaurantImg from '../../assets/images/image-restaurant.jpg'
import planeImg from '../../assets/images/image-plane.jpg'
import confettiImg from '../../assets/images/image-confetti.jpg'

const Articles = () => {
	return (
		<section className={styles.articles}>
      <h2>Latest Articles</h2>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles["card-img"]}>
						<img src={currencyImg} alt="card-img" />
					</div>
					<div className={styles.content}>
						<small>By Claire Robinson</small>
						<h5> Receive money in any currency with no fees</h5>
						<p>
							The world is getting smaller and we’re becoming more mobile. So
							why should you be forced to only receive money in a single …
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles["card-img"]}>
						<img src={restaurantImg} alt="card-img" />
					</div>
					<div className={styles.content}>
						<small>By Wilson Hutton</small>
						<h5> Treat yourself without worrying about money</h5>
						<p>
							Our simple budgeting feature allows you to separate out your
							spending and set realistic limits each month. That means you …
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles["card-img"]}>
						<img src={planeImg} alt="card-img" />
					</div>
					<div className={styles.content}>
						<small>By Wilson Hutton</small>
						<h5> Take your Easybank card wherever you go</h5>
						<p>
							We want you to enjoy your travels. This is why we don’t charge any
							fees on purchases while you’re abroad. We’ll even show you …
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles["card-img"]}>
						<img src={confettiImg} alt="card-img" />
					</div>
					<div className={styles.content}>
						<small>By Claire Robinson</small>
						<h5> Our invite-only Beta accounts are now live!</h5>
						<p>
							After a lot of hard work by the whole team, we’re excited to
							launch our closed beta. It’s easy to request an invite through the
							site ...
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Articles;

