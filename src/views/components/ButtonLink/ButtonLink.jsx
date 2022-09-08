import './ButtonLink.css'

const ButtonLink = ({ href, children, second = false }) => {
  const data = second ? 'inverted' : 'normal'
  return (
    <a data-type={data} className='button' href={href}>{children}</a>
  )
}

export default ButtonLink
