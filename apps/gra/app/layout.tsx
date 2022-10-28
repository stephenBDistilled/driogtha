import './styles/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>&#9829;</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <div>
          <span>Header</span>
        </div>
        <div className="container">
          <div className="subContainer">
            <div>{children}</div>
          </div>
        </div>
        <div>
          <span>Footer</span>
        </div>
      </body>
    </html>
  );
}
