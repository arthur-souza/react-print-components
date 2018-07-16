# React Print Components
Print specific react components in the browser.

## Installation
Run `yarn add react-print-components` or `npm install react-print-components`

## How to use
```
import PrintComponents from "react-print-components";

<PrintComponents
  trigger={<button>Print</button>}
>
  <h1>Content to print!</h1>
</PrintComponents>
```

## API

*<PrintComponents/>*

|Name|Type|Description
|:--:|:-----|:-----|
|**`trigger`**|function|A function that returns a React Component or HTML element
|**`className`**|string|Optional class to pass to the print container
