const Img3 = new Proxy({"src":"/_astro/ParedRevista2.BH3_XZxZ.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista2.jpg";
							}
							
							return target[name];
						}
					});

export { Img3 as default };
