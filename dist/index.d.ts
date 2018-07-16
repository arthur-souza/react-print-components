import * as React from 'react';
export interface IProps {
    trigger: JSX.Element;
    children: JSX.Element | JSX.Element[] | string;
    className?: string;
}
export declare class PrintComponents extends React.Component<IProps, {}> {
    private rootId;
    private rootEl;
    constructor(props: IProps);
    render(): JSX.Element;
    private handlePrint;
    private onPrintClose;
    private createDivElement;
    private createStyle;
}
export default PrintComponents;
