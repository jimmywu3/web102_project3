import './Card.css'
import { useState } from 'react'

const Card = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`card${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-label={flipped ? 'Show front' : 'Show back'}
    >
      <div className="cardInner">
        <div className="cardFace cardFront">{front}</div>
        <div className="cardFace cardBack">{back}</div>
      </div>
    </button>
  )
}

export default Card
