// import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
// import useAuth from 'hooks/useAuth';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthForgotPassword from 'sections/auth/auth-forms/AuthForgotPassword';
// import AuthPasswordWrapper from 'sections/auth/AuthPassword';
import { useIntl } from 'react-intl'

// ================================|| FORGOT PASSWORD ||================================ //

const ForgotPassword = () => {
  
  const intl = useIntl()

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">{intl.formatMessage({id: 'forgot_password'})}</Typography>
            
          </Stack>
          <Typography variant="h6" style={{ color: '#8a8086', fontSize: '16px', marginTop: '10px'}}>{intl.formatMessage({id: 'forgot_pass_mess'})}</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <AuthForgotPassword />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ForgotPassword;
