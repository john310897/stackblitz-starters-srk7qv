import { useMemo } from 'react';
import { TextField, InputAdornment, Icon, IconButton } from '@mui/material';
import styles from './Password.module.css';

const PasswordFieldGroup = ({ enterYourPassword, propHeight }) => {
  const passwordFieldGroupStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);
  return (
    <div className={styles.passwordFieldGroup} style={passwordFieldGroupStyle}>
      <div className={styles.enterYourPasswordWrapper}>
        <div className={styles.enterYourPassword}>{enterYourPassword}</div>
      </div>
      <TextField
        className={styles.passwordfield}
        placeholder="Password"
        variant="outlined"
        InputProps={{
          endAdornment: <img width="15px" height="12.1px" src="/group.svg" />,
        }}
        sx={{
          '& fieldset': { borderColor: '#323232' },
          '& .MuiInputBase-root': {
            height: '39px',
            backgroundColor: '#fff',
            paddingRight: '20px',
            borderRadius: '8px',
            fontSize: '12px',
          },
          '& .MuiInputBase-input': { color: '#878787' },
        }}
      />
      <div className={styles.mainButtons} />
    </div>
  );
};
export default PasswordFieldGroup;
