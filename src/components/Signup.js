import { Button } from '@mui/material';
import Username from '../components/Username';
import PasswordFieldGroup from '../components/PasswordFieldGroup';
import styles from './Signup.module.css';

const Signup = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.usernameInputGroupWrapper}>
        <div className={styles.usernameInputGroup}>
          <div className={styles.solidbg}>
            <b className={styles.priism}>PRIISM</b>
            <img
              className={styles.vectorArrowIcon}
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className={styles.wrapperGroup5}>
            <img
              className={styles.wrapperGroup5Child}
              loading="eager"
              alt=""
              src="/group-5.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.secondaryFrame}>
        <div className={styles.signUpFrame}>
          <div className={styles.labelFrame}>
            <form className={styles.signup1}>
              <div className={styles.topheader}>
                <div className={styles.signintxt}>
                  <h1 className={styles.signUp}>Sign up</h1>
                </div>
              </div>
              <div className={styles.inputfields}>
                <Username
                  username="Username"
                  pRIISMinputFieldPlacehold="Username"
                />
                <Username
                  username="Enter your email address"
                  pRIISMinputFieldPlacehold="Email address"
                />
                <PasswordFieldGroup enterYourPassword="Enter your password" />
                <PasswordFieldGroup
                  enterYourPassword="Confirm password"
                  propHeight="unset"
                />
              </div>
              <Button
                className={styles.mainbuttons}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: 'none',
                  color: '#fff',
                  fontSize: '14',
                  background: '#1971c2',
                  borderRadius: '8px',
                  '&:hover': { background: '#1971c2' },
                  height: 40,
                }}
              >
                Sign up
              </Button>
              <div className={styles.noaccount}>
                <div className={styles.alreadyHaveAnContainer}>
                  <span
                    className={styles.alreadyHaveAn}
                  >{`Already have an Account ? `}</span>
                  <span className={styles.signIn}>Sign in</span>
                </div>
              </div>
            </form>
          </div>
          <img
            className={styles.logo1Icon}
            loading="eager"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
export default Signup;
