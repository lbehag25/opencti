import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import {
  Dashboard,
  Explore,
  Assignment,
  DeviceHub,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Layers,
  ListAlt,
  GroupWork,
  Extension,
} from '@material-ui/icons';
import { Settings, Database, Binoculars } from 'mdi-material-ui';
import { compose } from 'ramda';
import logo from '../../../resources/images/logo_text.png';
import inject18n from '../../../components/i18n';
import Security, {
  KNOWLEDGE,
  EXPLORE,
  SETTINGS,
} from '../../../utils/Security';

const styles = (theme) => ({
  drawerPaper: {
    minHeight: '100vh',
    width: 60,
    backgroundColor: theme.palette.background.nav,
  },
  drawerPaperOpen: {
    minHeight: '100vh',
    width: 220,
    backgroundColor: theme.palette.background.nav,
  },
  menuList: {
    height: '100%',
  },
  lastItem: {
    bottom: 0,
  },
  logoButton: {
    marginLeft: -23,
    marginRight: 20,
  },
  logo: {
    cursor: 'pointer',
    height: 35,
  },
  toolbar: theme.mixins.toolbar,
  menuItem: {
    height: 40,
  },
});

const LeftBar = ({ t, location, classes }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <div className={classes.toolbar} />
        <MenuList component="nav">
          <MenuItem
            component={Link}
            to="/dashboard"
            selected={location.pathname === '/dashboard'}
            dense={false}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
          </MenuItem>
          <Security needs={[KNOWLEDGE]}>
            <MenuItem
              component={Link}
              to="/dashboard/threats"
              selected={location.pathname.includes('/dashboard/threats')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Database />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/techniques"
              selected={location.pathname.includes('/dashboard/techniques')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Layers />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/signatures"
              selected={location.pathname.includes('/dashboard/signatures')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Binoculars />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/reports"
              selected={location.pathname.includes('/dashboard/reports')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/entities"
              selected={location.pathname.includes('/dashboard/entities')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
            </MenuItem>
          </Security>
        </MenuList>
        <Security needs={[EXPLORE]}>
          <Divider />
          <MenuList component="nav">
            <MenuItem
              component={Link}
              to="/dashboard/explore"
              selected={location.pathname.includes('/dashboard/explore')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component={Link}
              disabled={true}
              to="/dashboard/investigate"
              selected={location.pathname.includes('/dashboard/investigate')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <DeviceHub />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component={Link}
              disabled={true}
              to="/dashboard/correlate"
              selected={location.pathname.includes('/dashboard/correlate')}
              dense={false}
            >
              <ListItemIcon>
                <GroupWork />
              </ListItemIcon>
            </MenuItem>
          </MenuList>
        </Security>
        <Security needs={[SETTINGS]}>
          <Divider />
          <MenuList component="nav">
            <MenuItem
              component={Link}
              to="/dashboard/connectors"
              selected={location.pathname.includes('/dashboard/connectors')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Extension />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/settings"
              selected={location.pathname.includes('/dashboard/settings')}
              dense={false}
              style={{ marginBottom: 50 }}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
            </MenuItem>
          </MenuList>
        </Security>
        <MenuList component="nav" classes={{ root: classes.menuList }}>
          <MenuItem
            onClick={toggle}
            dense={false}
            style={{ position: 'absolute', bottom: 10, width: '100%' }}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <KeyboardArrowRight />
            </ListItemIcon>
          </MenuItem>
        </MenuList>
      </Drawer>
      <Drawer
        open={open}
        classes={{ paper: classes.drawerPaperOpen }}
        onClose={toggle}
      >
        <Toolbar>
          <IconButton
            classes={{ root: classes.logoButton }}
            color="inherit"
            aria-label="Menu"
            component={Link}
            to="/dashboard"
          >
            <img src={logo} alt="logo" className={classes.logo} />
          </IconButton>
        </Toolbar>
        <MenuList component="nav">
          <MenuItem
            component={Link}
            to="/dashboard"
            onClick={toggle}
            selected={location.pathname === '/dashboard'}
            dense={false}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary={t('Dashboard')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/dashboard/threats"
            onClick={toggle}
            selected={location.pathname.includes('/dashboard/threats')}
            dense={false}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <Database />
            </ListItemIcon>
            <ListItemText primary={t('Threats')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/dashboard/techniques"
            onClick={toggle}
            selected={location.pathname.includes('/dashboard/techniques')}
            dense={false}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary={t('Techniques')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/dashboard/signatures"
            onClick={toggle}
            selected={location.pathname.includes('/dashboard/signatures')}
            dense={false}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <Binoculars />
            </ListItemIcon>
            <ListItemText primary={t('Signatures')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/dashboard/reports"
            onClick={toggle}
            selected={location.pathname.includes('/dashboard/reports')}
            dense={false}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary={t('Reports')} />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/dashboard/entities"
            onClick={toggle}
            selected={location.pathname.includes('/dashboard/entities')}
            dense={false}
            classes={{ root: classes.menuItem }}
          >
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary={t('Entities')} />
          </MenuItem>
        </MenuList>
        <Security needs={[EXPLORE]}>
          <Divider />
          <MenuList component="nav">
            <MenuItem
              component={Link}
              to="/dashboard/explore"
              onClick={toggle}
              selected={location.pathname.includes('/dashboard/explore')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary={t('Explore')} />
            </MenuItem>
            <MenuItem
              component={Link}
              disabled={true}
              to="/dashboard/investigate"
              onClick={toggle}
              selected={location.pathname.includes('/dashboard/investigate')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <DeviceHub />
              </ListItemIcon>
              <ListItemText primary={t('Investigate')} />
            </MenuItem>
            <MenuItem
              component={Link}
              disabled={true}
              to="/dashboard/correlate"
              onClick={toggle}
              selected={location.pathname.includes('/dashboard/correlate')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <GroupWork />
              </ListItemIcon>
              <ListItemText primary={t('Correlate')} />
            </MenuItem>
          </MenuList>
        </Security>
        <Security needs={[SETTINGS]}>
          <Divider />
          <MenuList component="nav">
            <MenuItem
              component={Link}
              to="/dashboard/connectors"
              onClick={toggle}
              selected={location.pathname.includes('/dashboard/connectors')}
              dense={false}
              classes={{ root: classes.menuItem }}
            >
              <ListItemIcon>
                <Extension />
              </ListItemIcon>
              <ListItemText primary={t('Connectors')} />
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard/settings"
              onClick={toggle}
              selected={location.pathname.includes('/dashboard/settings')}
              dense={false}
              classes={{ root: classes.menuItem }}
              style={{ marginBottom: 50 }}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary={t('Settings')} />
            </MenuItem>
          </MenuList>
        </Security>
        <MenuList component="nav" classes={{ root: classes.menuList }}>
          <MenuItem
            onClick={toggle}
            dense={false}
            style={{ position: 'absolute', bottom: 10, width: '100%' }}
          >
            <ListItemIcon>
              <KeyboardArrowLeft />
            </ListItemIcon>
          </MenuItem>
        </MenuList>
      </Drawer>
    </div>
  );
};

LeftBar.propTypes = {
  location: PropTypes.object,
  classes: PropTypes.object,
  t: PropTypes.func,
};

export default compose(inject18n, withRouter, withStyles(styles))(LeftBar);
