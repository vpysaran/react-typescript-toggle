import * as React from 'react';

function getStyles(props) {
    return {
        inputStyle: {
            width: '100%',
            height: '100%',
        },
        switchRoot: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        toggleRoot: {
            position: 'relative',
            display: 'block',
            width: '36px',
            padding: '4px 0px 6px 2px',
        },
        togglePadDefault: {
          width: '100%',
          height: '14px',
          borderRadius: '30px',
          backgroundColor: 'rgb(189, 189, 189)',
        },
        togglePad: {
          width: '100%',
          height: '14px',
          borderRadius: '30px',
          backgroundColor: 'rgba(0, 188, 212, 0.5)',
        },
        toggleBtnDefult: {
          color: 'rgba(0, 0, 0, 0.87)',
          backgroundColor: 'rgb(245, 245, 245)',
          transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
          boxSizing: 'border-box',
          fontFamily: 'Roboto, sans-serif',
          boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
          borderRadius: '50%',
          position: 'absolute',
          top: '1px',
          left: '0px',
          width: '20px',
          height: '20px',
          lineHeight: '24px',
        },
        toggleBtn: {
          color: 'rgba(0, 0, 0, 0.87)',
          backgroundColor: 'rgb(0, 188, 212)',
          transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
          boxSizing: 'border-box',
          fontFamily: 'Roboto, sans-serif',
          boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
          borderRadius: '50%',
          position: 'absolute',
          top: '1px',
          left: '100%',
          width: '20px',
          height: '20px',
          lineHeight: '24px',
          marginLeft: '-20px',
        },       
    }
};

interface Props extends React.Props<Toggle> {
  label: string;
  defaultToggled?: boolean;
  disabled?: boolean;
  labelPosition?: string;
  style?: any;
  state?: any;
}

export default class Toggle extends React.Component<Props, {switched}> {
  
  constructor(props) {
        super(props);
        if (props.defaultToggled){
            this.state = {switched: true};
        } else {
            this.state = {switched: false};
        }        
   } 

  handleChange = (event) => {
    if (this.state.switched){
      this.setState({switched: false});
    } else {
      this.setState({switched: true});
    }    
  };

  handleNothing = (event) => {};

  public render() {
    
    const styles = getStyles(this.props);
    const {label, style, defaultToggled, disabled, labelPosition} = this.props;   
    const switched = this.state.switched;

    const labelElm = (<label onClick={disabled ? this.handleNothing : this.handleChange} >{label}</label>);

    const inputElm = (<input type="checkbox" checked={switched} disabled={disabled} onChange={this.handleChange} style={styles.inputStyle} />);    
    const toggleElm = (
        <div className="toggle-root" onClick={disabled ? this.handleNothing : this.handleChange} style={styles.toggleRoot}>
          <div className="toggle-btn" style={switched ? styles.toggleBtn : styles.toggleBtnDefult}></div>
          <div className="toggle-pad" style={switched ? styles.togglePad : styles.togglePadDefault}></div>
        </div>
    );

    const switchElm = labelPosition === 'right' ? (
      <div style={styles.switchRoot}>{toggleElm}{labelElm}</div>
    ) : (
      <div style={styles.switchRoot}>{labelElm}{toggleElm}</div>
    );   
    
    return (
      <div style={style}>
        {inputElm}
        {switchElm}
      </div>
    );
  }
}
