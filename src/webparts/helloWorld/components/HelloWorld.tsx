import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { useState } from 'react'



const HelloWorld = ({ description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName, message, test, test1, test2, test3, title }: IHelloWorldProps) => {

  const [counter, setCounter] = useState(0)


  const add = () => {
    setCounter(counter + 1)
  }

  const subtract = () => {
    setCounter(counter - 1)
  }


  return (
    <section className={`${styles.helloWorld} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
        <h3>Page Title: {title}</h3>
        <h2>Well done, {escape(userDisplayName)}!</h2>
        <div>{environmentMessage}</div>
        <div>Web part property value: <strong>{escape(description)}</strong></div>
        <p>${escape(test)}</p>
        <p>${test1}</p>
        <p>${escape(test2)}</p>
        <p>${test3}</p>
        <div>Counter: <strong>{counter}</strong></div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <h3>{message}</h3>

      </div>

    </section>
  );
}

export default HelloWorld;