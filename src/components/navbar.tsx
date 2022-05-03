import { AppBar, Box, Button, createTheme, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, styled, SwipeableDrawer, ThemeProvider, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

// const StyledBox = styled(Box)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000'
// }))

// const Puller = styled(Box)(({ theme }) => ({
//     width: 240,
//     height: 100,
//     backgroundColor: theme.palette.mode === 'light' ? '#000' : '#333',
//     borderRadius: 3,
//     position: 'absolute',
//     top: 8,
//     left: 'calc(50% - 15px)',
// }));

function NavBar() {
    const customTheme = createTheme();

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    anchor="left"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    ModalProps={{ keepMounted: true }}
                >
                    <List>
                        {['Teste 1', 'Teste 2', 'Teste 3', 'Teste 4'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Teste 5', 'Teste 6', 'Teste 7', 'Teste 8'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </Box>
        </ThemeProvider>
    )
}

export default NavBar;