import * as React from 'react';

function getStyles(props) {
    return {
        toggleRoot: {
            float: 'right',
            position: 'relative',
            display: 'block',
            width: '36px',
            padding: '4px 0px 6px 2px',
        },
        togglePad: {
          width: '100%',
          height: '14px',
          borderRadius: '30px',
          backgroundColor: 'rgb(255, 157, 157)',
        },
        toggleBtn: {
          color: 'rgba(0, 0, 0, 0.87)',
          backgroundColor: 'red',
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
}

export default class Toggle extends React.Component<Props, {}> {

  public render() {

    const styles = getStyles(this.props);

    const {label, style, defaultToggled, disabled, labelPosition} = this.props;
    
    const inputElm = labelPosition === 'right' ? (
      <label><input type="checkbox" checked={defaultToggled} disabled={disabled} />{label}</label>
    ) : (
      <label>{label}<input type="checkbox" checked={defaultToggled} disabled={disabled} /></label>
    );

    const switchElement = (
        <div className="toggle-root" style={styles.toggleRoot} >
          <div className="toggle-btn" style={styles.toggleBtn} ></div>
          <div className="toggle-pad" style={styles.togglePad} ></div>
        </div>
    );
    
    return (
      <div style={style}>
        {inputElm}
        {switchElement}
      </div>
    );
  }
}
