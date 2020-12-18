import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

import SendIcon from '@material-ui/icons/Send';
import MoreVert from '@material-ui/icons/MoreVert';
import SwitchVideoOutlinedIcon from '@material-ui/icons/SwitchVideoOutlined';

//icons-bar
import HomeIcon from '@material-ui/icons/Home';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ForumIcon from '@material-ui/icons/Forum';
import TodayIcon from '@material-ui/icons/Today';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '150vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 50,
  },

  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },

  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },

  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },

  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

const videos = [
  {
    id: 1,
    title: 'DEPOIMENTO  MARYLANGE | Turma 5 - abril 2020 ',
    channel: 'YouTryber',
    views: '1890 mil visualizações',
    date: 'há 14 horas',
    thumb: '/imgs/thumb1.png',
  },

  {
    id: 2,
    title: 'COMO CRIAR UM PENDRIVE BOOTÁVEL | Linux',
    channel: 'YouTryber',
    views: '457 mil visualizações',
    date: 'há 5 horas atrás',
    thumb: '/imgs/thumb2.png',
  },
  {
    id: 3,
    title: 'METODOLOGIAS ATIVAS | Para aprender mais',
    channel: 'YouTryber',
    views: '12 mil visualizações',
    date: 'há 3 horas atrás',
    thumb: '/imgs/thumb3.png',
  },
  {
    id: 4,
    title: 'PRECISO SER UM DEV PLENO OU SÊNIOR PARA CONSEGUIR EMPREGO ',
    channel: 'YouTryber',
    views: '401 visualizações',
    date: 'há 30 minutos',
    thumb: '/imgs/thumb4.png',
  },
  {
    id: 5,
    title: 'COMO TER UMA BOA COMINUCAÇÃO | 4 DICAS PRÁTICAS  ',
    channel: 'YouTryber',
    views: '5660 visualizações',
    date: 'há 30 minutos',
    thumb: '/imgs/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO TE AJUDAMOS A CONSEGUIR UM TRABALHO  ',
    channel: 'YouTryber',
    views: '985 visualizações',
    date: 'há 30 minutos',
    thumb: '/imgs/thumb6.png',
  },
  {
    id: 7,
    title: 'RESOLVENDO AS QUESTÕES DO CURSO INTRODUTÓRIO ',
    channel: 'YouTryber',
    views: '985 visualizações',
    date: 'há 30 minutos',
    thumb: '/imgs/thumb7.png',
  },
  {
    id: 8,
    title: 'RESOLVENDO AS QUESTÕES DO CURSO INTRODUTÓRIO',
    channel: 'YouTryber',
    views: '985 visualizações',
    date: 'há 30 minutos',
    thumb: '/imgs/thumb8.jpg',
  },

  {
    id: 9,
    title: 'DEPOIMENTO: Renata Novais | ESTUDANTE CONTRATADA DA TRYBE',
    channel: 'YouTryber',
    views: '985 visualizações',
    date: 'há 30 minutos',
    thumb: '/imgs/thumb9.png',
  },
  {
    id: 10,
    title: 'BATE PAPO COM PESSOAS ESTUDANTES CONTRATADAS',
    channel: 'YouTryber',
    views: '985 visualizações',
    date: 'há 30 minutos',
    thumb: '/imgs/thumb10.png',
  },
];

const Home = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          {/* //login */}
          <IconButton edge="start" className={classes.menuIcon} color="inherit">
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark'
                ? '/imgs/BRANCO.png'
                : '/imgs/PRETO.png'
            }
            alt="logo"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />
          {/* // icon one */}
          <IconButton edge="start" className={classes.icons} aria-label="menu">
            <SwitchVideoOutlinedIcon />
          </IconButton>
          {/* // icon two */}
          <IconButton edge="start" className={classes.icons} aria-label="menu">
            <SendIcon />
            {/* // icon tree */}
          </IconButton>
          <IconButton edge="start" className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="primary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Home`}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<EmojiEventsIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Em alta`}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<LiveTvIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Ao vivo`}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<ForumIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Mensagens`}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<LibraryBooksIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Blibioteca`}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<TodayIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Calendário`}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<ForumIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Forum`}
                  />
                </ListItem>

                <Divider />
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LiveHelpIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Suporte`}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    primary={`Sair`}
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Box padding={4}>
          {/* // espaçamento */}
          <Toolbar />
          <Typography
            varient="h4"
            color="textPrimary"
            style={{ fontWeight: 800 }}
          >
            Adicionados recentemente
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    src={item.thumb}
                    alt={item.title}
                  />
                </Box>
                <Box>
                  <Typography
                    style={{ fontWeight: 500 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    varient="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography varient="body2" color="textSecondary">
                    {`${item.views} - ${item.date}`}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
