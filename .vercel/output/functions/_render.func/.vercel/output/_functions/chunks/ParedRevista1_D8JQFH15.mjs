const Img2 = new Proxy({"src":"/_astro/ParedRevista1.BqnG1HwO.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista1.jpg";
							}
							
							return target[name];
						}
					});

export { Img2 as default };
