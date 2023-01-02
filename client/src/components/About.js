import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.allParas}>
      <p className={styles.about}>
        <em>
          <b>Scheduler</b>
        </em>{" "}
        is a mobile friendly responsive web application that offers a
        fucntionality to save the tasks that needs to be done in the future. The
        application offers one stop to create a list of tasks with an added
        fucntionality of associating tasks with date and time which can prove
        helpful to users.
      </p>
      <p className={styles.about}>
        <em>
          <b>Scheduler</b>
        </em>{" "}
        offers essential features to create, save, edit and delete tasks thus offering a
        secure and complete control based on user's needs. The time has come to leave behind the old days of making
        paper notes and embrace the power of{" "}
        <em>
          <b>Scheduler </b>
        </em>
        that can be used through your favorite tablets, phones or computers
        equally.
      </p>
    </div>
  );
};

export default About;
