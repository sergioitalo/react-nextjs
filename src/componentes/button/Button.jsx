import styles from './Button.module.css'

function Button ({children, className, onClick}) {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

Button.defaultProps = {
  className: styles.button
}



export default Button