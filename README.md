This is an example of how to get [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) running in [Next.js](https://nextjs.org/).

This uses a dynamic import to ensure that GL JS is not imported before a browser context is available. This approach is inspired by https://github.com/vercel/next.js/issues/4381#issuecomment-632971125 and designed as a possible solution for some developers experiencing https://github.com/mapbox/mapbox-gl-js/issues/4593.

### How To Use This

```
yarn dev
```

The map will be available at `http://localhost:3000`.
