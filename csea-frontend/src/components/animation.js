import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './styles.module.css'

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

class MyComponent extends React.Component {
  handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.state = !this.state
    }
  }
}

export default function Animation() {
  const [open, set] = useState(true)
  return (
    <div className={styles.container} onClick={() => set(state => !state)} >
      <Trail open={open}>
        <span>Welcome</span>
        <span>To</span>
        <span>CSEA</span>
      </Trail>
      </div>
  )
}