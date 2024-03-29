import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
  const avatar = hasBorder ? styles.avatarWithBorder : styles.avatar

  return (<img className={avatar} src={src} />)
}