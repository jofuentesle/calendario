const Img1 = new Proxy({"src":"/_astro/ParedRevista.CriAzaeg.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista.jpg";
							}
							
							return target[name];
						}
					});

export { Img1 as default };
