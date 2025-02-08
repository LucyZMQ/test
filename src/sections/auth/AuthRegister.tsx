import { ReactNode, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// material-ui
import { Box, Button, ButtonProps, ClickAwayListener, Grid, Grow, MenuItem, MenuList, Paper, Popper, Stack, styled, Typography } from '@mui/material';

// project import
// import AuthFooter from 'components/cards/AuthFooter';
import Logo from 'components/logo';
import loginPng from 'assets/images/createAccountpng.webp'
import { useIntl } from 'react-intl'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import localIcon from 'assets/images/icons/localIcon.svg'
import useConfig from 'hooks/useConfig';
import AuthCardReg from './AuthCardReg';

// assets
// import AuthBackground from 'assets/images/auth/AuthBackground';

interface Props {
  children: ReactNode;
}

const TabButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#6c3cd0',
  boxShadow: 'none',
  borderRadius: '15px',
  padding: '8px 15px',
  backgroundColor: '#e1ddfa',
  '&:hover': {
    backgroundColor: '#d2c3fa',
    color: '#7e32f6',
  },
  '&:active': {
    backgroundColor: '#d2c3fa',
    color: '#7e32f6',
  },
  '&:after': {
    boxShadow: 'none'
  },
}));

type localType = {
  local: string
  text: string
}
// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthRegisterWrapper = ({ children }: Props) => {
  const intl = useIntl()

  const {i18n, onChangeLocalization} = useConfig()

  const [checkTime, setCheckTime] = useState<localType>(i18n == 'zh' ? {
    local:"zh", text: '中文'
  } : {local:"en", text: 'U.S.English'})

  const locals: localType[] = [
    {local:"zh", text: '中文'},
    {local: 'en', text: 'U.S.English'}

    // { time: '30 Days' },
    // { time: '7 Days' },
    // { time: '24 Hours' }
  ]
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false)
    } else if (event.key === "Escape") {
      setOpen(false)
    }
  }

  

  console.log('i18n', i18n)

  const onChangeNework = (value: any, event?: any) => {
    onChangeLocalization(value.local)
    setCheckTime(value)
    handleClose(event)
  }

  const navigate = useNavigate()

  const goRegset = () => {
    navigate('/login')
  }
  return (
    (
      <Box sx={{ minHeight: '100vh' }}>
        {/* <AuthBackground /> */}
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          sx={{
            minHeight: '100vh',
            background: '#f6f5fa'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
    
            <img src={loginPng} style={{ width: '800px', height: `${window.innerHeight - 5}px`}}/>
    
            <div style={{ width: '100%' }}>
            <Grid item xs={12} sx={{ ml: 3, mt: 3, display: 'flex', justifyContent: 'space-between', marginRight: '24px' }}>
            <Logo />
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <Box>
                <Button sx={{ backgroundColor: '#ebeaf0', fontSize: '14px', padding: '7px 15px 6px 15px', color: '#6f6f6f', fontWeight: 700, borderRadius: '100px', '&:hover': { backgroundColor: '#ebeaf0', color: '#6f6f6f', boxShadow: 'none' }, "&::after": { boxShadow: 'none' }, '&:active': { backgroundColor: '#ebeaf0', color: '#6f6f6f', border: 0, boxShadow: 'none', zIndex: 100, outline: '0px solid #fff' }, '&:focus': { backgroundColor: '#ebeaf0', boxShadow: 'none', color: '#6f6f6f', border: 0, outline: '0px solid #fff' } }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                startIcon={<img src={localIcon}/>}
                endIcon={<KeyboardArrowDownIcon style={{ fontWeight: 600, fontSize: '20px' }} />}
                
                >
                  {checkTime.text}

                </Button>
                <Popper
                            sx={{ zIndex: 100 }}
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                          >
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                style={{
                                  transformOrigin:
                                    placement === "bottom-start" ? 'left top' : 'left bottom'
                                }}
                              >
                                <Paper sx={{ borderRadius: '8px', padding: '0px', marginTop: '10px', width: '130px', zIndex: 100 }}>
                                  <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                      autoFocusItem={open}
                                      id="composition-menu"
                                      aria-labelledby="composition-button"
                                      onKeyDown={handleListKeyDown}
                                      sx={{ padding: 0 }}
                                    >
                                      {
                                        locals.map((item) => {
                                          return (
                                            <MenuItem sx={{ padding: '12px 10px 12px 12px', "&:hover": { backgroundColor: '#f6f6f6', color: '#6f6f6f' } }} onClick={(event) => onChangeNework({ local: item.local, text: item.text }, event)} disableRipple key={item.local}>
                                              <Stack direction="row" key={item.local} spacing="24px" sx={{ alignItems: "center", justifyContent: "start" }}>

                                                <Box sx={{ fontSize: '16px', color: '#6F6F6F', fontWeight: 600, }}>
                                                  {item.text}
                                                </Box>
                                              </Stack>
                                            </MenuItem>

                                          )
                                        })
                                      }
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>

                              </Grow>
                            )}

                          </Popper>

              </Box>
              <TabButton onClick={goRegset} style={{ borderRadius: '10px', marginLeft: '10px'}}>
                {intl.formatMessage({id: "sign_in"})}
              </TabButton>
            </div>
          </Grid>
          <Grid item xs={12} >
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)', display: 'flex', flexDirection: 'column' } }}
            >
              <Grid item>
                <AuthCardReg style={{borderRadius: '20px', margin: '10px' }}>{children}</AuthCardReg>
              </Grid>
              <div style={{ display: 'flex', alignItems: 'center', width: '425px'}}>
        <Typography
                component={Link}
                to={'/'}
                variant="body1"
                sx={{ textDecoration: 'none', color: '#686b82' }}
                
              >
                {intl.formatMessage({id: 'privacy'})}
                
              </Typography>
              <Typography
                component={Link}
                to={'/'}
                variant="body1"
                sx={{ textDecoration: 'none', marginLeft: '10px', color: '#686b82' }}
              >
                {intl.formatMessage({id:'terms'})}
                
              </Typography>
        </div>
              
              
            </Grid>
            
            
          </Grid>
          
            </div>
            
    
          </div>
          {/* <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
            <AuthFooter />
          </Grid> */}
        </Grid>
      </Box>
    )
  )
};

export default AuthRegisterWrapper;
