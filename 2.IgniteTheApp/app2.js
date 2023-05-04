/**
* <div class="parent">
*       
*         <div class="child">
*         </div>
*
*  </div>
*/

const parent=React.createElement(
    'div',
    {id:"parent"},
        React.createElement(
            'div',
            {id:"child"},
                   React.createElement('h1',{},'I am h1 tag')
        )
    );

    // React Element is an object 

console.log(parent);

 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);   

