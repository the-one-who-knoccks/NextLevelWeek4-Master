import styles from '../styles/components/Profile.module.css';


export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/54867997?s=460&u=64318f7a909463b539f64903d66ffe7c40fe1cd9&v=4" alt="Thiago Alves" />
      <div>
        <strong>Thiago Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level +1</p>
      </div>
    </div>
  )
}