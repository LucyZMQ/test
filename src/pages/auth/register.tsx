// import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
// import useAuth from 'hooks/useAuth';
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/auth-forms/AuthRegister';
// import AuthRegisterWrapper from 'sections/auth/AuthRegister';
import { useIntl } from 'react-intl'


// ================================|| REGISTER ||================================ //


const Register = () => {
  // const { isLoggedIn } = useAuth();
  const intl = useIntl()
  

  return (
    <AuthWrapper>
      <Grid container spacing={3} style={{ width: '100%', marginLeft: '0px'}}>
        <Grid item xs={12} style={{paddingLeft: 0}}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">{intl.formatMessage({id: 'create_per_acc'})}</Typography>
            {/* <Typography
              component={Link}
              to={isLoggedIn ? '/auth/login' : '/login'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              Already have an account?
            </Typography> */}
          </Stack>
        </Grid>
        
        <Grid item xs={12} style={{padding: 0}}>
          <FirebaseRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Register;
