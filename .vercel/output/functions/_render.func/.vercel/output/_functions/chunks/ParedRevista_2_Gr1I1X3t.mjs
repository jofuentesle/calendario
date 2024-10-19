const ParedRevista_2 = new Proxy({"src":"/_astro/ParedRevista1.BqnG1HwO.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedRevista_2.jpg";
							}
							
							return target[name];
						}
					});

export { ParedRevista_2 as default };
