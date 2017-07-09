import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': 'rgb(6,9,32)',
    'backgroundImage': 'url('./logo.png')',
    'backgroundRepeat': 'no-repeat',
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'height': [{ 'unit': 'string', 'value': 'fixed' }, { 'unit': 'string', 'value': '!important' }],
    'backgroundSize': '50px',
    'backgroundPositionX': '2%',
    'backgroundPositionY': '100%',
    'display': 'flex',
    'alignContent': 'center',
    'justifyContent': 'center',
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
  'tip-button': {
    'backgroundColor': '#34B3A0',
    'outline': 'none',
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1.5 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'marginTop': [{ 'unit': 'rem', 'value': 2.5 }],
    'cursor': 'pointer',
    'fontWeight': 'bolder',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': 'white'
  },
  'disabled': {
    'backgroundColor': '#D8D8D8 !important',
    'color': '#888',
    'cursor': 'not-allowed !important'
  },
  'js-tip': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'lineHeight': [{ 'unit': 'rem', 'value': 2 }],
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'rem', 'value': 1.375 }]
  },
  'footer': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'position': 'absolute',
    'bottom': [{ 'unit': '%V', 'value': 0.01 }],
    'right': [{ 'unit': '%H', 'value': 0.01 }],
    'display': 'fixed'
  },
  'code': {
    'fontFamily': 'monospace',
    'backgroundColor': '#336180',
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.375 }],
    'borderRadius': '0.15em'
  },
  'code-block': {
    'fontFamily': 'monaco, Consolas, "Lucida Console", monospace',
    'backgroundColor': '#336180',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.15 }],
    'borderRadius': '0.15rem',
    'display': 'block',
    'margin': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'b': {
    'color': 'cyan',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 25 }]
  },
  'disabled': {
    'cursor': 'not-allowed',
    'backgroundColor': '#D8D8D8 !important',
    'color': '#888'
  }
});
