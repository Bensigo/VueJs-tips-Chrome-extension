import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': 'rgb(6,9,32)',
    'backgroundImage': 'url('./logo.png')',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': '50px',
    'backgroundPositionX': '2%',
    'backgroundPositionY': '80%',
    'display': 'flex',
    'alignContent': 'center',
    'justifyContent': 'center',
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'color': 'white',
    'letterSpacing': [{ 'unit': 'rem', 'value': 0.05 }],
    'fontFamily': ''Oxygen', sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'width': [{ 'unit': 'rem', 'value': 40 }],
    'margin': [{ 'unit': 'vh', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'vh', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'tip-number': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 2.5 }],
    'color': '#CCCCCC',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'rem', 'value': 0.1 }],
    'fontWeight': 'bolder',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }]
  },
  'tip': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'footer': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'right': [{ 'unit': 'px', 'value': 10 }]
  }
});
