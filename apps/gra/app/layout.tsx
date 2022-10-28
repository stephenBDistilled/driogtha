import { UiHeader } from '@driogtha/ui-header';
import { UiFooter } from '@driogtha/ui-footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>&#9829;</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <div>{children}</div>
        <div>
          <span>Footer</span>
        </div>
      </body>
    </html>
  );
}
