import React from 'react'

export default class HTML extends React.Component {
    render() {
    return (
      <html lang="ko">
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
                {this.props.headComponents}
            <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css" rel="stylesheet" integrity="sha384-T5jhQKMh96HMkXwqVMSjF3CmLcL1nT9//tCqu9By5XSdj7CwR0r+F3LTzUdfkkQf" crossOrigin="anonymous" />
            <script id="mcjs">
                {`
                    !function(c,h,i,m,p)
                    {
                        ((m = c.createElement(h)),
                        (p = c.getElementsByTagName(h)[0]),
                        (m.async = 1),
                        (m.src = i),
                        p.parentNode.insertBefore(m, p))
                    }
                    (document,"script","https://chimpstatic.com/mcjs-connected/js/users/c17becd0c724f4110b5514bb9/5eb81e1f6271881672a180fa6.js");
                `}
            </script>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </body>
      </html>
    )
  }
}