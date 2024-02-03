import { TextField, InputAdornment, Icon, IconButton } from '@mui/material';
import styles from './Username.module.css';

const Username = ({ username, pRIISMinputFieldPlacehold }) => {
  return (
    <div className={styles.username}>
      <div className={styles.passwordInputField}>
        <div className={styles.username1}>{username}</div>
      </div>
      <TextField
        className={styles.priisminputfield}
        placeholder={pRIISMinputFieldPlacehold}
        variant="outlined"
        sx={{
          '& fieldset': { borderColor: '#323232' },
          '& .MuiInputBase-root': {
            height: '39px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            fontSize: '12px',
          },
          '& .MuiInputBase-input': { color: '#878787' },
        }}
      />
    </div>
  );
};
export default Username;
