import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.allParas}>
      <h1 className={styles.heading}>Scheduler</h1>
      <p className={styles.about}>
        <em>
          <b>Scheduler</b>
        </em>{" "}
        is a mobile friendly responsive web application that offers a
        fucntionality to save user customized future tasks. The
        application offers one stop to create a list of tasks with an added
        fucntionality of associating tasks with date and time which can prove
        helpful.
      </p>
      <p className={styles.about}>
        <em>
          <b>Scheduler</b>
        </em>{" "}
        offers essential features to create, save, edit and delete tasks thus offering a
        secure and complete control based on user's needs. Guess its time to leave behind the old days of making
        paper notes and embrace{" "}
        <em>
          <b>Scheduler </b>
        </em>
        that can be used from one's favorite tablets, phones or computers
        equally.
      </p>
    </div>
  );
};

export default About;
