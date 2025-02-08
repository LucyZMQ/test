// import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
// import useAuth from 'hooks/useAuth';
import AuthWrapper from 'sections/auth/AuthWrapper';
// import AuthPasswordWrapper from 'sections/auth/AuthPassword';
import { useIntl } from 'react-intl'
import AuthForgotUsername from 'sections/auth/auth-forms/AuthForgotUsername';

// ================================|| FORGOT PASSWORD ||================================ //

const ForgotUsername = () => {
  
  const intl = useIntl()

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">{intl.formatMessage({id: 'forgot_username'})}</Typography>
            
          </Stack>
          <Typography variant="h6" style={{ color: '#8a8086', fontSize: '16px', marginTop: '10px'}}>{intl.formatMessage({id: 'forgot_user_mess'})}</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <AuthForgotUsername />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ForgotUsername;
