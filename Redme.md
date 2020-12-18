Nesse desenvolvimento será utilizado o framework (material-ui)
Todos os botões e estilizações virão do mesmo.

# Fazendo instalação do Material UI

Podemos instalar via npm install ou yarn add

# cm

yarn add @material-ui/core

# cssbaseline

O cssbaseline reseta todos os tipos de estilizações iniciais
temos que importar o css baseline dentro do nosso arquivo index.js
e envolver toda a nossa aplicação dentro desse componente

# import

import {CssBaseline } from '@material-ui/core'

# Estrutura

<!-- import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root'),
);


 -->

# stylização de temas

Provedor de tema
Se deseja personalizar o tema, você precisa usar o componente ThemeProvider para injetar um tema em seu aplicativo. No entanto, isso é opcional; Os componentes do Material-UI vêm com um tema padrão.
ThemeProvider depende do recurso de contexto do React para passar o tema para os componentes, portanto, você precisa ter certeza de que ThemeProvider é um pai dos componentes que você está tentando personalizar. Você pode aprender mais sobre isso na seção API.
O createMuitheme cria o objeto que será lido como proriedade

# obs

É necessario que toda a aplicação esteja dentro de ThemeProvder

# importação

<!-- import {ThemeProvider, createMuiTheme } from '@material-ui/core'; -->

# Estrutura

<!-- function App() {
  const theme = createMuiTheme({
    status: {
      danger: orange[500],
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;  -->

# Style-components

Com o style-components podemos estilizar os nossos componentes dentro do nosso proprio arquivo trabalho,
sem precisar criar outros componentes ou estilizações externas

# makeStyles

Podemos criar um objeto para ser retornado como propriedade

# Estrutura

<!-- import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh',
  },
});

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}></div>
    </ThemeProvider>
  );
}

export default App; -->

# instalação Material ui icons

yarn add @material-ui/icons
