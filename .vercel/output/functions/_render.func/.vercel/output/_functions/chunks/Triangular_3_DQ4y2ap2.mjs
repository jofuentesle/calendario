const Triangular_3 = new Proxy(
  { src: '/_astro/Triangular_3.Bkvv7Tat.jpg', width: 768, height: 466, format: 'jpg' },
  {
    get(target, name, receiver) {
      if (name === 'clone') {
        return structuredClone(target);
      }
      if (name === 'fsPath') {
        return 'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/Triangular_3.jpg';
      }

      return target[name];
    },
  }
);

export { Triangular_3 as default };
