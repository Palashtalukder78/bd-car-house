import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../../images/logo.png'
import './Dashboard.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageIcon from '@mui/icons-material/Language';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import Pay from '../Costomer/Pay/Pay';
import MyOrders from '../Costomer/MyOrders/MyOrders';
import MakeAReview from '../Costomer/MakeAReview/MakeAReview';
import ManageAllOrder from '../Admin/ManageAllOrder/ManageAllOrder';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddProducts from '../Admin/AddProducts/AddProducts';
import AdminRoute from '../AdminRoute/AdminRoute';
const drawerWidth = 220;
function Dashboard(props) {
    const { allFirebase } = useAuth();
    const { user, logOut, admin } = allFirebase;
    const history = useHistory();
    const handleLogOut = () => {
        logOut(history)
    }
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();

    const drawer = (
        <div className="side-bar">
            <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>
                <div className="text-center">
                    <img style={{ height: "60px" }} className="img-fluid" src={logo} alt="logo" />
                </div>
            </Toolbar>
            <Divider />
            <List>
                <NavLink className="side-menu" to='/'>
                    <ListItem button>
                        <ListItemIcon>
                            {<LanguageIcon />}
                        </ListItemIcon>
                        Visit Site
                        <ListItemText />
                    </ListItem>
                </NavLink>
                <NavLink className="side-menu" to={`${url}`}>
                    <ListItem button>
                        <ListItemIcon>
                            {<DashboardIcon />}
                        </ListItemIcon>
                        Dashboard
                        <ListItemText />
                    </ListItem>
                </NavLink>
                {!admin &&
                    <Box>
                        <NavLink className="side-menu" to={`${url}/pay`}>
                            <ListItem button>
                                <ListItemIcon>
                                    {<PaymentsIcon />}
                                </ListItemIcon>
                                Pay
                                <ListItemText />
                            </ListItem>
                        </NavLink>
                        <NavLink className="side-menu" to={`${url}/myOrders`}>
                            <ListItem button>
                                <ListItemIcon>
                                    {<ShoppingBasketIcon />}
                                </ListItemIcon>
                                My Orders
                                <ListItemText />
                            </ListItem>
                        </NavLink>
                        <NavLink className="side-menu" to={`${url}/makeAReview`}>
                            <ListItem button>
                                <ListItemIcon>
                                    {<RateReviewIcon />}
                                </ListItemIcon>
                                Make a review
                                <ListItemText />
                            </ListItem>
                        </NavLink>
                        <Divider />
                    </Box>
                }

                {admin &&
                    <Box>
                        <NavLink className="side-menu" to={`${url}/addProducts`}>
                            <ListItem button>
                                <ListItemIcon>
                                    {<AddBusinessIcon />}
                                </ListItemIcon>
                                Add Product
                                <ListItemText />
                            </ListItem>
                        </NavLink>
                        <NavLink className="side-menu" to={`${url}/manageProducts`}>
                            <ListItem button>
                                <ListItemIcon>
                                    {<ManageSearchIcon />}
                                </ListItemIcon>
                                Manage Products
                                <ListItemText />
                            </ListItem>
                        </NavLink>
                        <NavLink className="side-menu" to={`${url}/manageAllOrder`}>
                            <ListItem button>
                                <ListItemIcon>
                                    {<ListAltIcon />}
                                </ListItemIcon>
                                Manage All Order
                                <ListItemText />
                            </ListItem>
                        </NavLink>
                        <NavLink className="side-menu" to={`${url}/makeAdmin`}>
                            <ListItem button>
                                <ListItemIcon>
                                    {<AdminPanelSettingsIcon />}
                                </ListItemIcon>
                                Make Admin
                                <ListItemText />
                            </ListItem>
                        </NavLink>
                        <Divider />
                    </Box>
                }
                <Divider /><Divider />
                <div className=" dashboard-logout">
                    <ListItem button>
                        <ListItemIcon>
                            {<LogoutIcon />}
                        </ListItemIcon>
                        <span onClick={handleLogOut}>Logout</span>
                        <ListItemText />
                    </ListItem>
                </div>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className="main-part">
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="dashboard-header" >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block', },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <div>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/makeAReview`}>
                            <MakeAReview></MakeAReview>
                        </Route>

                        <AdminRoute path={`${path}/manageAllOrder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
