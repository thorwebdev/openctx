import icoIconUrl from '/favicon.ico'
import firaCodeFontUrl from '/FiraCode.woff2'
import interItalicFontUrl from '/Inter-italic.var.woff2'
import interRomanFontUrl from '/Inter-roman.var.woff2'
import svgIconUrl from '/logomark-v0.svg'
import { type FunctionComponent } from 'react'

export const Head: FunctionComponent = () => (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href={svgIconUrl} />
        <link rel="icon" type="image/x-icon" href={icoIconUrl} />
        <link rel="preload" type="font/woff2" as="font" href={interRomanFontUrl} crossOrigin="" />
        <link rel="preload" type="font/woff2" as="font" href={interItalicFontUrl} crossOrigin="" />
        <link rel="preload" type="font/woff2" as="font" href={firaCodeFontUrl} crossOrigin="" />
    </>
)