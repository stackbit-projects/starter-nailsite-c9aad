import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {props.headComponents}
        <link rel="preconnect" href="https://app.snipcart.com">
        <link rel="preconnect" href="https://cdn.snipcart.com">
        </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
        <div id="snipcart" data-config-modal-style="side" data-api-key="MTg5YmRmYjYtZGUyNS00OTNhLWI4ZDctYzBjZDEzZGMwNGQyNjM3NjU5MTE2NjE2ODEwODA2" hidden></div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
