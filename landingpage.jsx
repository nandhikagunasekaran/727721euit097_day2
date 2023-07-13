import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Card from '@mui/material/Card';1
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Link as Defpath} from 'react-router-dom';
import image from './job.jpg';




const pages = ['Joblistings' ,'Schedule', 'Chat'];
const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login', path: '/signin' }];

function Landingpage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
 
  };
 


  return (
    <><><AppBar position="static">
          <Container maxWidth="xl">
              <Toolbar disableGutters>
                  <WorkHistoryTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                  <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                          mr: 2,
                          display: { xs: 'none', md: 'flex' },
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                      }}
                  >
                      JOBHUB
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                      >
                          <MenuIcon />
                      </IconButton>
                      <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                          }}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{
                              display: { xs: 'block', md: 'none' },
                          }}
                      >
                          {pages.map((page) => (
                        <Button
                            key={page.label}
                            component={Defpath}
                            to={page.path}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.label}
                        </Button>
                        ))}

                      </Menu>
                  </Box>
                  <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                  <Typography
                      variant="h5"
                      noWrap
                      component="a"
                      href=""
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'none' },
                          flexGrow: 1,
                          fontFamily: 'poppins ',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                      }}
                  >
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                      {pages.map((page) => (
                          <Button
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: 'white', display: 'block' }}
                          >
                              {page}
                          </Button>
                      ))}
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                          </IconButton>
                      </Tooltip>
                      <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                      >
                          {settings.map((setting) => (
                              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                  {setting.path ? (
                                      <Defpath to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                          <Typography textAlign="center">{setting.label}</Typography>
                                      </Defpath>
                                  ) : (
                                      <Typography textAlign="center">{setting.label}</Typography>
                                  )}
                              </MenuItem>
                          ))}

                      </Menu>
                  </Box>
              </Toolbar>
          </Container>
      </AppBar><br />  <br />
          <Card sx={{
              maxWidth: 1300, mx: 'auto',
              px: 3,
              py: 4, boxShadow: 8,
          }}>
              <CardMedia
                  component="img"
                  height="600"
                  
                  image={image}
                  alt="job" />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      <br />
                      <b> Unlock Your Career Potential

                          <br />
                      </b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      <b>Connect with top employers and find your ideal job through our job search platform!</b>
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="large" color="primary"><b>Get Started</b></Button>

              </CardActions>
          </Card></>
              
          </>
  );
              }
export default Landingpage;