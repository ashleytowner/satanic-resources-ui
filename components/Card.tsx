import { ReactNode } from 'react';
import styles  from '../styles/Card.module.css';

function Card(props: { children: ReactNode[] }) {
  return <div className={styles.card}>
    {props.children}
  </div>
}

export default Card;
