const SobremesaTriangular_2 = new Proxy(
  { src: '/_astro/Triangular_2.C01Om-j9.jpg', width: 768, height: 466, format: 'jpg' },
  {
    get(target, name, receiver) {
      if (name === 'clone') {
        return structuredClone(target);
      }
      if (name === 'fsPath') {
        return 'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaTriangular_2.jpg';
      }

      return target[name];
    },
  }
);

export { SobremesaTriangular_2 as default };
