import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IProps {
  trigger: JSX.Element;
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export class PrintComponents extends React.Component<IProps, {}> {
  private rootId: string = 'react-components-print';
  private rootEl: HTMLElement;

  public constructor(props: IProps) {
    super(props);

    this.rootEl = this.createDivElement(this.rootId, props.className);
  }

  public render() {
    const { children, trigger } = this.props;
    const content = (
      <React.Fragment>
        { this.createStyle() }
        { children }
      </React.Fragment>
    );

    return (
      <React.Fragment>
        { React.cloneElement(trigger, {...trigger.props, onClick: this.handlePrint}) }
        { ReactDOM.createPortal(content, this.rootEl) }
      </React.Fragment>
    );
  }

  private handlePrint = () => {
    document.body.insertAdjacentElement('afterbegin', this.rootEl);
    window.onafterprint = this.onPrintClose;
    window.print();
  }

  private onPrintClose = () => {
    window.onafterprint = () => null;

    this.rootEl.remove();
  }

  private createDivElement = (id?: string, className?: string) => {
    const el = document.createElement('div');

    if (id) el.setAttribute('id', id);
    if (className) el.setAttribute('class', className);

    return el;
  }

  private createStyle = () => (
    <style dangerouslySetInnerHTML={{__html: `
      #${ this.rootId } {
        display: none;
      }

      @media print {
        body > *:not(#${ this.rootId }) {
          display: none;
        }

        #${ this.rootId } {
          display: block;
        }
      }
    `}}/>
  )
}

export default PrintComponents;
