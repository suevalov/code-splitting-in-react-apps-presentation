// Import React

import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from 'spectacle-code-slide';
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import React from "react";
import {
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Layout,
  Fill,
  Image,
  BlockQuote,
  Quote,
  Cite,
} from "spectacle";

import colors from './theme/colors';
import createTheme from "./theme";
import fonts from './theme/fonts';
import Suevalov from './components/Suevalov';

// Import Spectacle Core tags

// Import image preloader util

// Import theme


// Require CSS
require("normalize.css");
require("./theme/index.css");

const images = {
  me: require('../assets/me.png'),
  ironmanThanks: require('../assets/ironman-thanks.gif'),
  compose: require('../assets/compose.gif'),
  mainCover: require('../assets/main-cover.jpg'),
  dataart: require('../assets/dataart.png'),
  development: require('../assets/development.jpg'),
  lowConnection: require('../assets/low-connectivity.jpg'),
  lowConnection2: require('../assets/low-connectivity-2.jpg'),
  websiteOpeningProcess: require('../assets/website_opening_process.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: colors.blue,
    secondary: colors.dark,
    tertiary: colors.lightBlue,
    quartenary: colors.lightGray,
    white: colors.white,
    blue: colors.blue,
    green: colors.green,
    lightGray: colors.lightGray,
    bar: colors.green,
    text: colors.dark,
    dark: colors.dark,
    lightBlue: colors.lightBlue,
    red: colors.red,
    violet: colors.violet,
    yellow: colors.yellow,
  },
  {
    primary: fonts.Lato,
    secondary: fonts.Lato,
    tertiary: fonts.Monospace
  }
);

class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} theme={theme} transitionDuration={300} progress="bar">

        <Slide transition={["fade"]} notes="Introduce yourself" bgImage={images.mainCover.replace("/", "")} bgDarken={0.7}>
          <Heading size={1} textSize="2em" textColor="white">
            Code-Splitting in React apps
          </Heading>
          <Heading size={6} style={{ marginTop: 50, marginBottom: 30 }} textColor="white">
            React Poznan
          </Heading>
          <div style={{ marginBottom: 20 }}>
            <Suevalov photo={images.me.replace("/", "")} />
          </div>
          <Link textColor="white" href="http://suevalov.com/presentations/code-splitting" target="__blank">
            http://suevalov.com/presentations/code-splitting
          </Link>
        </Slide>

        <Slide bgColor="white">
          <Link alt="DataArt" href="http://dataart.com/" style={{ display: 'block' }} target="__blank">
            <Image width="70%" src={images.dataart.replace("/", "")} />
          </Link>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="blue"
        >
          <Heading size={1} textColor="white">
            What's code splitting?
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            🤔
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="white"
          textColor="blue"
        >
          <BlockQuote>
            <Quote>It allows you to split your code into various bundles which you can then load on demand.</Quote>
            <Cite>
              <Link href="https://webpack.js.org/" target="__blank" textColor="lightBlue">
                webpack.js.org
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]}
          bgColor="blue"
        >
          <Heading size={1} textColor="white">
            Why split the code?
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            🙄
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.development.replace("/", "")} bgDarken={0.7}>
          <Heading size={1} textColor="white">
            http://localhost:3000/
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😎
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.lowConnection.replace("/", "")} bgDarken={0.6}>
          <Heading size={1} textColor="white">
            It can be slow...
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😤
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.lowConnection2.replace("/", "")} bgDarken={0.6}>
          <Heading size={1} textColor="white">
            ... and expensive
          </Heading>
          <Heading size={1} textColor="white" style={{ marginTop: '0.5em', fontSize: '2em' }}>
            😨
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.websiteOpeningProcess.replace("/", "")} width="100%" />
        </Slide>

        <Slide transition={["fade"]} bgColor="blue">
          <Terminal title="1. suevalov@suevalov: ~(zsh)" output={[
            <Typist>npm test</Typist>,
            <div style={{ color: colors.green }}>TOTAL: 174 SUCCESS</div>,
            <div>
              <div>=============================== Coverage summary ===============================</div>
              <div style={{ color: colors.red }}>Statements   : 51.29% ( 278/542 )</div>
              <div style={{ color: colors.yellow }}>Branches     : 38.78% ( 95/245 )</div>
              <div style={{ color: colors.yellow }}>Functions    : 46.21% ( 61/132 )</div>
              <div style={{ color: colors.red }}>Lines        : 52.69% ( 274/520 )</div>
              <div>================================================================================</div>
            </div>]}
          />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("!raw!../assets/code/redux-connect.example")}
          ranges={[
            { loc: [0, 1], title: 'react-redux' },
            { loc: [1, 2] },
            { loc: [3, 9] },
            { loc: [10, 13] },
            { loc: [14, 17], note: '(arg1, arg2) => (Component) => EnhancedComponent' }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require('!raw!../assets/code/props-proxy-1.example')}
          style={{ fontSize: '0.8em' }}
          ranges={[
            { loc: [0, 1], title: 'Props Proxy' },
            { loc: [2, 3] },
            { loc: [4, 18] },
            { loc: [21, 22] },
            { loc: [25, 26] },
            { loc: [27, 36] },
            { loc: [37, 38] },
            { loc: [41, 42] }
          ]}
        />

        <Slide
          transition={["fade"]}
          bgColor={colors.dark}
        >
          <CodePane
            lang="jsx"
            source={require("raw!../assets/code/presentational-component-post.example")}
            margin="20px auto"
            style={{ fontSize: '1em' }}
          />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.ironmanThanks.replace("/", "")} bgDarken={0.55}>
          <Heading size={1} textColor='white' style={{ fontSize: '2.5em' }}>Thank you!</Heading>
          <List style={{ listStyle: 'none', textAlign: 'center' }} textColor="white">
            <ListItem>
              <Link textColor="primary" href="http://suevalov.com" target="__blank" textColor="white">Alex Suevalov</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="https://twitter.com/Suevalov" target="__blank" textColor="white">@suevalov</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="http://suevalov.com/" target="__blank" textColor="white">suevalov.com</Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href="https://github.com/suevalov" target="__blank" textColor="white">https://github.com/suevalov</Link>
            </ListItem>
            <ListItem style={{ marginTop: 40 }}>
              <Link textColor="primary" href="http://dataart.com" target="__blank" textColor="white">
                <Image width="40%" src={images.dataart.replace("/", "")} style={{ backgroundColor: 'white' }} />
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck >
    );
  }
}

export default Presentation;
